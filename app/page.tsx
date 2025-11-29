"use client";
import { useState } from "react";

export default function Home() {
	const [activeSection, setActiveSection] = useState<string | null>(null);

	const toggleSection = (section: string) => {
		setActiveSection(activeSection === section ? null : section);
	};

	return (
		<main className="container">
			{/* Social Sidebar */}
			<aside className="social-sidebar">
				<a
					href="https://github.com/SamratGiri"
					target="_blank"
					rel="noopener noreferrer"
					className="social-link"
					title="GitHub"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
					</svg>
				</a>
				<a
					href="https://linkedin.com/in/samratgiri"
					target="_blank"
					rel="noopener noreferrer"
					className="social-link"
					title="LinkedIn"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
					</svg>
				</a>
				<a
					href="mailto:samrat@example.com"
					className="social-link"
					title="Email"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.273L12 10.545 21.091 3.82h.273c.904 0 1.636.733 1.636 1.637Z" />
					</svg>
				</a>
				<a
					href="/Samrat-Giri-Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="social-link"
					title="Resume"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
						<path d="M8 12h8v1H8zm0 2h8v1H8zm0 2h5v1H8z" />
					</svg>
				</a>
			</aside>

			<header className="header">
				<h1 className="name">SAMRAT GIRI</h1>
				<p className="tagline">Flutter Developer</p>
				<nav className="navigation">
					<button
						onClick={() => toggleSection("about")}
						className={`nav-item ${
							activeSection === "about" ? "active" : ""
						}`}
					>
						About
					</button>
					<button
						onClick={() => toggleSection("skills")}
						className={`nav-item ${
							activeSection === "skills" ? "active" : ""
						}`}
					>
						Skills
					</button>
					<button
						onClick={() => toggleSection("projects")}
						className={`nav-item ${
							activeSection === "projects" ? "active" : ""
						}`}
					>
						Projects
					</button>
					<button
						onClick={() => toggleSection("education")}
						className={`nav-item ${
							activeSection === "education" ? "active" : ""
						}`}
					>
						Education
					</button>
				</nav>
			</header>

			{/* About Section */}
			<section
				id="about"
				className={`section ${
					activeSection === "about" ? "" : "hidden"
				}`}
			>
				<div className="section-content">
					<h2 className="section-title">About Me</h2>
					<div className="about-content">
						<div className="about-text">
							<p>
								I am a passionate Flutter developer who enjoys
								building clean, beautiful, and user friendly
								mobile applications. I’m currently strengthening
								my skills day by day by working on real projects
								and exploring new features in Flutter and
								Firebase. I love turning ideas into functional
								apps, solving UI/UX challenges, and writing
								maintainable code. I’m motivated to learn, grow,
								and contribute to meaningful projects while
								improving my skills as a mobile app developer.
							</p>
							<p>
								When I'm not coding, you can find me exploring
								new technologies, reading tech blogs, or working
								on personal projects. I believe in continuous
								learning and staying up to date with the latest
								industry trends.
							</p>
							<p>
								I'm always excited to work on challenging
								projects and collaborate with other developers
								to create amazing digital experiences.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section
				id="skills"
				className={`section ${
					activeSection === "skills" ? "" : "hidden"
				}`}
			>
				<div className="section-content">
					<h2 className="section-title">Skills & Technologies</h2>
					<div className="skills-elegant">
						<div className="skill-group">
							<h3 className="skill-group-title">
								Frontend & Mobile
							</h3>
							<div className="skill-items">
								<span className="skill-pill">JavaScript</span>
								<span className="skill-pill">TypeScript</span>
								<span className="skill-pill">React</span>
								<span className="skill-pill">Next.js</span>
								<span className="skill-pill">Flutter</span>
								<span className="skill-pill">HTML5</span>
								<span className="skill-pill">CSS3</span>
							</div>
						</div>

						<div className="skill-group">
							<h3 className="skill-group-title">
								Backend & Languages
							</h3>
							<div className="skill-items">
								<span className="skill-pill">Node.js</span>
								<span className="skill-pill">Python</span>
								<span className="skill-pill">Java</span>
								<span className="skill-pill">C++</span>
								<span className="skill-pill">Express.js</span>
							</div>
						</div>

						<div className="skill-group">
							<h3 className="skill-group-title">
								Database & Tools
							</h3>
							<div className="skill-items">
								<span className="skill-pill">MongoDB</span>
								<span className="skill-pill">PostgreSQL</span>
								<span className="skill-pill">Firebase</span>
								<span className="skill-pill">Git</span>
								<span className="skill-pill">Docker</span>
								<span className="skill-pill">AWS</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Code Section */}
			<section
				id="code"
				className={`section ${
					activeSection === "code" ? "" : "hidden"
				}`}
			>
				<div className="section-content">
					<h2 className="section-title">Code & Technologies</h2>
					<div className="code-grid">
						<div className="code-card">
							<h3>Frontend Development</h3>
							<p>
								Building responsive and interactive user
								interfaces with modern frameworks.
							</p>
							<div className="tech-list">
								<span>React</span> • <span>Next.js</span> •{" "}
								<span>TypeScript</span> • <span>CSS3</span>
							</div>
						</div>
						<div className="code-card">
							<h3>Backend Development</h3>
							<p>
								Creating robust server-side applications and
								APIs.
							</p>
							<div className="tech-list">
								<span>Node.js</span> • <span>Python</span> •{" "}
								<span>Express</span> • <span>MongoDB</span>
							</div>
						</div>
						<div className="code-card">
							<h3>Tools & Platforms</h3>
							<p>
								Leveraging modern development tools and cloud
								platforms.
							</p>
							<div className="tech-list">
								<span>Git</span> • <span>Docker</span> •{" "}
								<span>AWS</span> • <span>Vercel</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section
				id="projects"
				className={`section ${
					activeSection === "projects" ? "" : "hidden"
				}`}
			>
				<div className="section-content">
					<h2 className="section-title">Featured Projects</h2>
					<div className="projects-grid">
						<div className="project-card">
							<h3>Pharmacy Application (Flutter + Firestore)</h3>
							<p>
								A lightweight, mobile-first pharmacy management
								app built with Flutter and Firebase (Firestore +
								Firebase Authentication). The app supports
								inventory, prescriptions, customers, sales, and
								includes an admin page to add and manage
								products.
							</p>
							<div className="project-tech">
								<span>Flutter</span> • <span>Firestore</span> •{" "}
								<span>Firebase Auth</span>
							</div>
						</div>
						<div className="project-card">
							<h3>CancelTency</h3>
							<p>
								CancelTency is a student-centered mobile and
								web-based application designed to streamline the
								international university admission process for
								Nepalese students. By eliminating third-party
								consultancies, it reduces costs, enhances
								transparency, and promotes self-reliance. The
								platform enables students to access reliable
								information, communicate directly with
								universities, and manage applications
								independently.
							</p>
							<div className="project-tech">
								<span>Mobile App</span> •{" "}
								<span>Web Platform</span> •{" "}
								<span>University Portal</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Education Section */}
			<section
				id="education"
				className={`section ${
					activeSection === "education" ? "" : "hidden"
				}`}
			>
				<div className="section-content">
					<h2 className="section-title">Education & Learning</h2>
					<div className="education-content">
						<div className="education-item">
							<div className="education-header">
								<h3>High School (+2 Science)</h3>
								<span className="year">2020 - 2022</span>
							</div>
							<p className="institution">
								Xavier International College, Kalopul Kathmandu
							</p>
							<p className="description">
								Completed higher secondary education with focus
								on Science stream, building strong foundation in
								mathematics and analytical thinking.
							</p>
						</div>
						<div className="education-item">
							<div className="education-header">
								<h3>Bachelor in Software Engineering</h3>
								<span className="year">
									Sep 2022 - July 2026
								</span>
							</div>
							<p className="institution">
								NCIT Nepal College of Information Technology,
								Balkumari Lalitpur
							</p>
							<p className="description">
								Currently pursuing Bachelor's degree in Software
								Engineering, focusing on programming
								fundamentals, software development
								methodologies, and modern technologies.
							</p>
						</div>
						<div className="education-item">
							<div className="education-header">
								<h3>Continuous Learning</h3>
								<span className="year">Ongoing</span>
							</div>
							<p className="institution">
								Various Platforms & Self-Study
							</p>
							<p className="description">
								Actively learning Flutter development, mobile
								app development, and staying up-to-date with
								latest technologies through online courses,
								documentation, and hands-on projects.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
