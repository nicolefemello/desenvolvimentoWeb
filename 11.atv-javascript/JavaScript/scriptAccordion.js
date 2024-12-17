document.querySelectorAll("h2").forEach((element) => {
  element.addEventListener("click", function () {
    let text = this.parentNode.querySelector("p").style.display;
    let icon = this.parentNode.querySelector("i").style.transform;

    if (text == "block") {
      text = this.parentNode.querySelector("p").style.display = "none";
      icon = this.parentNode.querySelector("i").style.transform = "rotate(180deg)";
    } else {
      text = this.parentNode.querySelector("p").style.display = "block";
      icon = this.parentNode.querySelector("i").style.transform = "rotate(0deg)";
    }
  });
});
