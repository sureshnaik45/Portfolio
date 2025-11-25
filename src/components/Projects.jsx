import React from 'react';
import { Github, ExternalLink, FileText } from 'lucide-react';
import edemy from '../assets/edemy.png';
import mytube from '../assets/mytube.png';
import paper from '../assets/paper.png';

const Projects = () => {
  const projects = [
    {
      title: "Edemy-LMS",
      tech: "MERN, JavaScript, Mongoose, Redux, Tailwind CSS",
      desc: "Architected a secure Node.js backend with REST API. Integrated Stripe for payments and Webhooks. Solved spam issues with MongoDB TTL index.",
      live: "https://edemy-lms-45.vercel.app/",
      github: "https://github.com/sureshnaik45/Edemy-LMS",
      image: edemy,
      isResearch: false
    },
    {
      title: "My-Tube",
      tech: "React.js, JavaScript, YouTube Data API v3, CSS",
      desc: "Dynamic SPA replicating YouTube's core functionality. Implemented client-side routing, search features, and video playback using API v3.",
      live: "https://my-tube-45.vercel.app/",
      github: "https://github.com/sureshnaik45/My-Tube",
      image: mytube,
      isResearch: false
    },
    {
      title: "Deepfake Prevention Using Blockchain and AI for Visual Media",
      tech: "AI, ML, Image Analysis, Blockchain, Watermarking",
      desc: "Authored a research paper on a multi-layered framework using Blockchain and AI to combat deepfake exploitation and ensure media integrity.",
      live: "https://zkginternational.com/archive/volume10/DEEPFAKE-PREVENTION-USING-BLOCKCHAIN-AND-AI-FOR-VISUAL-MEDIA.pdf",
      github: "https://github.com/sureshnaik45/Deepfake-Prevention-Using-Blockchain-and-AI-for-Visual-Media",
      image: paper,
      isResearch: true
    }
  ];

  return (
    <section id="projects" className="py-7 bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-7 md:mb-9">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all hover:-translate-y-2">
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-all z-10"></div>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-primary text-sm font-medium mb-4">{project.tech}</p>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed line-clamp-4 flex-grow">
                  {project.desc}
                </p>
                
                <div className="flex gap-4 mt-auto pt-4 border-t border-slate-800">
                    {/* Logic to switch buttons based on project type */}
                    {project.isResearch ? (
                         <a 
                         href={project.github} 
                         target="_blank" 
                         rel="noreferrer" 
                         className="flex items-center gap-2 w-full justify-center px-4 py-2 bg-slate-800 rounded-lg text-slate-300 hover:bg-primary hover:text-white transition-colors font-medium"
                       >
                         <FileText size={20} /> See Files
                       </a>
                    ) : (
                        <>
                            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                                <Github size={20} /> Code
                            </a>
                            <a href={project.live} target="_blank" rel="noreferrer" className="flex ml-auto items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                                <ExternalLink size={20} /> Live Demo
                            </a>
                        </>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;