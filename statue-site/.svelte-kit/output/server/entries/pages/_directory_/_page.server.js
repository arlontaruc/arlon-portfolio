import { g as getContentDirectories, a as getContentByDirectory, d as getSubDirectories, c as getSidebarTree } from "../../../chunks/content-processor.js";
const prerender = true;
function load({ params }) {
  const directoryName = params.directory;
  const directories = getContentDirectories();
  const directoryContent = getContentByDirectory(directoryName);
  const subDirectories = getSubDirectories(directoryName);
  const currentDirectory = directories.find((dir) => dir.name === directoryName) || {
    name: directoryName,
    title: directoryName.charAt(0).toUpperCase() + directoryName.slice(1)
  };
  const sidebarItems = directoryName === "docs" ? getSidebarTree(directoryName) : [];
  return {
    directories,
    directoryContent,
    subDirectories,
    currentDirectory,
    sidebarItems
  };
}
export {
  load,
  prerender
};
