import { useState } from "react";
import "./App.css";
import { Person } from "./Person.jsx";
import { ListExperience } from "./Experience.jsx";
import { ListEducation } from "./Education.jsx";
import {
  initialPersonal,
  initialExperience,
  initialEducation,
  initalStatus,
} from "./Initial.jsx";
import { clearPersonal, clearExperience, clearEducation } from "./Clear.jsx";
import { CVExperienceList } from "./CVExperience.jsx";
import { CVEducationList } from "./CVEducation.jsx";

function App() {
  const [editStatus, setEdit] = useState(initalStatus);

  function handleEditClick(e) {
    const { name } = e.target;
    setEdit((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }

  const [personalInfo, setPersonalInfo] = useState(initialPersonal);
  const [experienceList, setExperienceList] = useState(initialExperience);
  const [educationList, setEducationList] = useState(initialEducation);

  function handleExampleClick() {
    setPersonalInfo(initialPersonal);
    setExperienceList(initialExperience);
    setEducationList(initialEducation);
  }

  function handleClearClick() {
    setPersonalInfo(clearPersonal);
    setExperienceList(clearExperience);
    setEducationList(clearEducation);
  }

  function handleAddExClick() {
    setExperienceList((prev) => [
      ...prev,
      { ...clearExperience[0], id: crypto.randomUUID() },
    ]);
  }

  function handleAddEdClick() {
    setEducationList((prev) => [
      ...prev,
      { ...clearEducation[0], id: crypto.randomUUID() },
    ]);
  }

  function handlePersonalChange(e) {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleExperienceListChange(e, id) {
    const { name, value } = e.target;
    setExperienceList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      }),
    );
  }
  function handleEducationListChange(e, id) {
    const { name, value } = e.target;
    setEducationList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      }),
    );
  }

  return (
    <>
      <div className="app-container">
        <header className="main-header">
          <h1>CV Builder</h1>
          <div className="main-header-btn">
            <button type="button" onClick={handleClearClick}>
              Clear Resume
            </button>
            <button type="button" onClick={handleExampleClick}>
              Load Example
            </button>
          </div>
        </header>
        <main>
          <section className="left-section">
            <section className="person">
              <header className="second-header">
                <h2>Personal Details</h2>
                <button type="button" onClick={handleEditClick} name="personal">
                  {editStatus.personal ? "Save" : "Edit"}
                </button>
              </header>
              {editStatus.personal && (
                <Person
                  data={personalInfo}
                  onChange={handlePersonalChange}
                ></Person>
              )}
            </section>
            <section className="experience">
              <header className="second-header">
                <h2>Professional Experience</h2>
                <button
                  type="button"
                  onClick={handleEditClick}
                  name="experience"
                >
                  {editStatus.experience ? "Save" : "Edit"}
                </button>
              </header>
              {editStatus.experience && (
                <>
                  <button
                    className="add-btn"
                    type="button"
                    onClick={handleAddExClick}
                  >
                    + Add Experience
                  </button>
                  <ListExperience
                    data={experienceList}
                    onChange={handleExperienceListChange}
                  ></ListExperience>
                </>
              )}
            </section>
            <section className="education">
              <header className="second-header">
                <h2>Education</h2>
                <button
                  type="button"
                  onClick={handleEditClick}
                  name="education"
                >
                  {editStatus.education ? "Save" : "Edit"}
                </button>
              </header>
              {editStatus.education && (
                <>
                  <button
                    className="add-btn"
                    type="button"
                    onClick={handleAddEdClick}
                  >
                    + Add Education
                  </button>
                  <ListEducation
                    data={educationList}
                    onChange={handleEducationListChange}
                  ></ListEducation>
                </>
              )}
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
              <CVEducationList data={educationList}></CVEducationList>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
