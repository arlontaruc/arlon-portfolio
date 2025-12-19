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
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[directory]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"directory","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[...slug]",
				pattern: /^(?:\/([^]*))?\/?$/,
				params: [{"name":"slug","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
