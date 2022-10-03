import { closeModal, showModal } from "../utils/index";

export const modals = () => {
  let btnPressed;

  const bindModal = ({
    triggerSelector,
    modalSelector,
    closeSelector,
    destroy = false,
  }) => {
    const triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]");

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true;

        if (destroy) {
          trigger.remove();
        }

        windows.forEach((window) => {
          closeModal(window);
        });
        showModal(modal);
      });
    });

    close.addEventListener("click", () => {
      closeModal(modal);
      windows.forEach((window) => {
        window.style.display = "none";
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal);
        windows.forEach((window) => {
          window.style.display = "none";
        });
      }
    });
  };

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      let display;
      document.querySelectorAll("[data-modal]").forEach((item) => {
        if (getComputedStyle(item).display !== "none") {
          display = "block";
        }
      });
      if (!display) {
        showModal(document.querySelector(selector));
      }
    }, time);
  };

  const openByScroll = (selector) => {
    window.addEventListener("scroll", () => {
      // ScrollHeight optimization for Browser compatibility
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      // ----

      if (
        !btnPressed &&
        window.pageYOffset + document.documentElement.clientHeight >=
          scrollHeight
      ) {
        document.querySelector(selector).click();
      }
    });
  };

  bindModal({
    triggerSelector: ".button-design",
    modalSelector: ".popup-design",
    closeSelector: ".popup-design .popup-close",
  });

  bindModal({
    triggerSelector: ".button-consultation",
    modalSelector: ".popup-consultation",
    closeSelector: ".popup-consultation .popup-close",
  });

  bindModal({
    triggerSelector: ".fixed-gift",
    modalSelector: ".popup-gift",
    closeSelector: ".popup-gift .popup-close",
    destroy: true,
  });

  // netlify

  showModalByTime(".popup-consultation", 10000);
  openByScroll(".fixed-gift");
};
