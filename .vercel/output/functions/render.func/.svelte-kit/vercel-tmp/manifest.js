export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/favicon.ico","images/logo.png"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-44b15d32.js","imports":["_app/immutable/start-44b15d32.js","_app/immutable/chunks/index-bd13077e.js","_app/immutable/chunks/singletons-0076b5b2.js","_app/immutable/chunks/parse-b67c4dc9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/(auth)/signin",
				pattern: /^\/signin\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(auth)/signout",
				pattern: /^\/signout\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(auth)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(protected)/snippets",
				pattern: /^\/snippets\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(protected)/snippets/create",
				pattern: /^\/snippets\/create\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(protected)/snippets/[id]",
				pattern: /^\/snippets\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
