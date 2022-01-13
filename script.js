const pArr = Array.from(document.getElementsByTagName("p"));
const colorChangeButton = document.getElementById("color");

colorChangeButton.onclick = () => {
  pArr.forEach((p) => {
    p.style.color = "red";
  });
};
