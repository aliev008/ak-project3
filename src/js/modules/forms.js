import { postData } from "../services/requests";

export const forms = () => {
  const pageForms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    checkboxInputs = document.querySelectorAll(".checkbox"),
    uploads = document.querySelectorAll('[name="upload"]');

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Наши специалисты свяжутся с Вами в ближайшее время",
    failure: "Что-то пошло не так :-(",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png",
  };

  const paths = {
    designer: "assets/server.php",
    question: "assets/questions.php",
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = "";
    });
    checkboxInputs.forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.required = true;
    });
    uploads.forEach((upload) => {
      upload.previousElementSibling.textContent = "Файл не выбран";
    });
  };

  uploads.forEach((upload) => {
    upload.addEventListener("input", () => {
      const fileFullName = upload.files[0].name.split(".");
      const fileName = fileFullName[0],
        fileType = fileFullName[1];
      const dots = fileName.length > 6 ? "..." : ".";
      upload.previousElementSibling.textContent =
        fileName.substring(0, 6) + dots + fileType;
    });
  });

  pageForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      form.parentNode.append(statusMessage);

      form.classList.add("animated", "fadeOutUp");

      setTimeout(() => {
        form.style.display = "none";
      }, 400);

      const statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusImg.classList.add("animated", "fadeInUp");
      statusMessage.append(statusImg);

      let textMessage = document.createElement("div");
      textMessage.textContent = message.loading;
      statusMessage.append(textMessage);

      const formData = new FormData(form);

      let api =
        form.closest(".popup-design") || form.classList.contains("calc_form")
          ? paths.designer
          : paths.question;

      postData(api, formData)
        .then((result) => {
          statusImg.setAttribute("src", message.ok);
          textMessage.textContent = message.success;
        })
        .catch((error) => {
          statusImg.setAttribute("src", message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          setTimeout(() => {
            statusMessage.remove();
            form.style.display = "block";
            form.classList.remove("fadeOutUp");
            form.classList.add("fadeInUp");
            clearInputs();
          }, 5000);
        });
    });
  });
};
