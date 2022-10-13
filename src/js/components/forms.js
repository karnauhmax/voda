import { validateForms } from "../functions/validate-forms";

const rules1 = [
  {
    ruleSelector: ".modal__name",
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
    ruleSelector: ".modal__phone",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Введіть ваш телефон",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

validateForms(".modal__form", rules1, afterForm);
