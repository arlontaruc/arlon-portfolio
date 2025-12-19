import { V as attr, W as bind_props, U as attr_class, X as stringify, Y as store_get, a1 as attr_style, _ as unsubscribe_stores, a0 as head } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
/* empty css                                                           */
import { f as fallback, e as escape_html } from "../../../chunks/context.js";
import { h as html } from "../../../chunks/html.js";
import { A as AuthorAvatar, D as DocsLayout } from "../../../chunks/AuthorAvatar.js";
function ContentHeader($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let title = fallback($$props["title"], "");
    let date = fallback($$props["date"], null);
    let author = fallback($$props["author"], null);
    let backLink = fallback($$props["backLink"], "/");
    let backLinkText = fallback($$props["backLinkText"], "Home");
    $$renderer2.push(`<header class="mb-10"><h1 class="text-4xl font-bold mb-4 text-[var(--color-primary)]">${escape_html(title)}</h1> `);
    if (date) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-[var(--color-muted)] mt-4">Published: ${escape_html(new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))} `);
      if (author) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`by ${escape_html(author)}`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="mt-6"><a${attr("href", backLink)} class="inline-flex items-center text-[var(--color-primary)] hover:brightness-110 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg> Back to ${escape_html(backLinkText)}</a></div></header>`);
    bind_props($$props, { title, date, author, backLink, backLinkText });
  });
}
function ContentBody($$renderer, $$props) {
  let content = fallback($$props["content"], "");
  $$renderer.push(`<main class="prose prose-invert max-w-none">${html(content)}</main>`);
  bind_props($$props, { content });
}
function Warning($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let warningClass;
    let warning = $$props["warning"];
    function getWarningClass(type) {
      switch (type) {
        case "error":
          return "bg-red-900/20 border-red-500 text-red-200";
        case "warning":
          return "bg-yellow-900/20 border-yellow-500 text-yellow-200";
        case "success":
          return "bg-green-900/20 border-green-500 text-green-200";
        case "info":
        default:
          return "bg-blue-900/20 border-blue-500 text-blue-200";
      }
    }
    function getIconPath(type) {
      switch (type) {
        case "error":
          return "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z";
        case "warning":
          return "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z";
        case "success":
          return "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z";
        case "info":
        default:
          return "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z";
      }
    }
    warningClass = getWarningClass(warning?.type || "info");
    if (warning && (warning.title || warning.message)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attr_class(`mb-8 p-4 border-l-4 rounded-r-lg ${stringify(warningClass)}`)}><div class="flex items-start"><div class="flex-shrink-0"><svg class="h-5 w-5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"${attr("d", getIconPath(warning.type))}></path></svg></div> <div class="ml-3 flex-1">`);
      if (warning.title) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h3 class="text-sm font-medium mb-1">${escape_html(warning.title)}</h3>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (warning.message) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="text-sm opacity-90">${escape_html(warning.message)}</div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { warning });
  });
}
function DocsContent($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = fallback($$props["content"], "");
    let title = fallback($$props["title"], "");
    let description = fallback($$props["description"], "");
    let lastUpdated = fallback($$props["lastUpdated"], "");
    let editUrl = fallback($$props["editUrl"], "");
    let headings = fallback($$props["headings"], () => [], true);
    $$renderer2.push(`<article class="docs-content"><header class="mb-8 pb-8 border-b border-[var(--color-border)]">`);
    if (title) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h1 class="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4">${escape_html(title)}</h1>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (description) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-lg text-[var(--color-muted)] leading-relaxed">${escape_html(description)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (lastUpdated || editUrl) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex flex-wrap items-center gap-4 mt-4 text-sm text-[var(--color-muted)]">`);
      if (lastUpdated) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> Last updated: ${escape_html(lastUpdated)}</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (editUrl) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", editUrl)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg> Edit this page</a>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></header> <div class="prose prose-docs max-w-none pb-16">${html(content)}</div></article>`);
    bind_props($$props, { content, title, description, lastUpdated, editUrl, headings });
  });
}
function BlogPostContent($$renderer, $$props) {
  let content = fallback($$props["content"], "");
  $$renderer.push(`<article class="blog-post-content svelte-1e2p9cl"><div class="prose svelte-1e2p9cl">${html(content)}</div></article>`);
  bind_props($$props, { content });
}
function BlogPostHeader($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let formattedDate, hasThumbnail, slug, transitionName;
    let title = fallback($$props["title"], "");
    let description = fallback($$props["description"], "");
    let date = fallback($$props["date"], "");
    let author = fallback($$props["author"], "");
    let authorAvatar = fallback($$props["authorAvatar"], "");
    let thumbnail = fallback($$props["thumbnail"], "");
    let backLink = fallback($$props["backLink"], "/blog");
    let backLinkText = fallback($$props["backLinkText"], "Blog");
    formattedDate = date ? new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "2-digit" }) : "";
    hasThumbnail = !!thumbnail;
    slug = store_get($$store_subs ??= {}, "$page", page).url.pathname ? store_get($$store_subs ??= {}, "$page", page).url.pathname.split("/").filter(Boolean).pop() : "";
    transitionName = slug ? `blog-thumb-${slug}` : "";
    $$renderer2.push(`<header class="blog-post-header svelte-694s8b"><div class="breadcrumb svelte-694s8b"><a${attr("href", backLink)} class="back-link svelte-694s8b"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg> <span>${escape_html(backLinkText)}</span></a></div> <h1 class="title svelte-694s8b">${escape_html(title)}</h1> `);
    if (description) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="description svelte-694s8b">${escape_html(description)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (hasThumbnail) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="thumbnail-container svelte-694s8b"${attr_style(`view-transition-name: ${stringify(transitionName)};`)}><img${attr("src", thumbnail)}${attr("alt", title)} class="thumbnail svelte-694s8b"/></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="meta svelte-694s8b">`);
    if (author) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attr_class("avatar-wrapper svelte-694s8b", void 0, { "has-image": !!authorAvatar })}>`);
      AuthorAvatar($$renderer2, { author, avatar: authorAvatar, size: null });
      $$renderer2.push(`<!----></div> <span class="author svelte-694s8b">${escape_html(author)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (author && formattedDate) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="separator svelte-694s8b">·</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (formattedDate) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="date svelte-694s8b">${escape_html(formattedDate)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, {
      title,
      description,
      date,
      author,
      authorAvatar,
      thumbnail,
      backLink,
      backLinkText
    });
  });
}
function BlogPostLayout($$renderer, $$props) {
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let date = fallback($$props["date"], "");
  let author = fallback($$props["author"], "");
  let authorAvatar = fallback($$props["authorAvatar"], "");
  let thumbnail = fallback($$props["thumbnail"], "");
  let content = fallback($$props["content"], "");
  let backLink = fallback($$props["backLink"], "/blog");
  let backLinkText = fallback($$props["backLinkText"], "Blog");
  $$renderer.push(`<div class="blog-post-layout svelte-3nnfqe"><div class="blog-post-container svelte-3nnfqe">`);
  BlogPostHeader($$renderer, {
    title,
    description,
    date,
    author,
    authorAvatar,
    thumbnail,
    backLink,
    backLinkText
  });
  $$renderer.push(`<!----> `);
  BlogPostContent($$renderer, { content });
  $$renderer.push(`<!----></div></div>`);
  bind_props($$props, {
    title,
    description,
    date,
    author,
    authorAvatar,
    thumbnail,
    content,
    backLink,
    backLinkText
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let content, sidebarItems, isDocsContent, isBlogContent, activePath, title, description, backLink, backLinkText;
    let data = $$props["data"];
    let headings = [];
    function getBackLink(directory) {
      if (directory === "root") return "/";
      return `/${directory}`;
    }
    function getBackLinkText(directory) {
      if (directory === "root") return "Home";
      return directory.charAt(0).toUpperCase() + directory.slice(1);
    }
    content = data.content;
    data.directories;
    sidebarItems = data.sidebarItems || [];
    isDocsContent = content?.directory?.startsWith("docs");
    isBlogContent = content?.directory === "blog" || content?.directory?.startsWith("blog/");
    activePath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
    title = content ? content.metadata.title : "Content Not Found";
    description = content?.metadata?.description;
    backLink = content ? getBackLink(content.directory) : "/";
    backLinkText = content ? getBackLinkText(content.directory) : "Home";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("hlt6rm", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>${escape_html(title)}</title>`);
        });
        if (description) {
          $$renderer4.push("<!--[-->");
          $$renderer4.push(`<meta name="description"${attr("content", description)}/>`);
        } else {
          $$renderer4.push("<!--[!-->");
        }
        $$renderer4.push(`<!--]-->`);
      });
      if (data.notFound) {
        $$renderer3.push("<!--[-->");
        if (isDocsContent || activePath.startsWith("/docs")) {
          $$renderer3.push("<!--[-->");
          DocsLayout($$renderer3, {
            sidebarItems,
            activePath,
            sidebarTitle: "Docs",
            showToc: false,
            headings: [],
            children: ($$renderer4) => {
              $$renderer4.push(`<div class="text-center py-12"><h1 class="text-2xl font-bold text-[var(--color-foreground)] mb-4">Page Not Found</h1> <p class="text-[var(--color-muted)]">The documentation page you're looking for doesn't exist.</p> <a href="/docs" class="mt-4 inline-block text-[var(--color-primary)] hover:underline">Back to Documentation</a></div>`);
            },
            $$slots: { default: true }
          });
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div class="bg-red-100 p-4 rounded-md my-8 max-w-prose mx-auto"><h2 class="text-xl font-bold text-red-700">DEBUG: Content not found</h2> <p class="my-2">URL: ${escape_html(store_get($$store_subs ??= {}, "$page", page).url.pathname)}</p> <p class="my-2">Params: ${escape_html(JSON.stringify(store_get($$store_subs ??= {}, "$page", page).params))}</p> <p class="my-2">Data: ${escape_html(JSON.stringify(data))}</p></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[!-->");
        if (content) {
          $$renderer3.push("<!--[-->");
          if (isDocsContent) {
            $$renderer3.push("<!--[-->");
            DocsLayout($$renderer3, {
              sidebarItems,
              headings,
              activePath,
              sidebarTitle: "Docs",
              children: ($$renderer4) => {
                if (content.metadata.warning) {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<div class="mb-6">`);
                  Warning($$renderer4, { warning: content.metadata.warning });
                  $$renderer4.push(`<!----></div>`);
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]--> `);
                DocsContent($$renderer4, {
                  content: content.content,
                  title: content.metadata.title,
                  description: content.metadata.description,
                  lastUpdated: content.metadata.date,
                  get headings() {
                    return headings;
                  },
                  set headings($$value) {
                    headings = $$value;
                    $$settled = false;
                  }
                });
                $$renderer4.push(`<!---->`);
              },
              $$slots: { default: true }
            });
          } else {
            $$renderer3.push("<!--[!-->");
            if (isBlogContent) {
              $$renderer3.push("<!--[-->");
              BlogPostLayout($$renderer3, {
                title: content.metadata.title,
                description: content.metadata.description,
                date: content.metadata.date,
                author: content.metadata.author,
                authorAvatar: content.metadata.authorAvatar,
                thumbnail: content.metadata.thumbnail,
                content: content.content,
                backLink,
                backLinkText
              });
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`<div class="min-h-screen text-white bg-gradient-to-b from-[var(--color-hero-from)] via-[var(--color-hero-via)] to-[var(--color-hero-to)]"><div class="container mx-auto px-4 py-16"><div class="max-w-6xl mx-auto">`);
              ContentHeader($$renderer3, {
                title: content.metadata.title,
                date: content.metadata.date,
                author: content.metadata.author,
                backLink,
                backLinkText
              });
              $$renderer3.push(`<!----> `);
              if (content.metadata.warning) {
                $$renderer3.push("<!--[-->");
                Warning($$renderer3, { warning: content.metadata.warning });
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]--> `);
              ContentBody($$renderer3, { content: content.content });
              $$renderer3.push(`<!----></div></div></div>`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div class="bg-yellow-100 p-4 rounded-md my-8 max-w-prose mx-auto"><h2 class="text-xl font-bold text-yellow-700">DEBUG: Content is undefined or empty</h2> <p class="my-2">URL: ${escape_html(store_get($$store_subs ??= {}, "$page", page).url.pathname)}</p> <p class="my-2">Params: ${escape_html(JSON.stringify(store_get($$store_subs ??= {}, "$page", page).params))}</p> <p class="my-2">Data: ${escape_html(JSON.stringify(data))}</p></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
