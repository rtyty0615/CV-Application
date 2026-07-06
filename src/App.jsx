import { useState } from "react";
import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Ray Hsu",
    email: "ray@example.com",
    phoneNumber: "(886) 912-786-023",
    location: "Taipei, Taiwan",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
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
            <section>
              <header className="second-header">
                <h2>Personal Details</h2>
                <button type="button">Save</button>
              </header>
              <Person data={personalInfo} onChange={handleInputChange}></Person>
            </section>
            <section className="experience">
              <header className="second-header">
                <h2>Professional Experience</h2>
                <button type="button">Save</button>
              </header>
              <button className="add-btn" type="button">
                + Add Experience
              </button>
              <section className="input-list">
                <div className="delete-container">
                  <h3>Tech Corp Inc.</h3>
                  <button type="button">delete</button>
                </div>
                <div>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value="Tech Corp Inc."
                  ></input>
                </div>
                <div>
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value="Senior Frontend Developer"
                  ></input>
                </div>
                <div>
                  <div className="date">
                    <label htmlFor="start-date">Start Date</label>
                    <input
                      type="text"
                      id="start-date"
                      name="start-date"
                      value="2024"
                    ></input>
                  </div>
                  <div className="date end-date">
                    <label htmlFor="end-date">End Date</label>
                    <input
                      type="text"
                      id="end-date"
                      name="end-date"
                      value="Present"
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
                    <h4>Tech Corp Inc.</h4>
                    <h5>Senior Frontend Developer</h5>
                    <p>
                      Led a team of developers to rebuild the core application
                      dashboard. Optimized rendering performance and established
                      clean state management patterns.
                    </p>
                  </div>
                </section>
                <section className="content-section">
                  <p>2022 - 2024</p>
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

function Person({ data, onChange }) {
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

function Input({ id, label, value, type, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} value={value} onChange={onChange} />
    </div>
  );
}

export default App;
