import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const technicalSkills = [
  { name: 'Molecular Biology (PCR/qPCR)', percentage: 95 },
  { name: 'Microbiology & Culture', percentage: 90 },
  { name: 'Bioinformatics & Data Analysis', percentage: 85 },
  { name: 'Python & R Programming', percentage: 80 },
  { name: 'Machine Learning / AI', percentage: 75 },
  { name: 'Histopathology', percentage: 88 },
];

const professionalSkills = [
  { name: 'Research & Analysis', percentage: 95 },
  { name: 'Scientific Writing', percentage: 90 },
  { name: 'Project Management', percentage: 85 },
  { name: 'Team Collaboration', percentage: 92 },
];

function SkillBar({ name, percentage, delay, animate }: { name: string; percentage: number; delay: number; animate: boolean }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-semibold">{percentage}%</span>
      </div>
      <div className="skill-bar-container">
        <div
          className={`skill-bar-fill ${animate ? 'animate' : ''}`}
          style={{ 
            transitionDelay: `${delay}ms`,
            '--progress': percentage / 100,
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

function CircularProgress({ name, percentage, delay, animate }: { name: string; percentage: number; delay: number; animate: boolean }) {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="circular-progress w-full h-full" viewBox="0 0 100 100">
          <defs>
            <linearGradient id={`neonGradient-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(185, 100%, 50%)" />
              <stop offset="100%" stopColor="hsl(270, 100%, 65%)" />
            </linearGradient>
          </defs>
          <circle className="bg" cx="50" cy="50" r="45" strokeWidth="6" />
          <circle
            className={`progress ${animate ? 'animate' : ''}`}
            cx="50"
            cy="50"
            r="45"
            strokeWidth="6"
            style={{
              stroke: `url(#neonGradient-${name})`,
              '--progress-offset': offset,
              transitionDelay: `${delay}ms`,
            } as React.CSSProperties}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold neon-text">{percentage}%</span>
        </div>
      </div>
      <span className="mt-3 text-center text-foreground font-medium">{name}</span>
    </div>
  );
}

export function SkillsSection() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => setAnimate(true), 300);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title neon-text text-center mx-auto">Skills</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Technical Skills - Horizontal Bars */}
          <div className={`glass-card p-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              Technical Skills
            </h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 150}
                animate={animate}
              />
            ))}
          </div>

          {/* Professional Skills - Circular Charts */}
          <div className={`glass-card p-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {professionalSkills.map((skill, index) => (
                <CircularProgress
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index * 200}
                  animate={animate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
