"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


type Language = "eng" | "nep";
type Theme = "light" | "dark";
type SocialIconName = "github" | "linkedin" | "instagram" | "mail";

const copy = {
	eng: {
		portfolioLabel: "Portfolio / Samrat Giri",
		nepalTimeFallback: "Nepal time loading",
		languageLabel: "Switch language",
		themeLabel: "Toggle dark mode",
		heroTitle: "Samrat Giri",
		heroNameNepali: "सम्राट गिरी",
		heroIntro:
			"Flutter-focused developer building practical, elegant mobile and web experiences from Kathmandu.",
		heroCta: "Get In Touch",
		heroSecondary: "View Projects",
		profileTag: "Profile",
		profileStatus: "Available for collaboration",
		profileLocation: "Kathmandu, Nepal",
		introTitle: "Introduction",
		introLead:
			"I build clean mobile and web products with a focus on usability, speed, and simple interfaces.",
		introBody: "Currently working with Flutter, Firebase, React, and Next.js.",
		
		workingTitle: "Currently Working On",
		
		toolsTitle: "Tools I Reach For",
		
		experienceTitle: "Where I've Worked",
		
		projectsTitle: "Things I've Built",
		projectsIntro:
			"Selected projects that show product thinking, mobile development, and full-stack curiosity.",
		ctaTitle: "Let's Work Together",
		ctaBody:
			"Have a product idea, internship opportunity, or collaboration in mind? I am open to practical projects where thoughtful engineering matters.",
		emailLabel: "Email",
		contactEmail: "samratgiri729@example.com",
	},
	nep: {
		portfolioLabel: "पोर्टफोलियो / सम्राट गिरी",
		nepalTimeFallback: "नेपाल समय लोड हुँदैछ",
		languageLabel: "भाषा बदल्नुहोस्",
		themeLabel: "डार्क मोड बदल्नुहोस्",
		heroTitle: "Samrat Giri",
		heroNameNepali: "सम्राट गिरी",
		heroIntro:
			"काठमाडौंमा बसेर व्यवहारिक, आकर्षक मोबाइल र वेब अनुभव बनाउने Flutter केन्द्रित डेभलपर।",
		heroCta: "सम्पर्क गर्नुहोस्",
		heroSecondary: "प्रोजेक्ट हेर्नुहोस्",
		profileTag: "प्रोफाइल",
		profileStatus: "सहकार्यका लागि उपलब्ध",
		profileLocation: "काठमाडौं, नेपाल",
		introTitle: "परिचय",
		introLead:
			"म प्रयोग गर्न सजिलो, छिटो र सफा मोबाइल तथा वेब उत्पादन बनाउँछु।",
		introBody: "हाल Flutter, Firebase, React र Next.js मा काम गर्दैछु।",
		socialTitle: "यहाँ भेट्नुहोस्",
		workingTitle: "हाल काम गरिरहेको",
		workingIntro:
			"उत्पादन, सिकाइ लक्ष्य र रिसर्चमा केन्द्रित काम जसले डिजाइन र विकास प्रक्रियालाई बलियो बनाउँछ।",
		toolsTitle: "प्रयोग गर्ने टुलहरू",
		
		experienceTitle: "अनुभव",
		
		projectsTitle: "बनाएका कामहरू",
		
		ctaTitle: "सँगै काम गरौं",
		ctaBody:
			"Product idea, internship opportunity वा collaboration छ? सोचेर बनाइएको engineering चाहिने practical projects का लागि म उपलब्ध छु।",
		emailLabel: "इमेल",
		contactEmail: "samratgiri729@example.com",
	},
};

const socials: Array<{
	label: string;
	href: string;
	icon: SocialIconName;
}> = [
	{
		label: "GitHub",
		href: "https://github.com/SamratGiri",
		icon: "github",
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/samratgiri",
		icon: "linkedin",
	},
	{
		label: "Instagram",
		href: "https://instagram.com/samratgiri",
		icon: "instagram",
	},
];

const workingCards = {
	eng: [
		{
			label: "Product",
			title: "Pharmacy Application",
			body: "A Flutter and Firebase product for inventory, prescriptions, customers, sales, and admin product management.",
		},
		{
			label: "Platform",
			title: "CancelTency",
			body: "A student-centered admission platform that helps Nepalese students work directly with universities.",
		},
		{
			label: "Learning",
			title: "Full-stack systems",
			body: "Sharpening TypeScript, Next.js, backend APIs, database design, and production deployment habits.",
		},
		{
			label: "Research",
			title: "Mobile UX patterns",
			body: "Studying onboarding, offline-first flows, and trust-focused interfaces for education and commerce apps.",
		},
	],
	nep: [
		{
			label: "उत्पादन",
			title: "Pharmacy Application",
			body: "Inventory, prescriptions, customers, sales र admin management का लागि Flutter र Firebase app।",
		},
		{
			label: "प्लाटफर्म",
			title: "CancelTency",
			body: "नेपाली विद्यार्थीलाई university admission process मा direct access दिने student-centered platform।",
		},
		{
			label: "सिकाइ",
			title: "Full-stack systems",
			body: "TypeScript, Next.js, backend APIs, database design र deployment practice बलियो बनाउँदै।",
		},
		{
			label: "रिसर्च",
			title: "Mobile UX patterns",
			body: "Onboarding, offline-first flows र trust-focused interfaces का practical patterns अध्ययन गर्दै।",
		},
	],
};

const experienceCards = {
	eng: [
		{
			title: "Mobile App Development",
			body: "Built Flutter interfaces, Firebase auth flows, Firestore data models, and admin features for app-based products.",
		},
		{
			title: "Product Prototyping",
			body: "Planned MVP flows, student-facing product concepts, and simple user journeys for education and commerce tools.",
		},
		{
			title: "Web Interface Development",
			body: "Created responsive Next.js and React interfaces with attention to layout, content structure, and accessibility.",
		},
	],
	nep: [
		{
			title: "Mobile App Development",
			body: "Flutter interfaces, Firebase auth flows, Firestore data models र admin features बनाएको अनुभव।",
		},
		{
			title: "Product Prototyping",
			body: "Education र commerce tools का लागि MVP flows, product concepts र simple user journeys planning।",
		},
		{
			title: "Web Interface Development",
			body: "Layout, content structure र accessibility ध्यानमा राखेर responsive Next.js/React interfaces बनाउने काम।",
		},
	],
};

const toolGroups = [
	{
		title: "Frontend",
		tools: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
	},
	{
		title: "Mobile",
		tools: ["Flutter", "Dart", "Firebase", "Firestore"],
	},
	{
		title: "Backend & Data",
		tools: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
	},
	{
		title: "Workflow",
		tools: ["Git", ],
	},
];

const projects = {
	eng: [
		{
			title: "Pharmacy Application",
			body: "A mobile-first pharmacy management app for stock tracking, customer records, prescriptions, and sales workflows.",
			stack: ["Flutter", "Firebase Auth", "Firestore"],
			github: "https://github.com/SamratGiri",
			demo: "",
		},
		{
			title: "CancelTency",
			body: "A mobile and web platform concept that reduces consultancy dependency for Nepalese students applying abroad.",
			stack: ["Mobile App", "Web Platform", "University Portal"],
			github: "https://github.com/SamratGiri",
			demo: "",
		},
		
	],
	nep: [
		{
			title: "Pharmacy Application",
			body: "Stock tracking, customer records, prescriptions र sales workflow का लागि mobile-first pharmacy app।",
			stack: ["Flutter", "Firebase Auth", "Firestore"],
			github: "https://github.com/SamratGiri",
			demo: "",
		},
		{
			title: "CancelTency",
			body: "विदेश अध्ययनका लागि apply गर्ने नेपाली विद्यार्थीलाई consultancy dependency घटाउने mobile र web platform concept।",
			stack: ["Mobile App", "Web Platform", "University Portal"],
			github: "https://github.com/SamratGiri",
			demo: "",
		},
	
	],
};

export default function Home() {
	const [language, setLanguage] = useState<Language>("eng");
	const [theme, setTheme] = useState<Theme>("light");
	const [nepalTime, setNepalTime] = useState("");
	const [nepalIso, setNepalIso] = useState("");

	const content = copy[language];

	useEffect(() => {
		const storedTheme = window.localStorage.getItem("portfolio-theme");

		if (storedTheme === "light" || storedTheme === "dark") {
			setTheme(storedTheme);
		}
	}, []);

	useEffect(() => {
		window.localStorage.setItem("portfolio-theme", theme);
	}, [theme]);

	useEffect(() => {
		document.documentElement.lang = language === "nep" ? "ne" : "en";
	}, [language]);

	useEffect(() => {
		const updateNepalTime = () => {
			const now = new Date();
			const formatter = new Intl.DateTimeFormat(
				language === "nep" ? "ne-NP" : "en-US",
				{
					weekday: "short",
					year: "numeric",
					month: "short",
					day: "numeric",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZone: "Asia/Kathmandu",
				},
			);

			setNepalIso(now.toISOString());
			setNepalTime(formatter.format(now));
		};

		updateNepalTime();
		const interval = window.setInterval(updateNepalTime, 1000);

		return () => window.clearInterval(interval);
	}, [language]);

	return (
		<main id="top" className="portfolio" data-theme={theme}>
			<div className="site-shell">
				<header className="mac-header" aria-label="Portfolio controls">
					<div className="window-controls" aria-hidden="true">
						<span className="control red" />
						<span className="control yellow" />
						<span className="control green" />
					</div>

					<a className="brand-mark" href="#top">
						{content.portfolioLabel}
					</a>

					<div className="header-actions">
						<time className="nepal-time" dateTime={nepalIso || undefined}>
							{nepalTime || content.nepalTimeFallback}
						</time>
						<button
							type="button"
							className="language-toggle"
							aria-label={content.languageLabel}
							onClick={() =>
								setLanguage((current) =>
									current === "eng" ? "nep" : "eng",
								)
							}
						>
							<span className={language === "nep" ? "active" : ""}>NEP</span>
							<span aria-hidden="true">/</span>
							<span className={language === "eng" ? "active" : ""}>ENG</span>
						</button>
						<button
							type="button"
							className="theme-toggle"
							aria-label={content.themeLabel}
							aria-pressed={theme === "dark"}
							onClick={() =>
								setTheme((current) =>
									current === "light" ? "dark" : "light",
								)
							}
						>
							<ThemeIcon theme={theme} />
						</button>
					</div>
				</header>

				<section className="hero-section" aria-labelledby="hero-title">
					<div className="hero-copy">
						<h1 id="hero-title" className="hero-title">
							{content.heroTitle}
							<span>{content.heroNameNepali}</span>
						</h1>
						<p className="hero-intro">{content.heroIntro}</p>
						<div className="hero-actions">
							<a className="primary-button" href="#contact">
								{content.heroCta}
							</a>
							<a className="text-link" href="#projects">
								{content.heroSecondary}
							</a>
						</div>
					</div>

					<aside className="profile-card" aria-label="Profile image component">
						<div className="portrait-frame">
							<Image
  src="/image.jpg"
  alt="Samrat Giri"
  width={280}
  height={280}
  className="profile-image"
/>
						</div>
						
					</aside>
				</section>

				<div className="section-divider" aria-hidden="true" />

				<section className="content-section intro-section" id="introduction">
	<div className="section-heading">
		<span>01</span>
		<h2>{content.introTitle}</h2>
	</div>
	<div className="intro-copy">
		<p className="lead-text">{content.introLead}</p>
		<p>{content.introBody}</p>
	</div>
	
	{/* Social Media Section - Now inside Introduction */}
	<div className="social-grid">
		{socials.map((social) => (
			<a
				key={social.label}
				href={social.href}
				target="_blank"
				rel="noopener noreferrer"
				className="social-card"
				aria-label={social.label}
			>
				<SocialIcon name={social.icon} />
				<span>{social.label}</span>
			</a>
		))}
	</div>
</section>

				

				<section className="content-section" id="working">
					<div className="section-heading wide">

		<div>
			<h2>{content.workingTitle}</h2>

		</div>
	</div>
	<div className="three-col-grid">
		<article className="stat-card">
			<h3 className="stat-label">WORKING ON</h3>
			<p className="stat-text">Freelancing at a steady pace – open to inquiries.</p>
		</article>
		<article className="stat-card">
			<h3 className="stat-label">BUILDING</h3>
			<p className="stat-text">Flutter apps with Claude Code as my pair</p>
		</article>
		
	</div>
</section>

				<section className="content-section tools-section" id="tools">
	<div className="section-heading wide">
		<span>04</span>
		<div>
			<h2>{content.toolsTitle}</h2>

		</div>
	</div>
	<div className="tools-container">
		<div className="tools-grid">
			{toolGroups.flatMap((group) =>
				group.tools.map((tool) => <span key={tool} className="tool-item">{tool}</span>),
			)}
		</div>
	</div>
</section>
				<section className="content-section" id="experience">
					<div className="section-heading wide">
						<span>05</span>
						<div>
							<h2>{content.experienceTitle}</h2>

						</div>
					</div>
					<div className="timeline-work">
 

  <div className="timeline-row">
    <div className="timeline-year">
      <span className="dot"></span>
      <span>2021 → 2025</span>
    </div>

    <div className="timeline-content">
      <h3>Avenier Tech</h3>

      <p>
       Worked as a Flutter Intern at Avenier Tech, assisting in mobile app development, UI design, API integration, and bug fixing using Flutter and Dart.
      </p>

      <div className="timeline-tags">
        <span>Dart</span>
        <span>Docker</span>
        <span>Git</span>
        <span>AWS</span>
      </div>
    </div>

  
  </div>
</div>
				</section>

				<section className="content-section" id="projects">
					<div className="section-heading wide">
						<span>06</span>
						<div>
							<h2>{content.projectsTitle}</h2>

						</div>
					</div>
					<div className="projects-grid">
						{projects[language].map((project) => (
							<article className="project-card" key={project.title}>
								<h3>
  <span className="project-prefix">~/</span>
  {project.title}
</h3>
								<p>{project.body}</p>
								<div className="project-stack">
									{project.stack.map((tech) => (
										<span key={tech}>{tech}</span>
									))}
								</div>
								<footer className="project-links">
								
									<a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub ↗
    </a>
								</footer>
							</article>
						))}
					</div>
				</section>

				<section className="contact-section" id="contact">
					<div>

						<h2>{content.ctaTitle}</h2>
						<p>{content.ctaBody}</p>
					</div>
					<div className="contact-actions">
						<a className="primary-button" href={`mailto:${content.contactEmail}`}>
							{content.heroCta}
						</a>
						<a className="email-link" href={`mailto:${content.contactEmail}`}>
							{content.emailLabel}: {content.contactEmail}
						</a>
						
					</div>
				</section>
			</div>
		</main>
	);
}

function ThemeIcon({ theme }: { theme: Theme }) {
	if (theme === "dark") {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M12 2.75a.75.75 0 0 1 .75.75v1.25a.75.75 0 0 1-1.5 0V3.5A.75.75 0 0 1 12 2.75Zm0 16.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V20a.75.75 0 0 1 .75-.75Zm9.25-7.25a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1 0-1.5h.75a.75.75 0 0 1 .75.75ZM5 12a.75.75 0 0 1-.75.75H3.5a.75.75 0 0 1 0-1.5h.75A.75.75 0 0 1 5 12Zm12.7-6.76a.75.75 0 0 1 1.06 1.06l-.54.54a.75.75 0 1 1-1.06-1.06l.54-.54ZM6.84 17.16a.75.75 0 0 1 0 1.06l-.54.54a.75.75 0 1 1-1.06-1.06l.54-.54a.75.75 0 0 1 1.06 0Zm11.92 1.6a.75.75 0 0 1-1.06 0l-.54-.54a.75.75 0 0 1 1.06-1.06l.54.54a.75.75 0 0 1 0 1.06ZM6.84 6.84a.75.75 0 0 1-1.06 0L5.24 6.3A.75.75 0 0 1 6.3 5.24l.54.54a.75.75 0 0 1 0 1.06ZM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Z" />
			</svg>
		);
	}

	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M20.1 14.73A7.4 7.4 0 0 1 9.27 3.9a8.4 8.4 0 1 0 10.83 10.83Z" />
		</svg>
	);
}

function SocialIcon({ name }: { name: SocialIconName }) {
	if (name === "github") {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 .1 1.63 1.23 3.28.94.1-.72.39-1.23.71-1.51-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15A10.8 10.8 0 0 1 12 6.16c.96.01 1.92.13 2.82.38 2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.28-5.14 5.56.41.35.77 1.04.77 2.1v3.08c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
			</svg>
		);
	}

	if (name === "linkedin") {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
			</svg>
		);
	}

	if (name === "instagram") {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8ZM12 7.35A4.65 4.65 0 1 1 12 16.65 4.65 4.65 0 0 1 12 7.35Zm0 2A2.65 2.65 0 1 0 12 14.65 2.65 2.65 0 0 0 12 9.35Zm4.9-2.55a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
			</svg>
		);
	}

	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M3.75 5.5h16.5A1.75 1.75 0 0 1 22 7.25v9.5a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 16.75v-9.5A1.75 1.75 0 0 1 3.75 5.5Zm.45 2 7.8 5.18 7.8-5.18H4.2Zm15.8 1.76-7.45 4.95a1 1 0 0 1-1.1 0L4 9.26v7.24h16V9.26Z" />
		</svg>
	);
}
