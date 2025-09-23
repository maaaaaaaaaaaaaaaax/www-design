export async function fetchSortedFiles(content) {
  // Content now contains metadata, so we just need to process and sort it
  const validFiles = content.filter((item) => item && item.fileType && item.fileType !== "null");

  const sortedFiles = validFiles
    .filter((file) => file.lastModified)
    .sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified))
    .concat(validFiles.filter((file) => !file.lastModified));

  return sortedFiles;
}