import React from 'react'

function Project() {
    return(
        <div class='project-info'>
             <section>
                    <h3>Case Study 1: API Project</h3>
                    <p>My first project was designed to showcase our knowledge thus far of APIs as well as basic HTML, CSS, and JavaScript concepts. Our requirements were to pick virtually any 2 APIs and make a website from it. The APIs had to be approved
                        by the instructors, and then we were on our way. We worked on this with one other partner. For this project my partner and I decided to use Giphy API as well as an API for basketball stats called BallDontLie. Originally we set
                        out to use Youtube to render a highlight reel for a player when their name was typed in the search bar, but we learned that in the span of time we had it might be too difficult since we had to set up a server, so a Gif was rendered
                        to the screen instead. Going into the project we had done about 2 weeks learning HTML and CSS and the rest of the time was mostly vanilla JavaScript concepts. The idea of doing an entire project may have been slightly intimidating
                        at first, however when taking into consideration the fact that we could choose any concept for the project we wanted to as long as it met minimum requirements and also got to work with another person, it made it more reasonable.
                        One of the primary challenges I faced on this project was how we could set the app up to search by the players' names when at first it appeared we could only search by id number. After some time mulling it over and getting advice
                        from various sources, I discovered we could do 2 AJAX calls to the database. The first one would get the player's ID number and the second would plug that ID number into our next call to the database, as shown in the code below.
                        </p>
                        <br />
                        <br />
                        <img src={require('./images/proj1.png')} alt="code"/>
                        <br />
                        <br/> <p>This was a big win because it was one of my first big feelings of accomplishment. I had spent a day or two wondering how we were going to get past this, and then to finally put together a system that worked was that rush many
                        coders talk about. This project was also my first experience into what the real world might be like, and being randomly paired to work with someone, and just the chemisty you may or may not have with that person or people as well
                        as the experience of working collaboratively to accomplish something. Until now or activites in class may have just been alone, or possibly with another person, but this was our first big project where we had to create something
                        from scratch and bounce ideas off another person.
                    </p>
                    </section>
        </div>
    )
}

export default Project