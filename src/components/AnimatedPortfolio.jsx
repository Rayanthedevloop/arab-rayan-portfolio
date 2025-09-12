import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Mail, Download, Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

export default function AnimatedPortfolio() {
  const NAME = 'Arab Rayan';
  const ROLE = 'Technicien Réseau & Développeur Web (junior)';
  const LOCATION = 'Île-de-France, France';
  const BIO = `Passionné par le réseau (IP, VLAN, Cisco, montage PC) avec quelques bases en HTML, CSS, JS et PHP. 
J’ai déjà fait des stages en DSI (installation Windows pour gardiens d’immeubles et employés) et en gendarmerie (développement web).`;
  const EMAIL = 'arab.rayan9307@gmail.com';
  const RESUME_LINK = '/resume.pdf'; 
  
  const PROJECTS = [
    {
      id: 1,
      title: 'Stage Immobilière 3F',
      description: "Installation de Windows spécifiques pour les gardiens d’immeubles et employés.",
      tags: ['Windows', 'DSI', 'Support'],
      repo: '#',
      demo: '#',
      image: null,
    },
    {
      id: 2,
      title: 'Stage Gendarmerie (Rosny-sous-Bois)',
      description: "Développement web et découverte des technologies réseau utilisées en interne.",
      tags: ['Web', 'Réseau', 'Sécurité'],
      repo: '#',
      demo: '#',
      image: null,
    },
  ];

  const SKILLS = [
    { name: 'Réseau (IP, VLAN, Cisco)', value: 85 },
    { name: 'Montage PC & maintenance', value: 80 },
    { name: 'HTML / CSS / JS (bases)', value: 60 },
    { name: 'PHP & Bases de données (phpMyAdmin)', value: 65 },
  ];

  const EXPERIENCE = [
    {
      company: 'Immobilière 3F (Siège Paris 13e)',
      role: 'Stagiaire DSI',
      period: '2024',
      bullets: ['Installation Windows pour postes spécifiques', 'Support technique aux employés'],
    },
    {
      company: 'Gendarmerie du Fort de Rosny-sous-Bois',
      role: 'Stagiaire développement web',
      period: '2023',
      bullets: ['Mise en place de petits projets web', 'Découverte des systèmes informatiques sécurisés'],
    },
  ];

  const CERTIFICATIONS = [
    { id: 1, title: 'PSC1 (Secourisme)', image: '/certif-psc1.jpg' },
    { id: 2, title: 'Bac (mention Assez Bien)', image: '/certif-bac.jpg' },
  ];

  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <header className="max-w-6xl mx-auto p-6 flex justify-between items-center">
        <div>
          <motion.h1 initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-2xl font-extrabold">
            {NAME}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm opacity-80">{ROLE} • {LOCATION}</motion.p>
        </div>

        <div className="flex items-center gap-3">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setDark(d => !d)} aria-label="Toggle dark mode" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <a href={RESUME_LINK} download className="flex items-center gap-2 px-3 py-2 rounded-md border dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700">
            <FileText size={16} /> <span className="text-sm">CV</span>
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* HERO avec portrait */}
        <section className="grid md:grid-cols-2 gap-8 items-center mt-6">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">{ROLE}</h2>
            <p className="mt-4 text-lg opacity-90">{BIO}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:opacity-90">
                <Mail size={16} /> Contactez-moi
              </a>
              <a href="https://github.com/Rayanthedevloop" target="_blank" rel="noreferrer"><Github size={20}/></a>
              <a href="https://www.linkedin.com/in/rayan-arab-a11468384/" target="_blank" rel="noreferrer"><Linkedin size={20}/></a>
            </div>
          </motion.div>

          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <img src="/portrait.jpg" alt="Portrait Rayan" className="w-full h-64 object-cover"/>
            </div>
          </motion.div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold">Certifications</h3>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {CERTIFICATIONS.map(cert => (
              <motion.div key={cert.id} whileHover={{ scale: 1.05 }} className="rounded-lg border overflow-hidden shadow-sm">
                <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover"/>
                <div className="p-3 text-center font-semibold">{cert.title}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
