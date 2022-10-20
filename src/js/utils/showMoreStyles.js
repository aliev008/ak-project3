import { getData } from "../services/requests";

export const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  btn.addEventListener("click", function (e) {
    // getData("http://localhost:3000/styles")
    getData("./assets/db.json")
      .then((res) => {
        createCards(res.styles);
        Object.keys(res).length !== 0 && this.remove();
      })
      .catch((error) => {
        const statusMessage = document.createElement("div");
        statusMessage.classList.add("status");
        document.querySelector(wrapper).append(statusMessage);

        const statusImg = document.createElement("img");
        statusImg.setAttribute("src", "assets/img/fail.png");
        statusImg.classList.add("animated", "fadeInUp");
        statusMessage.append(statusImg);

        const textMessage = document.createElement("div");
        textMessage.textContent = "Ошибка получения данных с сервера";
        statusMessage.append(textMessage);
        setTimeout(() => statusMessage.remove(), 5000);
      });
  });

  const createCards = (serverResponse) => {
    serverResponse.forEach(({ src, title, link }) => {
      const card = document.createElement("div");
      card.classList.add(
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1",
        "animated",
        "fadeInUp"
      );

      card.innerHTML = `
          <div class=styles-block>
            <img src=${src} alt="style">
            <h4>${title}</h4>
            <a href=${link}>Подробнее</a>
          </div>
      `;

      document.querySelector(wrapper).appendChild(card);
    });
  };
};
