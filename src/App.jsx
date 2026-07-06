import { useState } from "react";
import "./App.css";
import { Person } from "./Person.jsx";
import { Experience } from "./Experience.jsx";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Ray Hsu",
    email: "ray@example.com",
    phoneNumber: "(886) 912-786-023",
    location: "Taipei, Taiwan",
  });

  const [experience, setExperience] = useState({
    company: "Tech Corp Inc.",
    position: "Senior Frontend Developer",
    startDate: "2024",
    endDate: "Present",
    description:
      "Led a team of developers to rebuild the core application dashboard. Optimized rendering performance and established clean state management patterns.",
  });

  function handlePersonalChange(e) {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleExperienceChange(e) {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    setExperience((prev) => ({
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
              <Experience
                data={experience}
                onChange={handleExperienceChange}
              ></Experience>
            </section>
            <section className="education">
              <header className="second-header">
                <h2>Education</h2>
                <button type="button">Save</button>
              </header>
              <button className="add-btn" type="button">
                + Add Education
              </button>
              <section className="input-list">
                <div className="delete-container">
                  <h3>State University</h3>
                  <button type="button">delete</button>
                </div>
                <div>
                  <label htmlFor="school">School/ University</label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value="State University"
                  ></input>
                </div>
                <div>
                  <label htmlFor="degree">Degree</label>
                  <input
                    type="text"
                    id="degree"
                    name="degree"
                    value="B.S. in Computer Science"
                  ></input>
                </div>
                <div>
                  <div className="date">
                    <label htmlFor="start-date">Start Date</label>
                    <input
                      type="text"
                      id="start-date"
                      name="start-date"
                      value="2018"
                    ></input>
                  </div>
                  <div className="date end-date">
                    <label htmlFor="end-date">End Date</label>
                    <input
                      type="text"
                      id="end-date"
                      name="end-date"
                      value="2022"
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    rows="6"
                  >
                    Led a team of developers to rebuild the core application
                    dashboard. Optimized rendering performance and established
                    clean state management patterns.
                  </textarea>
                </div>
              </section>
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
              <div>
                <section className="content-section">
                  <p>2024 - present</p>
                  <div>
                    <h4>{experience.company}</h4>
                    <h5>{experience.position}</h5>
                    <p>{experience.description}</p>
                  </div>
                </section>
                <section className="content-section">
                  <p>
                    {experience.startDate} - {experience.endDate}
                  </p>
                  <div>
                    <h4>Web Solutions Ltd.</h4>
                    <h5>Frontend Developer</h5>
                    <p>
                      {
                        "Built responsive user interfaces for corporate client web applications. Collaborated closely with design teams to translate wireframes into clean, interactive code frameworks."
                      }
                    </p>
                  </div>
                </section>
              </div>
            </section>
            <section className="result">
              <h3 className="result-title">EDUCATION</h3>
              <hr></hr>
              <div>
                <section className="content-section">
                  <p>2018 - 2022</p>
                  <div>
                    <h4>State University</h4>
                    <h5>B.S. in Computer Science</h5>
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
