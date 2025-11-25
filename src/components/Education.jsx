import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const certifications = [
    "ReactJs - The Complete ReactJs Course For Beginners",
    "Complete Node.js Bootcamp: From Basics to Advanced",
    "SQL for Data Engineers Designing and Building Data Pipelines",
    "Web Performance Bootcamp: Mastering Speed Techniques",
    "Frontend architecture and patterns bootcamp",
    "Master React.js with AI: From Basics to Advanced Development",
    "NGINX MasterClass: NGINX Server & Custom Load Balancer",
    "Docker Deep Dive: Build, Ship and Run Containers"
  ];

  return (
    <section id="education" className="py-7 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
             <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="text-primary" size={40} />
                <h2 className="text-3xl font-bold text-white">Education</h2>
             </div>
             
             <div className="relative border-l-2 border-slate-700 ml-4 space-y-12">
                {/* Education 1 */}
                <div className="ml-8 relative">
                   <div className="absolute -left-[41px] bg-slate-900 border-2 border-primary w-5 h-5 rounded-full"></div>
                   <h3 className="text-xl font-bold text-white">B.Tech, Computer Science</h3>
                   <p className="text-primary">IIIT RK Valley (RGUKT, AP)</p>
                   <p className="text-slate-400 text-sm mt-1">June 2021 – May 2025</p>
                   <p className="text-slate-300 mt-2">CGPA: 7.26</p>
                </div>

                {/* Education 2 */}
                <div className="ml-8 relative">
                   <div className="absolute -left-[41px] bg-slate-900 border-2 border-primary w-5 h-5 rounded-full"></div>
                   <h3 className="text-xl font-bold text-white">Pre University Course / Intermediate / 10+2, MPC</h3>
                   <p className="text-primary">IIIT RK Valley (RGUKT, AP)</p>
                   <p className="text-slate-400 text-sm mt-1">Sep 2019 – May 2021</p>
                   <p className="text-slate-300 mt-2">CGPA: 8.1</p>
                </div>
             </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
                <Award className="text-primary" size={40} />
                <h2 className="text-3xl font-bold text-white">Certifications</h2>
             </div>

             <div className="grid gap-4">
                {certifications.map((cert, index) => (
                   <div key={index} className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex items-center gap-4 hover:border-primary transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-slate-300 font-medium">{cert}</span>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;