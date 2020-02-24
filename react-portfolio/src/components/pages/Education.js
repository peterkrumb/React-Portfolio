import React from 'react'

class Education extends React.Component {
    render() {
        return(
            <div>
                <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div class="w-100">
        <h2 class="mb-5">Education</h2>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">University of Denver</h3>

          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">August 2013 - May 2014</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div class="resume-content">
            <h3 class="mb-0">Northwestern University</h3>
            <div class="subheading mb-3">Full Stack Web Developer Bootcamp</div>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">December 2019 - March 2020</span>
          </div>
        </div>

      </div>
    </section>
            </div>
        )
    }
}

export default Education;


