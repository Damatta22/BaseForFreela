const form = document.querySelector(".form-contact");
const maskForm = document.querySelector(".mask-form");

function showForm() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  maskForm.style.visibility = "visible";
}

function hiddenForm() {
  form.style.left = "-300%";
  form.style.transform = "translateX(0%)";
  maskForm.style.visibility = "hidden";
}
