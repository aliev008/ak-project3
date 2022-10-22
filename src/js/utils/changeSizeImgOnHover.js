export const changeSizeImgOnHover = () => {
  const sizeWindows = document.querySelectorAll(".sizes-wrapper .sizes-block");

  sizeWindows.forEach((window) => {
    const imgElem = window.querySelector("img"),
      imgSrc = imgElem.src,
      [imgPath, imgType] = imgSrc.split(".");

    const newImgSrc = imgPath + "-1." + imgType;

    window.addEventListener("mouseover", () => {
      imgElem.src = newImgSrc;
      window.querySelectorAll("p:not(.sizes-hit)").forEach((element) => {
        element.style.display = "none";
      });
    });
    window.addEventListener("mouseleave", () => {
      imgElem.src = imgSrc;
      window.querySelectorAll("p").forEach((element) => {
        element.style.display = "block";
      });
    });
  });
};
