// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling
const navLinksAnchor = document.querySelectorAll('.nav-links a');

navLinksAnchor.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Responsive Navbar
const handleResize = () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
};

window.addEventListener('resize', handleResize);

// Dynamic Content Loading (Example for Projects)
const projects = [
    { title: 'Project 1', description: 'Responsive Website Design' },
    { title: 'Project 2', description: 'E-commerce Platform' },
    { title: 'Project 3', description: 'Portfolio Website' },
];

const projectList = document.querySelector('.project-list');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;

    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectDescription);
    projectList.appendChild(projectDiv);
});
