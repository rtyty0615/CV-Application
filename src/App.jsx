// import { useState } from 'react'
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>CV Builder</h1>
        <div>
          <button type="button">Clear Resume</button>
          <button type="button">Load Example</button>
        </div>
      </header>
      <main>
        <section>
          <section>
            <header>
              <h2>Personal Details</h2>
              <button type="button">Save</button>
            </header>
            <section>
              <div>
                <label for="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value="Jane Doe"
                ></input>
              </div>
              <div>
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="janedoe@example.com"
                ></input>
              </div>
              <div>
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value="(555) 123-4567"
                ></input>
              </div>
              <div>
                <label for="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value="Halifax, NS, Canada"
                ></input>
              </div>
            </section>
          </section>
          <section>
            <header>
              <h2>Professional Experience</h2>
              <button type="button">Save</button>
            </header>
            <button type="button">+ Add Experience</button>
            <section>
              <div>
                <h3>Tech Corp Inc.</h3>
                <button type="button">delete</button>
              </div>
              <div>
                <label for="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value="Tech Corp Inc."
                ></input>
              </div>
              <div>
                <label for="position">Position</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value="Senior Frontend Developer"
                ></input>
              </div>
              <div>
                <div>
                  <label for="start-date">Start Date</label>
                  <input
                    type="text"
                    id="start-date"
                    name="start-date"
                    value="2024"
                  ></input>
                </div>
                <div>
                  <label for="end-date">End Date</label>
                  <input
                    type="text"
                    id="end-date"
                    name="end-date"
                    value="Present"
                  ></input>
                </div>
              </div>
              <div>
                <label for="description">Description</label>
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
          <section>
            <header>
              <h2>Education</h2>
              <button type="button">Save</button>
            </header>
            <button type="button">+ Add Education</button>
            <section>
              <div>
                <h3>State University</h3>
                <button type="button">delete</button>
              </div>
              <div>
                <label for="school">School/ University</label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value="State University"
                ></input>
              </div>
              <div>
                <label for="degree">Degree</label>
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  value="B.S. in Computer Science"
                ></input>
              </div>
              <div>
                <div>
                  <label for="start-date">Start Date</label>
                  <input
                    type="text"
                    id="start-date"
                    name="start-date"
                    value="2018"
                  ></input>
                </div>
                <div>
                  <label for="end-date">End Date</label>
                  <input
                    type="text"
                    id="end-date"
                    name="end-date"
                    value="2022"
                  ></input>
                </div>
              </div>
              <div>
                <label for="description">Description</label>
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
        <section>
          <header>
            <h2>Full Name</h2>
            <div>
              <p>email</p>
              <p>•</p>
              <p>phone number</p>
              <p>•</p>
              <p>location</p>
            </div>
          </header>
          <section>
            <h3>PROFESSIONAL EXPERIENCE</h3>
            <div>
              <section>
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
              <section>
                <p>2022 - 2024</p>
                <div>
                  <h4>Web Solutions Ltd.</h4>
                  <h5>Frontend Developer</h5>
                  <p>
                    Built responsive user interfaces for corporate client web
                    applications. Collaborated closely with design teams to
                    translate wireframes into clean, interactive code
                    frameworks.
                  </p>
                </div>
              </section>
            </div>
          </section>
          <section>
            <h3>EDUCATION</h3>
            <div>
              <section>
                <p>2018 - 2022</p>
                <div>
                  <h4>State University</h4>
                  <h5>B.S. in Computer Science</h5>
                </div>
              </section>
              <section>
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
    </>
  );
}

export default App;
