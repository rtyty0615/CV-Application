import { Input } from "./Input.jsx";
import { TextArea } from "./Textarea.jsx";
import "./App.css";

export function ListExperience(props) {
  return (
    <ul>
      {props.data.map((experienceItem) => {
        return (
          <Experience
            key={experienceItem.id}
            data={experienceItem}
            onChange={(e) => props.onChange(e, experienceItem.id)}
            onClick={() => props.onClick(experienceItem.id)}
          />
        );
      })}
    </ul>
  );
}

function Experience({ data, onChange, onClick }) {
  return (
    <li className="input-list">
      <div className="delete-container">
        <h3>{data.company}</h3>
        <button type="button" onClick={onClick}>
          delete
        </button>
      </div>

      <Input
        id="company"
        label="Company"
        value={data.company}
        onChange={onChange}
        type="text"
      ></Input>

      <Input
        id="position"
        label="Position"
        value={data.position}
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

      <TextArea
        id="description"
        label="Description"
        value={data.description}
        onChange={onChange}
        type="text"
      ></TextArea>
    </li>
  );
}
