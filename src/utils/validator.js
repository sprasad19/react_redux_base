const isMobile = (value, message) => {
  // let regex = /^(\d{10})$/;
  // let regex = /[^\d]/g;
  // let regex = /^(\+?\d{1,9}\s*)/;
  // let regex = /^(?:(?:\+|d{0,4})(\s*[-]\s*)?|[0]?)?\d$/;
  let regex = /((\+?\d+?(\s\(0\)\s|\s0\s|\s)?)|0)\d+(\s)?\d+?(\d+(\s)?\d+)/g;
  if (!value) return `${message ? message : "Field"} is Required`;
  // if (value === "") return "Mobile number is required";
  if (!regex.test(value))
    return `Please provide a ${message ? message : "valid mobile number"}`;
  return null;
};
const isEmail = (value, message) => {
  let regex = /^\S+@\S+\.\S+/;
  if (!value) return `${message ? message : "Field"} is Required`;
  if (!regex.test(value))
    return `Please provide a valid ${message ? message : "email address"}`;
  return null;
};
const stringType = (value, message) => {
  let regex = /^[a-zA-Z ]+$/;
  if (!value) return `${message ? message : "Field"} is required`;
  if (!regex.test(value))
    return `Please provide a valid ${message ? message : "value"}`;
  return null;
};
const isSelectEmpty = (value, message) => {
  // let regex = /^[a-zA-Z ]+$/;
  if (!value) return `${message ? message : "Field"} is required`;
  // if (!regex.test(value)) return `Please provide a valid ${name ? name : "value"}`;
  return null;
};

const isZipCode = (value, message) => {
  // let regex = /^(\d{6})$/;
  let regex = /^[a-z0-9 ]+$/i;

  if (!value) return `${message ? message : "Field"} is required`;
  if (!regex.test(value))
    return `Please provide a valid ${message ? message : "value"}`;
  return null;
};

const isDate = (value, message) => {
  let regex = /^\d{2}-\d{2}-\d{4}$/;
  if (!value) return `${message ? message : "Field"} is required`;
  if (!regex.test(value))
    return `Please provide a valid ${message ? message : "value"}`;
  return null;
};
const addressValidator = (value, message) => {
  let regex = /^[a-zA-Z0-9\s,'-]*$/;

  if (!value) return `${message ? message : "Field"} is required`;
  if (!regex.test(value))
    return `Please provide a valid ${message ? message : "value"}`;
  return null;
};
const commentValidator = (value, message) => {
  // let regex = /^\w+$/;
  let regex = /[\s\S]*/;

  if (!value) return `${message ? message : "Field"} is required`;
  if (!regex.test(value))
    return `Please provide a valid ${message ? message : "value"}`;
  return null;
};

const frsNumberValidator = (value, message) => {
  let regex = /^[0-9a-zA-Z]+$/;

  if (!value) return `${message ? message : "Field"} is required`;
  if (!regex.test(value))
    return `Please provide a valid ${message ? message : "value"}`;
  return null;
};
const cusNumberValidator = (value, message) => {
  let regex = /^[0-9]+$/;
  if (!value) return `${message ? message : "Field"} is required`;
  if (!regex.test(value))
    return `Please provide a valid ${message ? message : "value"}`;
  return null;
};

const passwordValidator = (value, message) => {
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!value) return `${message ? message : "Field"} are required`;
  if (!regex.test(value))
    return `Please provide a valid ${message ? message : "value"}`;
  return null;
}

const referenceNumberValidator = (value, message) => {
  let regex = /^[0-9a-zA-Z-/*]+$/;

  if (!value) return `${message ? message : "Field"} is required`;
  if (!regex.test(value)) return `Please provide a valid ${message ? message : "value"}`;
  return null;
}

const panCardValidator = (value, message) => {
  let regex = /[a-zA-Z]{3}[aAbBcCfFgGhHlLjJpPtTfF]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}/;
  if (!value) return `${message ? message : "Field"} is required`;
  if (!regex.test(value)) return `Please provide a valid ${message ? message : "value"}`;
  return null;
}

const aadharCardValidator = (value, message) => {
  let regex = /^(\d{12})$/;
  // if (!value) return `${message ? message : "Field"} is required`;
  if (!regex.test(value)) return `Please provide a valid ${message ? message : "value"}`;
  return null;
}

const educationFieldValidator = (value, message) => {
  let regex = /^[a-zA-Z., ]*$/;
  if (!value) return `${message ? message : "Field"} is required`;
  if (!regex.test(value)) return `Please provide a valid ${message ? message : "value"}`;
  return null;
}

const gradeValidator = (value, message) => {
  let regex = /^[0-9a-zA-Z- ]+$/;

  if (!value) return `${message ? message : "Field"} is required`;
  if (!regex.test(value)) return `Please provide a valid ${message ? message : "value"}`;
  return null;
}

const yearValidator = (value, message) => {
  let regex = /^(\d{4})$/;
  if (!value) return `${message ? message : "Field"} is required`;
  if (!regex.test(value)) return `Please provide a valid ${message ? message : "value"}`;
  return null;
}


export { isMobile, isEmail, stringType, isSelectEmpty, cusNumberValidator, isZipCode, isDate, addressValidator, commentValidator, frsNumberValidator, passwordValidator, referenceNumberValidator, panCardValidator, aadharCardValidator, educationFieldValidator, gradeValidator, yearValidator };
