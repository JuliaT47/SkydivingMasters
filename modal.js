const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelectorAll(".modal-button-open");
console.log("Modal open button:", modalBtnOpen);
const modalBtnClose = document.querySelector(".modal-button-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.forEach((button) => {
  button.addEventListener("click", toggleModal);
});
modalBtnClose.addEventListener("click", toggleModal);
