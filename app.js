const portfolio = {
  name: "Declan (Duc) Nguyen",
  title: "Edge AI Engineer & Technical Product Specialist",
  location: "Ho Chi Minh City, Vietnam",
  phone: "0961924320",
  email: "manhduc8521@gmail.com",
  linkedin: "https://www.linkedin.com/in/declan-nguyen/",
  github: "https://github.com/manhduc8521",
  resume: "Declan-Nguyen_Resume_May2026.pdf",
  headline: "I build production-ready Edge AI systems for cameras, devices, and business operations.",
  summary:
    "AI engineer designing, developing, and deploying production-ready Edge AI, Computer Vision, and Generative AI systems. I build real-time inference pipelines on NVIDIA Jetson platforms, optimize models with TensorRT and INT8 quantization, and connect AI applications with IoT, Embedded Linux, and enterprise workflows.",
  recruiterHighlights: [
    { label: "Role fit", value: "Edge AI / Computer Vision Engineer" },
    { label: "Core stack", value: "C++, Python, Jetson, TensorRT, DeepStream" },
    { label: "Business value", value: "Real-time automation, monitoring, identity workflows" }
  ],
  metrics: [
    { value: "24/7", label: "AI event monitoring pipelines" },
    { value: "RAG + LLM", label: "applied for operational knowledge automation" },
    { value: "2025", label: "NVIDIA technical curriculum completed" },
    { value: "Mar 2026", label: "Applied AI of IoT engineering degree" }
  ],
  focusAreas: [
    "Computer Vision & Edge AI Deployment",
    "Real-time multi-camera RTSP streaming",
    "TensorRT and INT8 inference optimization",
    "RAG, LLM/VLM, and internal data automation",
    "Technical product evaluation and solution documentation",
    "QA/QC standards for production AI reliability"
  ],
  experience: {
    role: "Edge AI Engineer & Technical Product Specialist",
    company: "Nhat Tien Chung IT Telecoms",
    type: "Full-time, On-site",
    period: "May 2025 - Present",
    tracks: [
      {
        title: "Computer Vision & Edge AI Deployment",
        stack: "C++, Python, NVIDIA Jetson, TensorRT, DeepStream, RTSP",
        points: [
          "Developed pure C++ real-time inference pipelines on NVIDIA Jetson platforms for multi-camera RTSP streaming.",
          "Implemented INT8 quantization on edge devices to reduce inference latency and improve deployment stability.",
          "Engineered a real-time facial recognition system for high-density identity management and HR integration.",
          "Designed Edge-to-Cloud architecture connecting Jetson devices with centralized NAS/QNAP storage.",
          "Built 24/7 alerting pipelines with Redis, Webhooks, and Telegram APIs for AI event monitoring."
        ]
      },
      {
        title: "Attendance Data Query Chatbot",
        stack: "Python, LangChain, HuggingFace, RAG, PostgreSQL, HR data workflows",
        points: [
          "Integrated a RAG chatbot into the real-time face recognition attendance system for natural language attendance queries.",
          "Connected chatbot workflows with attendance records and HR operations, reducing manual lookup and support work by 50%."
        ]
      },
      {
        title: "Hardware Evaluation & Technical Documentation",
        stack: "NVIDIA DGX, Jetson, QNAP, Servers, AI Workstations",
        points: [
          "Conducted benchmarking and feasibility studies for DGX, Jetson modules, QNAP NAS, servers, and AI workstations.",
          "Created technical reviews, solution briefs, and product demonstrations to support customer adoption.",
          "Authored PRDs and technical documentation for Smart Retail, Logistics, and Identity Management projects."
        ]
      },
      {
        title: "QA/QC & Production Readiness",
        stack: "Accuracy standards, stability checks, operational reliability",
        points: [
          "Supported QA/QC processes for AI solutions before production deployment.",
          "Established evaluation standards for model accuracy, system stability, and 24/7 operational reliability."
        ]
      }
    ]
  },
  projects: [
    {
      name: "Real-time Face Recognition Attendance System",
      label: "Edge AI Identity Management",
      context:
        "A production-oriented multi-camera recognition platform for attendance, identity operations, enterprise HR workflows, and natural language attendance queries.",
      result:
        "Connected Jetson-based inference, tracking, alerting, storage, HR integration, and an integrated RAG chatbot into one operational AI workflow.",
      technologies: ["C++", "Python", "TensorRT", "InsightFace", "RTSP", "FastAPI", "PostgreSQL", "Redis", "LangChain", "RAG", "Docker"],
      link: "https://github.com/manhduc8521/camera_checkinout"
    },
    {
      name: "DeepStream Native Inference Pipeline",
      label: "Video Analytics Infrastructure",
      context:
        "A native C++ video analytics pipeline for scalable multi-stream inference using NVIDIA DeepStream SDK.",
      result:
        "Improved system architecture for high-throughput processing, modular deployment, and maintainable edge inference.",
      technologies: ["C++", "DeepStream", "TensorRT", "CUDA", "GStreamer", "NVIDIA Jetson"],
      link: "https://github.com/manhduc8521/deepstream-native"
    }
  ],
  skills: [
    {
      group: "Languages",
      items: ["Python", "C/C++", "Dart"]
    },
    {
      group: "AI / Computer Vision",
      items: ["YOLO", "Face Recognition", "Object Detection", "TensorRT", "INT8 Quantization", "RTSP Streaming", "Video Analytics"]
    },
    {
      group: "Generative AI",
      items: ["RAG", "LangChain", "HuggingFace", "LLM/VLM", "Prompt Engineering", "AI Agent Workflows"]
    },
    {
      group: "AI Agent Tools",
      items: ["ChatGPT", "Claude", "Cursor", "GitHub Copilot", "Codex", "Agentic Coding", "Workflow Automation"]
    },
    {
      group: "Edge / Embedded",
      items: ["NVIDIA Jetson", "Embedded Linux", "Ubuntu", "DeepStream", "Docker"]
    },
    {
      group: "Backend / Integration",
      items: ["Redis", "Firebase", "Webhooks", "Telegram API", "Git"]
    },
    {
      group: "Mobile / UI",
      items: ["Flutter", "Android Studio"]
    }
  ],
  education: {
    degree: "Engineer's Degree in Applied Artificial Intelligence of Internet of Things",
    school: "Industrial University of Ho Chi Minh City",
    period: "Aug 2021 - Mar 2026",
    coursework:
      "Algorithms and Data Structures, Computer Architecture, Discrete Mathematics, Internet of Things, Machine Learning, Mobile Application Development, Network Technology, Programming Languages, Real-Time Operating Systems."
  },
  certificates: [
    "TOEIC 505",
    "NVIDIA AI Technical Curriculum",
    "Embedded Compute Technical Curriculum",
    "DGX AI Compute Systems Technical Curriculum",
    "Compute Technical Curriculum",
    "Networking Technical Curriculum",
    "DGX Cloud Curriculum"
  ]
};

const icons = {
  arrowRight:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>',
  mail:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  copy:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><rect x="4" y="4" width="11" height="11" rx="2"/></svg>',
  phone:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z"/></svg>',
  map:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/></svg>',
  external:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',
  menu:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>',
  close:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  check:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m5 13 4 4L19 7"/></svg>',
  award:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="m8.5 12.5-1 8 4.5-2.7 4.5 2.7-1-8"/></svg>',
  cpu:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3"/></svg>'
};

const navItems = [
  ["overview", "Overview"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["credentials", "Credentials"],
  ["contact", "Contact"]
];

function buildApp() {
  const app = document.getElementById("app");
  app.innerHTML = `
    ${renderHeader()}
    <main id="main">
      ${renderHero()}
      ${renderFocus()}
      ${renderExperience()}
      ${renderProjects()}
      ${renderSkills()}
      ${renderCredentials()}
      ${renderContact()}
    </main>
    ${renderFooter()}
    <div class="toast" role="status" aria-live="polite">Email copied</div>
  `;

  bindNavigation();
  bindCopyButtons();
  bindRevealAnimations();
  updateActiveNav();
  window.addEventListener("scroll", scheduleActiveNavUpdate, { passive: true });
  window.addEventListener("resize", updateNavIndicator);
  document.fonts?.ready?.then(updateNavIndicator);
}

function renderHeader() {
  return `
    <header class="site-header" data-header>
      <a class="brand" href="#overview" aria-label="${portfolio.name} home">
        <span class="brand__mark">DN</span>
        <span class="brand__text">
          <span>${portfolio.name}</span>
          <small>Business Portfolio</small>
        </span>
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        ${navItems.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("")}
        <span class="nav-indicator" aria-hidden="true"></span>
      </nav>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobileNav">
        ${icons.menu}
        <span class="sr-only">Open navigation</span>
      </button>
      <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
        ${navItems.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("")}
      </nav>
    </header>
  `;
}

function renderHero() {
  return `
    <section class="hero section-shell" id="overview" aria-labelledby="heroTitle">
      <div class="hero__content">
        <div class="hero__badges" aria-label="Recruiter highlights">
          <span>Open to remote AI engineering roles</span>
          <span>GMT+7 collaboration</span>
          <span>Remote-first preferred</span>
        </div>
        <p class="eyebrow">Production AI systems for real-world operations</p>
        <h1 id="heroTitle">${portfolio.headline}</h1>
        <p class="hero__role">${portfolio.title}</p>
        <p class="hero__summary">${portfolio.summary}</p>
        <div class="hero__actions" aria-label="Primary actions">
          <a class="button button--primary" href="${portfolio.resume}" target="_blank" rel="noreferrer">
            View resume
            ${icons.external}
          </a>
          <a class="button button--linkedin" href="${portfolio.linkedin}" target="_blank" rel="noreferrer">
            LinkedIn
            ${icons.external}
          </a>
          <button class="button button--secondary copy-email" type="button" data-copy="${portfolio.email}">
            ${icons.copy}
            Copy email
          </button>
        </div>
      </div>
      <aside class="hero__profile hero-card" aria-label="Profile summary">
        <div class="portrait">
          <img src="profile-portfolio.png" alt="Portfolio portrait of ${portfolio.name}">
        </div>
        <div class="profile-panel">
          <p class="profile-panel__label">${portfolio.name}</p>
          <h2>Production-focused AI Engineer</h2>
          <p>Edge AI, Computer Vision, and Generative AI systems for real-world deployment.</p>
          <div class="snapshot-list">
            ${portfolio.recruiterHighlights
              .map(
                (item) => `
                  <div>
                    <span>${item.label}</span>
                    <strong>${item.value}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
          <div class="contact-lines">
            <button class="copy-line" type="button" data-copy="${portfolio.email}">${icons.copy}<span>${portfolio.email}</span></button>
            <a href="tel:${portfolio.phone}">${icons.phone}<span>${portfolio.phone}</span></a>
            <span>${icons.map}<span>${portfolio.location}</span></span>
          </div>
        </div>
      </aside>
      <div class="metrics-row" aria-label="Career highlights">
        ${portfolio.metrics
          .map(
            (metric) => `
              <div class="metric">
                <strong>${metric.value}</strong>
                <span>${metric.label}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFocus() {
  return `
    <section class="section-band focus-band" aria-labelledby="focusTitle">
      <div class="section-shell split-section">
        <div>
          <p class="eyebrow">What I Build</p>
          <h2 id="focusTitle">Reliable AI systems that can move from demo to deployment.</h2>
        </div>
        <div class="focus-grid">
          ${portfolio.focusAreas
            .map(
              (area) => `
                <div class="focus-item">
                  ${icons.check}
                  <span>${area}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderExperience() {
  return `
    <section class="section-shell content-section" id="experience" aria-labelledby="experienceTitle">
      <div class="section-heading">
        <p class="eyebrow">Professional Experience</p>
        <h2 id="experienceTitle">${portfolio.experience.role}</h2>
        <p>${portfolio.experience.company} | ${portfolio.experience.type} | ${portfolio.experience.period}</p>
      </div>
      <div class="experience-list">
        ${portfolio.experience.tracks
          .map(
            (track) => `
              <article class="experience-card">
                <div class="experience-card__head">
                  <h3>${track.title}</h3>
                  <p>${track.stack}</p>
                </div>
                <ul>
                  ${track.points.map((point) => `<li>${point}</li>`).join("")}
                </ul>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderProjects() {
  return `
    <section class="section-band" id="projects" aria-labelledby="projectsTitle">
      <div class="section-shell content-section">
        <div class="section-heading">
          <p class="eyebrow">Selected Case Studies</p>
          <h2 id="projectsTitle">Business-focused AI implementation work.</h2>
          <p>Each project is framed around operational value, production readiness, and technical ownership.</p>
        </div>
        <div class="project-grid">
          ${portfolio.projects
            .map(
              (project) => `
                <article class="project-card">
                  <div class="project-card__top">
                    <span class="project-card__icon">${icons.cpu}</span>
                    <p class="project-card__label">${project.label}</p>
                  </div>
                  <h3>${project.name}</h3>
                  <p>${project.context}</p>
                  <div class="project-result">
                    <span>Outcome</span>
                    <strong>${project.result}</strong>
                  </div>
                  <div class="tag-list">
                    ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
                  </div>
                  <a class="text-link" href="${project.link}" target="_blank" rel="noreferrer">
                    View reference ${icons.external}
                  </a>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSkills() {
  return `
    <section class="section-shell content-section" id="skills" aria-labelledby="skillsTitle">
      <div class="section-heading">
        <p class="eyebrow">Technical Skills</p>
        <h2 id="skillsTitle">A stack shaped for edge deployment and AI product delivery.</h2>
      </div>
      <div class="skills-grid">
        ${portfolio.skills
          .map(
            (skill) => `
              <article class="skill-card">
                <span class="skill-card__marker">${icons.cpu}</span>
                <h3>${skill.group}</h3>
                <div class="tag-list">
                  ${skill.items.map((item) => `<span>${item}</span>`).join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCredentials() {
  return `
    <section class="section-band" id="credentials" aria-labelledby="credentialsTitle">
      <div class="section-shell credential-layout">
        <div class="credential-main">
          <p class="eyebrow">Education & Certificates</p>
          <h2 id="credentialsTitle">${portfolio.education.degree}</h2>
          <p class="credential-school">${portfolio.education.school}</p>
          <p class="credential-period">${portfolio.education.period}</p>
          <p>${portfolio.education.coursework}</p>
        </div>
        <div class="certificate-list" aria-label="Certificates">
          ${portfolio.certificates
            .map(
              (cert) => `
                <div class="certificate-item">
                  ${icons.award}
                  <span>${cert}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="contact-section" id="contact" aria-labelledby="contactTitle">
      <div class="section-shell contact-panel">
        <div>
          <p class="eyebrow">Contact</p>
          <h2 id="contactTitle">Available for Edge AI, Computer Vision, and AI product work.</h2>
          <p>Send a message for remote engineering roles, technical product collaboration, or production AI solution discussions.</p>
        </div>
        <div class="contact-actions">
          <button class="button button--primary copy-email" type="button" data-copy="${portfolio.email}">
            ${icons.copy}
            Copy email
          </button>
          <a class="button button--linkedin" href="${portfolio.linkedin}" target="_blank" rel="noreferrer">
            LinkedIn
            ${icons.external}
          </a>
          <a class="button button--secondary" href="${portfolio.github}" target="_blank" rel="noreferrer">
            GitHub
            ${icons.external}
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="section-shell footer-inner">
        <span>${portfolio.name}</span>
        <span>Edge AI | Computer Vision | Generative AI</span>
      </div>
    </footer>
  `;
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}

function bindCopyButtons() {
  const toast = document.querySelector(".toast");

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await copyText(button.dataset.copy);
        toast.textContent = "Email copied: " + button.dataset.copy;
        toast.classList.add("is-visible");
        window.clearTimeout(bindCopyButtons.hideTimer);
        bindCopyButtons.hideTimer = window.setTimeout(() => {
          toast.classList.remove("is-visible");
        }, 2200);
      } catch {
        toast.textContent = "Copy failed. Email: " + button.dataset.copy;
        toast.classList.add("is-visible");
      }
    });
  });
}

let activeScrollAnimation = 0;
let navUpdateQueued = false;
let pendingNavTargetId = "";

function bindNavigation() {
  const header = document.querySelector("[data-header]");
  const button = document.querySelector(".menu-button");
  const mobileNav = document.querySelector(".mobile-nav");

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    button.innerHTML = `${isOpen ? icons.menu : icons.close}<span class="sr-only">${isOpen ? "Open" : "Close"} navigation</span>`;
    mobileNav.classList.toggle("is-open", !isOpen);
    header.classList.toggle("menu-open", !isOpen);
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        event.preventDefault();
        playNavClickAnimation(link, target);
        smoothScrollToSection(target);
        window.history.pushState(null, "", link.getAttribute("href"));
      }

      button.setAttribute("aria-expanded", "false");
      button.innerHTML = `${icons.menu}<span class="sr-only">Open navigation</span>`;
      mobileNav.classList.remove("is-open");
      header.classList.remove("menu-open");
    });
  });
}

function playNavClickAnimation(link, target) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return;
  }

  const direction = target.getBoundingClientRect().top >= 0 ? "down" : "up";
  const desktopNav = link.closest(".desktop-nav");

  link.classList.remove("is-nav-pressed", "is-slide-up", "is-slide-down");
  if (desktopNav) {
    desktopNav.classList.remove("is-nav-up", "is-nav-down");
  }

  void link.offsetWidth;

  link.classList.add("is-nav-pressed", `is-slide-${direction}`);
  desktopNav?.classList.add(`is-nav-${direction}`);

  window.setTimeout(() => {
    link.classList.remove("is-nav-pressed", "is-slide-up", "is-slide-down");
    desktopNav?.classList.remove("is-nav-up", "is-nav-down");
  }, 380);
}

function smoothScrollToSection(target) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.querySelector("[data-header]");
  const headerOffset = (header?.offsetHeight || 0) + 18;
  const startY = window.scrollY;
  const targetY = Math.max(0, target.getBoundingClientRect().top + startY - headerOffset);

  window.cancelAnimationFrame(activeScrollAnimation);
  pendingNavTargetId = target.id;
  updateActiveNav();

  if (prefersReducedMotion) {
    window.scrollTo(0, targetY);
    pendingNavTargetId = "";
    updateActiveNav();
    return;
  }

  const distance = Math.abs(targetY - startY);
  const duration = Math.min(760, Math.max(420, distance * 0.42));
  const startedAt = performance.now();

  const easeInOutCubic = (progress) =>
    progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

  const step = (now) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + (targetY - startY) * eased);
    scheduleActiveNavUpdate();

    if (progress < 1) {
      activeScrollAnimation = window.requestAnimationFrame(step);
      return;
    }

    pendingNavTargetId = "";
    updateActiveNav();
  };

  activeScrollAnimation = window.requestAnimationFrame(step);
}

function scheduleActiveNavUpdate() {
  if (navUpdateQueued) {
    return;
  }

  navUpdateQueued = true;
  window.requestAnimationFrame(() => {
    navUpdateQueued = false;
    updateActiveNav();
  });
}

function updateActiveNav() {
  const sections = navItems
    .map(([id]) => document.getElementById(id))
    .filter(Boolean);
  const activeSection =
    (pendingNavTargetId && document.getElementById(pendingNavTargetId)) ||
    sections
      .slice()
      .reverse()
      .find((section) => section.getBoundingClientRect().top <= 160) ||
    sections[0];

  document.querySelectorAll(".desktop-nav a, .mobile-nav a").forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeSection.id}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  updateNavIndicator();
}

function updateNavIndicator() {
  const nav = document.querySelector(".desktop-nav");
  const indicator = document.querySelector(".nav-indicator");
  const activeLink = document.querySelector(".desktop-nav a.is-active");

  if (!nav || !indicator || !activeLink) {
    return;
  }

  const navRect = nav.getBoundingClientRect();
  const activeRect = activeLink.getBoundingClientRect();
  indicator.style.width = `${activeRect.width}px`;
  indicator.style.setProperty("--nav-indicator-x", `${activeRect.left - navRect.left}px`);
  indicator.style.opacity = "1";
}

function bindRevealAnimations() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  const revealSelectors = [
    ".hero__content",
    ".hero-card",
    ".metric",
    ".focus-item",
    ".experience-card",
    ".project-card",
    ".skill-card",
    ".credential-main",
    ".certificate-item",
    ".contact-panel"
  ];

  const revealElements = document.querySelectorAll(revealSelectors.join(","));
  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));

  window.setTimeout(() => {
    revealElements.forEach((element) => {
      if (!element.classList.contains("is-visible")) {
        element.classList.add("is-visible");
      }
    });
  }, 1200);
}

document.addEventListener("DOMContentLoaded", buildApp);
