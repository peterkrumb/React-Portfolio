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
                Greetings! Welcome to my world of web development, where passion meets innovation. I am thrilled to share my journey with you.

With an insatiable curiosity for cutting-edge technologies, I find myself continuously captivated by the dynamic world of web development. Armed with a diverse range of programming languages, I strive to create seamless online experiences that push boundaries and captivate users.

One field that particularly excites me is artificial intelligence (AI). The prospect of blending AI with web development opens up limitless possibilities for creating intelligent and adaptive applications. This intersection fascinates me as I explore new ways to bridge the gap between human interaction and advanced technology.

Crafting visually appealing and functional websites is not just a profession for me; it is my passion. Each project I undertake is an opportunity to transform ideas into reality, with user-centered design at the forefront. I am driven by the joy of making a positive impact on users' lives through intuitive interfaces and seamless functionality.

In this space, you will find a showcase of my expertise in responsive web design, efficient backend development, and effective database management. Each project is a testament to my commitment and attention to detail, tailored to meet the unique needs and goals of clients.
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
