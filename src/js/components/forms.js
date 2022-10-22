import { validateForms } from "../functions/validate-forms";
import { contactModal, successModal } from "./modals";

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

const contactAfterForm = () => {
  successModal.openModal();
  document.body.classList.remove("loading");
};

const modalAfterForm = () => {
  contactModal.closeModal();
  successModal.openModal();
  document.body.classList.remove("loading");
};

validateForms(".contact__form", contactRules, contactAfterForm);
validateForms(".modal__form", modalRules, modalAfterForm);
