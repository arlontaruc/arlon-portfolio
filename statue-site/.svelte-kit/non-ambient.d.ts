
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/projects" | "/[directory]" | "/[...slug]";
		RouteParams(): {
			"/[directory]": { directory: string };
			"/[...slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { directory?: string; slug?: string };
			"/about": Record<string, never>;
			"/projects": Record<string, never>;
			"/[directory]": { directory: string };
			"/[...slug]": { slug: string }
		};
		Pathname(): "/" | "/about" | "/about/" | "/projects" | "/projects/" | `/${string}` & {} | `/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/accretion.png" | "/blog_thumbnail1.jpg" | "/favicon.ico" | "/favicon.png" | "/robots.txt" | string & {};
	}
}