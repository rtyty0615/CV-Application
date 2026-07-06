import { Input } from "./Input.jsx";
import "./App.css";

export function Person({ data, onChange }) {
  return (
    <section className="input-list">
      <Input
        id="fullName"
        label="Full Name"
        value={data.fullName}
        onChange={onChange}
        type="text"
      />
      <Input
        id="email"
        label="Email"
        value={data.email}
        onChange={onChange}
        type="email"
      />
      <Input
        id="phoneNumber"
        label="Phone Number"
        value={data.phoneNumber}
        onChange={onChange}
        type="tel"
      />
      <Input
        id="location"
        label="Location"
        value={data.location}
        onChange={onChange}
        type="text"
      />
    </section>
  );
}
