import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";
const siteConfig = {
  // Site general information
  site: {
    name: "Statue SSG",
    description: "A simple static site generator for markdown content with SvelteKit",
    url: "https://statuessg.com",
    author: "Statue Team"
  },
  // Contact information
  contact: {
    // Main contact email
    email: "your-email@example.com",
    // Privacy policy related email
    privacyEmail: "your-privacy@example.com",
    // Support email
    supportEmail: "your-support@example.com",
    // Phone number (optional)
    phone: "+1 (555) 123-4567",
    // Mailing address
    address: {
      street: "123 Statue Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94103",
      country: "United States"
    }
  },
  // Social media links
  social: {
    twitter: "https://twitter.com/statuessg",
    github: "https://github.com/accretional/statue",
    linkedin: "https://linkedin.com/company/statuessg",
    facebook: "https://facebook.com/statuessg",
    instagram: "https://instagram.com/statuessg",
    youtube: "https://youtube.com/@statuessg"
  },
  // Legal pages specific settings
  legal: {
    // Privacy policy last updated date
    privacyPolicyLastUpdated: "2024-01-15",
    // Terms of use last updated date
    termsLastUpdated: "2024-01-15",
    // Do Not Sell page additional information
    doNotSell: {
      processingTime: "15 business days"
    }
  },
  // Search configuration
  search: {
    // Enable/disable search functionality
    enabled: true,
    // UI options
    placeholder: "Search...",
    noResultsText: "No results found",
    // Search behavior
    debounceMs: 300,
    minQueryLength: 2,
    maxResults: 10,
    // Result display options
    showCategories: true,
    showDates: true,
    showExcerpts: true,
    excerptLength: 30
  }
};
const __vite_import_meta_env__ = {};
const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
if (isBrowser) {
  console.error("content-processor.js should only be used on the server side!");
  throw new Error("Content processor cannot run on the client side!");
}
const removeFirstH1 = (html) => {
  return html.replace(/<h1[^>]*>(.*?)<\/h1>/, "");
};
const createLinkTransformer = (currentDirectory) => {
  const renderer = new marked.Renderer();
  const originalLinkRenderer = renderer.link.bind(renderer);
  renderer.link = function(token) {
    let href = token.href || "";
    token.title || null;
    token.text || "";
    const hasProtocol = href && typeof href === "string" && /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(href);
    if (href && typeof href === "string" && !hasProtocol && !href.startsWith("#")) {
      if (href.endsWith(".md")) {
        href = href.slice(0, -3);
      }
      if (href.startsWith("./") || href.startsWith("../")) {
        const resolvedPath = path.join("/", currentDirectory, href);
        href = resolvedPath.replace(/\\/g, "/").replace(/\/$/, "");
      } else if (!href.startsWith("/")) {
        href = path.join("/", currentDirectory, href).replace(/\\/g, "/");
      }
    }
    const modifiedToken = { ...token, href };
    return originalLinkRenderer(modifiedToken);
  };
  return renderer;
};
const scanContentDirectory = () => {
  const contentPath = path.resolve("content");
  const contentEntries = [];
  if (!fs.existsSync(contentPath)) {
    console.warn("Content folder not found!");
    return contentEntries;
  }
  function scanDir(dirPath, relativePath = "") {
    const entries = fs.readdirSync(dirPath);
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry);
      const entryRelativePath = path.join(relativePath, entry);
      const stats = fs.statSync(fullPath);
      if (stats.isDirectory()) {
        scanDir(fullPath, entryRelativePath);
      } else if (stats.isFile() && entry.endsWith(".md")) {
        const slug = entry.replace(".md", "");
        const url = relativePath ? `/${relativePath}/${slug}`.replace(/\\/g, "/") : `/${slug}`;
        const content = fs.readFileSync(fullPath, "utf-8");
        const { data, content: markdownContent } = matter(content);
        const processedMarkdownContent = processTemplateVariables(markdownContent);
        const processedMetadata = {};
        for (const [key, value] of Object.entries(data)) {
          if (typeof value === "string") {
            processedMetadata[key] = processTemplateVariables(value);
          } else {
            processedMetadata[key] = value;
          }
        }
        const finalMetadata = {
          title: processedMetadata.title || formatTitle(slug),
          description: processedMetadata.description || "",
          date: processedMetadata.date || null,
          author: processedMetadata.author || null,
          ...processedMetadata
        };
        let directory = relativePath.replace(/\\/g, "/");
        const renderer = createLinkTransformer(directory);
        const html = removeFirstH1(marked.parse(processedMarkdownContent, { renderer }));
        const mainDirectory = directory.split("/")[0] || "root";
        contentEntries.push({
          slug,
          path: entryRelativePath,
          url,
          directory,
          mainDirectory,
          // Depth of the path
          depth: directory === "" ? 0 : directory.split("/").length,
          content: html,
          metadata: finalMetadata
        });
      }
    }
  }
  scanDir(contentPath);
  return contentEntries;
};
const getContentDirectories = () => {
  const contentPath = path.resolve("content");
  const directories = [];
  if (!fs.existsSync(contentPath)) {
    console.warn("Content folder not found!");
    return directories;
  }
  const entries = fs.readdirSync(contentPath);
  for (const entry of entries) {
    const fullPath = path.join(contentPath, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      directories.push({
        name: entry,
        path: `content/${entry}`,
        title: formatTitle(entry),
        url: `/${entry}`
      });
    }
  }
  return directories;
};
const formatTitle = (slug) => {
  return slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};
let cachedContent = null;
const getAllContent = () => {
  const isDev = process.env.NODE_ENV === "development" || typeof import.meta !== "undefined" && __vite_import_meta_env__ && false;
  if (!isDev && cachedContent) return cachedContent;
  if (isDev) {
    cachedContent = null;
  }
  const content = scanContentDirectory();
  if (!isDev) {
    cachedContent = content;
  }
  return content;
};
const getContentByUrl = (url) => {
  const allContent = getAllContent();
  const normalizedUrl = url.endsWith("/") ? url.slice(0, -1) : url;
  console.log("Normalized URL for lookup:", normalizedUrl);
  const result = allContent.find((entry) => {
    const entryUrl = entry.url.endsWith("/") ? entry.url.slice(0, -1) : entry.url;
    console.log(`Comparing: "${entryUrl}" vs "${normalizedUrl}"`);
    return entryUrl === normalizedUrl;
  });
  console.log("Match result:", result ? `Found: ${result.url}` : "Not found");
  return result;
};
const getContentByDirectory = (directory) => {
  const allContent = getAllContent();
  if (directory === "root") {
    return allContent.filter((entry) => entry.directory === "root");
  }
  return allContent.filter((entry) => {
    return entry.directory === directory || entry.directory.startsWith(directory + "/");
  });
};
const getSubDirectories = (directory) => {
  const allContent = getAllContent();
  const subdirs = /* @__PURE__ */ new Set();
  const contents = allContent.filter(
    (entry) => entry.directory !== "root" && (entry.directory === directory || entry.directory.startsWith(directory + "/"))
  );
  contents.forEach((entry) => {
    const relativePath = entry.directory.replace(directory + "/", "");
    if (relativePath && relativePath.includes("/")) {
      const firstLevel = relativePath.split("/")[0];
      subdirs.add(firstLevel);
    }
  });
  return Array.from(subdirs).map((subdir) => ({
    name: subdir,
    path: `${directory}/${subdir}`,
    title: formatTitle(subdir),
    url: `/${directory}/${subdir}`
  }));
};
const processTemplateVariables = (content) => {
  const variables = {
    // Site information
    "site.name": siteConfig.site.name,
    "site.description": siteConfig.site.description,
    "site.url": siteConfig.site.url,
    "site.author": siteConfig.site.author,
    // Contact information
    "contact.email": siteConfig.contact.email,
    "contact.privacyEmail": siteConfig.contact.privacyEmail,
    "contact.supportEmail": siteConfig.contact.supportEmail,
    "contact.phone": siteConfig.contact.phone,
    "contact.address.street": siteConfig.contact.address.street,
    "contact.address.city": siteConfig.contact.address.city,
    "contact.address.state": siteConfig.contact.address.state,
    "contact.address.zipCode": siteConfig.contact.address.zipCode,
    "contact.address.country": siteConfig.contact.address.country,
    "contact.address.full": `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.zipCode}`,
    // Social media
    "social.twitter": siteConfig.social.twitter,
    "social.github": siteConfig.social.github,
    "social.linkedin": siteConfig.social.linkedin,
    "social.facebook": siteConfig.social.facebook,
    "social.instagram": siteConfig.social.instagram,
    "social.youtube": siteConfig.social.youtube,
    "social.discord": siteConfig.social.discord,
    "social.reddit": siteConfig.social.reddit,
    // Legal information
    "legal.privacyPolicyLastUpdated": siteConfig.legal.privacyPolicyLastUpdated,
    "legal.termsLastUpdated": siteConfig.legal.termsLastUpdated,
    "legal.doNotSell.processingTime": siteConfig.legal.doNotSell.processingTime,
    // Dynamic date functions
    "date.now": (/* @__PURE__ */ new Date()).toLocaleDateString("en-US"),
    "date.year": (/* @__PURE__ */ new Date()).getFullYear().toString(),
    "date.month": (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "long" }),
    "date.day": (/* @__PURE__ */ new Date()).getDate().toString()
  };
  let processedContent = content;
  processedContent = processedContent.replace(/\{\{([^}]+)\}\}/g, (match, variableName) => {
    const trimmedName = variableName.trim();
    if (variables.hasOwnProperty(trimmedName)) {
      return variables[trimmedName];
    }
    console.warn(`Template variable not found: ${trimmedName}`);
    return match;
  });
  return processedContent;
};
const getSidebarTree = (directory) => {
  const allContent = getAllContent();
  const directoryContent = allContent.filter(
    (entry) => entry.directory === directory || entry.directory.startsWith(directory + "/")
  );
  const groups = {};
  directoryContent.forEach((entry) => {
    const relativePath = entry.directory === directory ? "" : entry.directory.replace(directory + "/", "");
    const parts = relativePath.split("/").filter(Boolean);
    const groupKey = parts[0] || "_root";
    if (!groups[groupKey]) {
      groups[groupKey] = {
        title: groupKey === "_root" ? formatTitle(directory) : formatTitle(groupKey),
        items: []
      };
    }
    groups[groupKey].items.push({
      title: entry.metadata.title,
      url: entry.url,
      order: entry.metadata.order || 999
    });
  });
  Object.values(groups).forEach((group) => {
    group.items.sort((a, b) => a.order - b.order);
  });
  const result = [];
  if (groups._root) {
    groups._root.items.forEach((item) => {
      result.push(item);
    });
    delete groups._root;
  }
  Object.entries(groups).forEach(([key, group]) => {
    result.push({
      title: group.title,
      children: group.items
    });
  });
  return result;
};
export {
  getContentByDirectory as a,
  getContentByUrl as b,
  getSidebarTree as c,
  getSubDirectories as d,
  getContentDirectories as g,
  siteConfig as s
};
