import { setUploadedFileName } from "./index";

export const dragAndDrop = () => {
  const uploadInputs = document.querySelectorAll('[name="upload"]'),
        events = ["dragover", "dragleave", "dragenter", "drop"];

  events.forEach((event) => {
    uploadInputs.forEach((input) => {
      input.addEventListener(
        event,
        (e) => {
          const target = e.target;
          e.preventDefault();
          e.stopPropagation();
          switch (event) {
            case "dragenter":
              highlightDropArea(target);
              break;
            case "dragover":
              highlightDropArea(target);
              break;
            case "dragleave":
              unhighlightDropArea(target);
              break;
            case "drop":
              input.files = e.dataTransfer.files;
              setUploadedFileName(input);
              unhighlightDropArea(target);
              break;
          }
        },
        false
      );
    });
  });

  const highlightDropArea = (element) => {
    element.closest(".file_upload").style.border = "5px solid yellow";
    element.closest(".file_upload").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";
  };

  const unhighlightDropArea = (element) => {
    element.closest(".file_upload").style.border = "none";
    if (element.closest(".calc_form")) {
      element.closest(".file_upload").style.backgroundColor = "#fff";
    } else {
      element.closest(".file_upload").style.backgroundColor = "#ededed";
    }
  };
};
