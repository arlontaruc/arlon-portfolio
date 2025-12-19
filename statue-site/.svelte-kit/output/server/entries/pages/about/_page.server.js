import { g as getContentDirectories } from "../../../chunks/content-processor.js";
const prerender = true;
function load() {
  const directories = getContentDirectories();
  const enhancedDirectories = directories.map((directory) => {
    return {
      ...directory
    };
  });
  return {
    directories: enhancedDirectories
  };
}
export {
  load,
  prerender
};
