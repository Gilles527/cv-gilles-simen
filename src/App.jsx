import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Terminal,
  Cpu,
  Sparkles,
  Download,
  Mail,
  MapPin,
  CheckCircle2,
  Send,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  X,
  Maximize2,
  Check,
  ExternalLink
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const compRef = useRef(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form inputs state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Morphing navbar state on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Animations with gsap.context()
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero stagger animations
      gsap.from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1.0,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.1,
      });

      // About section fade-up
      gsap.from('.about-elem', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 75%',
        },
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.14,
        ease: 'power3.out',
      });

      // Timeline cards slide-in
      const timelineCards = gsap.utils.toArray('.timeline-card');
      timelineCards.forEach((card, index) => {
        const isEven = index % 2 === 0;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
          x: isEven ? -35 : 35,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });

      // Skills cards and progress indicators
      const skillCards = gsap.utils.toArray('.skill-card');
      skillCards.forEach((card) => {
        const circle = card.querySelector('.progress-ring-circle');
        const counter = card.querySelector('.skill-percent');
        const targetPercent = parseInt(card.getAttribute('data-percent') || '85', 10);

        if (circle && counter) {
          const circumference = 2 * Math.PI * 40;
          gsap.fromTo(
            circle,
            { strokeDashoffset: circumference },
            {
              strokeDashoffset: circumference - (circumference * targetPercent) / 100,
              duration: 1.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              },
            }
          );

          const obj = { val: 0 };
          gsap.to(obj, {
            val: targetPercent,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            onUpdate: () => {
              counter.textContent = `${Math.round(obj.val)}%`;
            },
          });
        }
      });

      // Education cards
      gsap.from('.education-card', {
        scrollTrigger: {
          trigger: '#formation',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Contact elements stagger
      gsap.from('.contact-elem', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 80%',
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, compRef);

    return () => ctx.revert();
  }, []);

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const cvContent = `
============================================================
              GILLES SIMEN — CURRICULUM VITAE
  Étudiant en Génie Logiciel (2e Année) & Développeur Web
============================================================

Localisation : Yaoundé, Cameroun
Établissement : The ICT University, Cameroun
Filière : B.Sc. Software Engineering (Génie Logiciel)
Email : placidesimen3@gmail.com

------------------------------------------------------------
1. PROFIL PROFESSIONNEL
------------------------------------------------------------
Titulaire d'un Baccalauréat Scientifique Série C (Mathématiques, 2025)
et actuellement en 2e année de Licence en Génie Logiciel à l'ICT University.
Je combine rigueur d'analyse et compétences en développement web moderne
(React, JavaScript, Tailwind CSS, GSAP) pour créer des sites vitrines
et des applications web sur mesure, fiables et performants.

------------------------------------------------------------
2. FORMATION ACADÉMIQUE
------------------------------------------------------------
• 2025 — Présent : Licence en Génie Logiciel (2e Année)
  The ICT University — Yaoundé, Cameroun
  Matières clés : Algorithmique, Programmation Orientée Objet,
  Bases de données relationnelles, Conception logicielle, Architecture web.

• 2025 : Baccalauréat Scientifique Série C (Mathématiques & Sciences)
  Formation scientifique axée sur la logique, les mathématiques et l'analyse.

------------------------------------------------------------
3. EXPÉRIENCES & PROJETS
------------------------------------------------------------
• 2025 — Présent : Développeur Web Indépendant
  - Création de sites vitrines et applications web pour des clients et PME.
  - Conception d'interfaces réactives adaptées aux mobiles et ordinateurs.
  - Déploiement en ligne et optimisation des temps de chargement.

• 2025 — 2026 : Projets Académiques & Travaux Pratiques — ICT University
  - Réalisation d'applications modulaires et modélisation de bases de données.
  - Gestion du travail d'équipe et versioning de code avec Git & GitHub.

• 2024 — 2025 : Projets Personnels en Développement Web
  - Création de projets interactifs pour approfondir React et le JavaScript moderne.
  - Pratique continue de l'intégration UI et des micro-animations.

------------------------------------------------------------
4. COMPÉTENCES TECHNIQUES
------------------------------------------------------------
- Langages & Frameworks : React, JavaScript (ES6+), HTML5, Tailwind CSS
- Animations & UI : GSAP, Responsive Design, Intégration soignée
- Logiciel & Outils : Algorithmique, POO, Git, GitHub, VS Code
- Langues : Français (Langue maternelle / Courant), Anglais (Intermédiaire)
============================================================
    `;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_Gilles_Simen.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send directly to placidesimen3@gmail.com via formsubmit.co
      const response = await fetch('https://formsubmit.co/ajax/placidesimen3@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nouveau message de contact pour Gilles Simen - de ${formData.name}`,
        })
      });

      if (response.ok) {
        setFormSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback: open mailto
        window.location.href = `mailto:placidesimen3@gmail.com?subject=Contact via CV en ligne - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\n\nEmail de réponse : " + formData.email)}`;
        setFormSent(true);
      }
    } catch {
      window.location.href = `mailto:placidesimen3@gmail.com?subject=Contact via CV en ligne - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\n\nEmail de réponse : " + formData.email)}`;
      setFormSent(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormSent(false), 6000);
    }
  };

  const skillsData = [
    {
      name: 'React & Web Moderne',
      percent: 90,
      badge: 'Frontend',
      desc: 'Création d’interfaces réactives, hooks, composants réutilisables et intégration d’APIs.',
    },
    {
      name: 'Génie Logiciel & Algorithmique',
      percent: 86,
      badge: 'Bac C & ICT Univ',
      desc: 'Structures de données, logique formelle, programmation orientée objet et rigueur mathématique.',
    },
    {
      name: 'Tailwind CSS & Ergonomie',
      percent: 94,
      badge: 'Intégration UI',
      desc: 'Design responsive mobile-first, structure visuelle soignée et respect des détails graphiques.',
    },
    {
      name: 'GSAP & Micro-Animations',
      percent: 84,
      badge: 'Expérience Visuelle',
      desc: 'Animations fluides avec ScrollTrigger, transitions discrètes et navigation agréable.',
    },
    {
      name: 'Git, GitHub & Déploiement',
      percent: 80,
      badge: 'Outils de travail',
      desc: 'Gestion des versions, organisation de dépôt propre et mise en ligne sur le web.',
    },
  ];

  const experiencesData = [
    {
      period: '2025 — PRÉSENT',
      role: 'Développeur Web Indépendant',
      company: 'Clients & Entreprises Locales',
      description:
        'Conception et mise en ligne de sites vitrines modernes pour des entreprises et professionnels. Conseil sur le design, développement sur mesure et optimisation de la vitesse d’affichage.',
      tags: ['React', 'Tailwind CSS', 'Vite', 'Responsive'],
    },
    {
      period: '2025 — 2026',
      role: 'Projets Académiques & Travaux Dirigés',
      company: 'The ICT University — Cameroun',
      description:
        'Projets pratiques dans le cadre du diplôme en Génie Logiciel : développement d’applications modulaires, modélisation relationnelle de bases de données et collaboration avec Git.',
      tags: ['Génie Logiciel', 'Algorithmes', 'Java / C++', 'Git'],
    },
    {
      period: '2024 — 2025',
      role: 'Projets Personnels & Pratique Frontend',
      company: 'Projets Personnels & Veille Web',
      description:
        'Développement d’une série d’interfaces interactives et d’expérimentations UI pour consolider la maîtrise de JavaScript, des layouts modernes et des animations web.',
      tags: ['JavaScript ES6+', 'HTML5 / CSS3', 'GSAP', 'UI Design'],
    },
  ];

  return (
    <div ref={compRef} className="relative bg-void text-ghost min-h-screen selection:bg-plasma selection:text-white">
      {/* Texture Visuelle : SVG Turbulence Noise Overlay (0.05 opacity) */}
      <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Modal / Lightbox pour la photo de profil */}
      {isPhotoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsPhotoOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-[#121224] border border-white/15 rounded-[2.5rem] p-4 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPhotoOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full h-[450px] rounded-[2rem] overflow-hidden bg-black/40">
              <img
                src="/profile.jpg"
                alt="Gilles Simen"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="mt-4 text-center pb-2">
              <h3 className="font-title font-bold text-lg text-white">Gilles Simen</h3>
              <p className="font-mono text-xs text-plasma mt-0.5">
                Étudiant en Génie Logiciel — The ICT University
              </p>
            </div>
          </div>
        </div>
      )}

      {/* A. NAVBAR — "La Signature Flottante" */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-5xl transition-all duration-300">
        <nav
          className={`flex items-center justify-between px-5 md:px-7 py-3 rounded-full transition-all duration-300 ${
            navScrolled
              ? 'bg-[#0A0A14]/80 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.8)]'
              : 'bg-transparent border border-white/5'
          }`}
        >
          {/* Logo / Monogramme */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-plasma/50 shadow-neon-glow group-hover:scale-105 transition-transform duration-300">
              <img src="/profile.jpg" alt="GS" className="w-full h-full object-cover object-top" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-title font-bold text-sm tracking-tight text-white group-hover:text-plasma transition-colors">
                Gilles Simen
              </span>
              <span className="font-mono text-[10px] text-gray-400">ICT University • Génie Logiciel</span>
            </div>
          </a>

          {/* Navigation Anchors */}
          <div className="hidden md:flex items-center gap-6 font-title text-xs tracking-wider uppercase text-gray-300">
            <a href="#about" className="link-lift hover:text-plasma transition-colors">
              À propos
            </a>
            <a href="#experience" className="link-lift hover:text-plasma transition-colors">
              Expérience
            </a>
            <a href="#skills" className="link-lift hover:text-plasma transition-colors">
              Compétences
            </a>
            <a href="#formation" className="link-lift hover:text-plasma transition-colors">
              Formation
            </a>
            <a href="#contact" className="link-lift hover:text-plasma transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Download CV */}
          <button
            onClick={handleDownloadCV}
            className="btn-magnetic relative overflow-hidden inline-flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full bg-plasma text-white text-xs md:text-sm font-semibold tracking-wide shadow-neon-glow hover:shadow-neon-strong group"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>Mon CV</span>
          </button>
        </nav>
      </header>

      {/* B. SECTION HERO — "La Première Impression" */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop"
            alt="Ambiance Fond"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/85 to-void/50" />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-plasma/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-neon-purple/20 rounded-full blur-[160px] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Photo de profil cliquable avec zoom */}
          <div className="hero-elem mb-6 relative group">
            <button
              onClick={() => setIsPhotoOpen(true)}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-tr from-plasma via-neon-purple to-neon-blue shadow-neon-glow hover:scale-105 transition-all duration-300 block focus:outline-none"
              title="Cliquer pour agrandir la photo"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#121224] relative">
                <img
                  src="/profile.jpg"
                  alt="Gilles Simen"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-plasma/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </button>
            <div className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-void flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            </div>
          </div>

          {/* Name & Title */}
          <div className="hero-elem">
            <h1 className="font-title font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-[0_0_40px_rgba(123,97,255,0.4)]">
              Gilles Simen
            </h1>
          </div>

          <div className="hero-elem mt-3 mb-6">
            <p className="font-dramatic italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-plasma font-normal tracking-wide">
              Étudiant en Génie Logiciel &amp; Développeur Web
            </p>
          </div>

          {/* Repères clairs et authentiques */}
          <div className="hero-elem flex flex-wrap items-center justify-center gap-2 md:gap-4 font-mono text-xs md:text-sm text-gray-300 py-3 px-6 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <span className="text-white font-medium">Bac C (Mathématiques)</span>
            <span className="text-plasma">•</span>
            <span className="text-white font-medium">ICT University (2e Année)</span>
            <span className="text-plasma">•</span>
            <span className="text-white font-medium">Yaoundé, Cameroun</span>
          </div>

          {/* CTAs */}
          <div className="hero-elem flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={handleDownloadCV}
              className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-plasma text-white font-title text-sm font-semibold shadow-neon-glow hover:shadow-neon-strong"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger mon CV</span>
            </button>
            <a
              href="#contact"
              className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent border border-plasma/60 text-plasma hover:bg-plasma/10 font-title text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Me contacter</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">Défiler</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-plasma animate-bounce" />
          </div>
        </div>
      </section>

      {/* C. À PROPOS */}
      <section id="about" className="relative py-28 px-6 bg-[#0E0E1B] border-y border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Colonne Gauche */}
            <div className="lg:col-span-5 about-elem">
              <span className="font-mono text-xs uppercase tracking-widest text-plasma block mb-2">
                01 / Présentation
              </span>
              <h2 className="font-dramatic italic text-5xl md:text-6xl text-white font-normal leading-tight">
                Concevoir des sites web utiles, rapides et <span className="text-plasma">bien pensés</span>.
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-0.5 bg-plasma" />
                <span className="font-mono text-xs text-gray-400">The ICT University • Génie Logiciel</span>
              </div>
            </div>

            {/* Séparateur Vertical */}
            <div className="hidden lg:block lg:col-span-1 h-full min-h-[280px] flex justify-center">
              <div className="w-[1.5px] h-full bg-gradient-to-b from-plasma via-plasma/30 to-transparent" />
            </div>

            {/* Colonne Droite */}
            <div className="lg:col-span-6 space-y-6 about-elem">
              <p className="font-title text-base md:text-lg text-gray-200 leading-relaxed font-light">
                Après avoir obtenu mon <strong className="text-white font-semibold">Baccalauréat C (Mathématiques) en 2025</strong>,
                j'ai poursuivi mes études en <strong className="text-plasma font-semibold">Génie Logiciel</strong> à
                l'ICT University au Cameroun, où je suis actuellement en deuxième année.
              </p>

              <p className="font-title text-sm md:text-base text-gray-300 leading-relaxed font-light">
                En parallèle de mes études, je développe des sites web pour des entreprises et des professionnels
                qui souhaitent valoriser leur activité en ligne. Mon but est simple : proposer des interfaces
                propres, simples à utiliser et fidèles aux besoins spécifiques de chaque projet.
              </p>

              {/* 3 Caractéristiques directes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-[2rem] bg-white/[0.03] border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-plasma/10 flex items-center justify-center text-plasma mb-2">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="font-title font-bold text-sm text-white">Logique &amp; Rigueur</h4>
                  <p className="text-xs text-gray-400 mt-1">Bases scientifiques solides appliquées au code.</p>
                </div>

                <div className="p-4 rounded-[2rem] bg-white/[0.03] border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-plasma/10 flex items-center justify-center text-plasma mb-2">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-title font-bold text-sm text-white">Web Réactif</h4>
                  <p className="text-xs text-gray-400 mt-1">Sites fluides sur smartphones et ordinateurs.</p>
                </div>

                <div className="p-4 rounded-[2rem] bg-white/[0.03] border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-plasma/10 flex items-center justify-center text-plasma mb-2">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="font-title font-bold text-sm text-white">À l'écoute</h4>
                  <p className="text-xs text-gray-400 mt-1">Réponses adaptées aux objectifs des clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. EXPÉRIENCE */}
      <section id="experience" className="relative py-28 px-6 bg-void">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="font-mono text-xs uppercase tracking-widest text-plasma block mb-2">
              02 / Parcours
            </span>
            <h2 className="font-dramatic italic text-4xl md:text-6xl text-white font-normal">
              Expériences &amp; Projets
            </h2>
            <p className="font-title text-sm text-gray-400 mt-3 max-w-md mx-auto">
              Réalisations en freelance, projets universitaires et développements personnels.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-plasma via-neon-purple/50 to-plasma/10" />

            <div className="space-y-12 md:space-y-16">
              {experiencesData.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`timeline-card relative flex flex-col md:flex-row items-start ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } gap-8 md:gap-12 pl-12 md:pl-0`}
                  >
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 z-10">
                      <div className="w-5 h-5 rounded-full bg-plasma border-4 border-void shadow-neon-glow flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`w-full md:w-[calc(50%-2.5rem)] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="card-hover bg-[#121222] border border-white/10 rounded-[2.5rem] p-7 md:p-8 shadow-xl relative overflow-hidden group">
                        <div className="relative z-10">
                          <span className="font-mono text-xs text-plasma font-semibold tracking-wider block mb-2">
                            {exp.period}
                          </span>
                          <h3 className="font-title font-bold text-xl text-white group-hover:text-plasma transition-colors">
                            {exp.role}
                          </h3>
                          <h4 className="font-title text-sm text-gray-400 mb-4 font-normal">
                            {exp.company}
                          </h4>
                          <p className="font-title text-sm text-gray-300 font-light leading-relaxed mb-5">
                            {exp.description}
                          </p>

                          <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                            {exp.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/[0.05] border border-white/5 text-gray-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* E. COMPÉTENCES */}
      <section id="skills" className="relative py-28 px-6 bg-[#0E0E1B] border-y border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-plasma block mb-2">
              03 / Savoir-Faire
            </span>
            <h2 className="font-dramatic italic text-4xl md:text-6xl text-white font-normal">
              Compétences Techniques
            </h2>
            <p className="font-title text-sm text-gray-400 mt-3 max-w-lg mx-auto">
              Les outils et langages que j'utilise pour réaliser des sites et applications web.
            </p>
          </div>

          {/* Grid of 5 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                data-percent={skill.percent}
                className="skill-card card-hover bg-[#121224] border border-white/10 rounded-[2.5rem] p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-plasma/10 border border-plasma/30 text-plasma uppercase font-medium">
                      {skill.badge}
                    </span>

                    {/* Circular SVG Ring */}
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      <svg className="w-20 h-20 -rotate-90 transform" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          className="stroke-white/10"
                          strokeWidth="7"
                          fill="transparent"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          className="progress-ring-circle stroke-plasma"
                          strokeWidth="7"
                          strokeLinecap="round"
                          fill="transparent"
                          strokeDasharray={2 * Math.PI * 40}
                          strokeDashoffset={2 * Math.PI * 40}
                        />
                      </svg>
                      <span className="skill-percent absolute font-mono font-bold text-sm text-white">
                        0%
                      </span>
                    </div>
                  </div>

                  <h3 className="font-title font-bold text-lg text-white mb-2 group-hover:text-plasma transition-colors">
                    {skill.name}
                  </h3>
                  <p className="font-title text-xs text-gray-300 font-light leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-gray-400">
                  <span>Pratique courante</span>
                  <span className="text-plasma">En progression</span>
                </div>
              </div>
            ))}

            {/* Extra Card: Approche */}
            <div className="card-hover bg-gradient-to-br from-[#1A1535] to-[#121224] border border-plasma/30 rounded-[2.5rem] p-7 flex flex-col justify-between shadow-neon-glow">
              <div>
                <div className="w-10 h-10 rounded-full bg-plasma flex items-center justify-center text-white mb-4 shadow-neon-glow">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-title font-bold text-lg text-white mb-2">
                  Méthode de travail
                </h3>
                <p className="font-title text-xs text-gray-300 font-light leading-relaxed">
                  J'accorde une importance particulière à la clarté du code, à la simplicité d'utilisation
                  et au respect des délais convenus avec les personnes pour qui je travaille.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-plasma font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F. FORMATION */}
      <section id="formation" className="relative py-28 px-6 bg-void">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-plasma block mb-2">
              04 / Éducation
            </span>
            <h2 className="font-dramatic italic text-4xl md:text-6xl text-white font-normal">
              Formation Académique
            </h2>
            <p className="font-title text-sm text-gray-400 mt-3">
              Mon parcours scolaire et universitaire.
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            <div className="education-card card-hover bg-[#111122] border border-white/10 rounded-[2rem] p-7 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-plasma/10 border border-plasma/30 flex items-center justify-center text-plasma flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-plasma font-semibold tracking-wider block mb-1">
                    2025 — PRÉSENT (2E ANNÉE)
                  </span>
                  <h3 className="font-title font-bold text-xl text-white">
                    Licence en Génie Logiciel (Software Engineering)
                  </h3>
                  <p className="font-title text-sm text-gray-400 mt-1">
                    The ICT University — Yaoundé, Cameroun
                  </p>
                  <p className="font-title text-xs text-gray-400 mt-2 font-light">
                    Algorithmique, Programmation Orientée Objet, Bases de données relationnelles, Conception logicielle et Web.
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 self-start md:self-center whitespace-nowrap">
                En cours
              </span>
            </div>

            <div className="education-card card-hover bg-[#111122] border border-white/10 rounded-[2rem] p-7 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 flex-shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-gray-400 font-semibold tracking-wider block mb-1">
                    OBTENU EN 2025
                  </span>
                  <h3 className="font-title font-bold text-xl text-white">
                    Baccalauréat Scientifique Série C (Mathématiques &amp; Sciences Physiques)
                  </h3>
                  <p className="font-title text-sm text-gray-400 mt-1">
                    Cameroun
                  </p>
                  <p className="font-title text-xs text-gray-400 mt-2 font-light">
                    Solides compétences acquises en analyse mathématique, calcul et raisonnement logique.
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-gray-300 self-start md:self-center whitespace-nowrap">
                Diplôme d'État
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* G. CONTACT */}
      <section id="contact" className="relative py-28 px-6 bg-gradient-to-b from-void to-[#120F26] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="contact-elem mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-plasma block mb-2">
              05 / Me Contacter
            </span>
            <h2 className="font-dramatic italic text-5xl md:text-7xl text-white font-normal">
              Parlons de votre projet.
            </h2>
            <p className="font-title text-sm md:text-base text-gray-300 mt-4 max-w-xl mx-auto font-light leading-relaxed">
              Pour une création de site web, une collaboration ou toute question, vous pouvez m'écrire
              directement via ce formulaire ou par email à <a href="mailto:placidesimen3@gmail.com" className="text-plasma underline hover:text-white transition-colors">placidesimen3@gmail.com</a>.
            </p>
          </div>

          {/* Formulaire relié directement à placidesimen3@gmail.com */}
          <div className="contact-elem bg-[#121224]/80 border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl backdrop-blur-xl mb-12 text-left">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-gray-400 uppercase mb-2">Votre Nom</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ex. Michel / Nom de votre entreprise"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 font-title text-sm focus:outline-none focus:border-plasma focus:ring-1 focus:ring-plasma transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-gray-400 uppercase mb-2">Votre Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ex. contact@votredomaine.com"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 font-title text-sm focus:outline-none focus:border-plasma focus:ring-1 focus:ring-plasma transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-gray-400 uppercase mb-2">Votre Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Expliquez-moi votre projet ou votre besoin de site web..."
                  className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 font-title text-sm focus:outline-none focus:border-plasma focus:ring-1 focus:ring-plasma transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-plasma text-white font-title text-sm font-semibold shadow-neon-glow hover:shadow-neon-strong disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                </button>

                {formSent && (
                  <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5 animate-fadeIn">
                    <Check className="w-4 h-4" /> Message transmis directement à Gilles !
                  </span>
                )}

                <a
                  href="mailto:placidesimen3@gmail.com"
                  className="btn-magnetic inline-flex items-center gap-2 text-gray-300 hover:text-plasma font-mono text-xs transition-colors"
                >
                  <Mail className="w-4 h-4 text-plasma" />
                  <span>placidesimen3@gmail.com</span>
                </a>
              </div>
            </form>
          </div>

          {/* Social Links & Info Grid */}
          <div className="contact-elem grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="mailto:placidesimen3@gmail.com"
              className="link-lift flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-plasma/40 text-gray-300 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4 text-plasma" />
              <span className="font-mono text-xs">placidesimen3@gmail.com</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="link-lift flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-plasma/40 text-gray-300 hover:text-white transition-all"
            >
              <Github className="w-4 h-4 text-plasma" />
              <span className="font-mono text-xs">GitHub</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="link-lift flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-plasma/40 text-gray-300 hover:text-white transition-all"
            >
              <Linkedin className="w-4 h-4 text-plasma" />
              <span className="font-mono text-xs">LinkedIn</span>
            </a>

            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-gray-300">
              <MapPin className="w-4 h-4 text-plasma" />
              <span className="font-mono text-xs">Yaoundé, Cameroun</span>
            </div>
          </div>
        </div>
      </section>

      {/* H. PIED DE PAGE */}
      <footer className="relative bg-[#07070E] rounded-t-[4rem] border-t border-white/10 pt-16 pb-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Brand info */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-plasma/50 shadow-neon-glow">
                <img src="/profile.jpg" alt="GS" className="w-full h-full object-cover object-top" />
              </div>
              <span className="font-title font-bold text-base text-white tracking-tight">
                Gilles Simen
              </span>
            </div>
            <p className="font-title text-xs text-gray-400 mt-2 font-light">
              Étudiant en Génie Logiciel — The ICT University, Cameroun
            </p>
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 font-mono text-xs text-gray-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Disponible pour nouveaux projets</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
