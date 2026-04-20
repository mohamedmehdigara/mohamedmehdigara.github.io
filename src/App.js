import React from 'react';
import { create } from 'zustand';
import styled from 'styled-components';
import { Git , Code2, ExternalLink, Moon, Sun, Layers, Terminal, Cpu } from 'lucide-react';

// --- ZUSTAND STORE ---
const useStore = create((set) => ({
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

// --- STYLED COMPONENTS ---
const GradientText = styled.h1`
  background: linear-gradient(to right, #60a5fa, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`;

const GlassCard = styled.div`
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
`;

const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid ${props => props.$isDark ? '#1e293b' : '#e2e8f0'};
  
  &:hover {
    border-color: #3b82f6;
    box-shadow: 0 0 30px -10px ${props => props.$isDark ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.2)'};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; width: 100%; height: 4px;
    background: linear-gradient(90deg, #3b82f6, #a855f7);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

// --- MAIN APP COMPONENT ---
function App() {
  const { isDarkMode, toggleDarkMode } = useStore();

  const projectData = [
  {
    id: 1,
    title: "Eco-Metropolis Engine",
    description: "A complex city-builder simulation using Zustand for high-frequency state updates and custom React hooks for resource logic.",
    tags: ["React", "Zustand", "Styled Components"],
    
    link: "https://github.com/mohamedmehdigara/react-eco-friendly-city-builder",
    demo: "https://eco-metropolis.vercel.app"
  },
  {
    id: 2,
    title: "NeoPin Physics Engine",
    description: "A high-performance pinball physics engine solving collision tunneling issues using sub-stepping techniques.",
    tags: ["React", "Zustand", "Styled Components"],
    
    link: "https://github.com/mohamedmehdigara/react-pinball",
    demo: "https://neopin-demo.io"
  }
];

  const skills = [
    "HTML5", "CSS3", "JavaScript", "React", 
    "Zustand", "Styled Components", "TailwindCSS"
  ];

  return (
    <div className={`${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'} min-h-screen transition-colors duration-500 font-sans selection:bg-purple-500/30`}>
      
      <Nav className={`border-b ${isDarkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
            <Terminal className="text-blue-500" />
            <span>Portfolio of Mehdi</span>
          </div>
          <button 
            onClick={toggleDarkMode}
            className={`p-2.5 rounded-xl border transition-all ${isDarkMode ? 'border-slate-700 bg-slate-800 hover:bg-slate-700' : 'border-slate-200 bg-slate-100 hover:bg-slate-200'}`}
          >
            {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-600" />}
          </button>
        </div>
      </Nav>

      {/* Hero */}
      <header className="max-w-5xl mx-auto pt-24 pb-16 px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold mb-6">
          <Cpu size={14} /> AVAILABLE FOR PROJECTS
        </div>
        <GradientText className="text-6xl md:text-8xl mb-8 leading-[1.1]">
          Engineering digital <br /> experiences.
        </GradientText>
        <p className={`text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          A Front-End Specialist focused on high-performance React architectures and pixel-perfect design systems.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://github.com/mohamedmehdigara" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/20"
          >
            <div size={20}> github.io/mohamedmehdigara </div>
          </a>
        </div>
      </header>

      {/* Skills */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-500">The Stack</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <div 
              key={skill} 
              className={`px-6 py-3 rounded-xl border text-sm font-bold tracking-tight transition-all ${
                isDarkMode ? 'border-slate-800 bg-slate-900/50 text-slate-400 hover:text-blue-400 hover:border-blue-500/50' : 'border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-300'
              }`}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <main className="max-w-5xl mx-auto py-20 px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {projectData.map((project) => (
      <ProjectCard 
        key={project.id} 
        $isDark={isDarkMode}
        className={`p-8 rounded-3xl transition-all duration-300 ${isDarkMode ? 'bg-slate-900/50' : 'bg-white'}`}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
          <div className="flex gap-3 text-slate-500">
            <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
              <div size={20} />
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        
        <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
              isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
            }`}>
              {tag}
            </span>
          ))}
        </div>
      </ProjectCard>
    ))}
  </div>
</main>
      <footer className="max-w-5xl mx-auto py-20 px-6 border-t border-slate-800/50 text-center">
        <p className="text-slate-500 font-medium tracking-tight">
          Designed and Coded by Mohamed Mehdi Gara • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;