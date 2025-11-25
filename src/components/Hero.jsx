import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const GOOGLE_DRIVE_CV_LINK = "https://drive.google.com/file/d/1A0WHUqaUP2uc-JJy45mG4cftQY7ldiRv/view?usp=drive_link";
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl text-primary font-semibold mb-2 mt-2 md:mt-0">Greetings. I'm</h2>
          <h1 className="text-xl md:text-2xl font-bold mb-2 text-white">
            KIMAVATH <span className="text-slate-400">SURESHNAIK</span>
          </h1>
          <div className="text-xl md:text-2xl font-bold text-slate-300 mb-0 h-[60px]">
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'MERN Stack Developer', 2000,
                'Frontend Developer', 2000,
                'React Developer', 2000,
                'Backend Developer', 2000,
                'JavaScript Developer', 2000,
                'SQL Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-slate-400 max-w-lg mb-8 text-lg leading-relaxed">
              Proficient Full Stack MERN Developer with hands-on experience developing and deploying secure, scalable web
              applications. Available for immediate joining and eager to contribute to innovative and brain storming projects.
          </p>
          
          <div className="flex space-x-4 mb-8">
            <a href="https://github.com/sureshnaik45" target="_blank" className="p-3 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Github size={24}/></a>
            <a href="https://linkedin.com/in/kimavath-sureshnaik" target="_blank" className="p-3 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Linkedin size={24}/></a>
            <a href="https://mailto:kimavathsureshnaikk@gmail.com" className="p-3 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all"><Mail size={24}/></a>
          </div>

          <div className="flex gap-4">
            <a href={GOOGLE_DRIVE_CV_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-cyan-600 transition-colors shadow-lg shadow-primary/30"
            >
              Open Resume
            </a>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="cursor-pointer px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Image/Visual Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center mb-5 md:mb-0"
        >
          <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-3xl absolute opacity-20 animate-pulse"></div>
          <div className="w-72 h-72 md:w-96 md:h-96 bg-slate-800 rounded-full border-4 border-slate-700 flex items-center justify-center relative z-10 overflow-hidden">
             <span className="text-6xl">👨‍💻</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;