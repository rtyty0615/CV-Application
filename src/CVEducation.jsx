export function CVEducationList(props) {
  return (
    <ul>
      {props.data.map((educationItem) => {
        return <CVEducation key={educationItem.id} data={educationItem} />;
      })}
    </ul>
  );
}

function CVEducation({ data }) {
  return (
    <li className="content-section">
      <p>
        {data.startDate} - {data.endDate}
      </p>
      <div>
        <h4>{data.school}</h4>
        <h5>{data.degree}</h5>
      </div>
    </li>
  );
}
