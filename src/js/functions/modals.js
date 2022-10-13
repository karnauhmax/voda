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

    this.modalOpen.forEach((e) => {
      e.addEventListener("click", openModal);
    });

    this.modalClose.forEach((e) => {
      e.addEventListener("click", closeModal);
    });

    this.modalContainer.addEventListener("click", (e) => {
      if (e.target == this.modalWrapper) {
        closeModal();
      }
    });
  }
}

export default Modal;
