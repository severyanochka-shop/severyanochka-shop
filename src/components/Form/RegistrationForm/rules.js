const rulePhone = {
  required: "обязательное поле",
  minLength: {
    value: 11,
    message: "формат 89999999999",
  },
  pattern: {
    value: /[\d]/,
    message: "формат 89999999999",
  },
};

const ruleDate = {
  required: "обязательное поле",
};

const ruleLastName = {
  required: "обязательное поле",
  pattern: {
    value: /^[а-яА-Яa-zA-Z]+$/,
    message: "только буквы",
  },
};

const rulePassword = {
  required: "обязательное поле",
  pattern: {
    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
    message: "Не менее 8 букв лат. алфавита, прописные и заглавные, цифры",
  },
};
const ruleCardNumber = {
  required: false,
  maxLength: 6,
  minLength: 6,
  pattern: {
    value: /[\d]/,
    message: "пример: 123456",
  },
};

const ruleEmail = {
  required: false,
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "expample@gmail.com",
  },
};

const ruleSMS = {
  required: true,
  minLength: 4,
};

export const rules = { rulePhone, ruleDate, ruleLastName, rulePassword, ruleCardNumber, ruleEmail, ruleSMS };

