import * as server from '../entries/pages/_...slug_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_...slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[...slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.Cf46E4_R.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BxZpRGZr.js","_app/immutable/chunks/zO3cv3ok.js","_app/immutable/chunks/DRSZXOO3.js","_app/immutable/chunks/BnUcYQIw.js","_app/immutable/chunks/suRaKW2y.js","_app/immutable/chunks/DUMQ0Hd-.js","_app/immutable/chunks/CFtxFtiH.js","_app/immutable/chunks/DrJqhESq.js","_app/immutable/chunks/CGKQTTBK.js","_app/immutable/chunks/CHtck05M.js","_app/immutable/chunks/C09Qb_XI.js","_app/immutable/chunks/CrrwSBEc.js","_app/immutable/chunks/ogTUtz3S.js","_app/immutable/chunks/KBeOKoo_.js"];
export const stylesheets = ["_app/immutable/assets/BlogPostLayout.Bqeu8Maf.css"];
export const fonts = [];
