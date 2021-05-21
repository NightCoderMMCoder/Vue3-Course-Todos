import { ref } from "vue";

const useValidation = (item) => {
  const errors = ref({});
  const validation = (checkValidation) => {
    let formValidate = true;
    for (let [key, value] of Object.entries(item)) {
      if (!value && checkValidation[key] !== false) {
        errors.value[key] = `Please fill ${key} fields.`;
        formValidate = false;
      }
    }
    return formValidate;
  };
  return { validation, errors };
};

export default useValidation;
