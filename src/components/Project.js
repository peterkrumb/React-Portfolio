import React from "react";

function Project() {
  return (
    <div class="project-info">
      <section>
        <h3>Case Study 1: API Project</h3>
        <p>
          My first project was designed to showcase my knowledge of APIs as well
          as basic HTML, CSS, and JavaScript concepts. Our requirements were to
          pick virtually any 2 APIs and make a website from it. The APIs would
          have to be instructor approved. My partner and I chose for this project
          to use Giphy API as well as an API for basketball stats called
          BallDontLie. Originally we set out to use Youtube to render a
          highlight reel for a player when their name was typed in the search
          bar, but we learned that in the span of time we had it might be too
          difficult since we had to set up a server, so a Gif was rendered to
          the screen instead. Going into the project we had done about 2 weeks
          learning HTML and CSS and the rest of the time mostly JavaScript
          concepts. The idea of doing an entire project was slightly
          intimidating at first, however when taking into consideration the fact
          that we could choose any concept for the project we wanted to as long
          as it met minimum requirements and also got to work with another
          person, it made it more reasonable. One of the primary challenges I
          faced on this project was how we could set the app up to search by the
          players' names when at first it appeared we could only search by id
          number. After some time mulling it over and getting advice from
          various sources, I discovered we could do 2 AJAX calls to the
          database. The first one would get the player's ID number and the
          second would plug that ID number into our next call to the database,
          as shown in the code below.
        </p>
        <br />
        <br />
        <img src={require("./images/proj1.png")} alt="code" />
        <br />
        <br />{" "}
        <p>
          This was a big win because it was one of my first big feelings of
          accomplishment. I had spent a day or two stressing and thinking about
          how we were going to get past this, and then to finally put together a
          system that worked was that rush many coders talk about. This project
          was also my first experience into what the real world might be like,
          and being randomly paired to work with someone, and just the chemisty
          you may or may not have with that person as well as the experience of
          working collaboratively to accomplish something. Until now the class
          activites were either alone or possibly with another person, but this
          was our first big project where we had to create something from
          scratch and bounce ideas off another person.
        </p>
        <span>
          Github link:{" "}
          <a
            href="https://github.com/peterkrumb/Basketball-API"
            class="git-link"
          >
            https://github.com/peterkrumb/Basketball-API
          </a>
        </span>
        <br></br>
        <span>
          Deployed link:{" "}
          <a
            href="https://admiring-heisenberg-b3de22.netlify.com/"
            class="git-link"
          >
            https://admiring-heisenberg-b3de22.netlify.com/
          </a>
        </span>
      </section>
      <br></br>
      <br></br>
      <section>
        <h3>Case Study 2: Dream Garage</h3>
        <p>
          By the time I was working on my second project I'd learned a few new
          technologies and design patterns including Node, Handlebars, MySQL and
          MVC. Using these technologies was a requirement for the second
          project, where I needed to use an API again as well as setting up my
          own database through MySQL. In brainstorming ideas the idea came up of
          making a car buying app like cars.com. We had learned that you could
          narrow the parameters of a query to an external database, and I
          figured that this would work perfectly with buying cars where you
          could specify the make, model, and year of the car as well as other
          things like color and price range, and get back all results from the
          database. There were 3 of us in the group and we all divided the work
          pretty evenly, as opposed to splitting the work up between stacks. The
          majority of my work was on the backend with Node however. Node was
          interesting to learn, because its application meant you can create an
          entire app from the back end, which is what we did using handlebars.
          <br></br>
          <br></br>
          <img src={require("./images/garage2 0.png")} alt="garagecode" />
          <br></br>
          <br></br> The code above represents one challenge we faced making the
          project that we overcame, and this was assigning a unique ID, here
          coined as "UUID", to every person who's computer visited the site.
          This was necessary because we weren't at the point of learning yet to
          implement an entire login function so this became the next step. Initially if a car was saved to a user's garage, it would persist for whoever visited it, since the cars were saved to JawsDB which is an add-on for Heroku, sort of a stand-in database. With the Unique ID, we could generate a unique passcode for each system.
        </p>
        <span>
          Github link:{" "}
          <a
            href="https://github.com/peterkrumb/My-Garage"
            class="git-link"
          >
           https://github.com/peterkrumb/My-Garage
          </a>
        </span>
        <br></br>
        <span>
          Deployed link:{" "}
          <a
            href="https://limitless-sands-05500.herokuapp.com/"
            class="git-link"
          >
           https://limitless-sands-05500.herokuapp.com/
          </a>
        </span>
      </section>
      <br></br>
      <br></br>
      <section>
        <h3>Case Study 3: Hero Box</h3>
        <p>Hero box was my final class project which I worked on with 4 other classmates, and overseen by a TA to help with points of difficulty. This project was intended to be a subscription service for Marvel comic books. It was a complete MERN full stack application, and our first project built from the ground up in React. They say React is supposed to make developers' lives easier, however when you've only been learning it for 2 weeks, it can be quite a struggle building a real world application.
          
          <br></br>
          <br></br>
          
          <br></br>
          <br></br> 
        </p>
        <span>
          Github link:{" "}
          <a
            href="https://github.com/Superb-Owls/Subscription-box"
            class="git-link"
          >
           https://github.com/Superb-Owls/Subscription-box
          </a>
        </span>
        <br></br>
        <span>
          Deployed link:{" "}
          <a
            href="https://pacific-chamber-07789.herokuapp.com/"
            class="git-link"
          >
           https://pacific-chamber-07789.herokuapp.com/
          </a>
        </span>
      </section>
    </div>
  );
}

export default Project;
