import "./App.css";

export function TextArea({ id, label, value, type, onChange, className = "" }) {
  return (
    <div className={className || ""}>
      <label htmlFor={id}>{label}</label>
      <textarea
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        rows="6"
      />
    </div>
  );
}
