import { closeModal, showModal } from "../utils/index"

export const modals = () => {
  const bindModal = ({
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true,
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
      if (e.target === modal && closeClickOverlay) {
        closeModal(modal);
        windows.forEach((window) => {
          window.style.display = "none";
        });
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

  showModalByTime(".popup-consultation", 60000);
};
