export const smoothScroll = (elemSelector) => {
  const elem = document.querySelector(elemSelector),
    rootDocument = document.documentElement,
    body = document.body;

  elem.addEventListener("click", function (e) {
    const scrollTop = Math.round(rootDocument.scrollTop || body.scrollTop);

    if (this.hash !== "") {
      e.preventDefault();
      let targetElem = document.querySelector(this.hash),
        targetElemScroll = 0;
        
      while (targetElem.offsetParent) {
        targetElemScroll += targetElem.offsetTop;
        targetElem = targetElem.offsetParent;
      }

      targetElemScroll = Math.round(targetElemScroll);
      scrolling(scrollTop, targetElemScroll, this.hash);
    }
  });

  const scrolling = (start, end, hash) => {
    let timeInterval = 1,
      prevScrollTop,
      speed = start > end ? -30 : 30;

    const action = setInterval(() => {
      let scrollTop = Math.round(rootDocument.scrollTop || body.scrollTop);
      if (
        prevScrollTop === scrollTop ||
        (end > start && scrollTop >= end) ||
        (end < start && scrollTop <= end)
      ) {
        clearInterval(action);
        history.replaceState(
          history.state,
          document.title,
          location.href.replace(/#.*$/g, "") + hash
        );
      } else {
        body.scrollTop += speed;
        rootDocument.scrollTop = rootDocument.scrollTop + speed;
        prevScrollTop = scrollTop;
      }
    }, timeInterval);
  };
};
