import "./App.css";

export function Input({ id, label, value, type, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} value={value} onChange={onChange} />
    </div>
  );
}
