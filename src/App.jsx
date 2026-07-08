import { useState } from "react";
import "./App.css";
import { Person } from "./Person.jsx";
import { ListExperience } from "./Experience.jsx";
import { Education } from "./Education.jsx";
import { initialPersonal, initialExperience } from "./initial.jsx";
import { CVExperienceList } from "./CVExperience.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState(initialPersonal);

  const [experienceList, setExperienceList] = useState(initialExperience);

  const [education, setEducation] = useState({
    school: "New York University Abu Dhabi",
    degree: "B.A. in Film and New Media",
    startDate: "2018",
    endDate: "2022",
  });

  function handlePersonalChange(e) {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleExperienceListChange(e, id) {
    const { name, value } = e.target;
    console.log("Updating field:", name);
    console.log("With value:", value);
    console.log("For the item with ID:", id);

    setExperienceList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      }),
    );
  }

  function handleEducationChange(e) {
    const { name, value } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="app-container">
        <header className="main-header">
          <h1>CV Builder</h1>
          <div className="main-header-btn">
            <button type="button">Clear Resume</button>
            <button type="button">Load Example</button>
          </div>
        </header>
        <main>
          <section className="left-section">
            <section className="person">
              <header className="second-header">
                <h2>Personal Details</h2>
                <button type="button">Save</button>
              </header>
              <Person
                data={personalInfo}
                onChange={handlePersonalChange}
              ></Person>
            </section>
            <section className="experience">
              <header className="second-header">
                <h2>Professional Experience</h2>
                <button type="button">Save</button>
              </header>
              <button className="add-btn" type="button">
                + Add Experience
              </button>
              <ListExperience
                data={experienceList}
                onChange={handleExperienceListChange}
              ></ListExperience>
            </section>
            <section className="education">
              <header className="second-header">
                <h2>Education</h2>
                <button type="button">Save</button>
              </header>
              <button className="add-btn" type="button">
                + Add Education
              </button>
              <Education
                data={education}
                onChange={handleEducationChange}
              ></Education>
            </section>
          </section>
          <section className="right-section">
            <header className="cv-header">
              <h2>{personalInfo.fullName}</h2>
              <div>
                <p>{personalInfo.email}</p>
                <p>•</p>
                <p>{personalInfo.phoneNumber}</p>
                <p>•</p>
                <p>{personalInfo.location}</p>
              </div>
            </header>
            <section className="result">
              <h3 className="result-title">PROFESSIONAL EXPERIENCE</h3>
              <hr></hr>
              <CVExperienceList data={experienceList}></CVExperienceList>
            </section>
            <section className="result">
              <h3 className="result-title">EDUCATION</h3>
              <hr></hr>
              <div>
                <section className="content-section">
                  <p>
                    {education.startDate} - {education.endDate}
                  </p>
                  <div>
                    <h4>{education.school}</h4>
                    <h5>{education.degree}</h5>
                  </div>
                </section>
                <section className="content-section">
                  <p>2016 - 2018</p>
                  <div>
                    <h4>Community College</h4>
                    <h5>Advanced Diploma in Web Development</h5>
                  </div>
                </section>
              </div>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
