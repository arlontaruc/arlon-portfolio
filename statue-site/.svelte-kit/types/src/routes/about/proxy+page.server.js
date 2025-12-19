// @ts-nocheck
import { getContentDirectories } from 'statue-ssg/cms/content-processor';

// Ensure this page is pre-rendered as a static page
export const prerender = true;

/** */
export function load() {
  // Get content directories for navigation
  const directories = getContentDirectories();
  
  // Enhance directories with proper URLs
  const enhancedDirectories = directories.map(directory => {
    return {
      ...directory
    };
  });
  
  return {
    directories: enhancedDirectories
  };
} 