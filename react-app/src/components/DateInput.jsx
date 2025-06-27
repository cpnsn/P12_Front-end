import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateInput({ id, label, selectedDate, onChange }) {
  return (
    <div className="w-[47%]">
      <label htmlFor={id}>{label}</label>
      <DatePicker
        id={id}
        selected={selectedDate}
        onChange={(date) => onChange(id, date)}
        dateFormat="MM/dd/yyyy"
        className="input outline-none rounded border border-slate-400 w-full p-2"
        placeholderText="MM/DD/YYYY"
      />
    </div>
  );
}
