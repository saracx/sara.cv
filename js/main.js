let scrollToBottom = document.querySelector("#scroll-to-bottom");
let pageBottom = document.querySelector("#footer");

scrollToBottom.addEventListener("click", function () {
  pageBottom.scrollIntoView();
});
