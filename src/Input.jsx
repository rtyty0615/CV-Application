import "./App.css";

export function Input({ id, label, value, type, onChange, className = "" }) {
  return (
    <div className={className || ""}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} value={value} onChange={onChange} />
    </div>
  );
}
