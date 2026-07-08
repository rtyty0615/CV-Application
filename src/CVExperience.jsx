export function CVExperienceList(props) {
  return (
    <ul>
      {props.data.map((experienceItem) => {
        return <CVExperience key={experienceItem.id} data={experienceItem} />;
      })}
    </ul>
  );
}

function CVExperience({ data }) {
  return (
    <li className="content-section">
      <p>
        {data.startDate} - {data.endDate}
      </p>
      <div>
        <h4>{data.company}</h4>
        <h5>{data.position}</h5>
        <p>{data.description}</p>
      </div>
    </li>
  );
}
