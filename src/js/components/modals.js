import Modal from "../functions/modals";

const contactModal = new Modal(".contact-modal", "[data-contact]");
contactModal.renderModal();
const successModal = new Modal(".success-modal");
successModal.renderModal();

export { Modal, contactModal, successModal };
