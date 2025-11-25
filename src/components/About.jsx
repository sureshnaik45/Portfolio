import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-7 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
            <p>
              I am a proficient <span className="text-primary font-bold">Full Stack MERN Developer</span> with hands-on experience developing and deploying secure, scalable web applications.
            </p>
            <p>
              My expertise lies in integrating complex third-party services, packages including bcrypt, JWT, sockets, Stripe, Clerk, Inngest, ImageKit, Cloudinary, and Brevo. I am passionate about solving critical database issues and implementing robust REST APIs.
            </p>
            <p>
              Currently available for immediate joining. I am eager to contribute to innovative and brain storming projects and continue learning in the ever-evolving tech landscape.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
               <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                  <h3 className="text-2xl font-bold text-primary">4+</h3>
                  <p className="text-sm text-slate-400">Major Projects</p>
               </div>
               <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                  <h3 className="text-2xl font-bold text-primary">7.26</h3>
                  <p className="text-sm text-slate-400">CGPA (B.Tech)</p>
               </div>
            </div>
          </div>
          
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-colors">
             <h3 className="text-xl font-semibold mb-4 text-white">Proficiencies</h3>
             <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>RESTful API Development</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>Frontend Development</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>SQL Development</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>Real-time Applications (Socket.io)</li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;