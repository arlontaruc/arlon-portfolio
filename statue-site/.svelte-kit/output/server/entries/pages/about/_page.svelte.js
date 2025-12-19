import { W as bind_props, Z as ensure_array_like, V as attr, a0 as head } from "../../../chunks/index2.js";
import { f as fallback, e as escape_html } from "../../../chunks/context.js";
/* empty css                                                           */
import { h as html } from "../../../chunks/html.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
function PageHero($$renderer, $$props) {
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  $$renderer.push(`<div class="container mx-auto px-4 pt-12 pb-4 md:pt-20 md:pb-4"><div class="max-w-4xl mx-auto text-center"><h1 class="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)]">${escape_html(title)}</h1> `);
  if (description) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<p class="text-xl text-gray-300 mb-8">${escape_html(description)}</p>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div></div>`);
  bind_props($$props, { title, description });
}
function Mission($$renderer, $$props) {
  let title = fallback($$props["title"], "Our Mission");
  let paragraph1 = fallback($$props["paragraph1"], 'At <a href="https://accretional.com" target="_blank">Accretional</a>, we believe that content creation should be simple, fast, and accessible to everyone. Our mission with Statue is to empower creators with tools that turn Markdown content into beautiful, high-performance websites without requiring deep technical knowledge.');
  let paragraph2 = fallback($$props["paragraph2"], `We're committed to maintaining open-source tools that prioritize performance, security, and user experience. Modify this component on your own site by overriding its props! <a href="https://github.com/accretional/statue/blob/main/src/lib/components/Mission.svelte" target="_blank">View the component definition here.</a>`);
  $$renderer.push(`<div class="mission-wrapper max-w-5xl mx-auto mb-20"><h2 class="text-3xl font-bold mb-10 text-center text-[var(--color-primary)]">${escape_html(title)}</h2> <div class="bg-[var(--color-card)]/50 backdrop-blur-sm border border-[var(--color-border)] p-8 rounded-xl"><p class="text-[var(--color-foreground)] text-lg leading-relaxed">${html(paragraph1)}</p> <p class="text-[var(--color-foreground)] text-lg leading-relaxed mt-4">${html(paragraph2)}</p></div></div>`);
  bind_props($$props, { title, paragraph1, paragraph2 });
}
function Team($$renderer, $$props) {
  let title = fallback($$props["title"], "Our Team");
  let teamMembers = fallback(
    $$props["teamMembers"],
    () => [
      {
        name: "Statue SSG",
        role: "Static Site Generator, Web Framework",
        initials: "🗿"
      },
      {
        name: "Markdown",
        role: "Content Format, Simple Formatting",
        initials: ".md"
      },
      {
        name: "Svelte",
        role: "General Web Framework, Custom Functionality",
        initials: ".svelte"
      }
    ],
    true
  );
  $$renderer.push(`<div class="max-w-5xl mx-auto mt-24 mb-20"><h2 class="text-3xl font-bold mb-10 text-center text-[var(--color-primary)]">${escape_html(title)}</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
  const each_array = ensure_array_like(teamMembers);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let member = each_array[$$index];
    $$renderer.push(`<div class="bg-[var(--color-card)] border border-[var(--color-border)] p-8 rounded-xl text-center hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"><div class="w-24 h-24 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto mb-4 flex items-center justify-center"><span class="text-2xl font-bold text-white">${escape_html(member.initials)}</span></div> <h3 class="text-xl font-bold text-white mb-2">${escape_html(member.name)}</h3> <p class="text-[var(--color-muted)]">${escape_html(member.role)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div>`);
  bind_props($$props, { title, teamMembers });
}
function WhyChooseUs($$renderer, $$props) {
  let title = fallback($$props["title"], "Why Choose Statue SSG");
  let features = fallback(
    $$props["features"],
    () => [
      {
        title: "Developer-Friendly",
        description: "Built on Svelte and modern web standards with developers in mind. Extend and customize with ease."
      },
      {
        title: "Blazing Fast",
        description: "Generate optimized static sites that load instantly and score high on performance metrics."
      },
      {
        title: "Content-Focused",
        description: "Focus on writing in Markdown while we handle the technical details, or customize away."
      },
      {
        title: "SEO Optimized",
        description: "Built-in SEO features to help your content rank higher in search engines."
      }
    ],
    true
  );
  $$renderer.push(`<div class="max-w-5xl mx-auto mt-24 mb-8"><h2 class="text-3xl font-bold mb-10 text-center text-[var(--color-primary)]">${escape_html(title)}</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
  const each_array = ensure_array_like(features);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let feature = each_array[$$index];
    $$renderer.push(`<div class="bg-[var(--color-card)]/50 backdrop-blur-sm border border-[var(--color-border)] p-8 rounded-xl hover:border-[var(--color-primary)] transition-all duration-300"><h3 class="text-xl font-bold text-[var(--color-primary)] mb-3">${escape_html(feature.title)}</h3> <p class="text-[var(--color-foreground)]">${escape_html(feature.description)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div>`);
  bind_props($$props, { title, features });
}
function CTA($$renderer, $$props) {
  let title = fallback($$props["title"], "Ready to get started?");
  let description = fallback($$props["description"], "Join the growing community of creators using Statue SSG");
  let primaryButtonText = fallback($$props["primaryButtonText"], "Explore Features");
  let primaryButtonLink = fallback($$props["primaryButtonLink"], "/");
  let secondaryButtonText = fallback($$props["secondaryButtonText"], "Read Documentation");
  let secondaryButtonLink = fallback($$props["secondaryButtonLink"], "/docs");
  $$renderer.push(`<div class="max-w-3xl mx-auto mt-24 text-center"><h2 class="text-3xl font-bold mb-6 text-[var(--color-primary)]">${escape_html(title)}</h2> <p class="text-xl text-[var(--color-foreground)] mb-8">${escape_html(description)}</p> <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"><a${attr("href", primaryButtonLink)} class="bg-[var(--color-primary)] hover:brightness-110 text-[var(--color-on-primary)] font-bold px-6 py-3 rounded-lg transition-all">${escape_html(primaryButtonText)}</a> <a${attr("href", secondaryButtonLink)} class="bg-transparent border border-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 text-[var(--color-primary)] font-bold px-6 py-3 rounded-lg transition-all">${escape_html(secondaryButtonText)}</a></div></div>`);
  bind_props($$props, {
    title,
    description,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    data.directories;
    head("cwls5q", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>About Your Site</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Learn about your Site, and how it was created."/>`);
    });
    $$renderer2.push(`<div class="min-h-screen text-white bg-gradient-to-b from-[var(--color-hero-from)] via-[var(--color-hero-via)] to-[var(--color-hero-to)]">`);
    PageHero($$renderer2, {
      title: "About Your Statue Static Site",
      description: "Customize your Statue about page at src/routes/about/+page.svelte"
    });
    $$renderer2.push(`<!----> <div class="container mx-auto px-4 pb-32"><div class="text-center mb-16"><img src="/favicon.png" alt="Statue Logo" class="w-64 h-64 mx-auto mb-8"/> <p class="text-lg mb-4">Statue is an <a href="https://github.com/accretional/statue" target="_blank" class="underline hover:text-blue-300 transition-colors">open source</a> static site generator brought to you by <a href="https://accretional.com" target="_blank" class="underline hover:text-blue-300 transition-colors">Accretional</a>, a developer tools company.</p> <p class="text-lg">Make this site yours with the components below!</p></div> `);
    Mission($$renderer2, {});
    $$renderer2.push(`<!----> `);
    Team($$renderer2, {});
    $$renderer2.push(`<!----> `);
    WhyChooseUs($$renderer2, {});
    $$renderer2.push(`<!----> `);
    CTA($$renderer2, {});
    $$renderer2.push(`<!----></div></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
