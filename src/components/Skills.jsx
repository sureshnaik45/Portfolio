import React from 'react';

const Skills = () => {
  const skillsData = {
    Languages: ["JavaScript (ES6+)", "SQL", "Python", "C", "C++"],
    Frontend:['React.js', 'Redux', 'React Router', 'Vite', 'Babel', 'Webpack', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
    Backend: ["Node.js", "Express.js", "RESTful APIs", "Firebase"],
    Databases: ["MongoDB", "MySQL", "Firestore"],
    "Services & Packages": ["bcrypt", "JWT", "Socket.io", "Axios", "Clerk", "Stripe", "Inngest", "Brevo (SMTP)", "Cloudinary", "ImageKit"],
    Tools: ["Git & GitHub", "Postman", "Vercel", "VS Code"],
    "Core Concepts": ["DSA", "OOPs", "DBMS", "OS", "Computer Networks", "SDLC", "Software Testing", "Blockchain", "AI"]
  };

  return (
    <section id="skills" className="py-7 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-7 md:mb-9">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {Object.entries(skillsData).map(([category, items], index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary transition-all hover:-translate-y-2 duration-300 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4 border-b border-slate-600 pb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                  <span key={idx} className="bg-slate-900 text-slate-300 px-3 py-1 rounded-full text-sm font-medium border border-slate-700 hover:text-white hover:border-primary transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;