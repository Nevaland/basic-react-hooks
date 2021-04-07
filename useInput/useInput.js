export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    let isUpdatable = true;
    if (typeof validator === "function") {
      isUpdatable = validator(value);
    }

    if (isUpdatable) {
      const {
        target: { value },
      } = event;
      setValue(value);
    }
  };
  return { value, onChange };
};
