// Featured Projects Data
const projects = [
    {
        title: "Real-Time Flight Data Analytics Pipeline",
        description: "Serverless pipeline processing 10K+ records with <5 second latency. Infrastructure as Code with Terraform, Lambda, S3, and Apache Airflow orchestration.",
        tags: ["Lambda", "S3", "Terraform", "Airflow", "CloudWatch", "API Gateway"],
        image: "✈️",
        github: "https://github.com/cd3331/aws-flight-data-pipeline",
        demo: "https://main.d2zdmzm6s2zgyk.amplifyapp.com/"
    },
    {
        title: "Enterprise Customer Analytics Platform",
        description: "End-to-end ML platform with ETL pipelines, predictive analytics, and automated data quality. Built with AWS Glue, Redshift, SageMaker, and Power BI integration.",
        tags: ["Glue", "Redshift", "SageMaker", "Lambda", "Power BI", "ETL"],
        image: "📊",
        github: "https://github.com/cd3331/Customer-Analytics-Platform",
        demo: "https://main.d15foab71co1x.amplifyapp.com/"
    },
    {
        title: "PM Document Intelligence Platform",
        description: "Production containerized microservices with auto-scaling, MLOps pipeline, and 99.9% uptime. Built with Docker, ECS Fargate, EventBridge, Bedrock, and Textract.",
        tags: ["Docker", "ECS Fargate", "CloudFormation", "Bedrock", "Textract", "EventBridge"],
        image: "📄",
        github: null,
        demo: null
    }
];

// Function to create project card HTML
function createProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-image">${project.image}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank" class="project-link">GitHub →</a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link">Live Demo →</a>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Function to render all projects
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add scroll animation for elements
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project cards
    setTimeout(() => {
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    }, 100);
}

// Add active state to navigation on scroll
function initNavScrollEffect() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        const navHeight = document.querySelector('.navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--primary-color)';
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initSmoothScroll();
    initScrollAnimations();
    initNavScrollEffect();
});

// Add typing effect to hero subtitle (optional enhancement)
function initTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;

    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    // Uncomment to enable typing effect
    // type();
}
