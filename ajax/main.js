var inpt = document.querySelector("input");
btn.addEventListener("click", () => {
  console.log(1);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "text.txt");
  xhr.send();
  xhr.addEventListener("load", () => {
    console.log("ответ получен");
    inpt.value = xhr.responseText;
  });
});
