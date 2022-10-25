import Modal from "../functions/modals";

const contactModal = new Modal(".contact-modal", "[data-contact]");
contactModal.renderModal();
const successModal = new Modal(".success-modal");
successModal.renderModal();
const reviewModal = new Modal(".review-modal", "[data-review]");
reviewModal.renderModal();
export { Modal, contactModal, successModal, reviewModal };
