import * as server from '../entries/pages/about/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about/+page.server.js";
export const imports = ["_app/immutable/nodes/5.DUUPVjql.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BxZpRGZr.js","_app/immutable/chunks/zO3cv3ok.js","_app/immutable/chunks/suRaKW2y.js","_app/immutable/chunks/CFtxFtiH.js","_app/immutable/chunks/BnUcYQIw.js","_app/immutable/chunks/DRSZXOO3.js","_app/immutable/chunks/C09Qb_XI.js","_app/immutable/chunks/DUMQ0Hd-.js","_app/immutable/chunks/CHtck05M.js"];
export const stylesheets = ["_app/immutable/assets/BlogPostLayout.Bqeu8Maf.css","_app/immutable/assets/5.tn0RQdqM.css"];
export const fonts = [];
