import { g as getContentDirectories, a as getContentByDirectory, s as siteConfig } from "../../chunks/content-processor.js";
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
  return {
    globalDirectories: enhancedDirectories,
    searchConfig: siteConfig.search
  };
}
export {
  load
};
