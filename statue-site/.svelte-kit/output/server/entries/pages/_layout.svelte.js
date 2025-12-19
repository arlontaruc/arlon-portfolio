import { U as attr_class, V as attr, W as bind_props, X as stringify, Y as store_get, Z as ensure_array_like, _ as unsubscribe_stores, $ as slot } from "../../chunks/index2.js";
/* empty css                                                        */
import { p as page } from "../../chunks/stores.js";
import { o as onDestroy } from "../../chunks/index-server.js";
import { f as fallback, e as escape_html } from "../../chunks/context.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
function Search($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let placeholder = fallback($$props["placeholder"], "Search...");
    let debounceMs = fallback($$props["debounceMs"], 300);
    let minQueryLength = fallback($$props["minQueryLength"], 2);
    let maxResults = fallback($$props["maxResults"], 10);
    let showCategories = fallback($$props["showCategories"], true);
    let showDates = fallback($$props["showDates"], true);
    let showExcerpts = fallback($$props["showExcerpts"], true);
    let containerClass = fallback($$props["containerClass"], "");
    let inputClass = fallback($$props["inputClass"], "");
    let resultsClass = fallback($$props["resultsClass"], "");
    let query = "";
    let searchTimeout;
    onDestroy(() => {
      clearTimeout(searchTimeout);
    });
    $$renderer2.push(`<div${attr_class(`search-container relative ${stringify(containerClass)}`, "svelte-16knhue")} role="search" aria-label="Site search"><div class="relative"><div class="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div> <input type="text"${attr("value", query)}${attr("placeholder", placeholder)}${attr_class(`search-input w-full pl-10 pr-10 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all ${stringify(inputClass)}`, "svelte-16knhue")} aria-label="Search input" aria-autocomplete="list" aria-controls="search-results"${attr("aria-activedescendant", void 0)}/> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, {
      placeholder,
      debounceMs,
      minQueryLength,
      maxResults,
      showCategories,
      showDates,
      showExcerpts,
      containerClass,
      inputClass,
      resultsClass
    });
  });
}
function NavigationBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let currentPath;
    let navbarItems = fallback($$props["navbarItems"], () => [], true);
    let activePath = fallback($$props["activePath"], "");
    let showSearch = fallback($$props["showSearch"], false);
    let searchPlaceholder = fallback($$props["searchPlaceholder"], "Search...");
    let isHidden = false;
    let lastScrollY = 0;
    let scrollY = 0;
    function isActive(itemUrl, path) {
      if (itemUrl === "/") {
        return path === "/";
      }
      return path === itemUrl || path.startsWith(itemUrl + "/");
    }
    function handleScroll() {
      const currentY = window.scrollY || 0;
      scrollY = currentY;
      const delta = currentY - lastScrollY;
      if (Math.abs(delta) > 6) {
        isHidden = delta > 0 && currentY > 24;
        lastScrollY = currentY;
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    currentPath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
    $$renderer2.push(`<nav${attr_class(`bg-[var(--color-background)] ${stringify(currentPath === "/" && true && scrollY < 10 ? "md:!bg-transparent" : "")} text-[var(--color-foreground)] fixed w-full top-0 z-50 transition-transform duration-300 will-change-transform ${stringify(isHidden ? "-translate-y-full" : "translate-y-0")}`)} style="view-transition-name: navbar;"><div class="container mx-auto px-4"><div class="flex items-center justify-between h-16"><div class="flex items-center"><a href="/" class="flex items-center space-x-2"><div class="text-[var(--color-primary)] w-8 h-8"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"></rect><path d="M8 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M12 8L12 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></div> <span class="font-bold text-xl"><span class="text-[var(--color-primary)]">Statue</span>SSG</span></a></div> <div class="hidden md:flex items-center space-x-4"><a href="/"${attr_class(`py-2 px-3 font-medium text-sm transition-colors duration-200 ${stringify(isActive("/", currentPath) ? "text-[var(--color-primary)]" : "text-[var(--color-foreground)] hover:text-[var(--color-primary)]")}`)}>Home</a> <a href="/about"${attr_class(`py-2 px-3 font-medium text-sm transition-colors duration-200 ${stringify(isActive("/about", currentPath) ? "text-[var(--color-primary)]" : "text-[var(--color-foreground)] hover:text-[var(--color-primary)]")}`)}>About</a> <!--[-->`);
    const each_array = ensure_array_like(navbarItems);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      if (item.name !== "legal") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", item.url)}${attr_class(`py-2 px-3 font-medium text-sm transition-colors duration-200 ${stringify(isActive(item.url, currentPath) ? "text-[var(--color-primary)]" : "text-[var(--color-foreground)] hover:text-[var(--color-primary)]")}`)}>${escape_html(item.title)}</a>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--> `);
    if (showSearch) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="ml-2 w-56">`);
      Search($$renderer2, { placeholder: searchPlaceholder });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <a href="/docs" class="ml-4 px-4 py-2 rounded-lg bg-[var(--color-primary)] hover:brightness-110 text-[var(--color-on-primary)] text-sm font-medium transition-colors duration-200">Documentation</a></div> <div class="md:hidden"><button class="text-[var(--color-muted)] hover:text-[var(--color-primary)] focus:outline-none">`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button></div></div></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></nav>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { navbarItems, activePath, showSearch, searchPlaceholder });
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    let directories = fallback($$props["directories"], () => [], true);
    let currentPath = fallback($$props["currentPath"], "");
    let mainPagesTitle = fallback($$props["mainPagesTitle"], "Main Pages");
    let homePageText = fallback($$props["homePageText"], "Home Page");
    let copyrightText = fallback($$props["copyrightText"], () => `© ${currentYear} Statue SSG. Static site generator developed with SvelteKit.`, true);
    let legalLinks = fallback(
      $$props["legalLinks"],
      () => [
        { title: "Privacy Policy", url: "/legal/privacy-policy" },
        {
          title: "Do Not Sell My Information",
          url: "/legal/do-not-sell"
        },
        { title: "Terms of Use", url: "/legal/terms" }
      ],
      true
    );
    let socialLinks = fallback(
      $$props["socialLinks"],
      () => [
        {
          name: "LinkedIn",
          url: "https://linkedin.com",
          iconPath: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
        },
        {
          name: "X (Twitter)",
          url: "https://x.com",
          iconPath: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
        },
        {
          name: "GitHub",
          url: "https://github.com",
          iconPath: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        },
        {
          name: "Instagram",
          url: "https://instagram.com",
          iconPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
        }
      ],
      true
    );
    $$renderer2.push(`<footer class="bg-[var(--color-card)] text-[var(--color-muted)] py-10 border-t border-[var(--color-border)]"><div class="container mx-auto px-4"><div class="sitemap mt-6 pt-4 mb-8"><div class="sitemap-grid grid grid-cols-2 md:grid-cols-3 gap-4 svelte-xmj80j"><div class="sitemap-category svelte-xmj80j"><h4 class="text-lg font-medium mb-2 text-[var(--color-foreground)]">${escape_html(mainPagesTitle)}</h4> <ul class="ml-2 space-y-1"><li><a href="/"${attr_class(`${stringify(currentPath === "/" ? "text-[var(--color-primary)]" : "text-[var(--color-muted)]")} hover:text-[var(--color-primary)] text-sm`)}>${escape_html(homePageText)}</a></li> `);
    if (directories && directories.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(directories);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let directory = each_array[$$index];
        if (directory.name !== "legal") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<li><a${attr("href", directory.url)}${attr_class(`${stringify(currentPath === directory.url ? "text-[var(--color-primary)]" : "text-[var(--color-muted)]")} hover:text-[var(--color-primary)] text-sm`)}>${escape_html(directory.title)}</a></li>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></ul></div> `);
    if (directories && directories.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(directories);
      for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
        let directory = each_array_1[$$index_2];
        if (directory.name !== "legal") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="sitemap-category svelte-xmj80j"><h4 class="text-lg font-medium mb-2 text-[var(--color-foreground)]"><a${attr("href", directory.url)}${attr_class(`${stringify(currentPath.startsWith(directory.url) ? "text-[var(--color-primary)]" : "text-[var(--color-foreground)]")} hover:text-[var(--color-primary)]`)}>${escape_html(directory.title)}</a></h4> `);
          if (directory.subpages && directory.subpages.length > 0) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<ul class="ml-2 space-y-1"><!--[-->`);
            const each_array_2 = ensure_array_like(directory.subpages);
            for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
              let subpage = each_array_2[$$index_1];
              $$renderer2.push(`<li><a${attr("href", subpage.url)}${attr_class(`${stringify(currentPath === subpage.url ? "text-[var(--color-primary)]" : "text-[var(--color-muted)]")} hover:text-[var(--color-primary)] text-sm`)}>${escape_html(subpage.title)}</a></li>`);
            }
            $$renderer2.push(`<!--]--></ul>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="text-center"><p>${escape_html(copyrightText)}</p> <div class="mt-4 flex justify-center space-x-6"><!--[-->`);
    const each_array_3 = ensure_array_like(legalLinks);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let link = each_array_3[$$index_3];
      $$renderer2.push(`<a${attr("href", link.url)} class="text-[var(--color-muted)] hover:text-[var(--color-primary)]">${escape_html(link.title)}</a>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-6 flex justify-center space-x-8"><!--[-->`);
    const each_array_4 = ensure_array_like(socialLinks);
    for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
      let social = each_array_4[$$index_4];
      $$renderer2.push(`<a${attr("href", social.url)} target="_blank" rel="noopener noreferrer" class="text-[var(--color-muted)] hover:text-[var(--color-primary)]"${attr("aria-label", social.name)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path${attr("d", social.iconPath)}></path></svg></a>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></footer>`);
    bind_props($$props, {
      directories,
      currentPath,
      mainPagesTitle,
      homePageText,
      copyrightText,
      legalLinks,
      socialLinks
    });
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let globalDirectories, searchConfig, currentPath;
    let data = $$props["data"];
    globalDirectories = data.globalDirectories;
    searchConfig = data.searchConfig;
    currentPath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
    NavigationBar($$renderer2, {
      navbarItems: globalDirectories,
      showSearch: searchConfig?.enabled ?? false,
      searchPlaceholder: searchConfig?.placeholder ?? "Search..."
    });
    $$renderer2.push(`<!----> <main><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main> `);
    Footer($$renderer2, { directories: globalDirectories, currentPath });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _layout as default
};
