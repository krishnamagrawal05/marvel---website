// ===============================
// MARVEL HERO DATA
// ===============================

const heroes = {

    ironman: {
        name: "Iron Man",
        realName: "Tony Stark",
        powers: "Genius, Engineer, Powered Armor",
        team: "Avengers",
        description:
            "Tony Stark is a genius inventor who uses advanced technology to become Iron Man.",
        image: "images/ironman.png",

        stats: {
            strength: 75,
            speed: 80,
            intelligence: 100,
            durability: 85,
            combat: 90
        }
    },


    spiderman: {
        name: "Spider-Man",
        realName: "Peter Parker",
        powers: "Web-Slinging, Super Strength, Spider-Sense",
        team: "Avengers",
        description:
            "Peter Parker uses his spider abilities and strong sense of responsibility to protect others.",
        image: "images/spiderman.png",

        stats: {
            strength: 80,
            speed: 90,
            intelligence: 95,
            durability: 75,
            combat: 85
        }
    },


    thor: {
        name: "Thor",
        realName: "Thor Odinson",
        powers: "Super Strength, Lightning, Mjolnir",
        team: "Avengers",
        description:
            "Thor is the God of Thunder and one of the most powerful members of the Avengers.",
        image: "images/thor.png",

        stats: {
            strength: 100,
            speed: 85,
            intelligence: 75,
            durability: 100,
            combat: 95
        }
    },


    captainamerica: {
        name: "Captain America",
        realName: "Steve Rogers",
        powers: "Super Soldier, Shield Combat",
        team: "Avengers",
        description:
            "Steve Rogers is a super soldier and an experienced leader who fights for justice.",
        image: "images/captainamerica.png",

        stats: {
            strength: 85,
            speed: 80,
            intelligence: 85,
            durability: 90,
            combat: 100
        }
    }

};


// ===============================
// HERO DETAILS
// ===============================

function showHero(heroId) {

    const hero = heroes[heroId];

    if (!hero) {
        return;
    }


    // Hero name

    document.getElementById("hero-name").textContent =
        hero.name;


    // Hero description

    document.getElementById("hero-description").textContent =
        hero.description;


    // Hero image

    document.getElementById("hero-detail-image").src =
        hero.image;


    // Show hero information

    document.getElementById("hero-info").style.display =
        "block";


    // ================================
    // POWER STATS
    // ================================

    document.getElementById("strength-bar").style.width =
        hero.stats.strength + "%";

    document.getElementById("speed-bar").style.width =
        hero.stats.speed + "%";

    document.getElementById("intelligence-bar").style.width =
        hero.stats.intelligence + "%";

    document.getElementById("durability-bar").style.width =
        hero.stats.durability + "%";

    document.getElementById("combat-bar").style.width =
        hero.stats.combat + "%";


    // Play hero sound if the function exists

    if (typeof playHeroSound === "function") {

        playHeroSound(heroId);

    }

}


// ===============================
// CLOSE HERO DETAILS
// ===============================

function closeHero() {

    const info = document.getElementById("hero-info");

    if (info) {
        info.style.display = "none";
    }
}


// ===============================
// HERO SEARCH
// ===============================

const searchInput = document.getElementById("hero-search");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.toLowerCase();

        const heroCards = document.querySelectorAll(".hero-card");

        heroCards.forEach(function (card) {

            const heroNameElement = card.querySelector("h3");

            if (!heroNameElement) {
                return;
            }

            const heroName =
                heroNameElement.innerText.toLowerCase();

            if (heroName.includes(searchText)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ===============================
// HERO COMPARISON
// ===============================

function compareHeroes() {

    const heroOneSelect = document.getElementById("hero-one");
    const heroTwoSelect = document.getElementById("hero-two");
    const result = document.getElementById("comparison-result");

    if (!heroOneSelect || !heroTwoSelect || !result) {
        return;
    }

    const heroOneId = heroOneSelect.value;
    const heroTwoId = heroTwoSelect.value;

    if (heroOneId === "" || heroTwoId === "") {

        result.innerHTML =
            "<p>Please select two heroes to compare.</p>";

        return;
    }

    if (heroOneId === heroTwoId) {

        result.innerHTML =
            "<p>Please select two different heroes.</p>";

        return;
    }

    const heroOne = heroes[heroOneId];
    const heroTwo = heroes[heroTwoId];

    result.innerHTML = `

        <h3>${heroOne.name} VS ${heroTwo.name}</h3>

        <div class="comparison-container">

            <div class="comparison-card">

                <img src="${heroOne.image}"
                     alt="${heroOne.name}">

                <h4>${heroOne.name}</h4>

                <p>
                    <strong>Real Name:</strong><br>
                    ${heroOne.realName}
                </p>

                <p>
                    <strong>Powers:</strong><br>
                    ${heroOne.powers}
                </p>

                <p>
                    <strong>Team:</strong><br>
                    ${heroOne.team}
                </p>

                <p>
                    ${heroOne.description}
                </p>

            </div>


            <div class="comparison-card">

                <img src="${heroTwo.image}"
                     alt="${heroTwo.name}">

                <h4>${heroTwo.name}</h4>

                <p>
                    <strong>Real Name:</strong><br>
                    ${heroTwo.realName}
                </p>

                <p>
                    <strong>Powers:</strong><br>
                    ${heroTwo.powers}
                </p>

                <p>
                    <strong>Team:</strong><br>
                    ${heroTwo.team}
                </p>

                <p>
                    ${heroTwo.description}
                </p>

            </div>

        </div>
    `;
}


// ===============================
// MARVEL QUIZ
// ===============================

const quizQuestions = [

    {
        question: "Which hero uses a shield?",
        options: [
            "Iron Man",
            "Captain America",
            "Thor",
            "Spider-Man"
        ],
        answer: 1
    },

    {
        question: "Who is the God of Thunder?",
        options: [
            "Thor",
            "Iron Man",
            "Spider-Man",
            "Captain America"
        ],
        answer: 0
    },

    {
        question: "Who is also known as Peter Parker?",
        options: [
            "Thor",
            "Spider-Man",
            "Iron Man",
            "Captain America"
        ],
        answer: 1
    },

    {
        question: "Who is Tony Stark?",
        options: [
            "Thor",
            "Iron Man",
            "Spider-Man",
            "Captain America"
        ],
        answer: 1
    },

    {
        question: "Which hero is a super soldier?",
        options: [
            "Spider-Man",
            "Thor",
            "Iron Man",
            "Captain America"
        ],
        answer: 3
    }

];

let currentQuestion = 0;
let score = 0;


// ===============================
// LOAD QUIZ QUESTION
// ===============================

function loadQuestion() {

    const question = quizQuestions[currentQuestion];

    const questionElement =
        document.getElementById("question");

    const buttons =
        document.querySelectorAll("#quiz-options button");

    const result =
        document.getElementById("quiz-result");

    const nextButton =
        document.getElementById("next-button");

    if (questionElement) {
        questionElement.innerText = question.question;
    }

    buttons.forEach(function (button, index) {

        button.innerText = question.options[index];
        button.disabled = false;

    });

    if (result) {
        result.innerText = "";
    }

    if (nextButton) {
        nextButton.style.display = "none";
    }
}


// ===============================
// SELECT QUIZ ANSWER
// ===============================

function selectAnswer(selectedAnswer) {

    const question = quizQuestions[currentQuestion];

    const result =
        document.getElementById("quiz-result");

    const buttons =
        document.querySelectorAll("#quiz-options button");

    if (selectedAnswer === question.answer) {

        score++;

        if (result) {
            result.innerText = "Correct! 🎉";
        }

    } else {

        if (result) {
            result.innerText = "Wrong answer! ❌";
        }

    }

    buttons.forEach(function (button) {
        button.disabled = true;
    });

    const nextButton =
        document.getElementById("next-button");

    if (nextButton) {
        nextButton.style.display = "inline-block";
    }
}


// ===============================
// NEXT QUIZ QUESTION
// ===============================

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        loadQuestion();

    } else {

        const question =
            document.getElementById("question");

        const options =
            document.getElementById("quiz-options");

        const result =
            document.getElementById("quiz-result");

        const nextButton =
            document.getElementById("next-button");

        const restartButton =
            document.getElementById("restart-button");

        if (question) {
            question.innerText = "Quiz Complete! 🏆";
        }

        if (options) {
            options.style.display = "none";
        }

        if (nextButton) {
            nextButton.style.display = "none";
        }

        if (result) {
            result.innerText =
                "You scored " +
                score +
                " out of " +
                quizQuestions.length +
                "!";
        }

        if (restartButton) {
            restartButton.style.display = "inline-block";
        }

    }
}


// ===============================
// RESTART QUIZ
// ===============================

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    const options =
        document.getElementById("quiz-options");

    const restartButton =
        document.getElementById("restart-button");

    if (options) {
        options.style.display = "block";
    }

    if (restartButton) {
        restartButton.style.display = "none";
    }

    loadQuestion();
}


// ===============================
// DARK / LIGHT MODE
// ===============================

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const button =
        document.getElementById("theme-toggle");

    if (!button) {
        return;
    }

    if (document.body.classList.contains("light-mode")) {

        button.innerText = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");

    } else {

        button.innerText = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

    }
}


// ===============================
// LOAD SAVED THEME
// ===============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    const themeButton =
        document.getElementById("theme-toggle");

    if (themeButton) {
        themeButton.innerText = "🌙 Dark Mode";
    }
}


// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", function () {

    const loader =
        document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }

});


// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const navLinks =
        document.getElementById("nav-links");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}


// ===============================
// START QUIZ WHEN PAGE LOADS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    loadQuestion();

});
/* ================================
   MOVIE TRAILERS
================================= */

function watchTrailer(movie) {

    let trailerURL = "";

    if (movie === "ironman") {

        trailerURL =
            "https://www.youtube.com/results?search_query=Iron+Man+2008+official+trailer";

    }

    else if (movie === "avengers") {

        trailerURL =
            "https://www.youtube.com/results?search_query=The+Avengers+2012+official+trailer";

    }

    else if (movie === "thor") {

        trailerURL =
            "https://www.youtube.com/results?search_query=Thor+2011+official+trailer";

    }

    else if (movie === "spiderman") {

        trailerURL =
            "https://www.youtube.com/results?search_query=Spider-Man+Homecoming+2017+official+trailer";

    }


    window.open(trailerURL, "_blank");
}
/* ================================
   3D HERO CARD EFFECT
================================= */

const heroCards = document.querySelectorAll(".hero-card");

heroCards.forEach(function (card) {

    card.addEventListener("mousemove", function (event) {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -8;

        const rotateY =
            ((x - centerX) / centerX) * 8;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

    });


    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});
/* ================================
   HERO SOUND EFFECTS
================================= */

function playHeroSound(heroId) {

    let soundFile = "";

    if (heroId === "ironman") {
        soundFile = "sounds/ironman.wav";
    }

    else if (heroId === "spiderman") {
        soundFile = "sounds/spiderman.wav";
    }

    else if (heroId === "thor") {
        soundFile = "sounds/thor.wav";
    }

    else if (heroId === "captainamerica") {
        soundFile = "sounds/captainamerica.wav";
    }


    if (soundFile !== "") {

        const audio = new Audio(soundFile);

        audio.volume = 0.5;

        audio.play().catch(function(error) {

            console.log("Sound could not play:", error);

        });

    }

}
/* ================================
   KEYBOARD NAVIGATION
================================= */

const keyboardHeroCards =
    document.querySelectorAll(".hero-card");


keyboardHeroCards.forEach(function(card) {

    card.addEventListener("keydown", function(event) {

        // ENTER key

        if (event.key === "Enter") {

            const heroId =
                card.getAttribute("data-hero");

            showHero(heroId);

        }


        // SPACE key

        if (event.key === " ") {

            event.preventDefault();

            const heroId =
                card.getAttribute("data-hero");

            showHero(heroId);

        }

    });

});
// ================================
// 3D CUSTOM CURSOR
// ================================

const customCursor = document.getElementById("custom-cursor");


document.addEventListener("mousemove", function(event) {

    if (!customCursor) {
        return;
    }

    customCursor.style.left = event.clientX + "px";

    customCursor.style.top = event.clientY + "px";

});


// Make cursor bigger over clickable elements

const clickableElements = document.querySelectorAll(
    "button, a, .hero-card, select, input"
);


clickableElements.forEach(function(element) {

    element.addEventListener("mouseenter", function() {

        customCursor.classList.add("hover");
            if (cursorRing) {
        cursorRing.classList.add("hover");
            }
    });


    element.addEventListener("mouseleave", function() {

        customCursor.classList.remove("hover");
            if (cursorRing) {
        cursorRing.classList.remove("hover");
            }
    });

});
// ================================
// 3D CURSOR SMOOTH TRAIL
// ================================

const cursorRing =
    document.getElementById("cursor-ring");


let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


document.addEventListener("mousemove", function(event) {

    mouseX = event.clientX;
    mouseY = event.clientY;

});


function animateCursorRing() {

    ringX += (mouseX - ringX) * 0.12;

    ringY += (mouseY - ringY) * 0.12;


    if (cursorRing) {

        cursorRing.style.left =
            ringX + "px";

        cursorRing.style.top =
            ringY + "px";

    }


    requestAnimationFrame(animateCursorRing);

}


animateCursorRing();
// ================================
// MARVEL UNIVERSE MAP
// ================================

const marvelLocations = {

    newyork: {
        name: "🏙️ New York",
        description:
            "New York is home to many Marvel heroes, including Spider-Man, the Avengers and Doctor Strange."
    },

    wakanda: {
        name: "🐾 Wakanda",
        description:
            "Wakanda is a technologically advanced African nation and the home of Black Panther."
    },

    asgard: {
        name: "⚡ Asgard",
        description:
            "Asgard is the realm of Thor and the Asgardians, known for its powerful warriors and ancient magic."
    },

    "kamar-taj": {
        name: "🔮 Kamar-Taj",
        description:
            "Kamar-Taj is a mystical training ground where sorcerers learn the magical arts."
    },

    knowhere: {
        name: "🌌 Knowhere",
        description:
            "Knowhere is a massive celestial location in space and serves as a home and trading hub for many cosmic characters."
    }

};


const mapLocations =
    document.querySelectorAll(".map-location");


mapLocations.forEach(function(button) {

    button.addEventListener("click", function() {

        const locationId =
            button.getAttribute("data-location");

        const location =
            marvelLocations[locationId];


        if (!location) {
            return;
        }


        document.getElementById("location-name").textContent =
            location.name;

        document.getElementById("location-description").textContent =
            location.description;

    });

});
// ================================
// BACK TO TOP BUTTON
// ================================

const backToTop =
    document.getElementById("back-to-top");


window.addEventListener("scroll", function() {

    if (!backToTop) {
        return;
    }

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// ================================
// SCROLL ANIMATIONS
// ================================

const scrollElements =
    document.querySelectorAll(
        ".hero-card, #comparison, #quiz, #movies, #universe-map"
    );


const scrollObserver =
    new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("scroll-animate");
                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });


scrollElements.forEach(function(element) {

    element.classList.add("scroll-animate");

    scrollObserver.observe(element);

});
