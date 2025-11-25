import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');    
    const mailtoLink = `mailto:kimavathsureshnaikk@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;    
    // Open default mail client
    window.location.href = mailtoLink;
  };
  return (
    <section id="contact" className="py-7 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-7 md:mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-3 ">
            <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>
            <p className="text-slate-400 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to give any suggestions, feel free to connect with me via LinkedIn, Email or submitting the form. I will try to get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-900 rounded-full text-primary"><Phone size={20} /></div>
                <span>+91 6304389569</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-900 rounded-full text-primary"><Mail size={20} /></div>
                <span>kimavathsureshnaikk@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-900 rounded-full text-primary"><MapPin size={20} /></div>
                <span>Hindupuram, Andhra Pradesh, India</span>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a href="https://github.com/sureshnaik45" className="p-3 bg-slate-900 rounded-lg hover:bg-primary hover:text-white transition-all"><Github /></a>
              <a href="https://linkedin.com/in/kimavath-sureshnaik" className="p-3 bg-slate-900 rounded-lg hover:bg-primary hover:text-white transition-all"><Linkedin /></a>
            </div>
          </div>

          {/* Simple Form */}
          <form onSubmit={handleSubmit} className="space-y-2  bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-lg">
            <div>
              <label className="block text-slate-400 mb-2 text-sm font-medium">Name</label>
              <input name="name" type="text" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-slate-400 mb-2 text-sm font-medium">Email</label>
              <input name="email" type="email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-slate-400 mb-2 text-sm font-medium">Message</label>
              <textarea name="message" rows="4" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;