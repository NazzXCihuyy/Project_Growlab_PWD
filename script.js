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


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .bounce-in');
  
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('animate');
    }
  });
}


const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
      entry.target.classList.add('animate');
    } else {
    
      entry.target.classList.remove('animate');
    }
  });
}, observerOptions);


const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
    button.style.transition = 'transform 0.2s ease';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
  
  button.addEventListener('click', () => {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);
  });
});


window.addEventListener('load', () => {

  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('hide');
    }, 500);
  }
  
  
  document.querySelectorAll('.fade-in, .slide-in-left, .bounce-in').forEach(el => {
    observer.observe(el);
  });
  

  animateOnScroll();
});


window.addEventListener('scroll', animateOnScroll);