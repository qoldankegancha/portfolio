import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle2, Languages, GraduationCap, Trophy, Dumbbell, User, BrainCircuit } from 'lucide-react';

import Scene3D from './components/Scene3D';
import SectionHeader from './components/SectionHeader';
import ProjectCard from './components/ProjectCard';
import { 
  PERSONAL_INFO, 
  CONTACT, 
  EXPERIENCE, 
  SOFTWARE_STACK, 
  PROJECTS,
  LANGUAGES,
  EXPERTISE_TRAITS,
  EDUCATION_HISTORY,
  ACHIEVEMENTS,
  FITNESS_STATS,
  INTERESTS
} from './constants';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-offwhite text-primary">
      {/* Navigation / Top Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold font-display tracking-tight">AI.</div>
          <a 
            href="mailto:mynocoded@gmail.com" 
            className="px-6 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-[0.2em] text-gray-500 mb-4 uppercase">
                Portfolio
              </h2>
              <h1 className="text-6xl md:text-8xl font-black font-display uppercase leading-none mb-6">
                {PERSONAL_INFO.name.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
              <p className="text-xl md:text-2xl font-light text-gray-600 mb-8 max-w-md">
                {PERSONAL_INFO.title}
              </p>
              
              <div className="flex flex-col gap-4 text-sm font-medium">
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-gray-600 transition-colors">
                  <div className="p-2 bg-black text-white rounded-full"><Phone size={16} /></div>
                  {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:text-gray-600 transition-colors">
                  <div className="p-2 bg-black text-white rounded-full"><Mail size={16} /></div>
                  {CONTACT.email}
                </a>
                <a href={`https://t.me/${CONTACT.telegram.replace('@', '')}`} className="flex items-center gap-3 hover:text-gray-600 transition-colors">
                  <div className="p-2 bg-black text-white rounded-full"><Send size={16} /></div>
                  {CONTACT.telegram}
                </a>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 h-[50vh] lg:h-[70vh] w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent rounded-3xl -z-10 transform rotate-3 scale-95 opacity-50"></div>
            <Scene3D />
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Projects (Now Full Height) */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Projects */}
            <div id="projects">
              <SectionHeader title="Selected Works" subtitle="Portfolio" />
              <div className="flex flex-col gap-12">
                {PROJECTS.map((project, idx) => (
                  <ProjectCard key={idx} project={project} index={idx} />
                ))}
              </div>
            </div>
            
          </div>

          {/* Right Column: All Info + Experience */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Education & Achievements */}
            <div className="bg-black text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-gray-800 rounded-full blur-3xl opacity-20 -mr-16 -mt-16 pointer-events-none"></div>
              
              {/* Education List */}
              <div className="mb-10 relative z-10">
                <h3 className="text-xl font-bold font-display uppercase mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" /> Education
                </h3>
                <ul className="space-y-6">
                  {EDUCATION_HISTORY.map((edu, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="w-1 bg-gray-700 rounded-full h-full min-h-[40px]"></div>
                      <div>
                        <h4 className="font-bold text-lg leading-tight">{edu.institution}</h4>
                        <p className="text-gray-400 text-sm mt-1">{edu.status}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements List */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold font-display uppercase mb-6 flex items-center gap-2">
                  <Trophy className="w-5 h-5" /> Achievements
                </h3>
                <ul className="space-y-4">
                  {ACHIEVEMENTS.map((ach, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                        ${ach.medal === 'gold' ? 'bg-yellow-400 text-black' : 
                          ach.medal === 'silver' ? 'bg-gray-300 text-black' : 
                          ach.medal === 'bronze' ? 'bg-orange-700 text-white' : 'bg-green-500 text-white'}
                      `}>
                        {ach.medal === 'check' ? '✓' : ''}
                        {ach.medal === 'silver' ? '2' : ''}
                        {ach.medal === 'bronze' ? '3' : ''}
                      </div>
                      <div>
                        <span className="font-medium block leading-tight">{ach.title}</span>
                        {ach.year && <span className="text-xs text-gray-500">{ach.year}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Physical Stats */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
               <h3 className="text-xl font-bold font-display uppercase mb-6 flex items-center gap-2 text-red-600">
                <Dumbbell className="w-5 h-5" /> Physical Stats
              </h3>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Target Date</span>
                <span className="text-xs font-mono font-bold bg-gray-100 px-2 py-1 rounded">{FITNESS_STATS.date}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-gray-50 rounded-xl text-center">
                    <div className="text-3xl font-black font-display">{FITNESS_STATS.pushups}</div>
                    <div className="text-xs uppercase font-bold text-gray-400 mt-1">Pushups</div>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-xl text-center">
                    <div className="text-3xl font-black font-display">{FITNESS_STATS.dumbbells}</div>
                    <div className="text-xs uppercase font-bold text-gray-400 mt-1">Dumbbells (Kg)</div>
                 </div>
              </div>
            </div>

            {/* Interests */}
            <div>
               <h3 className="text-xl font-bold font-display uppercase mb-6 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5" /> Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest, idx) => (
                   <span key={idx} className="px-3 py-1.5 border border-gray-900 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-colors cursor-default">
                    {interest}
                   </span>
                ))}
              </div>
            </div>

            {/* Software Stack */}
            <div>
              <h3 className="text-2xl font-bold font-display uppercase mb-8 border-b pb-4">Software Stack</h3>
              <div className="flex flex-wrap gap-3">
                {SOFTWARE_STACK.map((tech, idx) => (
                  <motion.span 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium shadow-sm hover:bg-black hover:text-white transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold font-display uppercase mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Expertise
              </h3>
              <ul className="space-y-4">
                {EXPERTISE_TRAITS.map((trait, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    {trait}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-bold font-display uppercase mb-6 flex items-center gap-2">
                <Languages className="w-5 h-5" /> Language
              </h3>
              <div className="space-y-4">
                {LANGUAGES.map((l, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-gray-200 pb-2">
                    <span className="font-medium">{l.lang}</span>
                    <span className="text-sm font-bold bg-gray-200 px-2 py-0.5 rounded text-gray-800">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>

             {/* Experience (Ish Tajribasi) - Moved Here */}
             <div id="experience">
              <SectionHeader title="Ish Tajribasi" subtitle="Experience" />
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-6"
              >
                {EXPERIENCE.map((job) => (
                  <motion.div 
                    key={job.id} 
                    variants={itemVariants}
                    className="group p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-black/5 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <span className="text-sm font-mono bg-gray-100 px-3 py-1 rounded-full">{job.duration}</span>
                    </div>
                    {job.company && <div className="text-sm font-semibold text-gray-500 mb-2">{job.company}</div>}
                    <p className="text-gray-600">{job.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-display uppercase mb-8">Let's Create Together</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <a href={`mailto:${CONTACT.email}`} className="text-lg hover:underline decoration-1 underline-offset-4">{CONTACT.email}</a>
            <span className="hidden md:inline text-gray-600">•</span>
            <a href={`https://t.me/${CONTACT.telegram.replace('@', '')}`} className="text-lg hover:underline decoration-1 underline-offset-4">{CONTACT.telegram}</a>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Azizbek Ibrokhimov. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;