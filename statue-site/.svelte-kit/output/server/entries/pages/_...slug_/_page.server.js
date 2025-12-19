import { b as getContentByUrl, g as getContentDirectories, c as getSidebarTree } from "../../../chunks/content-processor.js";
const prerender = true;
function load({ params }) {
  const url = `/${params.slug}`;
  console.log("Params slug:", params.slug);
  console.log("Generated URL:", url);
  if (url.includes("/blog/[slug]") || url.includes("/docs/[slug]")) {
    throw new Error("This route cannot be used");
  }
  const content = getContentByUrl(url);
  console.log("Found content:", content ? "YES" : "NO");
  if (content) {
    console.log("Content URL:", content.url);
    console.log("Content Directory:", content.directory);
  }
  const directories = getContentDirectories();
  const isDocsContent = content?.directory?.startsWith("docs") || url.startsWith("/docs");
  const sidebarItems = isDocsContent ? getSidebarTree("docs") : [];
  if (!content) {
    return { notFound: true, directories, sidebarItems };
  }
  return {
    content,
    directories,
    sidebarItems
  };
}
export {
  load,
  prerender
};
