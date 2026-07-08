import { Input } from "./Input.jsx";
import "./App.css";

export function ListEducation(props) {
  return (
    <ul>
      {props.data.map((educationItem) => {
        return (
          <Education
            key={educationItem.id}
            data={educationItem}
            onChange={(e) => props.onChange(e, educationItem.id)}
          />
        );
      })}
    </ul>
  );
}

function Education({ data, onChange }) {
  return (
    <section className="input-list">
      <div className="delete-container">
        <h3>{data.school}</h3>
        <button type="button">delete</button>
      </div>

      <Input
        id="school"
        label="School/ University"
        value={data.school}
        onChange={onChange}
        type="text"
      ></Input>

      <Input
        id="degree"
        label="Degree"
        value={data.degree}
        onChange={onChange}
        type="text"
      ></Input>

      <div className="date-row">
        <Input
          id="startDate"
          label="Start Date"
          value={data.startDate}
          onChange={onChange}
          type="text"
          className="date"
        ></Input>

        <Input
          id="endDate"
          label="End Date"
          value={data.endDate}
          onChange={onChange}
          type="text"
          className="date end-date"
        ></Input>
      </div>
    </section>
  );
}
