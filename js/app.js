window.addEventListener("DOMContentLoaded", () => {
  const chevronUp = document.querySelector(".chevronUp");
  const toggleBtn = document.querySelector("i.fa-bars");
  // const animation = document.getElementById("animation-id");
  const navbar = document.querySelector(".navbar");
  const body = document.querySelector(".body");
  // const slide = document.querySelectorAll(".img-collection");
  // slide.forEach(function (item, index, array) {
  //   console.log(item, index);
  //   item.style.left = index * 100 + "%";
  // });
  const checking = document.querySelector(".checking");
  const checkingItems = document.querySelectorAll(".checking-item");
  checkingItems.forEach(function (item, index) {
    let c = 0;
    setInterval(() => {
      let newIndex;
      if (c >= checkingItems.length) {
        c = 0;
        newIndex = index - c;
      } else {
        newIndex = index - c;
        c++;
      }
      if (newIndex > 0) {
        newIndex = -newIndex;
      }
      item.style.left = newIndex * 100 + "%";
    }, 3000);
  });

  const screenwidth = window.innerWidth;
  // console.log(screenwidth);
  // console.log(animation);
  // const static = document.querySelector(".img-collection");
  // console.log(static);
  toggleBtn.addEventListener("click", (e) => {
    navbar.classList.toggle("shownavbar");
    console.log(navbar.classList);
    const screenwidth = window.innerWidth;
    if (navbar.classList.contains("shownavbar") && screenwidth <= 820) {
      // e.target.classList.remove("fa-bars");
    }
  });
  body.addEventListener("click", (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;
    const screenwidth = window.innerWidth;
    const clickElement = e.target.classList;
    // console.log(e.target.classList);
    // console.log(clickY);
    if (
      screenwidth <= 820 &&
      clickX > 300 &&
      clickY >= 100 &&
      clickElement !== "toggleBtn"
    ) {
      navbar.classList.remove("shownavbar");
    }
  });
  window.addEventListener("scroll", () => {
    const scrollHeight = scrollY;
    // console.log(scrollY);
    if (scrollHeight <= 250) {
      chevronUp.style.display = "none";
    } else {
      chevronUp.style.display = "flex";
    }
  });
  chevronUp.addEventListener("click", (e) => {
    const clickY = e.clientY;
    console.log(clickY);
    if (clickY >= 140) {
      e.clientY = "10";
    }
  });
});
