import { W as bind_props, Z as ensure_array_like, V as attr, U as attr_class, a1 as attr_style, X as stringify, a0 as head } from "../../../chunks/index2.js";
/* empty css                                                           */
import { f as fallback, e as escape_html } from "../../../chunks/context.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
import { A as AuthorAvatar, D as DocsLayout } from "../../../chunks/AuthorAvatar.js";
import { o as onDestroy } from "../../../chunks/index-server.js";
function DirectoryHeader($$renderer, $$props) {
  let title = fallback($$props["title"], "");
  $$renderer.push(`<div class="max-w-5xl mx-auto"><h1 class="text-4xl font-bold mb-10 text-[var(--color-primary)]">${escape_html(title)}</h1></div>`);
  bind_props($$props, { title });
}
function SubDirectories($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let subDirectories = fallback($$props["subDirectories"], () => [], true);
    let title = fallback($$props["title"], "Subcategories");
    if (subDirectories && subDirectories.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mb-16"><h2 class="text-2xl font-bold mb-6 text-white">${escape_html(title)}</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      const each_array = ensure_array_like(subDirectories);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let subdir = each_array[$$index];
        $$renderer2.push(`<div class="bg-[var(--color-card)]/50 backdrop-blur-sm border border-[var(--color-border)] p-6 rounded-xl hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"><a${attr("href", subdir.url)} class="block"><h3 class="font-bold text-xl text-white">${escape_html(subdir.title)}</h3></a></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { subDirectories, title });
  });
}
function DirectoryContent($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = fallback($$props["content"], () => [], true);
    let showDirectory = fallback($$props["showDirectory"], false);
    let emptyMessage = fallback($$props["emptyMessage"], "No content found in this directory.");
    if (content && content.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mb-16"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
      const each_array = ensure_array_like(content);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let page = each_array[$$index];
        $$renderer2.push(`<a${attr("href", page.url)} class="block bg-[var(--color-card)]/50 backdrop-blur-sm border border-[var(--color-border)] p-6 rounded-xl hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"><h3 class="font-bold text-xl text-white mb-2">${escape_html(page.metadata.title)}</h3> `);
        if (showDirectory && page.directory) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-[var(--color-primary)] text-sm mb-2">Directory: ${escape_html(page.directory)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (page.metadata.description) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-[var(--color-muted)] mt-2">${escape_html(page.metadata.description)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (page.metadata.date) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-[var(--color-muted)] text-sm mt-2">${escape_html(new Date(page.metadata.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="mt-4 text-[var(--color-primary)] text-sm font-medium flex items-center"><span>Read more</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></div></a>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="bg-[var(--color-card)]/50 backdrop-blur-sm border border-[var(--color-border)] p-8 rounded-xl text-center"><p class="text-[var(--color-muted)]">${escape_html(emptyMessage)}</p></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { content, showDirectory, emptyMessage });
  });
}
function DocsDirectoryList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let sortedContent, featuredContent, resolvedPrimaryText, resolvedPrimaryUrl, resolvedSecondaryText, resolvedSecondaryUrl;
    let title = fallback($$props["title"], "");
    let description = fallback($$props["description"], "Guides, resources, and references to help you build with Statue.");
    let content = fallback($$props["content"], () => [], true);
    let subDirectories = fallback($$props["subDirectories"], () => [], true);
    let primaryButtonText = fallback($$props["primaryButtonText"], "");
    let primaryButtonUrl = fallback($$props["primaryButtonUrl"], "");
    let secondaryButtonText = fallback($$props["secondaryButtonText"], "");
    let secondaryButtonUrl = fallback($$props["secondaryButtonUrl"], "");
    const iconPaths = {
      bolt: "M13 10V3L4 14h7v7l9-11h-7z",
      components: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      checklist: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      map: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
      settings: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      palette: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
      document: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    };
    const settingsCircle = "M15 12a3 3 0 11-6 0 3 3 0 016 0z";
    function getIconPath(item) {
      const iconName = item?.metadata?.icon;
      return iconName && iconPaths[iconName] ? iconPaths[iconName] : iconPaths.document;
    }
    function isSettingsIcon(item) {
      return item?.metadata?.icon === "settings";
    }
    sortedContent = [...content].sort((a, b) => {
      const orderA = a.metadata?.order ?? 999;
      const orderB = b.metadata?.order ?? 999;
      return orderA - orderB;
    });
    featuredContent = sortedContent.slice(0, 2);
    resolvedPrimaryText = primaryButtonText || featuredContent[0]?.metadata?.title || "Get Started";
    resolvedPrimaryUrl = primaryButtonUrl || featuredContent[0]?.url || "/docs";
    resolvedSecondaryText = secondaryButtonText || featuredContent[1]?.metadata?.title || "";
    resolvedSecondaryUrl = secondaryButtonUrl || featuredContent[1]?.url || "";
    $$renderer2.push(`<article class="docs-directory relative"><div class="absolute top-32 -right-20 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-[0.08] blur-[150px] rounded-full pointer-events-none"></div> <header class="text-center mb-12 pt-8 relative z-10"><h1 class="text-4xl sm:text-5xl font-bold text-[var(--color-foreground)] mb-4">${escape_html(title)}</h1> <p class="text-lg text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto mb-8">${escape_html(description)}</p> `);
    if (resolvedPrimaryUrl) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex flex-wrap items-center justify-center gap-4"><a${attr("href", resolvedPrimaryUrl)} class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-[var(--color-on-primary)] font-medium hover:brightness-110 transition-all">${escape_html(resolvedPrimaryText)} <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a> `);
      if (resolvedSecondaryUrl) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", resolvedSecondaryUrl)} class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-foreground)] font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all">${escape_html(resolvedSecondaryText)} <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></header> `);
    if (sortedContent && sortedContent.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="mb-12 relative z-10"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      const each_array = ensure_array_like(sortedContent);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let item = each_array[index];
        $$renderer2.push(`<a${attr("href", item.url)} class="group relative p-6 rounded-xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-card)]/50 to-transparent hover:border-[var(--color-primary)]/50 hover:from-[var(--color-card)] transition-all"><div class="flex items-start gap-4"><div class="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center"><svg class="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${attr("d", getIconPath(item))}></path>`);
        if (isSettingsIcon(item)) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${attr("d", settingsCircle)}></path>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></svg></div> <div class="flex-1 min-w-0"><h3 class="font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors mb-1">${escape_html(item.metadata?.title || item.title || item.slug)}</h3> `);
        if (item.metadata?.description) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-sm text-[var(--color-muted)] line-clamp-2 svelte-15wjdxc">${escape_html(item.metadata.description)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div> <svg class="flex-shrink-0 w-5 h-5 text-[var(--color-muted)] group-hover:text-[var(--color-primary)] group-hover:translate-x-0.5 transition-all mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div></a>`);
      }
      $$renderer2.push(`<!--]--></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if ((!content || content.length === 0) && (!subDirectories || subDirectories.length === 0)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-center py-12"><svg class="mx-auto w-12 h-12 text-[var(--color-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> <p class="mt-4 text-[var(--color-muted)]">No content found in this directory.</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></article>`);
    bind_props($$props, {
      title,
      description,
      content,
      subDirectories,
      primaryButtonText,
      primaryButtonUrl,
      secondaryButtonText,
      secondaryButtonUrl
    });
  });
}
function BlogCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let hasThumbnail, slug, transitionName, formattedDate;
    let title = fallback($$props["title"], "");
    let description = fallback($$props["description"], "");
    let date = fallback($$props["date"], "");
    let author = fallback($$props["author"], "");
    let authorAvatar = fallback($$props["authorAvatar"], "");
    let thumbnail = fallback($$props["thumbnail"], "");
    let url = fallback($$props["url"], "");
    let enableScrollAnimation = fallback($$props["enableScrollAnimation"], false);
    let nextHasThumbnail = fallback($$props["nextHasThumbnail"], false);
    let isLast = fallback($$props["isLast"], false);
    let scale = 1;
    let rotation = 0;
    onDestroy(() => {
    });
    hasThumbnail = !!thumbnail;
    slug = url ? url.split("/").filter(Boolean).pop() : "";
    transitionName = slug ? `blog-thumb-${slug}` : "";
    title ? title.trim().charAt(0).toUpperCase() : "?";
    formattedDate = date ? new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" }) : "";
    if (hasThumbnail) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", url)}${attr_class("blog-card blog-card--with-thumbnail svelte-1muqqxg", void 0, { "no-border": nextHasThumbnail || isLast })}><div class="thumbnail-container svelte-1muqqxg"${attr_style(`view-transition-name: ${stringify(transitionName)};`)}><img${attr("src", thumbnail)}${attr("alt", title)} class="thumbnail svelte-1muqqxg"${attr_style(enableScrollAnimation ? `transform: scale(${scale}) rotate(${rotation}deg);` : "")}/></div> <div class="card-content svelte-1muqqxg">`);
      if (author || formattedDate) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="meta svelte-1muqqxg">`);
        if (author) {
          $$renderer2.push("<!--[-->");
          AuthorAvatar($$renderer2, { author, avatar: authorAvatar, size: 28 });
          $$renderer2.push(`<!----> <span class="author svelte-1muqqxg">${escape_html(author)}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (author && formattedDate) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="separator svelte-1muqqxg">·</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (formattedDate) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="date svelte-1muqqxg">${escape_html(formattedDate)}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <h3 class="title svelte-1muqqxg">${escape_html(title)}</h3> `);
      if (description) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="description svelte-1muqqxg">${escape_html(description)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<a${attr("href", url)} class="blog-card blog-card--minimal svelte-1muqqxg">`);
      if (author || formattedDate) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="meta svelte-1muqqxg">`);
        if (author) {
          $$renderer2.push("<!--[-->");
          AuthorAvatar($$renderer2, { author, avatar: authorAvatar, size: 24 });
          $$renderer2.push(`<!----> <span class="author svelte-1muqqxg">${escape_html(author)}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (author && formattedDate) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="separator svelte-1muqqxg">·</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (formattedDate) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="date svelte-1muqqxg">${escape_html(formattedDate)}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <h3 class="title svelte-1muqqxg">${escape_html(title)}</h3> `);
      if (description) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="description svelte-1muqqxg">${escape_html(description)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></a>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, {
      title,
      description,
      date,
      author,
      authorAvatar,
      thumbnail,
      url,
      enableScrollAnimation,
      nextHasThumbnail,
      isLast
    });
  });
}
function BlogGrid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let posts = fallback($$props["posts"], () => [], true);
    let emptyMessage = fallback($$props["emptyMessage"], "No posts found.");
    if (posts && posts.length > 0) {
      $$renderer2.push("<!--[-->");
      const leftColumn = posts.filter((_, i) => i % 2 === 0);
      const rightColumn = posts.filter((_, i) => i % 2 === 1);
      $$renderer2.push(`<div class="blog-grid svelte-11tr3jy"><div class="blog-grid-column svelte-11tr3jy"><!--[-->`);
      const each_array = ensure_array_like(leftColumn);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let post = each_array[i];
        const nextPost = leftColumn[i + 1];
        const nextHasThumbnail = nextPost?.metadata?.thumbnail ? true : false;
        const isLast = i === leftColumn.length - 1;
        BlogCard($$renderer2, {
          title: post.metadata?.title || "Untitled",
          description: post.metadata?.description || "",
          date: post.metadata?.date || "",
          author: post.metadata?.author || "",
          authorAvatar: post.metadata?.authorAvatar || "",
          thumbnail: post.metadata?.thumbnail || "",
          url: post.url,
          nextHasThumbnail,
          isLast
        });
      }
      $$renderer2.push(`<!--]--></div> <div class="blog-grid-column svelte-11tr3jy"><!--[-->`);
      const each_array_1 = ensure_array_like(rightColumn);
      for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
        let post = each_array_1[i];
        const nextPost = rightColumn[i + 1];
        const nextHasThumbnail = nextPost?.metadata?.thumbnail ? true : false;
        const isLast = i === rightColumn.length - 1;
        BlogCard($$renderer2, {
          title: post.metadata?.title || "Untitled",
          description: post.metadata?.description || "",
          date: post.metadata?.date || "",
          author: post.metadata?.author || "",
          authorAvatar: post.metadata?.authorAvatar || "",
          thumbnail: post.metadata?.thumbnail || "",
          url: post.url,
          nextHasThumbnail,
          isLast
        });
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="empty-state svelte-11tr3jy"><p class="svelte-11tr3jy">${escape_html(emptyMessage)}</p></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { posts, emptyMessage });
  });
}
function BlogHeader($$renderer, $$props) {
  let title = fallback($$props["title"], "Blog");
  $$renderer.push(`<header class="blog-header svelte-j7f9eh"><h1 class="title svelte-j7f9eh">${escape_html(title)}</h1></header>`);
  bind_props($$props, { title });
}
function BlogLayout($$renderer, $$props) {
  let title = fallback($$props["title"], "Blog");
  let posts = fallback($$props["posts"], () => [], true);
  $$renderer.push(`<div class="blog-layout svelte-za0vb8"><div class="blog-container svelte-za0vb8">`);
  BlogHeader($$renderer, { title });
  $$renderer.push(`<!----> `);
  BlogGrid($$renderer, { posts });
  $$renderer.push(`<!----></div></div>`);
  bind_props($$props, { title, posts });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let directoryContent, currentDirectory, subDirectories, sidebarItems, isDocsDirectory, isBlogDirectory, currentDirContent, subDirContent, allDocsContent;
    let data = $$props["data"];
    data.directories;
    directoryContent = data.directoryContent;
    currentDirectory = data.currentDirectory;
    subDirectories = data.subDirectories;
    sidebarItems = data.sidebarItems || [];
    isDocsDirectory = currentDirectory.name === "docs";
    isBlogDirectory = currentDirectory.name === "blog";
    currentDirContent = directoryContent.filter((page) => {
      return page.directory === currentDirectory.name;
    });
    subDirContent = directoryContent.filter((page) => {
      return page.directory !== currentDirectory.name && page.directory.startsWith(currentDirectory.name + "/");
    });
    allDocsContent = [...currentDirContent, ...subDirContent];
    head("cm7z0s", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(currentDirectory.title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", `${stringify(currentDirectory.title)} page - Created by Statue SSG`)}/>`);
    });
    if (isDocsDirectory) {
      $$renderer2.push("<!--[-->");
      DocsLayout($$renderer2, {
        sidebarItems,
        activePath: "/docs",
        sidebarTitle: currentDirectory.title,
        showToc: false,
        headings: [],
        children: ($$renderer3) => {
          DocsDirectoryList($$renderer3, {
            title: currentDirectory.title,
            content: allDocsContent,
            subDirectories
          });
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
      if (isBlogDirectory) {
        $$renderer2.push("<!--[-->");
        BlogLayout($$renderer2, { title: currentDirectory.title, posts: currentDirContent });
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="min-h-screen text-white bg-gradient-to-b from-[var(--color-hero-from)] via-[var(--color-hero-via)] to-[var(--color-hero-to)]"><div class="container mx-auto px-4 py-16">`);
        DirectoryHeader($$renderer2, { title: currentDirectory.title });
        $$renderer2.push(`<!----> `);
        SubDirectories($$renderer2, { subDirectories });
        $$renderer2.push(`<!----> `);
        DirectoryContent($$renderer2, { content: currentDirContent });
        $$renderer2.push(`<!----> `);
        if (subDirContent && subDirContent.length > 0) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div><h2 class="text-2xl font-bold mb-6 text-white">Contents in Subdirectories</h2> `);
          DirectoryContent($$renderer2, { content: subDirContent, showDirectory: true });
          $$renderer2.push(`<!----></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (!currentDirContent.length && !subDirContent.length && (!subDirectories || !subDirectories.length)) {
          $$renderer2.push("<!--[-->");
          DirectoryContent($$renderer2, {
            content: [],
            emptyMessage: "No content found in this directory."
          });
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
