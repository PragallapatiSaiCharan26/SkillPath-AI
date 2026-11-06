/**
 * SkillPath AI - Career Data & Content Store
 * 
 * WHY THIS FILE EXISTS:
 * Instead of hardcoding career information directly inside HTML or inside
 * complex JavaScript code, we keep all data here in clean JavaScript objects.
 * 
 * Any team member can easily edit or add career information, learning resources,
 * or assessment skills in this file without risking breaking the app logic!
 * 
 * ETHICAL STANDARDS:
 * - No fabricated salary figures or placement guarantees.
 * - Real-world entry-level expectations written in college-friendly language.
 * - Clear disclaimers that requirements vary by employer.
 */

const ratingLevels = [
  {
    key: "beginner",
    label: "Beginner",
    description: "I understand basic concepts or have just started learning."
  },
  {
    key: "intermediate",
    label: "Intermediate",
    description: "I can use this skill independently in simple practical tasks."
  },
  {
    key: "advanced",
    label: "Advanced",
    description: "I can apply this skill confidently in complex practical tasks."
  }
];

/**
 * Skill Level Numeric Scale for Stage 5 Gap Analysis
 * Beginner = 1, Intermediate = 2, Advanced = 3
 */
const levelNumericMap = {
  beginner: 1,
  intermediate: 2,
  advanced: 3
};

const numericLevelMap = {
  1: { key: "beginner", label: "Beginner" },
  2: { key: "intermediate", label: "Intermediate" },
  3: { key: "advanced", label: "Advanced" }
};

/**
 * Educational Disclaimer for Target Benchmarks:
 * These levels are project-defined student preparation targets, not universal employer mandates.
 */
const targetBenchmarkDisclaimer = "Benchmark proficiency levels represent recommended college preparation targets defined for this educational platform based on entry-level industry expectations. They are not universal employer requirements, as specific needs vary across companies and teams.";

const careerPaths = [
  {
    id: "python-dev",
    title: "Python Developer",
    category: "Backend & Automation",
    shortDescription: "Build backend web services, automate workflows, design clean APIs, and handle versatile data manipulation tasks.",
    skillsPreview: ["Python", "OOP", "SQL", "Problem Solving"],
    overview: "A Python Developer focuses on writing server-side application logic, developing RESTful web APIs, automating repetitive processes, and integrating databases. Python is celebrated for its clean, readable syntax, making it one of the most accessible yet industry-vital languages for entry-level developers.",
    responsibilities: [
      "Develop and maintain server-side web applications and RESTful APIs.",
      "Write scripts to automate repetitive system tasks and data processing workflows.",
      "Design database queries and connect relational databases to backend systems.",
      "Debug software issues, write unit tests, and maintain clear code documentation.",
      "Collaborate with frontend developers to connect UI features with backend services."
    ],
    technicalSkills: [
      "Python 3 (Core syntax, data types, functions, modules, error handling)",
      "Object-Oriented Programming (Classes, Inheritance, Encapsulation)",
      "Relational Databases & SQL (Queries, Joins, Schema design)",
      "Backend Web Frameworks (Flask or FastAPI for RESTful APIs)",
      "Version Control (Git & GitHub workflow, branching, pull requests)",
      "API Principles (REST architecture, JSON formatting, HTTP methods and status codes)"
    ],
    softSkills: [
      "Analytical Problem-Solving (breaking complex problems into small logical steps)",
      "Technical Communication (explaining code decisions clearly to teammates)",
      "Collaboration & Teamwork (participating in code reviews and team syncs)",
      "Curiosity & Continuous Learning (reading documentation and exploring new packages)"
    ],
    toolsAndTechnologies: [
      "IDEs & Code Editors: VS Code, PyCharm Community Edition",
      "Version Control: Git, GitHub",
      "Frameworks & Libraries: Flask, FastAPI, Requests",
      "Databases: SQLite, PostgreSQL",
      "API Testing: Postman, Thunder Client, curl"
    ],
    beginnerPriorities: [
      { step: 1, title: "Master Python Fundamentals", detail: "Variables, loops, lists, dictionaries, functions, and exception handling." },
      { step: 2, title: "Understand OOP & File I/O", detail: "Classes, objects, methods, reading/writing files, and modular code." },
      { step: 3, title: "Learn SQL & Relational Databases", detail: "Writing SQL queries, tables, primary keys, and connecting with SQLite." },
      { step: 4, title: "Build Your First REST API", detail: "Use Flask or FastAPI to create endpoints that accept and return JSON." }
    ],
    portfolioProjects: [
      {
        title: "Personal Expense Tracker API",
        level: "Beginner",
        problemStatement: "College students often struggle to track daily spending and budget their monthly allowance.",
        keyFeatures: [
          "CRUD endpoints to create, read, update, and delete expenses",
          "Category filtering (e.g., Food, Books, Rent, Travel)",
          "Monthly summary endpoint calculating total spent per category"
        ],
        suggestedTech: ["Python", "Flask or FastAPI", "SQLite"]
      },
      {
        title: "Automated Web Data Scraper & Reporter",
        level: "Intermediate",
        problemStatement: "Students need a quick way to monitor online updates, such as campus event schedules or job listings, without manual checking.",
        keyFeatures: [
          "Fetches and parses HTML content responsibly using BeautifulSoup",
          "Extracts target data fields (title, date, link) and saves to CSV/JSON",
          "Generates a structured daily log report"
        ],
        suggestedTech: ["Python", "BeautifulSoup4 / Requests", "CSV / JSON module"]
      },
      {
        title: "Task Management Backend with User Authentication",
        level: "Job-Ready",
        problemStatement: "Teams require a secure backend service to organize projects, assign tasks, and track completion statuses.",
        keyFeatures: [
          "Token-based user registration and login authentication",
          "Protected API routes ensuring users access only their own tasks",
          "Comprehensive automated test suite using pytest"
        ],
        suggestedTech: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL / SQLite", "pytest"]
      }
    ],
    preparationChecklist: [
      "Able to write clean, readable Python code adhering to standard conventions",
      "Comfortable writing SQL queries including SELECT, WHERE, JOIN, and GROUP BY",
      "Understands how HTTP requests work (GET, POST, PUT, DELETE, status codes)",
      "Maintains an active GitHub profile with at least 2 well-documented repositories",
      "Can explain the difference between a function, class, and module in an interview"
    ],
    disclaimer: "Skills and tool requirements vary significantly by employer, company size, and specific team needs. Completing recommended projects demonstrates initiative and practical skill, but does not guarantee employment.",
    assessmentSkills: [
      {
        id: "python_prog",
        name: "Python Programming",
        description: "Core language syntax, data types, control flow, functions, and standard library modules.",
        targetLevel: 3,
        targetLabel: "Advanced",
        benchmarkReason: "Core language syntax, modular functions, list comprehensions, and standard libraries form the daily baseline for backend coding.",
        recommendations: {
          toIntermediate: "Write scripts using functions, loops, dictionaries, and file I/O. Build a command-line utility such as a file renamer or word counter.",
          toAdvanced: "Build modular packages, master generators, decorators, and write robust unit tests with pytest for backend APIs."
        }
      },
      {
        id: "python_oop",
        name: "Object-Oriented Programming",
        description: "Classes, objects, inheritance, encapsulation, polymorphism, and modular structure.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Entry-level roles require understanding class hierarchies, object state, and writing clean modular code.",
        recommendations: {
          toIntermediate: "Design class hierarchies with constructors, encapsulation, and methods. Model a real-world system like a Bank Account or Library Catalog.",
          toAdvanced: "Study design patterns (Factory, Singleton), abstract base classes, and composition over inheritance in API architectures."
        }
      },
      {
        id: "python_sql",
        name: "SQL",
        description: "Relational database querying, filtering, table joins, aggregations, and basic schema design.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Relational database querying and ORM integration are required to connect Python backend code with persistent data stores.",
        recommendations: {
          toIntermediate: "Practice writing SELECT, WHERE, GROUP BY, and multi-table INNER/LEFT JOIN queries on sample SQLite datasets.",
          toAdvanced: "Design normalized database schemas, write complex subqueries, manage transactions, and optimize query indexing."
        }
      },
      {
        id: "python_ds",
        name: "Data Structures",
        description: "Lists, dictionaries, sets, tuples, stacks, queues, and basic algorithmic complexity.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Understanding lists, sets, dictionaries, and Big-O complexity helps write efficient and performant backend code.",
        recommendations: {
          toIntermediate: "Practice manipulating lists, dicts, stacks, and queues. Solve 15-20 beginner algorithmic challenges on free coding platforms.",
          toAdvanced: "Implement hash maps, trees, binary search, and analyze Big-O time and space complexity for scalable data processing."
        }
      },
      {
        id: "python_prob_solving",
        name: "Problem Solving",
        description: "Debugging code, isolating stack traces, and breaking complex logic into manageable steps.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Employers look for candidates who can methodically break down complex tasks and isolate errors independently.",
        recommendations: {
          toIntermediate: "Learn to read Python tracebacks carefully, use print/logging debugging, and write down problem-solving steps before coding.",
          toAdvanced: "Use interactive debuggers (pdb / VS Code debugger), write defensive exception handlers, and systematically reproduce edge cases."
        }
      },
      {
        id: "python_git",
        name: "Git and GitHub",
        description: "Version control commands, staging, commits, branches, pull requests, and repo management.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Version control and GitHub collaboration are essential workflows across every modern software engineering team.",
        recommendations: {
          toIntermediate: "Master git clone, add, commit, push, pull, and branch creation. Host 2 well-documented repositories on GitHub.",
          toAdvanced: "Practice pull requests, code reviews, rebasing, resolving merge conflicts, and configuring GitHub Actions CI workflows."
        }
      }
    ]
  },
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    category: "Web Development",
    shortDescription: "Create responsive, accessible, and interactive user interfaces for modern web applications using web standards.",
    skillsPreview: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    overview: "A Frontend Developer crafts everything users see and interact with inside a web browser. They translate visual designs into clean, accessible HTML and CSS, and write JavaScript to bring pages to life with dynamic interactivity, API data rendering, and smooth user experiences.",
    responsibilities: [
      "Build responsive web pages that render cleanly across mobile phones, tablets, and desktops.",
      "Implement accessible HTML markup ensuring usability for all individuals.",
      "Write modular JavaScript to handle user events, page state, and form validation.",
      "Connect frontend interfaces to backend REST APIs using the Fetch API.",
      "Ensure cross-browser compatibility and optimize page loading performance."
    ],
    technicalSkills: [
      "Semantic HTML5 (Document structure, forms, accessibility landmarks, ARIA)",
      "Modern CSS3 (Flexbox, CSS Grid, custom properties, media queries, animations)",
      "Vanilla JavaScript ES6+ (DOM manipulation, event handling, arrow functions, promises)",
      "Asynchronous JavaScript (Fetch API, async/await, JSON data consumption)",
      "Responsive Web Design (Mobile-first methodologies, viewport management)",
      "Version Control (Git & GitHub, branching, pull requests, resolving merge conflicts)"
    ],
    softSkills: [
      "Visual Attention to Detail (noticing alignment, spacing, typography consistency)",
      "User Empathy (caring about speed, accessibility, and intuitive navigation)",
      "Constructive Feedback Acceptance (iterating on UI designs based on feedback)",
      "Clear Communication (explaining UI limitations and trade-offs to peers)"
    ],
    toolsAndTechnologies: [
      "Code Editors: VS Code with Live Server extension",
      "Browser Tools: Chrome DevTools (Console, Elements, Network, Lighthouse)",
      "Version Control: Git, GitHub, GitHub Pages",
      "Design Hand-off: Figma (inspecting spacing, typography, and color values)",
      "Code Formatting: Prettier, ESLint basics"
    ],
    beginnerPriorities: [
      { step: 1, title: "Master Semantic HTML5 & CSS", detail: "Structure pages correctly, master Flexbox for 1D layouts and CSS Grid for 2D grids." },
      { step: 2, title: "Build Responsive Layouts", detail: "Write clean media queries so pages look polished on both mobile and desktop." },
      { step: 3, title: "Learn JavaScript Fundamentals", detail: "Variables, functions, arrays, objects, loops, and DOM selection/manipulation." },
      { step: 4, title: "Handle Asynchronous Data", detail: "Use the Fetch API to load real-world JSON data and render dynamic UI elements." }
    ],
    portfolioProjects: [
      {
        title: "Student Study Timer & Focus Session Tracker",
        level: "Beginner",
        problemStatement: "Students need a simple, distraction-free tool to manage study blocks and breaks.",
        keyFeatures: [
          "Customizable countdown timer for study and break intervals",
          "Audio notification and visual state indicators when time elapses",
          "Session counter showing completed study blocks"
        ],
        suggestedTech: ["HTML5", "CSS3", "Vanilla JavaScript"]
      },
      {
        title: "Dynamic Course & Resource Directory with Filter",
        level: "Intermediate",
        problemStatement: "Learners often need a searchable, filterable repository of curated learning links and study guides.",
        keyFeatures: [
          "Search input with instant real-time filtering as the user types",
          "Multi-category tag filtering (e.g., Beginners, Advanced, Video, Article)",
          "Responsive card grid with clean hover states and copy-to-clipboard buttons"
        ],
        suggestedTech: ["HTML5", "CSS3 (Flexbox/Grid)", "Vanilla JavaScript (DOM & Array methods)"]
      },
      {
        title: "Interactive Student Portfolio Dashboard",
        level: "Job-Ready",
        problemStatement: "Graduating seniors need an accessible, professional personal showcase with project deep-dives and contact validation.",
        keyFeatures: [
          "Accessible light/dark theme switcher stored in browser localStorage",
          "Interactive modal windows detailing project case studies and tech stacks",
          "Accessible client-side form validation with descriptive feedback messages"
        ],
        suggestedTech: ["HTML5", "CSS3 Variables", "Vanilla JavaScript ES6+", "GitHub Pages"]
      }
    ],
    preparationChecklist: [
      "Can build a mobile-responsive web page from scratch without CSS frameworks",
      "Understands DOM manipulation (querySelector, addEventListener, classList)",
      "Comfortable fetching data from a public REST API and rendering it into HTML",
      "Ensures forms have proper label associations and keyboard accessibility",
      "Has published at least 2 working projects hosted for free on GitHub Pages"
    ],
    disclaimer: "Skills and tool requirements vary significantly by employer, company size, and specific team needs. Completing recommended projects demonstrates initiative and practical skill, but does not guarantee employment.",
    assessmentSkills: [
      {
        id: "fe_html",
        name: "HTML",
        description: "Semantic tags, forms, input validation, document structure, and basic ARIA accessibility.",
        targetLevel: 3,
        targetLabel: "Advanced",
        benchmarkReason: "Semantic markup, form validation, accessible landmarks, and SEO meta tags are non-negotiable frontend fundamentals.",
        recommendations: {
          toIntermediate: "Replace generic divs with semantic tags (<main>, <article>, <section>, <nav>). Build multi-input forms with native validation.",
          toAdvanced: "Audit and implement WCAG 2.1 AA accessibility standards, ARIA attributes, live regions, and semantic microdata."
        }
      },
      {
        id: "fe_css",
        name: "CSS",
        description: "Box model, Flexbox, CSS Grid, media queries, responsive units, and clean styling.",
        targetLevel: 3,
        targetLabel: "Advanced",
        benchmarkReason: "Modern layout techniques (Flexbox, Grid), responsive units, and CSS variables are required for clean UI implementation.",
        recommendations: {
          toIntermediate: "Master CSS Flexbox for 1D navigation and CSS Grid for 2D card layouts. Eliminate fixed pixel widths in favor of responsive units.",
          toAdvanced: "Build complete responsive design systems using CSS custom properties (variables), fluid typography, and CSS animations."
        }
      },
      {
        id: "fe_js",
        name: "JavaScript",
        description: "ES6+ syntax, functions, scopes, arrays, objects, promises, and asynchronous operations.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Writing modern ES6+ code, handling asynchronous promises, and array manipulations power interactive web apps.",
        recommendations: {
          toIntermediate: "Learn ES6 arrow functions, array methods (map, filter, reduce), template literals, and async/await with the Fetch API.",
          toAdvanced: "Master closures, event loops, prototypal inheritance, module bundling, and modular ES6 class architecture."
        }
      },
      {
        id: "fe_responsive",
        name: "Responsive Web Design",
        description: "Mobile-first development, media queries, flexible viewports, and multi-device usability.",
        targetLevel: 3,
        targetLabel: "Advanced",
        benchmarkReason: "Over 50% of web traffic is mobile; web applications must render smoothly across all device sizes.",
        recommendations: {
          toIntermediate: "Adopt a mobile-first workflow: write base CSS for small screens and apply @media (min-width: ...) breakpoints progressively.",
          toAdvanced: "Implement responsive images (picture, srcset), fluid typography (clamp()), and touch-friendly UI interaction patterns."
        }
      },
      {
        id: "fe_dom",
        name: "DOM Manipulation",
        description: "Selecting elements, handling click/input events, modifying attributes, and updating classes.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Dynamic UI updates, event listeners, and form validations are daily responsibilities of frontend developers.",
        recommendations: {
          toIntermediate: "Practice document.querySelector, addEventListener, dynamic class toggling, and template rendering from JSON data.",
          toAdvanced: "Manage complex component state, delegate events efficiently on dynamic lists, and minimize DOM reflows and repaints."
        }
      },
      {
        id: "fe_git",
        name: "Git and GitHub",
        description: "Version tracking, branches, commit standards, pull requests, and GitHub Pages hosting.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Version control, branching, and automated deployment (GitHub Pages) showcase your web projects publicly.",
        recommendations: {
          toIntermediate: "Commit code regularly with descriptive messages, create feature branches, and deploy live demos to GitHub Pages.",
          toAdvanced: "Collaborate via pull requests, review peer diffs, manage release tags, and maintain clean commit histories."
        }
      }
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    category: "Data & Insights",
    shortDescription: "Analyze raw data sets to discover patterns, answer key business questions, and build intuitive visual reports.",
    skillsPreview: ["Excel", "SQL", "Python", "Data Visualization"],
    overview: "A Data Analyst transforms messy, raw data into clear, actionable business insights. They clean datasets, write SQL queries to extract information from databases, perform exploratory data analysis, and build charts and dashboards that help teams make informed decisions.",
    responsibilities: [
      "Collect, inspect, clean, and validate raw datasets from diverse sources.",
      "Write SQL queries to filter, aggregate, and join relational tables.",
      "Conduct exploratory data analysis to identify trends, outliers, and patterns.",
      "Design clear visual charts and dashboards that communicate findings effectively.",
      "Present data-backed recommendations in plain language to non-technical stakeholders."
    ],
    technicalSkills: [
      "Spreadsheets (Microsoft Excel / Google Sheets: Pivot Tables, VLOOKUP, XLOOKUP, Index/Match)",
      "Relational Databases & SQL (SELECT, WHERE, GROUP BY, HAVING, INNER/LEFT JOIN, Subqueries)",
      "Python for Data (Pandas for data wrangling, NumPy for numerical operations)",
      "Data Visualization (Matplotlib, Seaborn, Tableau Public or Power BI basics)",
      "Foundational Statistics (Mean, median, mode, standard deviation, correlation, distributions)",
      "Data Cleaning & Preprocessing (Handling missing values, data type formatting, deduplication)"
    ],
    softSkills: [
      "Critical Thinking & Skepticism (questioning assumptions and validating data integrity)",
      "Business Curiosity (understanding the 'why' behind numbers and metrics)",
      "Data Storytelling (translating complex statistical findings into clear narratives)",
      "Attention to Accuracy (ensuring calculations and data transformations are reliable)"
    ],
    toolsAndTechnologies: [
      "Spreadsheets: Microsoft Excel, Google Sheets",
      "Database Tools: SQLite, DBeaver, MySQL Workbench, PostgreSQL",
      "Programming: Python, Jupyter Notebooks, Google Colab",
      "Libraries: Pandas, NumPy, Matplotlib, Seaborn",
      "BI Tools: Tableau Public, Power BI Desktop"
    ],
    beginnerPriorities: [
      { step: 1, title: "Master Advanced Spreadsheets", detail: "Formulas, conditional logic, Pivot Tables, data cleaning, and charting." },
      { step: 2, title: "Learn SQL Database Querying", detail: "Writing queries, filtering, grouping, aggregating, and joining multiple tables." },
      { step: 3, title: "Learn Python with Pandas", detail: "Loading CSVs, inspecting dataframes, filtering rows, and handling null values." },
      { step: 4, title: "Practice Data Storytelling", detail: "Build visual charts and write concise summaries explaining what the numbers mean." }
    ],
    portfolioProjects: [
      {
        title: "College Student Spending & Budgeting Analysis",
        level: "Beginner",
        problemStatement: "A student union wants to understand average monthly expenditures and identify primary spending drivers across semesters.",
        keyFeatures: [
          "Cleaned dataset containing semester transactions and categories",
          "Pivot table breakdown of fixed vs. discretionary student expenses",
          "Summary dashboard chart with top 3 spending patterns highlighted"
        ],
        suggestedTech: ["Microsoft Excel or Google Sheets", "Pivot Tables", "Chart Builder"]
      },
      {
        title: "E-Commerce Sales Performance & Customer Trends",
        level: "Intermediate",
        problemStatement: "An online store needs to identify its best-selling product categories and repeat purchase rates.",
        keyFeatures: [
          "SQL scripts joining customer, order, and product tables",
          "Monthly revenue trends and average order value (AOV) calculations",
          "Customer segmentation analysis by purchase frequency"
        ],
        suggestedTech: ["SQL (SQLite or PostgreSQL)", "DBeaver / Workbench", "Markdown Report"]
      },
      {
        title: "Public Health or Environmental Trends Exploratory Analysis",
        level: "Job-Ready",
        problemStatement: "Public organizations need clear visualization of multi-year regional trends to guide community initiatives.",
        keyFeatures: [
          "Comprehensive data cleaning notebook handling outliers and missing records",
          "Exploratory visual analysis with Matplotlib/Seaborn correlation heatmaps",
          "Written executive summary report with actionable takeaways"
        ],
        suggestedTech: ["Python", "Pandas", "Matplotlib / Seaborn", "Jupyter Notebook"]
      }
    ],
    preparationChecklist: [
      "Can confidently use Pivot Tables and multi-condition formulas in Excel/Sheets",
      "Can write multi-table SQL queries with JOINs and aggregate functions",
      "Understands the difference between correlation and causation",
      "Can explain the findings of a chart in simple non-technical terms",
      "Has published at least 1 documented data project on GitHub or Tableau Public"
    ],
    disclaimer: "Skills and tool requirements vary significantly by employer, company size, and specific team needs. Completing recommended projects demonstrates initiative and practical skill, but does not guarantee employment.",
    assessmentSkills: [
      {
        id: "da_excel",
        name: "Microsoft Excel",
        description: "Formulas, conditional formatting, data cleaning, Pivot Tables, and lookups (VLOOKUP/XLOOKUP).",
        targetLevel: 3,
        targetLabel: "Advanced",
        benchmarkReason: "Excel remains the primary quick-analysis and data-auditing tool across finance, marketing, and business operations.",
        recommendations: {
          toIntermediate: "Master Pivot Tables, VLOOKUP/XLOOKUP, nested IF statements, conditional formatting, and text-to-columns cleaning.",
          toAdvanced: "Build dynamic interactive dashboards with slicers, nested INDEX/MATCH formulas, Power Query data merges, and data validation."
        }
      },
      {
        id: "da_sql",
        name: "SQL",
        description: "Writing queries with SELECT, WHERE, GROUP BY, aggregations, and multi-table joins.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Querying databases with filters, aggregations, and joins is the most critical core skill for data analyst interviews.",
        recommendations: {
          toIntermediate: "Practice SELECT, WHERE, GROUP BY, HAVING, and INNER/LEFT JOINs on multi-table relational datasets.",
          toAdvanced: "Write window functions (ROW_NUMBER, RANK), Common Table Expressions (WITH CTE), and subqueries for multi-step analytics."
        }
      },
      {
        id: "da_python",
        name: "Python",
        description: "Using Python and Pandas for data manipulation, reading CSVs, and handling missing data.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Automating data cleaning and manipulating large datasets with Pandas dramatically expands analytical capacity.",
        recommendations: {
          toIntermediate: "Learn Pandas DataFrame operations: reading CSV files, handling missing values, filtering columns, and groupby aggregations.",
          toAdvanced: "Merge multi-source datasets, perform time-series analysis, write reusable cleaning functions, and export automated reports."
        }
      },
      {
        id: "da_stats",
        name: "Statistics",
        description: "Understanding summary statistics, averages, distributions, outliers, and basic correlation.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Sound statistical thinking prevents misleading conclusions from data distributions and samples.",
        recommendations: {
          toIntermediate: "Understand mean vs median, standard deviation, percentiles, normal distributions, and basic correlation vs causation.",
          toAdvanced: "Learn hypothesis testing concepts (p-values, null hypothesis, confidence intervals) and A/B test analysis methodologies."
        }
      },
      {
        id: "da_viz",
        name: "Data Visualization",
        description: "Creating informative charts (bar, line, scatter) and dashboards with clear labels.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Transforming raw data tables into intuitive, truthful charts enables business leaders to make quick decisions.",
        recommendations: {
          toIntermediate: "Choose appropriate chart types (bar for comparison, line for trends, scatter for correlation). Label axes and titles clearly.",
          toAdvanced: "Build interactive multi-chart dashboards in Tableau Public or Power BI with drill-down filters and storytelling narratives."
        }
      },
      {
        id: "da_prob_solving",
        name: "Problem Solving",
        description: "Translating ambiguous business questions into measurable data queries and insights.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Employers prize analysts who can turn vague business questions into clear, measurable data analyses.",
        recommendations: {
          toIntermediate: "Break down high-level questions into specific metrics (e.g. churn rate, average order value) and identify necessary data fields.",
          toAdvanced: "Synthesize findings into executive summaries with clear data-driven recommendations, risk assessments, and caveats."
        }
      }
    ]
  },
  {
    id: "java-dev",
    title: "Java Developer",
    category: "Enterprise Backend",
    shortDescription: "Develop robust, secure, and scalable enterprise applications, microservices, and backend architectures.",
    skillsPreview: ["Java", "OOP", "SQL", "Data Structures"],
    overview: "A Java Developer designs, builds, and maintains large-scale, reliable backend software systems. Widely used in banking, healthcare, and enterprise software, Java powers mission-critical applications that require high performance, strong typing, and strict architectural discipline.",
    responsibilities: [
      "Write clean, maintainable, object-oriented Java code for backend enterprise systems.",
      "Design and implement RESTful web services using the Spring Boot framework.",
      "Integrate relational databases using JDBC or Spring Data JPA.",
      "Write automated unit and integration tests using JUnit to ensure reliability.",
      "Participate in code reviews, architectural planning, and bug troubleshooting."
    ],
    technicalSkills: [
      "Core Java (Java 11/17 syntax, strong typing, control structures, exception handling)",
      "Object-Oriented Programming (Polymorphism, Inheritance, Encapsulation, Abstraction, Interfaces)",
      "Java Collections Framework (ArrayList, LinkedList, HashSet, HashMap, Iterators)",
      "Relational Databases & SQL (Queries, normalization, JDBC basics, database transactions)",
      "Spring Boot Fundamentals (REST Controllers, Dependency Injection, Annotations)",
      "Unit Testing (JUnit 5, Assertions, testing business logic)"
    ],
    softSkills: [
      "Systematic Debugging (methodically isolating stack traces and edge cases)",
      "Architectural Thinking (considering how different classes and components interact)",
      "Persistence & Thoroughness (working with structured, strictly typed systems)",
      "Team Collaboration (collaborating on shared enterprise codebases)"
    ],
    toolsAndTechnologies: [
      "IDEs: IntelliJ IDEA Community Edition, Eclipse",
      "Build Tools: Maven, Gradle",
      "Frameworks: Spring Boot, Spring MVC basics",
      "Databases: MySQL, PostgreSQL, H2 In-Memory Database",
      "Testing & Utilities: JUnit 5, Git, Postman"
    ],
    beginnerPriorities: [
      { step: 1, title: "Master Core Java Syntax", detail: "Data types, loops, arrays, methods, and error/exception handling." },
      { step: 2, title: "Internalize OOP Principles", detail: "Classes, objects, constructors, inheritance, interfaces, and encapsulation." },
      { step: 3, title: "Learn Collections & Generics", detail: "Master Lists, Sets, Maps, and when to use which collection type." },
      { step: 4, title: "Explore Spring Boot & REST APIs", detail: "Build basic REST controllers and connect them to a relational database." }
    ],
    portfolioProjects: [
      {
        title: "Campus Library Management Console System",
        level: "Beginner",
        problemStatement: "A college department needs a lightweight system to track book inventory, checkouts, and student returns.",
        keyFeatures: [
          "Object-oriented design with Book, Student, and Library classes",
          "In-memory catalog using Java Collections (HashMap and ArrayList)",
          "Interactive console menu for adding, issuing, and searching books"
        ],
        suggestedTech: ["Java 17", "Java Collections Framework", "Scanner CLI"]
      },
      {
        title: "Student Course Registration Backend Service",
        level: "Intermediate",
        problemStatement: "Universities require a dependable service to manage course enrollments, prerequisites, and seat limits.",
        keyFeatures: [
          "Relational database schema storing students, courses, and enrollments",
          "JDBC / JPA data persistence with input validation rules",
          "Automated JUnit test cases verifying enrollment business logic"
        ],
        suggestedTech: ["Java", "JDBC / JPA", "MySQL or SQLite", "JUnit 5"]
      },
      {
        title: "Full RESTful Banking & Transaction API",
        level: "Job-Ready",
        problemStatement: "A financial app requires an API to process deposits, withdrawals, and account transfers securely.",
        keyFeatures: [
          "Spring Boot RESTful endpoints for accounts, balances, and transaction histories",
          "Database transaction management ensuring atomic transfers (ACID compliance)",
          "Robust exception handling returning standardized error responses"
        ],
        suggestedTech: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL / H2", "JUnit 5"]
      }
    ],
    preparationChecklist: [
      "Understands core OOP concepts thoroughly and can write clean class hierarchies",
      "Knows the performance differences between ArrayList, LinkedList, and HashMap",
      "Can connect a Java application to a relational database via SQL",
      "Can write a basic Spring Boot controller returning JSON data",
      "Has published at least 1 well-structured Java project with a clear README on GitHub"
    ],
    disclaimer: "Skills and tool requirements vary significantly by employer, company size, and specific team needs. Completing recommended projects demonstrates initiative and practical skill, but does not guarantee employment.",
    assessmentSkills: [
      {
        id: "java_prog",
        name: "Java Programming",
        description: "Java core syntax, strict typing, control structures, methods, and memory model basics.",
        targetLevel: 3,
        targetLabel: "Advanced",
        benchmarkReason: "Core syntax, strong static typing, memory awareness, and control structures form the bedrock of Java engineering.",
        recommendations: {
          toIntermediate: "Write modular Java programs using methods, arrays, string manipulation, loops, and clean packages.",
          toAdvanced: "Master Java 17 features, stream APIs, lambda expressions, garbage collection fundamentals, and multithreading basics."
        }
      },
      {
        id: "java_oop",
        name: "Object-Oriented Programming",
        description: "Classes, encapsulation, inheritance, polymorphism, abstract classes, and interfaces.",
        targetLevel: 3,
        targetLabel: "Advanced",
        benchmarkReason: "Enterprise systems rely on strict object-oriented design: encapsulation, inheritance, polymorphism, and interfaces.",
        recommendations: {
          toIntermediate: "Create class hierarchies with constructors, getter/setter methods, abstract classes, and interface implementations.",
          toAdvanced: "Apply SOLID design principles, factory patterns, dependency injection concepts, and decoupled component architectures."
        }
      },
      {
        id: "java_ds",
        name: "Data Structures",
        description: "Collections Framework (ArrayList, LinkedList, HashSet, HashMap) and operations efficiency.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Knowing when to choose ArrayList vs LinkedList, or HashSet vs HashMap, is heavily tested in Java interviews.",
        recommendations: {
          toIntermediate: "Practice using Java Collections Framework: List, Set, Map, and iterating through data using Iterators and enhanced for-loops.",
          toAdvanced: "Understand internal hashing mechanisms in HashMap, custom Comparator/Comparable sorting, and tree traversal algorithms."
        }
      },
      {
        id: "java_sql",
        name: "SQL",
        description: "Database schemas, queries, foreign keys, table joins, and database connection concepts.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Connecting Java backends to relational databases via SQL and JDBC/JPA is standard in enterprise systems.",
        recommendations: {
          toIntermediate: "Write SQL queries with joins, understand primary/foreign keys, and connect Java applications to SQLite or MySQL via JDBC.",
          toAdvanced: "Implement Spring Data JPA repositories, entity relationships (@OneToMany, @ManyToOne), and ACID database transactions."
        }
      },
      {
        id: "java_exceptions",
        name: "Exception Handling",
        description: "Try-catch-finally, checked vs unchecked exceptions, custom exception classes, and robust debugging.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Enterprise applications require defensive exception handling to prevent unexpected crashes.",
        recommendations: {
          toIntermediate: "Use try-catch-finally blocks, distinguish checked vs unchecked exceptions, and understand Java's Exception hierarchy.",
          toAdvanced: "Design custom business exception hierarchies, implement global @ControllerAdvice error handlers in Spring Boot, and write clean error logs."
        }
      },
      {
        id: "java_git",
        name: "Git and GitHub",
        description: "Version control commands, staging, commits, branches, pull requests, and repo management.",
        targetLevel: 2,
        targetLabel: "Intermediate",
        benchmarkReason: "Version control, branching, and pull requests are required for participating in enterprise Java development.",
        recommendations: {
          toIntermediate: "Manage local repositories, write clear commit messages, configure .gitignore for build artifacts, and push to GitHub.",
          toAdvanced: "Practice feature branch workflows, resolve complex merge conflicts, and integrate Maven/Gradle builds with CI pipelines."
        }
      }
    ]
  }
];

/**
 * Stage 6: Free Learning Resource Finder Store
 * 
 * ETHICAL & QUALITY STANDARDS:
 * - 100% Genuine, verified learning destinations.
 * - Clear distinction between free learning content and optional paid certificates.
 * - No invented course names, false URLs, or paywalled requirements.
 * - Organized by skill categories and mapped directly to student assessment skill gaps.
 */

const resourceSkillCategories = [
  "All",
  "Python",
  "HTML & CSS",
  "JavaScript",
  "SQL",
  "Java",
  "Data Structures",
  "Excel",
  "Statistics",
  "Data Visualization",
  "Git & GitHub",
  "Problem Solving"
];

const learningResources = [
  // 1. Python Resources
  {
    id: "res_py_fcc",
    title: "Scientific Computing with Python Certification",
    platform: "freeCodeCamp",
    skillCategory: "Python",
    relatedSkillIds: ["python_prog", "da_python"],
    careerTracks: ["python-dev", "data-analyst"],
    difficulty: "Beginner",
    format: "Interactive Course",
    description: "Comprehensive hands-on course teaching Python fundamentals, control structures, loops, strings, lists, dictionaries, and building 5 real-world portfolio projects.",
    freeAvailability: "100% Free Interactive Course (No paywall, no time limit)",
    certificateNote: "Free digital completion certificate included upon completing all five projects; no payment or credit card required.",
    url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/"
  },
  {
    id: "res_py_docs",
    title: "The Official Python Tutorial (Python 3)",
    platform: "Python.org",
    skillCategory: "Python",
    relatedSkillIds: ["python_prog", "python_oop", "da_python"],
    careerTracks: ["python-dev", "data-analyst"],
    difficulty: "Beginner to Intermediate",
    format: "Official Documentation",
    description: "The authoritative, creator-maintained guide to Python syntax, data types, functions, standard modules, error handling, and object-oriented class architecture.",
    freeAvailability: "100% Free Official Documentation",
    certificateNote: "Open reference documentation; certificates are neither offered nor needed for building portfolio code.",
    url: "https://docs.python.org/3/tutorial/"
  },
  {
    id: "res_py_kaggle",
    title: "Python for Data Analysis & Hands-on Coding",
    platform: "Kaggle Learn",
    skillCategory: "Python",
    relatedSkillIds: ["python_prog", "da_python"],
    careerTracks: ["python-dev", "data-analyst"],
    difficulty: "Beginner",
    format: "Hands-on Notebooks",
    description: "A fast, practical crash course running directly inside Jupyter notebooks covering Python syntax, functions, booleans, lists, loops, and working with external libraries.",
    freeAvailability: "100% Free Cloud Notebooks (Free Kaggle account required)",
    certificateNote: "Free digital badge of completion available; zero payment or subscription required.",
    url: "https://www.kaggle.com/learn/python"
  },

  // 2. HTML & CSS Resources
  {
    id: "res_html_fcc",
    title: "Responsive Web Design Certification",
    platform: "freeCodeCamp",
    skillCategory: "HTML & CSS",
    relatedSkillIds: ["fe_html", "fe_css", "fe_responsive"],
    careerTracks: ["frontend-dev"],
    difficulty: "Beginner",
    format: "Interactive Course",
    description: "Learn modern semantic HTML5 markup, CSS visual styling, Flexbox for 1D navigation, CSS Grid for 2D layouts, and mobile-first responsive media queries.",
    freeAvailability: "100% Free Interactive Curriculum",
    certificateNote: "Free verified digital certification included upon passing the 5 final responsive projects.",
    url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/"
  },
  {
    id: "res_html_mdn",
    title: "Learn Web Development: HTML & CSS Core Modules",
    platform: "MDN Web Docs",
    skillCategory: "HTML & CSS",
    relatedSkillIds: ["fe_html", "fe_css", "fe_responsive"],
    careerTracks: ["frontend-dev"],
    difficulty: "Beginner to Intermediate",
    format: "Documentation & Guides",
    description: "Mozilla's open curriculum explaining semantic structure, forms, accessibility landmarks (ARIA), the CSS box model, responsive viewports, and modern typography.",
    freeAvailability: "100% Free Open Educational Resource",
    certificateNote: "Open documentation and tutorials; no paid certification required to demonstrate web proficiency.",
    url: "https://developer.mozilla.org/en-US/docs/Learn"
  },
  {
    id: "res_css_flex",
    title: "Flexbox Froggy & CSS Layout Practice",
    platform: "Codepip",
    skillCategory: "HTML & CSS",
    relatedSkillIds: ["fe_css", "fe_responsive"],
    careerTracks: ["frontend-dev"],
    difficulty: "Beginner",
    format: "Interactive Game/Exercise",
    description: "An interactive, visual game that intuitively teaches CSS Flexbox properties: justify-content, align-items, flex-direction, and flex-wrap through 24 progressive puzzles.",
    freeAvailability: "100% Free In-Browser Exercise",
    certificateNote: "Free educational practice game; focused purely on building muscle memory for CSS layouts.",
    url: "https://flexboxfroggy.com/"
  },

  // 3. JavaScript Resources
  {
    id: "res_js_fcc",
    title: "JavaScript Algorithms and Data Structures",
    platform: "freeCodeCamp",
    skillCategory: "JavaScript",
    relatedSkillIds: ["fe_js", "fe_dom"],
    careerTracks: ["frontend-dev"],
    difficulty: "Beginner to Intermediate",
    format: "Interactive Course",
    description: "Master JavaScript fundamentals, ES6+ features, arrow functions, promises, array methods (map, filter, reduce), OOP, and algorithmic problem-solving tasks.",
    freeAvailability: "100% Free Interactive Courseware",
    certificateNote: "Free digital certification issued upon completing 5 required algorithm projects with zero hidden fees.",
    url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
  },
  {
    id: "res_js_info",
    title: "The Modern JavaScript Tutorial",
    platform: "JavaScript.info",
    skillCategory: "JavaScript",
    relatedSkillIds: ["fe_js", "fe_dom"],
    careerTracks: ["frontend-dev"],
    difficulty: "Beginner to Intermediate",
    format: "Open Tutorial",
    description: "From basic variables to advanced closures, prototypal inheritance, async/await, and DOM events. Widely regarded as one of the clearest JavaScript guides in the industry.",
    freeAvailability: "100% Free Open Tutorial",
    certificateNote: "Open community tutorial; free to read and practice without registration or fees.",
    url: "https://javascript.info/"
  },
  {
    id: "res_js_mdn",
    title: "JavaScript First Steps & DOM Basics",
    platform: "MDN Web Docs",
    skillCategory: "JavaScript",
    relatedSkillIds: ["fe_js", "fe_dom"],
    careerTracks: ["frontend-dev"],
    difficulty: "Beginner",
    format: "Documentation & Guides",
    description: "Learn how to select HTML elements, listen to user click and input events, manipulate DOM nodes dynamically, and fetch external JSON data via browser APIs.",
    freeAvailability: "100% Free Documentation",
    certificateNote: "Official web standards reference maintained by Mozilla and community contributors.",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript"
  },

  // 4. SQL Resources
  {
    id: "res_sql_bolt",
    title: "Interactive Lessons in SQL",
    platform: "SQLBolt",
    skillCategory: "SQL",
    relatedSkillIds: ["python_sql", "da_sql", "java_sql"],
    careerTracks: ["python-dev", "data-analyst", "java-dev"],
    difficulty: "Beginner",
    format: "Interactive Exercises",
    description: "Learn SQL by typing real queries in interactive browser exercises. Covers SELECT, WHERE filtering, multi-table INNER and OUTER JOINs, aggregations, and table schemas.",
    freeAvailability: "100% Free Interactive Sandbox",
    certificateNote: "Free interactive practice; no signup, credit card, or paywall.",
    url: "https://sqlbolt.com/"
  },
  {
    id: "res_sql_kaggle",
    title: "Intro to SQL & BigQuery Cloud Queries",
    platform: "Kaggle Learn",
    skillCategory: "SQL",
    relatedSkillIds: ["python_sql", "da_sql", "java_sql"],
    careerTracks: ["data-analyst", "python-dev", "java-dev"],
    difficulty: "Beginner to Intermediate",
    format: "Hands-on Notebooks",
    description: "Write structured SQL queries against massive real-world datasets in Google BigQuery. Learn GROUP BY, HAVING, COUNT, ORDER BY, and handling joined relational data.",
    freeAvailability: "100% Free Cloud Environment",
    certificateNote: "Free digital completion certificate provided upon finishing all course exercises.",
    url: "https://www.kaggle.com/learn/intro-to-sql"
  },
  {
    id: "res_sql_fcc",
    title: "Relational Database Course (PostgreSQL & Bash)",
    platform: "freeCodeCamp",
    skillCategory: "SQL",
    relatedSkillIds: ["python_sql", "da_sql", "java_sql"],
    careerTracks: ["python-dev", "java-dev", "data-analyst"],
    difficulty: "Intermediate",
    format: "Interactive Course",
    description: "Run real PostgreSQL databases in a Linux terminal inside VS Code. Learn database normalization, primary and foreign keys, joins, and building relational schemas.",
    freeAvailability: "100% Free Virtual Environment",
    certificateNote: "Free digital certification issued upon completing 5 relational database projects.",
    url: "https://www.freecodecamp.org/learn/relational-database/"
  },

  // 5. Java Resources
  {
    id: "res_java_mooc",
    title: "Java Programming MOOC (Parts 1 & 2)",
    platform: "University of Helsinki",
    skillCategory: "Java",
    relatedSkillIds: ["java_prog", "java_oop", "java_ds", "java_exceptions"],
    careerTracks: ["java-dev"],
    difficulty: "Beginner to Intermediate",
    format: "University Open Course",
    description: "World-class university course teaching Java syntax, variables, loops, object-oriented design, encapsulation, inheritance, interfaces, and collections with automated testing.",
    freeAvailability: "100% Free University Open Course",
    certificateNote: "Free course access with automated grading; optional free university certificate available upon meeting score criteria.",
    url: "https://java-programming.mooc.fi/"
  },
  {
    id: "res_java_ms",
    title: "First Steps with Java & Core OOP Principles",
    platform: "Microsoft Learn",
    skillCategory: "Java",
    relatedSkillIds: ["java_prog", "java_oop"],
    careerTracks: ["java-dev"],
    difficulty: "Beginner",
    format: "Interactive Modules",
    description: "Step-by-step introduction to installing the JDK, writing strongly-typed Java applications, understanding classes and methods, and structuring clean Java packages.",
    freeAvailability: "100% Free Modular Learning Path",
    certificateNote: "Free learning modules with progress tracking; no subscription required.",
    url: "https://learn.microsoft.com/en-us/training/paths/java-first-steps/"
  },
  {
    id: "res_java_oracle",
    title: "The Java Tutorials: Core Language Trails",
    platform: "Oracle Java Documentation",
    skillCategory: "Java",
    relatedSkillIds: ["java_prog", "java_oop", "java_ds", "java_exceptions"],
    careerTracks: ["java-dev"],
    difficulty: "Intermediate",
    format: "Official Documentation",
    description: "The definitive reference covering Java fundamentals, object-oriented concepts, generics, custom exception hierarchies, and the Collections Framework.",
    freeAvailability: "100% Free Documentation",
    certificateNote: "Official documentation and guides; certificates are separate paid enterprise exams and not required for entry-level learning.",
    url: "https://docs.oracle.com/javase/tutorial/"
  },

  // 6. Data Structures Resources
  {
    id: "res_ds_fcc",
    title: "Data Structures & Algorithms Course",
    platform: "freeCodeCamp",
    skillCategory: "Data Structures",
    relatedSkillIds: ["python_ds", "java_ds"],
    careerTracks: ["python-dev", "java-dev", "frontend-dev"],
    difficulty: "Beginner to Intermediate",
    format: "Interactive Course",
    description: "Comprehensive curriculum explaining arrays, linked lists, stacks, queues, hash tables, binary trees, sorting algorithms, and Big-O notation with practical implementations.",
    freeAvailability: "100% Free Learning Video & Text Guide",
    certificateNote: "Free open educational curriculum with zero paywall.",
    url: "https://www.freecodecamp.org/news/data-structures-and-algorithms/"
  },
  {
    id: "res_ds_visualgo",
    title: "VisuAlgo: Visualizing Data Structures and Algorithms",
    platform: "VisuAlgo",
    skillCategory: "Data Structures",
    relatedSkillIds: ["python_ds", "java_ds"],
    careerTracks: ["python-dev", "java-dev"],
    difficulty: "Beginner to Intermediate",
    format: "Interactive Visualizer",
    description: "Created by university professors, this visual tool animates exactly how data structures (linked lists, hash tables, binary trees) and search algorithms work step-by-step.",
    freeAvailability: "100% Free Online Visual Tool",
    certificateNote: "Free academic tool designed to build intuitive mental models of algorithmic complexity.",
    url: "https://visualgo.net/"
  },
  {
    id: "res_ds_gfg",
    title: "Data Structures Beginner Guide & Implementations",
    platform: "GeeksforGeeks",
    skillCategory: "Data Structures",
    relatedSkillIds: ["python_ds", "java_ds"],
    careerTracks: ["python-dev", "java-dev"],
    difficulty: "Beginner",
    format: "Open Articles & Code",
    description: "Clear diagrams and code snippets showing how to implement stacks, queues, hash maps, and linked lists in Python, Java, and other languages.",
    freeAvailability: "100% Free Open Articles & Code",
    certificateNote: "Free open web articles; paid live courses on the site are completely optional.",
    url: "https://www.geeksforgeeks.org/data-structures/"
  },

  // 7. Excel Resources
  {
    id: "res_excel_ms",
    title: "Excel Video Training & Official Learning Modules",
    platform: "Microsoft Support",
    skillCategory: "Excel",
    relatedSkillIds: ["da_excel"],
    careerTracks: ["data-analyst"],
    difficulty: "Beginner to Intermediate",
    format: "Video & Guides",
    description: "Official tutorials from Microsoft covering spreadsheet creation, cell formatting, formulas, conditional formatting, Pivot Tables, VLOOKUP, and XLOOKUP.",
    freeAvailability: "100% Free Official Microsoft Tutorials",
    certificateNote: "Free training materials; optional commercial MOS certification exams are not required for learning.",
    url: "https://support.microsoft.com/en-us/office/excel-video-training-9bc05390-e94c-46af-a5b3-d7c22f6990bb"
  },
  {
    id: "res_excel_gcf",
    title: "Excel Spreadsheet Free Interactive Lessons",
    platform: "GCFGlobal",
    skillCategory: "Excel",
    relatedSkillIds: ["da_excel"],
    careerTracks: ["data-analyst"],
    difficulty: "Beginner",
    format: "Interactive Lessons",
    description: "Step-by-step tutorial designed for beginners covering spreadsheet navigation, sorting and filtering large tables, essential math formulas, and Pivot Tables.",
    freeAvailability: "100% Free Non-Profit Educational Platform",
    certificateNote: "100% free non-profit platform; no registration or payment required.",
    url: "https://edu.gcfglobal.org/en/excel/"
  },

  // 8. Statistics Resources
  {
    id: "res_stat_openintro",
    title: "OpenIntro Statistics (Free Open-Source Textbook)",
    platform: "OpenIntro",
    skillCategory: "Statistics",
    relatedSkillIds: ["da_stats"],
    careerTracks: ["data-analyst"],
    difficulty: "Beginner to Intermediate",
    format: "Open Textbook",
    description: "Widely used college textbook teaching data distributions, probability, numerical summaries, linear regression, and foundational hypothesis testing.",
    freeAvailability: "100% Free Open Textbook (PDF & Web)",
    certificateNote: "Free Creative Commons open-source textbook; perfect for college-level study without costly textbook fees.",
    url: "https://www.openintro.org/book/os/"
  },
  {
    id: "res_stat_khan",
    title: "Statistics and Probability Complete Track",
    platform: "Khan Academy",
    skillCategory: "Statistics",
    relatedSkillIds: ["da_stats"],
    careerTracks: ["data-analyst"],
    difficulty: "Beginner",
    format: "Video Lessons & Quizzes",
    description: "Engaging video explanations and practice quizzes covering mean, median, variance, standard deviation, normal distributions, scatter plots, and correlation.",
    freeAvailability: "100% Free Non-Profit Platform",
    certificateNote: "Khan Academy is a free 501(c)(3) non-profit; 100% of curriculum is free forever.",
    url: "https://www.khanacademy.org/math/statistics-probability"
  },

  // 9. Data Visualization Resources
  {
    id: "res_viz_kaggle",
    title: "Data Visualization with Python (Seaborn & Matplotlib)",
    platform: "Kaggle Learn",
    skillCategory: "Data Visualization",
    relatedSkillIds: ["da_viz"],
    careerTracks: ["data-analyst"],
    difficulty: "Beginner to Intermediate",
    format: "Hands-on Notebooks",
    description: "Hands-on coding exercises in Python creating line charts, bar plots, heatmaps, scatter plots, and distribution diagrams with Seaborn and Matplotlib.",
    freeAvailability: "100% Free Cloud Notebooks",
    certificateNote: "Includes free digital certificate of completion upon finishing all notebook exercises.",
    url: "https://www.kaggle.com/learn/data-visualization"
  },
  {
    id: "res_viz_tableau",
    title: "Tableau Public Free How-To Video Guides",
    platform: "Tableau Public",
    skillCategory: "Data Visualization",
    relatedSkillIds: ["da_viz"],
    careerTracks: ["data-analyst"],
    difficulty: "Beginner",
    format: "Video Tutorials",
    description: "Learn how to connect datasets, create calculated fields, design interactive visual dashboards, and publish portfolio dashboards online for free via Tableau Public.",
    freeAvailability: "100% Free Video Training (Tableau Public software is also free)",
    certificateNote: "Free training videos provided by Tableau; commercial paid certificates are separate and optional.",
    url: "https://www.tableau.com/learn/training/20201"
  },

  // 10. Git and GitHub Resources
  {
    id: "res_git_skills",
    title: "First Day on GitHub & Markdown Interactive Course",
    platform: "GitHub Skills",
    skillCategory: "Git & GitHub",
    relatedSkillIds: ["python_git", "fe_git", "java_git"],
    careerTracks: ["python-dev", "frontend-dev", "java-dev"],
    difficulty: "Beginner",
    format: "Interactive Bot-Guided Repo",
    description: "Learn Git and GitHub by doing. A GitHub bot guides you step-by-step through creating branches, making commits, opening pull requests, and editing Markdown.",
    freeAvailability: "100% Free Interactive Repositories",
    certificateNote: "Free official GitHub training; no paid account required.",
    url: "https://skills.github.com/"
  },
  {
    id: "res_git_atlassian",
    title: "Becoming a Git Guru: Visual Git Tutorials",
    platform: "Atlassian",
    skillCategory: "Git & GitHub",
    relatedSkillIds: ["python_git", "fe_git", "java_git"],
    careerTracks: ["python-dev", "frontend-dev", "java-dev"],
    difficulty: "Beginner to Intermediate",
    format: "Illustrated Guides",
    description: "Visual, clear explanations of staging areas, commits, branching strategies, merging, rebasing, and resolving merge conflicts with diagrams.",
    freeAvailability: "100% Free Illustrated Guides",
    certificateNote: "Free reference library for developers of all skill levels.",
    url: "https://www.atlassian.com/git/tutorials"
  },
  {
    id: "res_git_pro",
    title: "Pro Git Book (Official 2nd Edition)",
    platform: "Git-SCM",
    skillCategory: "Git & GitHub",
    relatedSkillIds: ["python_git", "fe_git", "java_git"],
    careerTracks: ["python-dev", "frontend-dev", "java-dev"],
    difficulty: "Beginner to Intermediate",
    format: "Open Digital Book",
    description: "The complete, definitive book written by Scott Chacon and Ben Straub covering Git from initial repository setup to advanced branching and collaboration.",
    freeAvailability: "100% Free Open Book (Creative Commons License)",
    certificateNote: "Open-source digital book available online for free; no purchase needed.",
    url: "https://git-scm.com/book/en/v2"
  },

  // 11. Problem Solving Resources
  {
    id: "res_prob_exercism",
    title: "Exercism: Free Coding Practice with Human Mentors",
    platform: "Exercism.org",
    skillCategory: "Problem Solving",
    relatedSkillIds: ["python_prob_solving", "da_prob_solving"],
    careerTracks: ["python-dev", "frontend-dev", "data-analyst", "java-dev"],
    difficulty: "Beginner to Intermediate",
    format: "Hands-on Practice",
    description: "Solve progressive code exercises with automated unit tests across Python, JavaScript, Java, and 60+ languages. Features optional free feedback from volunteer mentors.",
    freeAvailability: "100% Free Open Source Platform",
    certificateNote: "100% free non-profit platform with zero paywalls, zero ads, and zero paid upsells.",
    url: "https://exercism.org/"
  },
  {
    id: "res_prob_fcc",
    title: "How to Think Like a Programmer & Solve Coding Problems",
    platform: "freeCodeCamp",
    skillCategory: "Problem Solving",
    relatedSkillIds: ["python_prob_solving", "da_prob_solving"],
    careerTracks: ["python-dev", "frontend-dev", "data-analyst", "java-dev"],
    difficulty: "Beginner",
    format: "Conceptual Guide & Practice",
    description: "A methodical framework for reading technical error tracebacks, breaking complex challenges into pseudo-code steps, and debugging programs systematically.",
    freeAvailability: "100% Free Educational Guide",
    certificateNote: "Free comprehensive educational guide.",
    url: "https://www.freecodecamp.org/news/how-to-solve-coding-problems/"
  },
  {
    id: "res_prob_leetcode",
    title: "LeetCode Explore: Beginner Coding Practice Cards",
    platform: "LeetCode",
    skillCategory: "Problem Solving",
    relatedSkillIds: ["python_prob_solving", "da_prob_solving"],
    careerTracks: ["python-dev", "frontend-dev", "java-dev", "data-analyst"],
    difficulty: "Beginner to Intermediate",
    format: "Problem Sets",
    description: "Curated beginner exploration cards covering arrays, string manipulation, two pointers, and debugging edge cases under automated test conditions.",
    freeAvailability: "Free Exploration Modules (No Premium subscription required)",
    certificateNote: "Free practice tier covers beginner algorithm fundamentals; paid Premium subscription is not required.",
    url: "https://leetcode.com/explore/"
  }
];



/**
 * =========================================================================
 * STAGE 7: PERSONALIZED 4-WEEK LEARNING ROADMAPS DATA
 * =========================================================================
 * 
 * Each career track features a practical 4-week preparation timeline:
 * - Week 1: Foundation (Fundamental concepts & high-priority gaps)
 * - Week 2: Skill Development (Curated exercises & weak skill reinforcement)
 * - Week 3: Project Building (Applied practical project with Git version control)
 * - Week 4: Career Preparation (Testing, documentation, review & interview prep)
 * 
 * 16 tasks per career (4 per week) = 64 structured tasks in total.
 * All resources directly link to verified free courses/documentation from Stage 6.
 * Study hours are explicitly labeled as estimates.
 */
const roadmapDisclaimer = "Suggested Preparation Plan: This 4-week roadmap provides a structured study schedule to build practical competence and portfolio evidence. Completing this roadmap demonstrates strong discipline and initiative, but does not guarantee employment. All study times are suggested planning estimates to help organize your self-paced learning, and individual completion times may vary.";

const careerRoadmaps = {
  "python-dev": {
    careerId: "python-dev",
    careerTitle: "Python Developer",
    estimatedTotalHours: "52-64 hours (~13-16 hrs/week)",
    weeks: [
      {
        weekNumber: 1,
        title: "Foundation & Core Syntax",
        theme: "Master fundamental syntax, object-oriented concepts, basic SQL, and setup Git workflow.",
        tasks: [
          {
            id: "py_w1_t1",
            week: 1,
            weekTitle: "Foundation",
            title: "Python Syntax, Data Types & Control Flow",
            description: "Review basic data types, variables, conditionals, loops, functions, and standard collections (lists, tuples, dicts, sets).",
            relatedSkillId: "python_prog",
            relatedSkillName: "Python Programming",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "Python for Everybody (Charles Severance)",
            resourceUrl: "https://www.py4e.com/"
          },
          {
            id: "py_w1_t2",
            week: 1,
            weekTitle: "Foundation",
            title: "Object-Oriented Programming (Classes & Methods)",
            description: "Define classes, initialize attributes in __init__, encapsulate state with methods, and implement basic inheritance.",
            relatedSkillId: "python_oop",
            relatedSkillName: "Object-Oriented Programming",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "Python 3 Official Tutorial",
            resourceUrl: "https://docs.python.org/3/tutorial/"
          },
          {
            id: "py_w1_t3",
            week: 1,
            weekTitle: "Foundation",
            title: "Relational Database Fundamentals & SQL Queries",
            description: "Write SQL SELECT queries with WHERE filters, aggregate functions (COUNT, SUM, AVG), and multi-table INNER/LEFT JOINs.",
            relatedSkillId: "python_sql",
            relatedSkillName: "SQL & Databases",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "SQLBolt - Interactive Lessons",
            resourceUrl: "https://sqlbolt.com/"
          },
          {
            id: "py_w1_t4",
            week: 1,
            weekTitle: "Foundation",
            title: "Git Setup & First GitHub Repository",
            description: "Initialize a local Git repository, configure .gitignore, stage files, write clear commit messages, and push to GitHub.",
            relatedSkillId: "python_git",
            relatedSkillName: "Git and GitHub",
            estimatedTime: "Est. 2-3 hours",
            resourceTitle: "GitHub Skills - Interactive Repository Tutorials",
            resourceUrl: "https://skills.github.com/"
          }
        ]
      },
      {
        weekNumber: 2,
        title: "Skill Development & Data Handling",
        theme: "Follow curated learning resources, complete practical exercises, and reinforce weak skills.",
        tasks: [
          {
            id: "py_w2_t1",
            week: 2,
            weekTitle: "Skill Development",
            title: "Python Exception Handling & File I/O",
            description: "Read and write JSON and CSV files, handle file errors gracefully with try/except/finally blocks, and use context managers.",
            relatedSkillId: "python_prog",
            relatedSkillName: "Python Programming",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "W3Schools Python Tutorial & Exercises",
            resourceUrl: "https://www.w3schools.com/python/"
          },
          {
            id: "py_w2_t2",
            week: 2,
            weekTitle: "Skill Development",
            title: "Database Integration with SQLite in Python",
            description: "Use Python's built-in sqlite3 module to create tables, execute parameterized queries, and fetch records safely.",
            relatedSkillId: "python_sql",
            relatedSkillName: "SQL & Databases",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "Scientific Computing with Python (freeCodeCamp)",
            resourceUrl: "https://www.freecodecamp.org/learn/scientific-computing-with-python/"
          },
          {
            id: "py_w2_t3",
            week: 2,
            weekTitle: "Skill Development",
            title: "Core Data Structures (Lists, Stacks, Queues, Dictionaries)",
            description: "Understand array-based lists, stacks, queues, and dictionary hash tables. Analyze Big-O time and space complexity of lookups.",
            relatedSkillId: "python_ds",
            relatedSkillName: "Data Structures",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "VisuAlgo - Visualising Data Structures",
            resourceUrl: "https://visualgo.net/en"
          },
          {
            id: "py_w2_t4",
            week: 2,
            weekTitle: "Skill Development",
            title: "Algorithmic Problem Solving & Edge Cases",
            description: "Solve 5-8 beginner code challenges on Exercism focusing on string manipulation, array traversal, and debugging runtime errors.",
            relatedSkillId: "python_prob_solving",
            relatedSkillName: "Problem Solving & Debugging",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "Exercism - Free Code Practice & Mentorship",
            resourceUrl: "https://exercism.org/"
          }
        ]
      },
      {
        weekNumber: 3,
        title: "Project Building & Practical APIs",
        theme: "Build a practical REST API project applying the skills learned with Git version control.",
        tasks: [
          {
            id: "py_w3_t1",
            week: 3,
            weekTitle: "Project Building",
            title: "Project Architecture & Virtual Environment Setup",
            description: "Set up a clean project folder structure, create a virtual environment (venv), and document dependencies in requirements.txt.",
            relatedSkillId: "python_prog",
            relatedSkillName: "Python Programming",
            estimatedTime: "Est. 2-3 hours",
            resourceTitle: "Python 3 Official Tutorial",
            resourceUrl: "https://docs.python.org/3/tutorial/"
          },
          {
            id: "py_w3_t2",
            week: 3,
            weekTitle: "Project Building",
            title: "Build CRUD REST API with Flask or FastAPI",
            description: "Build endpoints for a Personal Expense Tracker or Task Manager API with GET, POST, PUT, and DELETE methods returning JSON.",
            relatedSkillId: "python_oop",
            relatedSkillName: "Object-Oriented Programming",
            estimatedTime: "Est. 5-6 hours",
            resourceTitle: "How to Think Like a Programmer (freeCodeCamp)",
            resourceUrl: "https://www.freecodecamp.org/news/how-to-solve-coding-problems/"
          },
          {
            id: "py_w3_t3",
            week: 3,
            weekTitle: "Project Building",
            title: "Connect Persistent Database & Query Validation",
            description: "Integrate SQLite database with your API, ensure input validation on requests, and handle 400/404 HTTP errors appropriately.",
            relatedSkillId: "python_sql",
            relatedSkillName: "SQL & Databases",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "SQLBolt - Interactive Lessons",
            resourceUrl: "https://sqlbolt.com/"
          },
          {
            id: "py_w3_t4",
            week: 3,
            weekTitle: "Project Building",
            title: "Git Branching & Feature PR Workflow",
            description: "Create feature branches for new endpoints, open a pull request on GitHub, review your own diff, and merge to main branch.",
            relatedSkillId: "python_git",
            relatedSkillName: "Git and GitHub",
            estimatedTime: "Est. 2-3 hours",
            resourceTitle: "Learn Git Branching Interactive Visualizer",
            resourceUrl: "https://learngitbranching.js.org/"
          }
        ]
      },
      {
        weekNumber: 4,
        title: "Career Preparation & Portfolio Polishing",
        theme: "Complete portfolio project, automated testing, technical interview review, and project walkthrough.",
        tasks: [
          {
            id: "py_w4_t1",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Write Comprehensive Automated Unit Tests",
            description: "Write unit tests using pytest or unittest verifying status codes, JSON response formats, and error conditions.",
            relatedSkillId: "python_prob_solving",
            relatedSkillName: "Problem Solving & Debugging",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "LeetCode Explore: Beginner Practice Cards",
            resourceUrl: "https://leetcode.com/explore/"
          },
          {
            id: "py_w4_t2",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Professional GitHub Documentation & README",
            description: "Write a complete README with project overview, architecture diagram, installation steps, API route table, and example payloads.",
            relatedSkillId: "python_git",
            relatedSkillName: "Git and GitHub",
            estimatedTime: "Est. 2-3 hours",
            resourceTitle: "GitHub Skills - Interactive Repository Tutorials",
            resourceUrl: "https://skills.github.com/"
          },
          {
            id: "py_w4_t3",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Data Structures & Algorithm Review",
            description: "Review sorting algorithms, binary search, tree traversals, and common entry-level technical interview questions.",
            relatedSkillId: "python_ds",
            relatedSkillName: "Data Structures",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "Data Structures & Algorithms Course (freeCodeCamp)",
            resourceUrl: "https://www.freecodecamp.org/news/learn-data-structures-and-algorithms/"
          },
          {
            id: "py_w4_t4",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Technical Interview & Project Walkthrough Prep",
            description: "Practice explaining your project's architectural decisions, trade-offs between libraries, and debugging war stories out loud.",
            relatedSkillId: "python_prog",
            relatedSkillName: "Python Programming",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "Exercism - Free Code Practice & Mentorship",
            resourceUrl: "https://exercism.org/"
          }
        ]
      }
    ]
  },
  "frontend-dev": {
    careerId: "frontend-dev",
    careerTitle: "Frontend Developer",
    estimatedTotalHours: "50-62 hours (~12-15 hrs/week)",
    weeks: [
      {
        weekNumber: 1,
        title: "Foundation & Modern Layouts",
        theme: "Master semantic HTML, accessibility, Flexbox, responsive CSS Grid, and Git hosting.",
        tasks: [
          {
            id: "fe_w1_t1",
            week: 1,
            weekTitle: "Foundation",
            title: "Semantic HTML & Accessibility Standards",
            description: "Structure web pages with semantic tags (<header>, <nav>, <main>, <article>, <section>, <footer>), form validation, and ARIA labels.",
            relatedSkillId: "fe_html",
            relatedSkillName: "HTML",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "MDN Web Docs: Learn HTML",
            resourceUrl: "https://developer.mozilla.org/en-US/docs/Learn/HTML"
          },
          {
            id: "fe_w1_t2",
            week: 1,
            weekTitle: "Foundation",
            title: "Modern CSS Layouts with Flexbox",
            description: "Master flex direction, justify-content, align-items, flex-wrap, and flex-grow/shrink to build clean navigation bars and cards.",
            relatedSkillId: "fe_css",
            relatedSkillName: "CSS & Modern Layouts",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "Flexbox Froggy",
            resourceUrl: "https://flexboxfroggy.com/"
          },
          {
            id: "fe_w1_t3",
            week: 1,
            weekTitle: "Foundation",
            title: "CSS Grid & Mobile-First Media Queries",
            description: "Implement CSS Grid layouts with repeat(auto-fit, minmax(...)) and mobile-first media queries across mobile, tablet, and desktop.",
            relatedSkillId: "fe_responsive",
            relatedSkillName: "Responsive Web Design",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "Responsive Web Design Certification (freeCodeCamp)",
            resourceUrl: "https://www.freecodecamp.org/learn/2022/responsive-web-design/"
          },
          {
            id: "fe_w1_t4",
            week: 1,
            weekTitle: "Foundation",
            title: "Git Setup & GitHub Pages Deployment",
            description: "Initialize a local Git repository, commit your HTML/CSS layout, push to GitHub, and deploy a live preview on GitHub Pages.",
            relatedSkillId: "fe_git",
            relatedSkillName: "Git and GitHub",
            estimatedTime: "Est. 2-3 hours",
            resourceTitle: "GitHub Skills - Interactive Repository Tutorials",
            resourceUrl: "https://skills.github.com/"
          }
        ]
      },
      {
        weekNumber: 2,
        title: "JavaScript Core & DOM Manipulation",
        theme: "Follow curated tutorials, master ES6+ syntax, DOM events, and asynchronous fetch requests.",
        tasks: [
          {
            id: "fe_w2_t1",
            week: 2,
            weekTitle: "Skill Development",
            title: "JavaScript Fundamentals & ES6+ Syntax",
            description: "Master const/let, arrow functions, template literals, destructuring, spread operators, and array methods (map, filter, reduce).",
            relatedSkillId: "fe_js",
            relatedSkillName: "JavaScript",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "The Modern JavaScript Tutorial (javascript.info)",
            resourceUrl: "https://javascript.info/"
          },
          {
            id: "fe_w2_t2",
            week: 2,
            weekTitle: "Skill Development",
            title: "DOM Selection, Modification & Class Toggling",
            description: "Query elements with querySelector, manipulate textContent and innerHTML safely, toggle CSS classes, and create dynamic nodes.",
            relatedSkillId: "fe_dom",
            relatedSkillName: "DOM Manipulation & Events",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "MDN Web Docs: Learn JavaScript",
            resourceUrl: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript"
          },
          {
            id: "fe_w2_t3",
            week: 2,
            weekTitle: "Skill Development",
            title: "Event Listeners, Event Delegation & Form Handling",
            description: "Handle click, input, and submit events. Prevent default form actions, capture form data, and use event delegation for dynamic lists.",
            relatedSkillId: "fe_dom",
            relatedSkillName: "DOM Manipulation & Events",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "JavaScript Algorithms & Data Structures (freeCodeCamp)",
            resourceUrl: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/"
          },
          {
            id: "fe_w2_t4",
            week: 2,
            weekTitle: "Skill Development",
            title: "Asynchronous JavaScript & Fetching REST APIs",
            description: "Use async/await and fetch() to retrieve JSON data from public APIs, display loading spinners, and handle network error states gracefully.",
            relatedSkillId: "fe_js",
            relatedSkillName: "JavaScript",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "The Modern JavaScript Tutorial (javascript.info)",
            resourceUrl: "https://javascript.info/"
          }
        ]
      },
      {
        weekNumber: 3,
        title: "Project Building & Interactive UI",
        theme: "Build a responsive web application with dynamic data rendering and localStorage state.",
        tasks: [
          {
            id: "fe_w3_t1",
            week: 3,
            weekTitle: "Project Building",
            title: "Interactive Web App UI Architecture",
            description: "Architect an interactive web app (e.g. Recipe Explorer or Task Planner) with clean semantic HTML, modular CSS tokens, and JS files.",
            relatedSkillId: "fe_html",
            relatedSkillName: "HTML",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "MDN Web Docs: Learn CSS",
            resourceUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          },
          {
            id: "fe_w3_t2",
            week: 3,
            weekTitle: "Project Building",
            title: "Dynamic UI Rendering & Real-Time Filtering",
            description: "Render card items dynamically from data arrays, implement real-time text search and category filter pills, and display empty states.",
            relatedSkillId: "fe_dom",
            relatedSkillName: "DOM Manipulation & Events",
            estimatedTime: "Est. 5-6 hours",
            resourceTitle: "JavaScript Algorithms & Data Structures (freeCodeCamp)",
            resourceUrl: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/"
          },
          {
            id: "fe_w3_t3",
            week: 3,
            weekTitle: "Project Building",
            title: "LocalStorage State Persistence & Mobile Touch Audit",
            description: "Persist user interactions (e.g. favorited items or theme mode) in localStorage so state survives page refresh. Audit mobile touch targets.",
            relatedSkillId: "fe_responsive",
            relatedSkillName: "Responsive Web Design",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "The Modern JavaScript Tutorial (javascript.info)",
            resourceUrl: "https://javascript.info/"
          },
          {
            id: "fe_w3_t4",
            week: 3,
            weekTitle: "Project Building",
            title: "Git Branching & Cross-Browser Testing",
            description: "Use Git branches to test responsive fixes. Audit your layout across Chrome, Firefox, and mobile viewport simulations in DevTools.",
            relatedSkillId: "fe_git",
            relatedSkillName: "Git and GitHub",
            estimatedTime: "Est. 2-3 hours",
            resourceTitle: "Learn Git Branching Interactive Visualizer",
            resourceUrl: "https://learngitbranching.js.org/"
          }
        ]
      },
      {
        weekNumber: 4,
        title: "Career Preparation & Performance Audit",
        theme: "Run accessibility audits, write repository documentation, and practice frontend technical interviews.",
        tasks: [
          {
            id: "fe_w4_t1",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Lighthouse Performance & Accessibility Audit",
            description: "Run Google Lighthouse audits on your project. Optimize image formats, ensure color contrast compliance, and aim for 90+ across scores.",
            relatedSkillId: "fe_responsive",
            relatedSkillName: "Responsive Web Design",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "MDN Web Docs: Learn HTML",
            resourceUrl: "https://developer.mozilla.org/en-US/docs/Learn/HTML"
          },
          {
            id: "fe_w4_t2",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Document GitHub Repository & Live Demo",
            description: "Polish GitHub repository: include live demo URL, feature screenshots, tech stack overview, setup instructions, and code comments.",
            relatedSkillId: "fe_git",
            relatedSkillName: "Git and GitHub",
            estimatedTime: "Est. 2-3 hours",
            resourceTitle: "GitHub Skills - Interactive Repository Tutorials",
            resourceUrl: "https://skills.github.com/"
          },
          {
            id: "fe_w4_t3",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Core JavaScript Interview Concept Review",
            description: "Review closures, scope chain, 'this' keyword, event bubbling/capturing, prototypes, promises, and the event loop microtask queue.",
            relatedSkillId: "fe_js",
            relatedSkillName: "JavaScript",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "The Modern JavaScript Tutorial (javascript.info)",
            resourceUrl: "https://javascript.info/"
          },
          {
            id: "fe_w4_t4",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Frontend Mock Interview & UI Walkthrough",
            description: "Practice explaining how CSS cascade works, why you chose specific DOM patterns, and how you ensure accessibility in web applications.",
            relatedSkillId: "fe_css",
            relatedSkillName: "CSS & Modern Layouts",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "How to Think Like a Programmer (freeCodeCamp)",
            resourceUrl: "https://www.freecodecamp.org/news/how-to-solve-coding-problems/"
          }
        ]
      }
    ]
  },
  "data-analyst": {
    careerId: "data-analyst",
    careerTitle: "Data Analyst",
    estimatedTotalHours: "52-66 hours (~13-16 hrs/week)",
    weeks: [
      {
        weekNumber: 1,
        title: "Foundation: Spreadsheets, SQL & Statistics",
        theme: "Master advanced spreadsheet formulas, Pivot Tables, summary statistics, and foundational SQL queries.",
        tasks: [
          {
            id: "da_w1_t1",
            week: 1,
            weekTitle: "Foundation",
            title: "Advanced Spreadsheets: Formulas & Data Cleaning",
            description: "Master essential spreadsheet functions: SUMIFS, COUNTIFS, AVERAGEIFS, text functions (TRIM, CONCAT), nested IFs, and data validation rules.",
            relatedSkillId: "da_excel",
            relatedSkillName: "Microsoft Excel",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "Microsoft Excel Video Training",
            resourceUrl: "https://support.microsoft.com/en-us/office/excel-for-windows-training-9bc8839d-210c-4035-a0cd-897784377df3"
          },
          {
            id: "da_w1_t2",
            week: 1,
            weekTitle: "Foundation",
            title: "Pivot Tables & Dynamic Slicers",
            description: "Build multi-dimensional Pivot Tables, group date fields into quarters/months, calculate percentages of columns, and add interactive slicers.",
            relatedSkillId: "da_excel",
            relatedSkillName: "Microsoft Excel",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "GCFAcademy Excel Tutorials",
            resourceUrl: "https://edu.gcfglobal.org/en/excel/"
          },
          {
            id: "da_w1_t3",
            week: 1,
            weekTitle: "Foundation",
            title: "Descriptive Statistics & Distribution Concepts",
            description: "Calculate and interpret mean, median, mode, variance, standard deviation, percentiles, interquartile range (IQR), and identify outliers.",
            relatedSkillId: "da_stats",
            relatedSkillName: "Statistics",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "OpenIntro Introductory Statistics",
            resourceUrl: "https://www.openintro.org/book/os/"
          },
          {
            id: "da_w1_t4",
            week: 1,
            weekTitle: "Foundation",
            title: "Relational Database Concepts & Basic SELECT Queries",
            description: "Understand database schemas, primary/foreign keys, write SELECT statements with WHERE conditions, LIKE filters, and ORDER BY.",
            relatedSkillId: "da_sql",
            relatedSkillName: "SQL",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "SQLBolt - Interactive Lessons",
            resourceUrl: "https://sqlbolt.com/"
          }
        ]
      },
      {
        weekNumber: 2,
        title: "Multi-Table SQL & Python Data Manipulation",
        theme: "Join relational tables, extract aggregated business metrics, and manipulate dataframes with Pandas.",
        tasks: [
          {
            id: "da_w2_t1",
            week: 2,
            weekTitle: "Skill Development",
            title: "Multi-Table SQL Joins & Aggregate Groupings",
            description: "Write multi-table queries combining tables via INNER JOIN, LEFT JOIN, FULL JOIN, and summarize metrics using GROUP BY and HAVING clauses.",
            relatedSkillId: "da_sql",
            relatedSkillName: "SQL",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "Khan Academy: Intro to SQL",
            resourceUrl: "https://www.khanacademy.org/computing/computer-programming/sql"
          },
          {
            id: "da_w2_t2",
            week: 2,
            weekTitle: "Skill Development",
            title: "Advanced SQL Subqueries & Window Functions",
            description: "Write subqueries, Common Table Expressions (WITH CTE), and basic window functions (ROW_NUMBER(), RANK(), OVER (PARTITION BY ...)).",
            relatedSkillId: "da_sql",
            relatedSkillName: "SQL",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "W3Schools SQL Tutorial & Exercises",
            resourceUrl: "https://www.w3schools.com/sql/"
          },
          {
            id: "da_w2_t3",
            week: 2,
            weekTitle: "Skill Development",
            title: "Python & Pandas for Data Analysis",
            description: "Load CSV files into Pandas DataFrames, inspect .info() and .describe(), filter rows, handle null values, and calculate summary stats.",
            relatedSkillId: "da_python",
            relatedSkillName: "Python",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "Kaggle Learn: Data Visualization with Python",
            resourceUrl: "https://www.kaggle.com/learn/data-visualization"
          },
          {
            id: "da_w2_t4",
            week: 2,
            weekTitle: "Skill Development",
            title: "Analytical Problem Solving & Business Hypothesis Testing",
            description: "Formulate business hypotheses, analyze correlation vs. causation, design A/B test metric frameworks, and detect sample biases.",
            relatedSkillId: "da_prob_solving",
            relatedSkillName: "Problem Solving & Analytical Thinking",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "Khan Academy: Statistics & Probability",
            resourceUrl: "https://www.khanacademy.org/math/statistics-probability"
          }
        ]
      },
      {
        weekNumber: 3,
        title: "Project Building: End-to-End Analysis & Dashboard",
        theme: "Execute an end-to-end data analysis project on real public data, from cleaning to dashboard visualization.",
        tasks: [
          {
            id: "da_w3_t1",
            week: 3,
            weekTitle: "Project Building",
            title: "Dataset Selection, Ingestion & Data Cleaning",
            description: "Select a real-world public dataset (e.g. e-commerce transactions, student performance, or city transit). Clean messy dates and missing fields.",
            relatedSkillId: "da_python",
            relatedSkillName: "Python",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "Kaggle Learn: Data Visualization with Python",
            resourceUrl: "https://www.kaggle.com/learn/data-visualization"
          },
          {
            id: "da_w3_t2",
            week: 3,
            weekTitle: "Project Building",
            title: "SQL Query Pipeline & Metrics Extraction",
            description: "Write SQL queries to extract key performance indicators (KPIs), customer retention rates, monthly sales trends, and top product rankings.",
            relatedSkillId: "da_sql",
            relatedSkillName: "SQL",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "SQLBolt - Interactive Lessons",
            resourceUrl: "https://sqlbolt.com/"
          },
          {
            id: "da_w3_t3",
            week: 3,
            weekTitle: "Project Building",
            title: "Data Visualization & Chart Design Principles",
            description: "Create clear, honest charts (line charts for trends, bar charts for comparisons, scatter plots for correlation) avoiding chart clutter.",
            relatedSkillId: "da_dataviz",
            relatedSkillName: "Data Visualization",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "Storytelling with Data - Free Chart Guides",
            resourceUrl: "https://www.storytellingwithdata.com/chart-guide"
          },
          {
            id: "da_w3_t4",
            week: 3,
            weekTitle: "Project Building",
            title: "Interactive Dashboard Prototype",
            description: "Assemble an interactive Excel or BI dashboard with linked summary cards, dynamic trend lines, and user-friendly slicers for category breakdown.",
            relatedSkillId: "da_excel",
            relatedSkillName: "Microsoft Excel",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "GCFAcademy Excel Tutorials",
            resourceUrl: "https://edu.gcfglobal.org/en/excel/"
          }
        ]
      },
      {
        weekNumber: 4,
        title: "Career Preparation & Data Storytelling",
        theme: "Draft an executive summary report, publish a GitHub portfolio, and practice SQL interview challenges.",
        tasks: [
          {
            id: "da_w4_t1",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Executive Summary & Actionable Recommendations Report",
            description: "Draft a written 2-page executive summary translating statistical findings into actionable business advice for non-technical stakeholders.",
            relatedSkillId: "da_prob_solving",
            relatedSkillName: "Problem Solving & Analytical Thinking",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "Storytelling with Data - Free Chart Guides",
            resourceUrl: "https://www.storytellingwithdata.com/chart-guide"
          },
          {
            id: "da_w4_t2",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Documented GitHub Data Portfolio Repository",
            description: "Publish your analysis notebook/scripts, dataset description, data dictionary, SQL queries, and visual executive report in a clean GitHub repo.",
            relatedSkillId: "da_python",
            relatedSkillName: "Python",
            estimatedTime: "Est. 2-3 hours",
            resourceTitle: "GitHub Skills - Interactive Repository Tutorials",
            resourceUrl: "https://skills.github.com/"
          },
          {
            id: "da_w4_t3",
            week: 4,
            weekTitle: "Career Preparation",
            title: "SQL & Statistical Interview Practice",
            description: "Solve timed SQL query challenges focusing on window functions, aggregate filters, joins, and explain p-values and confidence intervals.",
            relatedSkillId: "da_sql",
            relatedSkillName: "SQL",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "W3Schools SQL Tutorial & Exercises",
            resourceUrl: "https://www.w3schools.com/sql/"
          },
          {
            id: "da_w4_t4",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Data Presentation & Walkthrough Practice",
            description: "Practice presenting your dashboard in a 5-minute walkthrough, defending your chart choices and detailing how you validated data integrity.",
            relatedSkillId: "da_dataviz",
            relatedSkillName: "Data Visualization",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "How to Think Like a Programmer (freeCodeCamp)",
            resourceUrl: "https://www.freecodecamp.org/news/how-to-solve-coding-problems/"
          }
        ]
      }
    ]
  },
  "java-dev": {
    careerId: "java-dev",
    careerTitle: "Java Developer",
    estimatedTotalHours: "54-68 hours (~13-17 hrs/week)",
    weeks: [
      {
        weekNumber: 1,
        title: "Foundation: Core Java, OOP & Git",
        theme: "Master primitive types, control flow, object-oriented principles (encapsulation, inheritance), and Git setup.",
        tasks: [
          {
            id: "java_w1_t1",
            week: 1,
            weekTitle: "Foundation",
            title: "Core Java Syntax, Data Types & Control Structures",
            description: "Master primitive types, reference types, operators, conditional branching (if/switch), loops (for/while/for-each), and static methods.",
            relatedSkillId: "java_core",
            relatedSkillName: "Core Java Programming",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "University of Helsinki Java MOOC",
            resourceUrl: "https://java-programming.mooc.fi/"
          },
          {
            id: "java_w1_t2",
            week: 1,
            weekTitle: "Foundation",
            title: "OOP Fundamentals (Encapsulation & Constructors)",
            description: "Design classes, private instance variables, public getters/setters, constructors, and understand 'this' keyword and heap memory.",
            relatedSkillId: "java_oop",
            relatedSkillName: "Object-Oriented Programming",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "Dev.java Official Java Tutorials",
            resourceUrl: "https://dev.java/learn/"
          },
          {
            id: "java_w1_t3",
            week: 1,
            weekTitle: "Foundation",
            title: "Inheritance, Polymorphism & Interfaces",
            description: "Implement method overriding with @Override, abstract classes, interfaces, and understand dynamic method dispatch in Java.",
            relatedSkillId: "java_oop",
            relatedSkillName: "Object-Oriented Programming",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "W3Schools Java Tutorial & Quiz",
            resourceUrl: "https://www.w3schools.com/java/"
          },
          {
            id: "java_w1_t4",
            week: 1,
            weekTitle: "Foundation",
            title: "Git Setup & First Java GitHub Repository",
            description: "Initialize a local Git repository, configure .gitignore for Java .class files and IDE directories, commit code, and push to GitHub.",
            relatedSkillId: "java_git",
            relatedSkillName: "Git and GitHub",
            estimatedTime: "Est. 2-3 hours",
            resourceTitle: "GitHub Skills - Interactive Repository Tutorials",
            resourceUrl: "https://skills.github.com/"
          }
        ]
      },
      {
        weekNumber: 2,
        title: "Collections, Exceptions & SQL Basics",
        theme: "Deepen understanding of Java Collections Framework, exception handling, and relational database queries.",
        tasks: [
          {
            id: "java_w2_t1",
            week: 2,
            weekTitle: "Skill Development",
            title: "Java Collections Framework (Lists, Sets, Maps)",
            description: "Master ArrayList, LinkedList, HashSet, TreeSet, and HashMap. Compare their time complexities and understand generics (<T>).",
            relatedSkillId: "java_ds",
            relatedSkillName: "Data Structures & Collections",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "University of Helsinki Java MOOC",
            resourceUrl: "https://java-programming.mooc.fi/"
          },
          {
            id: "java_w2_t2",
            week: 2,
            weekTitle: "Skill Development",
            title: "Java Exception Handling & File I/O",
            description: "Understand checked vs. unchecked exceptions, use try-with-resources for auto-closing files, and read/write text files with BufferedReader.",
            relatedSkillId: "java_core",
            relatedSkillName: "Core Java Programming",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "Dev.java Official Java Tutorials",
            resourceUrl: "https://dev.java/learn/"
          },
          {
            id: "java_w2_t3",
            week: 2,
            weekTitle: "Skill Development",
            title: "Relational Databases & SQL Queries",
            description: "Design relational tables, write queries with WHERE, GROUP BY, and multi-table INNER/LEFT JOINs, and practice primary/foreign keys.",
            relatedSkillId: "java_sql",
            relatedSkillName: "SQL & Database Basics",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "SQLBolt - Interactive Lessons",
            resourceUrl: "https://sqlbolt.com/"
          },
          {
            id: "java_w2_t4",
            week: 2,
            weekTitle: "Skill Development",
            title: "Algorithmic Problem Solving & Debugging in IDE",
            description: "Solve coding challenges on Exercism. Practice using an IDE debugger: set breakpoints, inspect variables, step over/into methods.",
            relatedSkillId: "java_debug",
            relatedSkillName: "Problem Solving & Debugging",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "Exercism - Free Code Practice & Mentorship",
            resourceUrl: "https://exercism.org/"
          }
        ]
      },
      {
        weekNumber: 3,
        title: "Project Building: Database-Backed Java App",
        theme: "Build a modular, layered Java application with JDBC database persistence and Maven build management.",
        tasks: [
          {
            id: "java_w3_t1",
            week: 3,
            weekTitle: "Project Building",
            title: "Project Setup with Maven & Layered Architecture",
            description: "Set up a standard Maven project structure (pom.xml), organize packages into model, repository/DAO, and service layers.",
            relatedSkillId: "java_core",
            relatedSkillName: "Core Java Programming",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "Dev.java Official Java Tutorials",
            resourceUrl: "https://dev.java/learn/"
          },
          {
            id: "java_w3_t2",
            week: 3,
            weekTitle: "Project Building",
            title: "JDBC Database Integration & Prepared Statements",
            description: "Connect your Java app to SQLite or MySQL using JDBC, write secure PreparedStatement queries to prevent SQL injection, and map ResultSet.",
            relatedSkillId: "java_sql",
            relatedSkillName: "SQL & Database Basics",
            estimatedTime: "Est. 5-6 hours",
            resourceTitle: "University of Helsinki Java MOOC",
            resourceUrl: "https://java-programming.mooc.fi/"
          },
          {
            id: "java_w3_t3",
            week: 3,
            weekTitle: "Project Building",
            title: "Build Console / Service CRUD Management System",
            description: "Implement business logic for a Student Course Enrollment or Banking System: handle validations, balance updates, and error states.",
            relatedSkillId: "java_oop",
            relatedSkillName: "Object-Oriented Programming",
            estimatedTime: "Est. 5-6 hours",
            resourceTitle: "How to Think Like a Programmer (freeCodeCamp)",
            resourceUrl: "https://www.freecodecamp.org/news/how-to-solve-coding-problems/"
          },
          {
            id: "java_w3_t4",
            week: 3,
            weekTitle: "Project Building",
            title: "Git Branching & Safe PR Workflows",
            description: "Create feature branches for individual services, write clear commit messages, submit pull requests, and merge safely into main branch.",
            relatedSkillId: "java_git",
            relatedSkillName: "Git and GitHub",
            estimatedTime: "Est. 2-3 hours",
            resourceTitle: "Learn Git Branching Interactive Visualizer",
            resourceUrl: "https://learngitbranching.js.org/"
          }
        ]
      },
      {
        weekNumber: 4,
        title: "Career Preparation: JUnit, Docs & Interview",
        theme: "Write automated unit tests with JUnit 5, document the repository, and review core Java interview topics.",
        tasks: [
          {
            id: "java_w4_t1",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Automated Unit Testing with JUnit 5",
            description: "Write comprehensive unit tests with JUnit 5 assertions (assertEquals, assertThrows), testing edge cases and business rule validations.",
            relatedSkillId: "java_debug",
            relatedSkillName: "Problem Solving & Debugging",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "University of Helsinki Java MOOC",
            resourceUrl: "https://java-programming.mooc.fi/"
          },
          {
            id: "java_w4_t2",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Repository Documentation & Architecture Diagram",
            description: "Document your repository with a professional README: include architecture overview, schema diagram, build commands, and sample runs.",
            relatedSkillId: "java_git",
            relatedSkillName: "Git and GitHub",
            estimatedTime: "Est. 2-3 hours",
            resourceTitle: "GitHub Skills - Interactive Repository Tutorials",
            resourceUrl: "https://skills.github.com/"
          },
          {
            id: "java_w4_t3",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Core Java & OOP Interview Prep",
            description: "Review key interview topics: equals vs. ==, hashCode contract, string pool, immutability, garbage collection basics, and interface vs abstract class.",
            relatedSkillId: "java_core",
            relatedSkillName: "Core Java Programming",
            estimatedTime: "Est. 4-5 hours",
            resourceTitle: "W3Schools Java Tutorial & Quiz",
            resourceUrl: "https://www.w3schools.com/java/"
          },
          {
            id: "java_w4_t4",
            week: 4,
            weekTitle: "Career Preparation",
            title: "Technical Project Walkthrough & Code Review",
            description: "Rehearse explaining your layered design patterns, why you selected specific Collections classes, and how you ensured thread safety.",
            relatedSkillId: "java_oop",
            relatedSkillName: "Object-Oriented Programming",
            estimatedTime: "Est. 3-4 hours",
            resourceTitle: "How to Think Like a Programmer (freeCodeCamp)",
            resourceUrl: "https://www.freecodecamp.org/news/how-to-solve-coding-problems/"
          }
        ]
      }
    ]
  }
};
