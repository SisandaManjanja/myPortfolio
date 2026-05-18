const projects = [
  {
    title: "Color Popularity App",
    description:
      " C# console application that reads and processes user preference data from structured input files to identify the most popular website colors. The system applies data aggregation and frequency analysis techniques to produce ranked results, demonstrating strong understanding of file I/O, data structures, and algorithm design in C#.",
    tech: ["C#", ".NET", "SQL"],
    github: "https://github.com/SisandaManjanja/vulaMedical",
  },

  {
    title: "React Portfolio Website",
    description:
      "a responsive personal portfolio website using React, HTML, CSS, and JavaScript to professionally showcase my projects, technical skills, and software development experience. The application features a clean UI, structured layout, and intuitive navigation, demonstrating strong front-end development skills and attention to user experience.",
    tech: ["React", "Tailwind", "Vite"],
    github: "https://github.com/YOUR_USERNAME/react-portfolio",
  },

  {
    title: "Lemase Group",
    description:
      "a responsive website for an electrical engineering company using HTML, CSS, and JavaScript. The platform showcases company services, completed projects, and contact details in a clean, structured interface. This project highlights skills in front-end development, responsive design, and creating user-friendly business websites.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://lemase-group.com/",
  },
]
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-16 py-5 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <h1 className="text-xl font-bold tracking-tight">
  Sisanda.dev
</h1>

        <div className="hidden md:flex space-x-8 text-sm text-slate-300">
  <a href="#" className="hover:text-cyan-400 transition">Home</a>
  <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
  <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>

</div>
      </nav>

      {/* HERO */}
      <section className="text-center mt-32 px-6">
        <h2 className="text-5xl font-bold mb-4">
          Hi, I'm Sisanda Manjanja👋
        </h2>

        <p className="text-slate-300 max-w-xl mx-auto text-lg">
          Full-Stack Developer specializing in React, JavaScript, C#, and ASP.NET.
        </p>

        <a
  href="#projects"
  className="mt-8 inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold transition"
>
  View My Projects
</a>
      </section>

      {/* ABOUT */}
<section className="px-8 mt-24 max-w-4xl mx-auto text-center">
  <h2 className="text-3xl font-bold mb-4">About Me</h2>

  <p className="text-slate-300 leading-relaxed">
    Full Stack Developer with 18+ months of hands-on software development experience building and maintaining responsive web applications using JavaScript, React, C#, ASP.NET, HTML, CSS, and SQL.

Experienced working in Agile development environments, contributing to frontend and backend features, REST API integration, debugging, testing, and performance optimization. Strong foundation in modern JavaScript development, responsive UI design, database interaction, and scalable application development.

Passionate about building real-world software systems and continuously expanding knowledge across frontend, backend, APIs, cloud technologies, and modern engineering workflows. Comfortable collaborating within remote and cross-functional teams while adapting quickly to new technologies and AI-assisted development tools.
  </p>
</section>

{/* SKILLS */}
<section className="px-8 mt-24">
  <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

  <div className="grid md:grid-cols-3 gap-6 text-center">

    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <h3 className="text-xl font-semibold">Frontend</h3>
      <p className="text-slate-400 mt-2">React, JavaScript, HTML, CSS, Tailwind, JQuery, Responsive Web Design</p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <h3 className="text-xl font-semibold">Backend</h3>
      <p className="text-slate-400 mt-2">C#, ASP.NET, APIs, Entity Frameworks, Python, Typescript, Java</p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <h3 className="text-xl font-semibold">Tools</h3>
      <p className="text-slate-400 mt-2">Git, GitHub, VS Code, Vite, Azure, AWS, Linux, Visual Code</p>
    </div>

  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-16 mt-24">
  <h2 className="text-3xl font-bold mb-8 text-center">
    Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-slate-900/60 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition"
      >
        <h3 className="text-xl font-semibold mb-3">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-slate-800 text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 hover:text-cyan-300 font-medium"
        >
          View project →
        </a>
      </div>
    ))}

  </div>
</section>

      {/* CONTACT */}
{/* CONTACT */}
<section id="contact" className="px-6 md:px-16 mt-24 mb-20 text-center">

  <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>

  <p className="text-slate-300 mb-10">
    Feel free to reach out for opportunities, collaboration, or projects.
  </p>

  <div className="flex flex-col md:flex-row justify-center gap-4">

    {/* GITHUB */}
    <a
      href="https://github.com/SisandaManjanja"
      target="_blank"
      rel="noreferrer"
      className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition"
    >
      GitHub
    </a>

    {/* WHATSAPP */}
    <a
      href="https://wa.me/0671644851"
      target="_blank"
      rel="noreferrer"
      className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl transition"
    >
      WhatsApp
    </a>

    {/* EMAIL */}
    <a
      href="mailto:manjanjasisanda@gmail.com"
      className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl transition"
    >
      Email Me
    </a>

    {/* LINKEDIN */}
<a
  href="https://www.linkedin.com/in/sisanda-manjanja-2a7b94253/"
  target="_blank"
  rel="noreferrer"
  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition"
>
  LinkedIn
</a>

<a
  href="/SisandaManjanja.pdf"
  download
  className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl transition"
>
  Download CV
</a>

  </div>
</section>

    </div>
  )
}