# CV Builder

An interactive, component-driven resume generator built with React.

## Project Overview

CV Builder is a modern, single-page web application designed to help users create well-structured professional resumes quickly and efficiently. Built entirely with React and Vite, the application utilizes a modular component architecture to manage distinct resume sections such as Personal Details, Professional Experience, and Education. Users can dynamically input their information on the left column and instantly see a clean, print-ready document preview rendered in real-time on the right column.

## Key Features

- Real-Time Live Preview: A dual-pane layout connects input forms directly to a centralized state pipeline, updating the CV document preview with every single keystroke.

- Dynamic List Management: Users can add, update, or remove multiple work experience blocks and educational milestones smoothly, driven by safe state arrays and immutable list mapping.

- Component-Driven Architecture: The application features highly reusable input components, dynamic multi-field custom text areas, and decoupled layout components to ensure code maintainability.

- Interactive Panel Toggling: Forms feature an intelligent "Save" and "Edit" state mapping system using key-value object lookup to toggle view states efficiently without complex array iterations.

- Instant Optimization: A built-in functionality allowing users to load an example template instantly or clear the entire canvas to start from scratch.

## Tech Stack & Architecture

The underlying application relies heavily on modern web standards and architectural design patterns:

- React (Hooks & State Management): Employs safe asynchronous functional update paradigms, object destructuring, and array filtering mechanics to handle form data cleanly.

- JavaScript (ES6+): Deep utilization of the spread operator, implicit returns, and dynamic bracket property access.

- CSS3 & Flexbox Layouts: Structured using standard cascading stylesheets, robust parent-child specific layout selectors, and directional flexbox grids to manage form fields smoothly.

- Vite: Utilized as the fast local build tool and bundler to optimize the deployment package
