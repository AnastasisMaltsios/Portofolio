import simon_game2 from "../src/assets/simon_game2.png";
import book_store1 from "../src/assets/book_store1.png";
import Keeper1 from "../src/assets/Keeper1.png";
import ALS1 from "../src/assets/ALS1.png";
import weather1 from "../src/assets/weather1.png"
import Portofolio from "../src/assets/Portofolio.png"


const projects = [
    {
        id: 1,
        name: "Simon Game",
        img: simon_game2,
        tech: "Javascript, HTML, CSS",
        details: "This is my first small game project with Javascript and DOM. It's a simple game of short-term memory skill. It creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. Once the user fails or the time limit runs out, the game is over."
    },
    {
        id: 2,
        name: "Keeper",
        img: Keeper1,
        tech: "ReactJS, HTML, CSS",
        details: "This is my first project using ReactJS, inspired by the online lessons from Udemy. In this one, you're able to type and add notes dynamically while also being able to delete them. You can add as many as you want and it really demonstrates the basics of React."
    },
    {
        id: 3,
        name: "Weather App",
        img: weather1,
        tech: "ReactJS, CSS, HTML, Web APIs",
        details: "This is my first project with APIs. It's a simple app where, with the help of the OpenWeather's API, you can type and search any city in the world. The output will be the name of the city that was entered, their current weather description and the temperature in celsius."
    },
    {
        id: 4,
        name: "Book Store",
        img: book_store1,
        tech: {
            frontend: "ReactJS, CSS, HTML, Javascript, Web APIs",
            backend: "PostgreSQL, NodeJS & Express"
        },
        details: "This project is also using an API, but it's slightly more complicated. Instead of just making the API request in the app, you first have to register, providing a username and a password, and then login with these credentials in order to make the request. Once logged in, you can search either by title or author."
    },
    
    {
        id: 5,
        name: "ALS Registry",
        img: ALS1,
        tech: {
            frontend: "HTML, Bootstrap, CSS, Javascript, EJS",
            backend: "MongoDB, NodeJS & Express"
        },
        details: "This is the biggest project so far i had to build in order to complete my bachelors in CS. It's a management platform for patients with ALS. It also has a register and a signup page, but this one is MongoDB for the backend. You're able to add and delete patients. Last but not least, the platform, based on the ALSFRS-R algorith, has a survey for each patient a doctor has added, where he can keep track the state of this patient, while also keeping a history of these surveys."
    },
    {
        id: 6,
        name: "Portofolio",
        img: Portofolio,
        tech: "ReactJS, CSS, HTML, Javascript",
        details: "This is my portofolio website. It helps me show a little bit of my work and create a cool project at the same time. I'll make sure to update it as soon as i make new complex projects."
    }
]

export default projects;