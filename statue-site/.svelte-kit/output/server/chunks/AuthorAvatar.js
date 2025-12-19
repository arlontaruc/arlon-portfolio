import { Z as ensure_array_like, U as attr_class, X as stringify, V as attr, W as bind_props, a1 as attr_style, $ as slot } from "./index2.js";
/* empty css                                             */
import { f as fallback, e as escape_html } from "./context.js";
import { o as onDestroy } from "./index-server.js";
function DocsSidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredItems;
    let items = fallback($$props["items"], () => [], true);
    let activePath = fallback($$props["activePath"], "");
    let title = fallback($$props["title"], "Documentation");
    let showSearch = fallback($$props["showSearch"], true);
    let expandedSections = {};
    function isActive(url) {
      if (!url || !activePath) return false;
      const normalizedUrl = url.endsWith("/") ? url.slice(0, -1) : url;
      const normalizedActivePath = activePath.endsWith("/") ? activePath.slice(0, -1) : activePath;
      return normalizedActivePath === normalizedUrl;
    }
    function hasActiveChild(item) {
      if (!item.children) return false;
      return item.children.some((child) => isActive(child.url) || hasActiveChild(child));
    }
    {
      if (activePath && items.length > 0) {
        items.forEach((item, index) => {
          if (item.children) {
            const hasActiveChild2 = item.children.some((child) => child.url === activePath || child.children && child.children.some((c) => c.url === activePath));
            if (hasActiveChild2 || item.url === activePath) {
              expandedSections[index] = true;
            }
          }
        });
        expandedSections = expandedSections;
      }
    }
    filteredItems = items;
    $$renderer2.push(`<aside class="docs-sidebar w-64 flex-shrink-0 h-full overflow-y-auto bg-[var(--color-background)] svelte-4geowz"><nav class="pt-5 pb-4 pr-4"><ul class="space-y-1"><!--[-->`);
    const each_array = ensure_array_like(
      // Normalize URLs by removing trailing slashes for comparison
      filteredItems
    );
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let item = each_array[index];
      $$renderer2.push(`<li>`);
      if (item.children && item.children.length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<button${attr_class(`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${stringify(hasActiveChild(item) ? "text-[var(--color-primary)]" : "text-[var(--color-foreground)]")} hover:bg-[var(--color-card)]`)}><span>${escape_html(item.title)}</span> <svg${attr_class("w-4 h-4 transition-transform duration-200", void 0, { "rotate-90": expandedSections[index] })} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button> `);
        if (expandedSections[index]) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<ul class="mt-1 ml-3 pl-3 border-l border-[var(--color-border)] space-y-1"><!--[-->`);
          const each_array_1 = ensure_array_like(item.children);
          for (let $$index_1 = 0, $$length2 = each_array_1.length; $$index_1 < $$length2; $$index_1++) {
            let child = each_array_1[$$index_1];
            $$renderer2.push(`<li>`);
            if (child.children && child.children.length > 0) {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<div class="text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider px-3 py-2 mt-2">${escape_html(child.title)}</div> <ul class="space-y-1"><!--[-->`);
              const each_array_2 = ensure_array_like(child.children);
              for (let $$index = 0, $$length3 = each_array_2.length; $$index < $$length3; $$index++) {
                let grandchild = each_array_2[$$index];
                $$renderer2.push(`<li><a${attr("href", grandchild.url)}${attr_class(`block px-3 py-1.5 text-sm rounded-lg transition-colors ${stringify(isActive(grandchild.url) ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium" : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-card)]")}`)}>${escape_html(grandchild.title)}</a></li>`);
              }
              $$renderer2.push(`<!--]--></ul>`);
            } else {
              $$renderer2.push("<!--[!-->");
              $$renderer2.push(`<a${attr("href", child.url)}${attr_class(`block px-3 py-1.5 text-sm rounded-lg transition-colors ${stringify(isActive(child.url) ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium" : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-card)]")}`)}>${escape_html(child.title)}</a>`);
            }
            $$renderer2.push(`<!--]--></li>`);
          }
          $$renderer2.push(`<!--]--></ul>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (item.url) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<a${attr("href", item.url)}${attr_class(`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${stringify(isActive(item.url) ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]" : "text-[var(--color-foreground)] hover:bg-[var(--color-card)]")}`)}>${escape_html(item.title)}</a>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<div class="px-3 py-2 text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider">${escape_html(item.title)}</div>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></li>`);
    }
    $$renderer2.push(`<!--]--></ul></nav></aside>`);
    bind_props($$props, { items, activePath, title, showSearch });
  });
}
function TableOfContents($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visibleHeadings;
    let headings = fallback($$props["headings"], () => [], true);
    let title = fallback($$props["title"], "On this page");
    let activeId = "";
    onDestroy(() => {
    });
    visibleHeadings = headings.filter((h) => h.level === 2 || h.level === 3);
    if (
      // Wait for DOM to update
      // Disconnect previous observer
      // Create new intersection observer
      // Observe all heading elements
      // Navbar height
      // Update URL hash without jumping
      visibleHeadings.length > 0
    ) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<aside class="toc-sidebar pr-4"><h4 class="text-sm font-semibold text-[var(--color-foreground)] mb-4">${escape_html(title)}</h4> <nav class="toc-nav"><ul class="space-y-1 border-l border-[var(--color-border)]"><!--[-->`);
      const each_array = ensure_array_like(visibleHeadings);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let heading = each_array[$$index];
        $$renderer2.push(`<li${attr_style(`padding-left: ${stringify((heading.level - 2) * 0.75)}rem`)}><button${attr_class(`block w-full text-left py-1 px-3 text-sm transition-colors border-l-2 -ml-px cursor-pointer ${stringify(activeId === heading.id ? "border-[var(--color-primary)] text-[var(--color-primary)] font-medium" : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-muted)]")}`)}>${escape_html(heading.text)}</button></li>`);
      }
      $$renderer2.push(`<!--]--></ul></nav></aside>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { headings, title });
  });
}
function DocsLayout($$renderer, $$props) {
  let sidebarItems = fallback($$props["sidebarItems"], () => [], true);
  let headings = fallback($$props["headings"], () => [], true);
  let activePath = fallback($$props["activePath"], "");
  let sidebarTitle = fallback($$props["sidebarTitle"], "Documentation");
  let showSearch = fallback($$props["showSearch"], true);
  let showToc = fallback($$props["showToc"], true);
  $$renderer.push(`<div class="docs-layout min-h-screen bg-[var(--color-background)] svelte-h5qt01"><button class="fixed bottom-4 right-4 z-50 lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-lg" aria-label="Toggle sidebar">`);
  {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>`);
  }
  $$renderer.push(`<!--]--></button> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <div class="container mx-auto px-4 pt-16"><div class="flex"><div class="hidden lg:block w-64 flex-shrink-0"><div class="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">`);
  DocsSidebar($$renderer, {
    items: sidebarItems,
    activePath,
    title: sidebarTitle,
    showSearch
  });
  $$renderer.push(`<!----></div></div> <div${attr_class(`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 z-50 transform transition-transform duration-300 lg:hidden bg-[var(--color-background)] ${stringify("-translate-x-full")}`)}>`);
  DocsSidebar($$renderer, {
    items: sidebarItems,
    activePath,
    title: sidebarTitle,
    showSearch
  });
  $$renderer.push(`<!----></div> <main class="flex-1 min-w-0 min-h-[calc(100vh-4rem)] relative"><div class="hidden lg:block absolute left-0 top-12 bottom-0 w-px bg-[var(--color-border)]"></div> <div class="px-4 sm:px-6 lg:px-8 py-8"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div></main> `);
  if (showToc) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="hidden xl:block w-64 flex-shrink-0"><div class="sticky top-16 pt-5 px-6">`);
    TableOfContents($$renderer, { headings });
    $$renderer.push(`<!----></div></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div></div></div>`);
  bind_props($$props, {
    sidebarItems,
    headings,
    activePath,
    sidebarTitle,
    showSearch,
    showToc
  });
}
function AuthorAvatar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let initial;
    let author = fallback($$props["author"], "");
    let avatar = fallback($$props["avatar"], "");
    let size = fallback($$props["size"], 24);
    function getInitial(name) {
      if (!name) return "?";
      return name.trim().charAt(0).toUpperCase();
    }
    initial = getInitial(author);
    $$renderer2.push(`<div${attr_class("author-avatar svelte-i0llz0", void 0, { "full-size": !size })}${attr_style(size ? `width: ${size}px; height: ${size}px; font-size: ${size * 0.45}px;` : "")}>`);
    if (avatar) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img${attr("src", avatar)}${attr("alt", author)} class="avatar-image svelte-i0llz0"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="avatar-initials svelte-i0llz0">${escape_html(initial)}</div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { author, avatar, size });
  });
}
export {
  AuthorAvatar as A,
  DocsLayout as D
};
