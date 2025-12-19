export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["accretion.png","blog_thumbnail1.jpg","favicon.ico","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CrApz7JZ.js",app:"_app/immutable/entry/app.Dc-POCHS.js",imports:["_app/immutable/entry/start.CrApz7JZ.js","_app/immutable/chunks/CGKQTTBK.js","_app/immutable/chunks/DRSZXOO3.js","_app/immutable/chunks/zO3cv3ok.js","_app/immutable/chunks/CHtck05M.js","_app/immutable/entry/app.Dc-POCHS.js","_app/immutable/chunks/zO3cv3ok.js","_app/immutable/chunks/DRSZXOO3.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BnUcYQIw.js","_app/immutable/chunks/KBeOKoo_.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/__data.json","/about/","/about/__data.json","/blog/","/blog/__data.json","/docs/","/docs/__data.json","/projects/","/projects/__data.json","/blog/drag-drop-publish/","/blog/drag-drop-publish/__data.json","/docs/components/","/docs/components/__data.json","/docs/get-started/","/docs/get-started/__data.json","/docs/new-site-checklist/","/docs/new-site-checklist/__data.json","/docs/routing/","/docs/routing/__data.json","/docs/search/","/docs/search/__data.json","/docs/site-config/","/docs/site-config/__data.json","/docs/templates/","/docs/templates/__data.json","/docs/themes/","/docs/themes/__data.json","/legal/privacy-policy/","/legal/privacy-policy/__data.json","/legal/do-not-sell/","/legal/do-not-sell/__data.json","/legal/terms/","/legal/terms/__data.json","/DEVELOPMENT/","/DEVELOPMENT/__data.json","/legal/","/legal/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
