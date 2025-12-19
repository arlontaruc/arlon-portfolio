import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.wz1OaLVW.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BxZpRGZr.js","_app/immutable/chunks/zO3cv3ok.js","_app/immutable/chunks/suRaKW2y.js"];
export const stylesheets = ["_app/immutable/assets/2.BVjV8GP-.css"];
export const fonts = [];
