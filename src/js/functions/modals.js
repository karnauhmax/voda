class Modal {
  constructor(modalContainer, modalOpen) {
    this.modalContainer = document.querySelector(modalContainer);
    this.modalOpen = document.querySelectorAll(modalOpen);
    this.modalClose = document.querySelectorAll("[data-modal-close]");
    this.modalWrapper = this.modalContainer.querySelector(".modal__inner");
  }

  renderModal() {
    const openModal = () => {
      this.modalContainer.classList.add("modal__active");
      document.body.classList.add("locked");
    };

    const closeModal = () => {
      this.modalContainer.classList.remove("modal__active");
      document.body.classList.remove("locked");
    };

    if (this.modalOpen) {
      this.modalOpen.forEach((e) => {
        e.addEventListener("click", openModal);
      });
    }

    if (this.modalClose) {
      this.modalClose.forEach((e) => {
        e.addEventListener("click", closeModal);
      });
    }

    this.modalContainer.addEventListener("click", (e) => {
      if (e.target == this.modalWrapper || e.target.code === "ESCAPE") {
        closeModal();
      }
    });
  }

  closeModal() {
    this.modalContainer.classList.remove("modal__active");
  }

  openModal() {
    this.modalContainer.classList.add("modal__active");
  }
}

export default Modal;
