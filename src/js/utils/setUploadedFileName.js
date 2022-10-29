export const setUploadedFileName = (input) => {
  const [fileName, fileType] = input.files[0].name.split("."),
        dots = fileName.length > 6 ? "..." : ".";
  input.previousElementSibling.textContent = `${
    fileName.substring(0, 6) + dots + fileType
  }`;
};
