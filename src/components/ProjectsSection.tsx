import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ExternalLink, FlaskConical, Dna, Bot, Microscope, Leaf, TestTube } from 'lucide-react';

const projects = [
  {
    icon: FlaskConical,
    title: 'Tracking AHPND Infection Progression in Shrimp',
    tools: ['qPCR', 'Histopathology', 'Metagenomics'],
    description: 'Comprehensive study of Acute Hepatopancreatic Necrosis Disease (AHPND) progression using multi-modal molecular and histological approaches.',
    impact: 'Identified key biomarkers for early-stage detection, enabling intervention 48 hours earlier than conventional methods.',
  },
  {
    icon: TestTube,
    title: 'Artemia Life-Stage Optimization',
    tools: ['Live Feed Culture', 'Nutritional Analysis', 'Growth Modeling'],
    description: 'Optimization of Artemia enrichment protocols and feeding schedules for improved larval shrimp nutrition and survival.',
    impact: 'Achieved 23% improvement in post-larval survival rates across multiple commercial hatcheries.',
  },
  {
    icon: Dna,
    title: 'Endolysin Antimicrobial Testing',
    tools: ['Recombinant Protein Expression', 'MIC Assays', 'In vivo Trials'],
    description: 'Development and testing of bacteriophage-derived endolysins as novel antimicrobials against Vibrio parahaemolyticus.',
    impact: 'Discovered three endolysin candidates with MIC values below 10 μg/mL against AHPND-causing strains.',
  },
  {
    icon: Bot,
    title: 'AI-Based Shrimp Health Detection',
    tools: ['TensorFlow', 'Computer Vision', 'Edge Computing'],
    description: 'Deep learning system for real-time visual detection of disease symptoms and behavioral anomalies in shrimp populations.',
    impact: 'Model achieves 94% accuracy in detecting early signs of white spot syndrome from pond camera footage.',
  },
  {
    icon: Microscope,
    title: 'Microbiome Profiling',
    tools: ['16S rRNA Sequencing', 'Shotgun Metagenomics', 'Bioinformatics'],
    description: 'Characterization of gut and environmental microbiome signatures associated with healthy vs. diseased shrimp.',
    impact: 'Established microbiome-based health index now used by three research institutions for monitoring.',
  },
  {
    icon: Leaf,
    title: 'Feed Functionalization Trials',
    tools: ['Probiotics', 'Immunostimulants', 'Growth Performance Trials'],
    description: 'Evaluation of functional feed additives including probiotics and plant-derived immunostimulants for disease prevention.',
    impact: 'Validated probiotic blend reducing AHPND mortality by 35% in controlled challenge trials.',
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title neon-text text-center mx-auto">Research Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card glass-card p-6 flex flex-col h-full transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 neon-border">
                <project.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                {project.title}
              </h3>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {project.description}
              </p>

              {/* Impact */}
              <div className="mt-auto pt-4 border-t border-border/50">
                <p className="text-sm">
                  <span className="text-primary font-semibold">Impact: </span>
                  <span className="text-muted-foreground">{project.impact}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
