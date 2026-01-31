import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Trophy, Medal, Star, Award } from 'lucide-react';

const awards = [
  {
    icon: Trophy,
    title: 'Best Oral Presentation Award',
    organization: 'World Aquaculture Society',
    year: '2023',
    description: 'Awarded for outstanding research presentation on novel AHPND diagnostics at the annual World Aquaculture conference.',
  },
  {
    icon: Medal,
    title: 'Young Scientist Research Grant',
    organization: 'International Society for Aquaculture Research',
    year: '2022',
    description: 'Competitive research grant supporting AI-based disease detection project in shrimp aquaculture.',
  },
  {
    icon: Star,
    title: 'Excellence in Graduate Research',
    organization: 'University of Aquatic Sciences',
    year: '2018',
    description: 'University-wide recognition for exceptional doctoral dissertation on AHPND molecular pathogenesis.',
  },
  {
    icon: Award,
    title: 'Innovation in Aquaculture Award',
    organization: 'National Fisheries Association',
    year: '2021',
    description: 'Recognition for developing novel probiotic formulations with demonstrated efficacy in commercial settings.',
  },
  {
    icon: Trophy,
    title: 'Best Poster Presentation',
    organization: 'Asian-Pacific Aquaculture Conference',
    year: '2020',
    description: 'First place poster award for microbiome profiling research in disease-resistant shrimp strains.',
  },
  {
    icon: Medal,
    title: 'Early Career Researcher Fellowship',
    organization: 'Marine Biology Foundation',
    year: '2019',
    description: 'Prestigious fellowship supporting international research collaboration on antimicrobial development.',
  },
];

export function AwardsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="awards" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title neon-text text-center mx-auto">Awards & Honors</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {awards.map((award, index) => (
            <div
              key={award.title}
              className={`glass-card p-6 group hover:neon-border transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:animate-glow-pulse">
                  <award.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">{award.year}</span>
                  <h3 className="text-lg font-bold text-foreground">{award.title}</h3>
                </div>
              </div>

              {/* Organization */}
              <p className="text-sm text-muted-foreground mb-3 font-medium">
                {award.organization}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground/80">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
