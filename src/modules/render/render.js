import { content } from "./content.js";
import { displayImage, displayText, displayTimeStamp } from "./display.js";
import { fetchSortedFiles } from "./fetch.js";

const container = document.getElementById("text-files-container");

export async function renderFiles() {
  const sortedFiles = await fetchSortedFiles(content);

  for (const fileInfo of sortedFiles) {
    const currentDate = new Date(fileInfo.lastModified);

    if (fileInfo.fileType === "TXT") {
      displayTimeStamp(currentDate, container);
      await displayText(fileInfo.file, container);
    } else if (fileInfo.fileType === "IMAGE") {
      displayTimeStamp(currentDate, container);
      await displayImage(fileInfo.file, container);
    }
  }
}

