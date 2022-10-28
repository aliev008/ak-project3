export const smoothScroll = (elemSelector) => {
  const elem = document.querySelector(elemSelector);


  elem.addEventListener('click', function (e) {
    const destination = document.querySelector(this.hash);
    e.preventDefault();
    destination.scrollIntoView({behavior: 'smooth'});
    console.log(destination);
  })
};
