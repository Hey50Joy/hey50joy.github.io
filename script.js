// script.js

console.log("JS is running");
displayProjects();

const projects = [
    {
        title: "Simple Calculator V.1",
        description: "Beginner-friendly calculator that performs chained math operations with 5 user inputs. Includes easter egg if result exceeds 100.",
        learnings: "Learned input validation, chaining logic, and error handling using try-except.",
        tech: ["Python", "CLI", "Exception Handling"]
    },
    {
        title: "Simple Calculator V.2",
        description: "Refined version of V.1 with improved readability and logic flow.",
        learnings: "Learned consistent coding style, testing, and debugging best practices.",
        tech: ["Python", "CLI", "Error handling"]
    },
    {
        title: "Quit Plan Calculator",
        description: "A calculator themed around a personal quit plan. Same logic with emotional significance.",
        learnings: "Learned how to blend logic with personal goals to create meaningful applications.",
        tech: ["Python", "CLI", "Input Error Handling"]
    },
    {
        title: "Magic 8-Ball V.1",
        description: "Mathematical Magic 8-Ball that gives deterministic fortunes based on user inputs.",
        learnings: "Learned gamification and basic user engagement techniques.",
        tech: ["Python", "User Input", "CLI"]
    },
    {
        title: "Magic 8-Ball V.2",
        description: "Cleaner version of V.1 with better structure and humorous messages.",
        learnings: "Learned iteration, polishing, and refining logic and comments.",
        tech: ["Python", "CLI", "Exception Handling"]
    }
];

function displayProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
      console.log("Project:", project);  
        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = project.title;

        const descPara = document.createElement('p');
        descPara.textContent = project.description;

        const learnPara = document.createElement('p');
        learnPara.textContent = project.learnings;

        const techPara = document.createElement('p');
        techPara.textContent = `Technologies used: ${project.tech.join(', ')}`;

        details.appendChild(summary);
        details.appendChild(descPara);
        details.appendChild(learnPara);
        details.appendChild(techPara);

        container.appendChild(details);
});
}