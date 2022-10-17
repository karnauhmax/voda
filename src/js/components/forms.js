import { validateForms } from "../functions/validate-forms";

const rules1 = [
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

validateForms(".main-form", rules1, afterForm);
