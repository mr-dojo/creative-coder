const projectsList = [
  {
    projectName: "Authentic",
    githubLink: "https://github.com/mr-dojo/ifeelthat-app",
    liveLink: "https://beauthentic.app/",
    description:
      "A place to identify ones emotions and express them in a healthy way. This guides the user through a process of mindfulness and introspection. After identifying the emotion they are feeling, they can hear/read stories of others experiencing that emotion. Then they are given the chance to express that emotion either in text or audio.",
    image: {
      path: "images/authentic-screenshot.JPG",
      altText: "Screenshot of Authentic app",
    },
    frontendTech: ["React.js", "JavaScript ES6", "CSS3", "HTML5", "Jest"],
    backendTech: ["Node.js", "Express.js", "PostgreSQL", "Mocha/Chai"],
  },
  {
    projectName: "Artlist",
    githubLink: "https://github.com/mr-dojo/artlist-app",
    liveLink: "https://artlist-app.now.sh/",
    description:
      "Artlist is a way for artists to organize their work. This app allows you to create custom lists of art for yourself and clients. Organize and sort your list with filters that include everything from medium of the piece to its current location.",
    image: {
      path: "images/artlist-screenshot.JPG",
      altText: "Screenshot of Artlist app",
    },
    frontendTech: ["JavaScript ES6", "React.js", "HTML5", "CSS3", "Jest"],
    backendTech: ["Node.js", "Express.js", "PostgreSQL", "Mocha/Chai"],
  },
  {
    projectName: "Balanced News",
    githubLink: "https://github.com/mr-dojo/point-of-view",
    liveLink: "https://mr-dojo.github.io/point-of-view/",
    description:
      "This single-page news app uses the News API to find articles from over 30,000 news sources and blogs; then utilize Google's Cloud Natural Language API to analyze the description and article preview. The app then decides if the author may have had bias while writing the article.",
    image: {
      path: "images/BalancedNewsApp1.jpg",
      altText: "Balanced News screenshot",
    },
    frontendTech: [
      "JavaScript ES6",
      "HTML5",
      "CSS3",
      "News API",
      "Google Cloud NLP API",
    ],
  },
  {
    projectName: "Star Wars Quiz",
    githubLink: "https://github.com/mr-dojo/noob-jedi",
    liveLink: "https://mr-dojo.github.io/noob-jedi/",
    description:
      "This quiz app tests your knowledge of the Star Wars universe so you can blow your friends away with useless factoids. It gives you constructive feedback on your answers to help you get first place at your all important trivia nights.",
    image: {
      path: "images/starwars-quiz-screenshot.JPG",
      altText: "Star Wars logo",
    },
    frontendTech: ["JavaScript ES6", "HTML5", "CSS3"],
  },
];

// when nav button is pressed
const renderProjects = () => {
  console.log("renderProjects ran");

  $("body").ready(function () {
    buildProjects(projectsList);
  });
};

const handleNavClick = () => {
  $().ready(function () {
    document.addEventListener(
      "click",
      function (event) {
        if (event.target.matches(".about-button")) {
          console.log("removed class from home");
          $("#about").addClass("open");
          $("#projects").removeClass("open");
          $("#home").removeClass("open");
        }
        // show projects sidebar
        if (event.target.matches(".projects-button")) {
          $("#projects").addClass("open");
          $("#about").removeClass("open");
          $("#home").removeClass("open");
        }
        // show home
        if (event.target.matches(".home-button")) {
          $("#about").removeClass("open");
          $("#projects").removeClass("open");
        }
      },
      false
    );
  });
};

function buildProjects(projects) {
  console.log("buildProjects ran");
  const projectSections = [
    `<section class="container"><nav class="nav-wraper transparent z-depth-0">
        <ul row>
          <li col s4 left>
            <a
              class="waves-effect waves-light btn-small about-button"
              >About</a
            >
          </li>
          <li col s4 right>
            <a
              class="disabled waves-effect waves-light btn-small projects-button"
              >Projects</a
            >
          </li>
        </ul>
      </nav><h2>I've built</h2>`,
  ];

  projects.forEach((project) => {
    const frontendTech = [];
    const backendTech = [];

    frontendTech.forEach((tech) => {
      return frontendTech.push(`<span>${tech}</span>`);
    });

    backendTech.forEach((tech) => {
      return backendTech.push(`<span>${tech}</span>`);
    });

    return projectSections.push(`<section class="projects shadow">
        <h3 class="project-name">${project.projectName}</h3>
        <div class="project-links">
          <a class="link btn-small shadow" href=${
            project.githubLink
          } target="_blank">
            GitHub
          </a>
          <a class="link btn-small shadow" href=${
            project.liveLink
          } target="_blank">
            Live
          </a>
        </div>
        <p class="project-description">${project.description}</p>
        <a class="icon-link" href=${project.liveLink} target="_blank">
          <img
            class="project-img responsive-img"
            src=${project.image.path}
            alt=${project.image.altText}
          />
        </a>
        ${
          project.frontendTech
            ? `<p class="project-tech">
            Front:
            <br />
            ${frontendTech}
          </p>`
            : ""
        }
        ${
          project.backendTech
            ? `<p class="project-tech">
            Back:
            <br />
            ${backendTech}
          </p>`
            : ""
        }
      </section>`);
  });
  // close the open section tag
  projectSections.push(`</section>`);
  // inject projects into dom
  document.querySelector("#projects").innerHTML = projectSections.join("");

  return;
}

function startApp() {
  handleNavClick();
  renderProjects();
}

$(startApp);
