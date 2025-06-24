import Select from "react-select";

export default function DropdownSelect({ id, label, options, value, onChange }) {
  const handleChange = (selectedOption) => {
    onChange(id, selectedOption.value);
  };

  return (
    <div className="dropdown-select">
      <label htmlFor={id}>{label}</label>
      <Select
        inputId={id}
        options={options}
        value={options.find((opt) => opt.value === value)}
        onChange={handleChange}
      />
    </div>
  );
}
