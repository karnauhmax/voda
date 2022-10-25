import { validateForms } from "../functions/validate-forms";
import { contactModal, successModal, reviewModal } from "./modals";
const successModalText = document.querySelector(".success-modal .modal__text");

const contactRules = [
  {
    ruleSelector: ".contact__name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Введіть ваше ім’я",
      },
    ],
  },
  {
    ruleSelector: ".contact__phone",
    tel: true,
    telError: "Введіть корректний номер телефону",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Введіть ваш телефон",
      },
    ],
  },
];

const modalRules = [
  {
    ruleSelector: ".contact__name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Введіть ваше ім’я",
      },
    ],
  },
  {
    ruleSelector: ".contact__phone",
    tel: true,
    telError: "Введіть корректний номер телефону",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Введіть ваш телефон",
      },
    ],
  },
];

const reviewRules = [
  {
    ruleSelector: ".contact__name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Введіть ваше ім’я",
      },
    ],
  },
  {
    ruleSelector: ".contact__phone",
    tel: true,
    telError: "Введіть корректний номер телефону",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Введіть ваш телефон",
      },
    ],
  },

  {
    ruleSelector: ".review__area",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Введіть ваші враження будь ласка",
      },
    ],
  },
];




const contactAfterForm = () => {
  successModalText.innerHTML = `Дякуємо!
  Очікуйте дзвінка від менеджера`
  successModal.openModal();
  document.body.classList.remove("loading");
};

const modalAfterForm = () => {
  successModalText.innerHTML = `Дякуємо!
  Очікуйте дзвінка від менеджера`
  contactModal.closeModal();
  successModal.openModal();
  document.body.classList.remove("loading");
};

const reviewAfterForm = () => {
  successModalText.innerHTML = `Дякуємо!
  Ваш відгук скоро буде опублікованний`
  reviewModal.closeModal();
  successModal.openModal();
  document.body.classList.remove("loading");
}



validateForms(".contact__form", contactRules, contactAfterForm);
validateForms(".modal__form", modalRules, modalAfterForm);
validateForms(".review-form", reviewRules, reviewAfterForm);
