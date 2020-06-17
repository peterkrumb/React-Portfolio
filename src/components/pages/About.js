import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="text">
              <h1 class="bio-header">
                Peter
                <span class="text-primary"> Krumb</span>
              </h1>
              <div class="subheading mb-5">
                Oak Park, IL 60302 · (708) 646-3556 ·
                <a href="mailto:petekrumb@gmail.com">petekrumb@gmail.com</a>
              </div>
              <section id="main-bio">
                <p>
                  My name is Peter Krumb, and I am a software developer and
                  graduate of Northwestern University's Full Stack web
                  development bootcamp. My development skills include the basics
                  such as HTML, CSS, and JavaScript but also expand to more
                  extensive parts of JavaScript such as Node and React. My
                  background is in the hospitality industry, however currently
                  I'm working to break into tech industry as I see much
                  potential for growth, opportunities, and learning in general.
                  I love a challenge and this bootcamp has re-acquainted me with
                  the learning process again.{" "}
                </p>
              </section>
              <div class="social-icons">
                <a href="http://www.linkedin.com/in/peter-krumb-0969a49a">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/peterkrumb">
                  <i class="fab fa-github"></i>
                </a>
                <a href="http://www.facebook.com/krumbdiggity">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
