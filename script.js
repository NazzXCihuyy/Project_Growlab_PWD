const projects = [
  {
    title: "Cv",
    category: "Web Design",
    description:
      "A modern visual identity and premium responsive website for a creative startup.",
    image: "img/project1.png",
    link: "https://growlatif-pwd.vercel.app/"
  },
  {
    title: "ISBN App",
    category: "ISBN Validator",
    description:
      "Designed to check if the ISBN Number & check digit on your books valid.",
    image: "img/project2.png",
    link: "https://github.com/NazzXCihuyy/ISBN"
  },
  {
    title: "Prototype Porto",
    category: "Development & Strategy",
    description:
      "This is my prototype porto design before i creates this one.",
    image: "img/project3.png",
    link: "https://growlatif-pwd-2.vercel.app/"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
   <div class="project-preview">
  <img src="${project.image}" alt="${project.title}">
</div>

    <p class="project-category">${project.category}</p>

    <h4 class="project-title">${project.title}</h4>

    <p class="project-description">
      ${project.description}
    </p>

    <button class="secondary-btn" onclick="window.open('${project.link}','_blank')">View Case Study</button>
  `;

  projectList.appendChild(card);
});