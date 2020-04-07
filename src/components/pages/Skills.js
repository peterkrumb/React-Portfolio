import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <section
        class="resume-section"
        id="skills"
      >
        <div class="w-100">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item">
              <i class="devicon-html5-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
            <i class="devicon-css3-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-js-square"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-sass-original"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-jquery-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-react-original-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-nodejs-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-mongodb-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-mysql-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-sequelize-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicon-github-plain-wordmark"></i>
            </li>

            <li class="list-inline-item">
              <i class="devicon-express-original-wordmark"></i>
            </li>

            <li class="list-inline-item">
              <i class="fab fa-npm"></i>
            </li>
          </ul>

          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
export default Skills;
