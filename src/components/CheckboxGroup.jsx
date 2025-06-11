function CheckboxGroup({ options = [], value = [], onChange }) {
  function handleChange(optionValue) {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  }
  return (
    <div>
      {options.map((opt) => (
        <label key={opt.value}>
          <input
            type="checkbox"
            checked={value.includes(opt.value)}
            onChange={() => handleChange(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}

export default CheckboxGroup;
