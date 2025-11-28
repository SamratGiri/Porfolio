export default function Home() {
	return (
		<main className="container">
			<header className="header">
				<h1 className="name">SAMRAT GIRI</h1>
				<p className="tagline">
					Full Stack Developer & Software Engineer
				</p>
				<nav className="navigation">
					<a href="#about" className="nav-item">
						About
					</a>
					<a href="#code" className="nav-item">
						Code
					</a>
					<a href="#projects" className="nav-item">
						Projects
					</a>
					<a href="#education" className="nav-item">
						Education
					</a>
				</nav>
			</header>

			{/* About Section */}
			<section id="about" className="section">
				<div className="section-content">
					<h2 className="section-title">About Me</h2>
					<div className="about-content">
						<div className="about-text">
							<p>
								Hello! I'm Samrat Giri, a passionate full-stack
								developer with a love for creating beautiful,
								functional, and user-friendly applications. I
								enjoy solving complex problems and turning ideas
								into reality through code.
							</p>
							<p>
								When I'm not coding, you can find me exploring
								new technologies, reading tech blogs, or working
								on personal projects. I believe in continuous
								learning and staying up-to-date with the latest
								industry trends.
							</p>
						</div>
						<div className="skills">
							<h3>Skills</h3>
							<div className="skill-tags">
								<span className="skill-tag">JavaScript</span>
								<span className="skill-tag">TypeScript</span>
								<span className="skill-tag">React</span>
								<span className="skill-tag">Next.js</span>
								<span className="skill-tag">Node.js</span>
								<span className="skill-tag">Python</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Code Section */}
			<section id="code" className="section">
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
			<section id="projects" className="section">
				<div className="section-content">
					<h2 className="section-title">Featured Projects</h2>
					<div className="projects-grid">
						<div className="project-card">
							<h3>E-Commerce Platform</h3>
							<p>
								A full-stack e-commerce solution with user
								authentication, payment processing, and admin
								dashboard.
							</p>
							<div className="project-tech">
								<span>Next.js</span> • <span>MongoDB</span> •{" "}
								<span>Stripe API</span>
							</div>
						</div>
						<div className="project-card">
							<h3>Task Management App</h3>
							<p>
								A collaborative task management application with
								real-time updates and team collaboration
								features.
							</p>
							<div className="project-tech">
								<span>React</span> • <span>Node.js</span> •{" "}
								<span>Socket.io</span>
							</div>
						</div>
						<div className="project-card">
							<h3>Weather Dashboard</h3>
							<p>
								A responsive weather application with
								location-based forecasts and interactive maps.
							</p>
							<div className="project-tech">
								<span>TypeScript</span> •{" "}
								<span>API Integration</span> •{" "}
								<span>Charts.js</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Education Section */}
			<section id="education" className="section">
				<div className="section-content">
					<h2 className="section-title">Education & Learning</h2>
					<div className="education-content">
						<div className="education-item">
							<div className="education-header">
								<h3>Bachelor of Computer Science</h3>
								<span className="year">2020 - 2024</span>
							</div>
							<p className="institution">
								University of Technology
							</p>
							<p className="description">
								Focused on software engineering, algorithms, and
								web development. Graduated with honors.
							</p>
						</div>
						<div className="education-item">
							<div className="education-header">
								<h3>Full Stack Web Development</h3>
								<span className="year">2023</span>
							</div>
							<p className="institution">
								FreeCodeCamp & The Odin Project
							</p>
							<p className="description">
								Completed comprehensive full-stack development
								courses covering modern JavaScript frameworks
								and backend technologies.
							</p>
						</div>
						<div className="education-item">
							<div className="education-header">
								<h3>Continuous Learning</h3>
								<span className="year">Ongoing</span>
							</div>
							<p className="institution">Various Platforms</p>
							<p className="description">
								Regularly learning new technologies through
								online courses, tech blogs, and hands-on
								projects.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="footer">
				<p>&copy; 2025 Samrat Giri. Built with Next.js 15.</p>
			</footer>
		</main>
	);
}
