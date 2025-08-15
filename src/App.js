import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const bgColors = [
      "#e0e7ff", "#ffe4e6", "#ecfccb", "#e0f7fa", "#fce4ec",
      "#e8f5e9", "#ede7f6", "#fff9c4", "#e1f5fe", "#f3e5f5",
      "#f0f4c3", "#ffecb3", "#ede9fe"
    ];

    function changeProjectsBg() {
      const portfolio = document.getElementById("portfolio");
      const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
      portfolio.style.setProperty("background-color", randomColor, "important");
    }

    document.getElementById("projects-link")?.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" });
      changeProjectsBg();
    });

    document.querySelectorAll("#portfolio .card").forEach(card => {
      card.addEventListener("click", changeProjectsBg);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    alert("Your message is sent!");
    e.target.reset();
  };
  
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-purple sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">MyPortfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a id="projects-link" className="nav-link" href="#portfolio">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section py-5">
        <div className="floating-shapes">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="display-4 fw-bold">Hi, I am Khatrina Joice Gonzales!</h1>
            <p className="lead">
              I’m a third-year Computer Science student at De La Salle Lipa, currently exploring 
              programming, web development, and other areas of tech.
            </p>
            <a href="#portfolio" className="btn btn-outline-light mt-3">View My Work</a>
          </div>
          <div className="hero-image">
            <img src="/heropicture.jpg" alt="Khatrina Joice Gonzales" />
          </div>
        </div>
      </header>

      

      {/* Portfolio Section */}
      <section id="portfolio" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">My Projects</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 transition">
                <img src="/project1.png" className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Computer Management System</h5>
                  <p className="card-text">A system for tracking, monitoring, and managing computer usage and records efficiently.</p>
                  <button className="btn btn-outline-primary fw-semibold w-100" data-bs-toggle="modal" data-bs-target="#modal1">Learn More</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 transition">
                <img src="/project2.png" className="card-img-top" alt="Project 2" />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Student Management System</h5>
                  <p className="card-text">A platform for organizing and managing student records, courses, and enrollment efficiently.</p>
                  <button className="btn btn-outline-primary fw-semibold w-100" data-bs-toggle="modal" data-bs-target="#modal2">Learn More</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 transition">
                <img src="/project3.png" className="card-img-top" alt="Project 3" />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Subject Course Reviewer</h5>
                  <p className="card-text">A tool that helps students quickly review and organize key lessons and concepts.</p>
                  <button className="btn btn-outline-primary fw-semibold w-100" data-bs-toggle="modal" data-bs-target="#modal3">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Contact Me</h2>
          <div className="p-4 bg-light rounded shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" rows="4" className="form-control" required></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary fw-semibold w-100 shadow">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Modals */}
      <div className="modal fade" id="modal1" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Computer Management System</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body" style={{ textAlign: "justify" }}>
              <p>
                This project, developed for the course <strong>Information Management (Infoman)</strong>, 
                is a web-based application designed to streamline operations in a computer shop. 
                It enables administrators to efficiently monitor computer usage, manage sessions, 
                and track sales and performance through an intuitive dashboard.
              </p>

              <p><strong>Key Features:</strong></p>
              <ul>
                <li><strong>Dashboard:</strong> Displays an overview of shop operations, including active PCs, income summaries, and quick navigation to core functions such as <em>Computers</em>, <em>Start Session</em>, <em>End Session</em>, <em>Reports</em>, and <em>Settings</em>.</li>

                <li><strong>Computer Monitoring:</strong> View and manage the status of each computer in real time, with filters for quick searches.</li>

                <li>
                  <strong>Session Management:</strong>
                  <ul>
                    <li><strong>Start Session:</strong> Select a computer, input the customer’s name, and initiate a timed session. The timer runs in the background until the session ends.</li>
                    <li><strong>End Session:</strong> View all active sessions, end them with one click, and automatically log time used and cost.</li>
                  </ul>
                </li>

                <li><strong>Reports:</strong> Generate and filter reports showing total sales, session logs, and other performance metrics.</li>

                <li><strong>Settings:</strong> Update shop details such as name and email, adjust the hourly rate, and manage administrator login credentials.</li>

                <li><strong>Database Integration:</strong> Uses MySQL to store and retrieve data for computers, sessions, and reports, ensuring accurate tracking of usage and earnings.</li>
              </ul>

              <p>
                This system provides a complete solution for managing computer shop operations, 
                improving efficiency, and ensuring accurate record-keeping through an easy-to-use interface.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal2" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Student Management System</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body" style={{ textAlign: "justify" }}>
              <p>
                This project is a <strong>web-based application</strong> designed to simplify the process of managing 
                student records, courses, and enrollments. It serves as a centralized platform for storing, organizing, 
                and retrieving academic data, making it easier for administrators to handle school operations efficiently.
              </p>

              <p><strong>Key Features:</strong></p>
              <ul>
                <li><strong>Dashboard:</strong> Provides an overview of total students, courses, and enrollment statistics, with quick access to main modules.</li>
                
                <li><strong>Student Management:</strong> Add, update, view, search, and delete student records with ease.</li>
                
                <li><strong>Course Management:</strong> Maintain an organized list of courses, including course codes, names, and descriptions, with full CRUD functionality.</li>
                
                <li><strong>Enrollment Module:</strong> Enroll students in courses, view enrollment lists, and search or filter data for quick retrieval.</li>
                
                <li><strong>Search &amp; Filter Tools:</strong> Quickly locate specific records across all modules with efficient search and filtering features.</li>
                
                <li><strong>Database Integration:</strong> Uses MySQL to store and manage all records, ensuring data consistency and reliability.</li>
              </ul>

              <p>
                With its clean interface and functional features, the 
                <strong> Student Management System</strong> improves efficiency, reduces manual errors, 
                and provides a structured approach to managing academic data.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal3" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Subject Course Reviewer</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body" style={{ textAlign: "justify" }}>
              <p>
                This project is a <strong>personal yet shareable online reviewer</strong> designed to help 
                me and my classmates prepare for exams and stay organized with course materials. 
                It compiles key lessons, summaries, and important concepts from various subjects, 
                making it easier to study and revisit essential topics anytime.
              </p>

              <p><strong>Subjects Covered:</strong></p>
              <ul>
                <li><strong>WEBDVT:</strong> Web Development</li>
                <li><strong>CONCHRI:</strong> Contemporary Christian Morality</li>
                <li><strong>ARTIFIN:</strong> Artificial Intelligence</li>
                <li><strong>CSINFOA:</strong> Information Assurance and Security</li>
                <li><strong>APPDEVT:</strong> Applications Development and Emerging Technologies</li>
                <li><strong>CSELECT1:</strong> CS Elective 1</li>
                <li><strong>ITPROMA:</strong> Project Management</li>
                <li><strong>METHORE:</strong> Methods of Research</li>
                <li><strong>OPERSYST:</strong> Operating Systems</li>
              </ul>

              <p>
                By organizing content into clear sections per subject, this reviewer acts as both a 
                personal study tool and a collaborative resource, enabling friends and classmates 
                to learn together more efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white text-center py-3">
        <div className="container">
          <p className="mb-0">&copy; 2025 Khatrina Gonzales. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
