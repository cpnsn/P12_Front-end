import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateInput({ id, label, selectedDate, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <DatePicker
        id={id}
        selected={selectedDate}
        onChange={(date) => onChange(id, date)}
        dateFormat="MM/dd/yyyy"
        className="input"
        placeholderText="MM/DD/YYYY"
      />
    </div>
  );
}
