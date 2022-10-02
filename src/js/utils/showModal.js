import { closeModalByKeydown } from "./closeModal";

const scroll = calcScroll();

export const showModal = (modal) => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = `${scroll}px`;
  document.addEventListener("keydown", (e) => closeModalByKeydown(e, modal));
};

function calcScroll() {
  const div = document.createElement('div');

  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visiibility = 'hidden';

  document.body.append(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
}
