function fetchFileInfo(file) {
  return fetch(file, { method: "HEAD" })
    .then((response) => {
      const lastModified = response.headers.get("Last-Modified");
      const fileExtension = file.split(".").pop().toLowerCase();
      const imageExtensions = [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "webp",
        "svg",
        "bmp",
      ];

      let fileType;
      if (fileExtension === "txt") {
        fileType = "TXT";
      } else if (imageExtensions.includes(fileExtension)) {
        fileType = "IMAGE";
      } else {
        fileType = null;
      }

      return {
        lastModified: lastModified ? new Date(lastModified) : null,
        fileType,
        file,
      };
    })
    .catch((err) => {
      console.error(`Error fetching ${file}:`, err);
      return null;
    });
}

export async function fetchSortedFiles(content) {
  const fileInfoPromises = content.map((file) => fetchFileInfo(file));

  const fileInfos = await Promise.all(fileInfoPromises);
  const validFiles = fileInfos.filter((info) => info && info.fileType);

  const sortedFiles = validFiles
    .filter((file) => file.lastModified)
    .sort((a, b) => b.lastModified - a.lastModified)
    .concat(validFiles.filter((file) => !file.lastModified));

  return sortedFiles;
}