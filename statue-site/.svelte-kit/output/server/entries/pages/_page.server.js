import { g as getContentDirectories, a as getContentByDirectory } from "../../chunks/content-processor.js";
const prerender = true;
function load() {
  const directories = getContentDirectories();
  const enhancedDirectories = directories.map((directory) => {
    const directoryContent = getContentByDirectory(directory.name);
    const subpages = directoryContent.map((content) => ({
      title: content.metadata.title,
      url: content.url
    }));
    return {
      ...directory,
      subpages
    };
  });
  const rootContent = getContentByDirectory("root");
  return {
    directories: enhancedDirectories,
    rootContent
  };
}
export {
  load,
  prerender
};
