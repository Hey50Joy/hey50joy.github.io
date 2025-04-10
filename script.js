// script.js

const projects = [
    {
        Title: "Simple Calculator V.1",
        Description: "Beginner-friendly calculator that performs chained math operations with 5 user inputs. Includes easter egg if result exceeds 100.",
        Learnings: "Learned input validation, chaining logic, and error handlin using try-excetp.",
        Tech: ["Python", "CLI", "Exception Handling"]
    },
    {
        Title: "Simple Calculator V.2",
        Description: "Refined version of V.1 with improved readability and logic flow."
        Learnings: "Learned consistent coding style, testing, and debugging best practices."
        Tech: ["Python", "CLI", "Error handling"]
    },
    {
        Title: "Quit Plan Calculator",
        Description: A calculator themed around a personal quit plan. Same logic with emotional significance.",
        Learnings: "Learned how to blend logic with personal goals to create meaningful applications.",
        Tech: ["Python", "CLI", "Input Error Handling"]
    },
    {
        Title: "Magic 8-Ball V.1",
        Description: "Mathematical Magic 8-Ball that give deterministic fortunes based on useer inputs.",
        Learnings: "Learned gamification and basic user engagement techniques.",
        Tech: ["Python", "User Input", "CLI"]
    },
    {
        Title: "Magic 8-Ball V.2",
        Description: "Cleaner version of V.1 with better structure and humorous messages.",
        Learnings: "Learned iteration, polishing, and refining logic and comments.",
        Tech: ["Python", "CLI", "Exception Handling"]
    }
];

function displayProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(projects => {
        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = projects.Title;

        const descPara = document.createElement('p');
        descPara.textContent = project.description;

        const learnPara = document.createElement('p');
        learnPara.textContent = project.learnings;

        const techPara = document.createElement('p');
        techPara.textContent = 'Technologies used: ${project.tech.join(', ')}';

        details.appendChild(summary);
        details.appendChild(descPara);
        details.appendChild(learnPara);
        details.appendChild(techPara);

        container.appendChild(details);
});
}

displayProjects();