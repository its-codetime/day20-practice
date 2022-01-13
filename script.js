// task 1
const pArr = Array.from(document.getElementsByTagName("p"));
const colorChangeButton = document.getElementById("color");

colorChangeButton.onclick = () => {
  pArr.forEach((p) => {
    p.style.color = "red";
  });
};

// task 2
const heading = document.getElementById("heading");
const changeContent = document.getElementById("content");

changeContent.onclick = () => {
  heading.innerHTML = "My content just changed";
};

// task 3
const testP = document.getElementById("test");
const changeFontsize = document.getElementById("fontsize");

changeFontsize.onclick = () => {
  testP.style.fontSize = "30px";
};

// task 4
const vanish = document.getElementById("vanish");
vanish.onclick = () => {
  vanish.style.display = "none";
};

const tableBody = document.getElementById("tableBody");
const tableB = document.getElementById("tableB");

tableB.onclick = () => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  td1.textContent = "cell-1";
  td2.textContent = "cell-2";
  tr.appendChild(td1);
  tr.appendChild(td2);
  tableBody.appendChild(tr);
};
