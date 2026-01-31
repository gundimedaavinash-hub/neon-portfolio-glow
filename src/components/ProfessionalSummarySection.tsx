import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, Code, BookOpen } from 'lucide-react';

const experience = [
  {
    title: 'Research Scientist',
    organization: 'Aquaculture Research Institute',
    period: '2020 - Present',
    description: 'Leading research on AHPND pathogenesis and developing novel diagnostic tools for shrimp diseases.',
  },
  {
    title: 'Postdoctoral Researcher',
    organization: 'Marine Sciences Laboratory',
    period: '2018 - 2020',
    description: 'Conducted research on probiotic interventions and antimicrobial peptide efficacy in aquaculture.',
  },
  {
    title: 'Ph.D. Candidate',
    organization: 'University of Aquatic Sciences',
    period: '2014 - 2018',
    description: 'Dissertation on molecular mechanisms of AHPND infection in Pacific white shrimp.',
  },
];

const technicalSkills = [
  { category: 'Molecular Biology', skills: ['PCR/qPCR', 'Gene Cloning', 'CRISPR', 'Sequencing'] },
  { category: 'Microbiology', skills: ['Bacterial Culture', 'Antimicrobial Testing', 'Biofilm Analysis'] },
  { category: 'Bioinformatics', skills: ['Python', 'R', 'Metagenomics', 'Phylogenetic Analysis'] },
  { category: 'AI/ML', skills: ['TensorFlow', 'Image Classification', 'Predictive Modeling'] },
];

const publications = [
  {
    title: 'Novel endolysin candidates for AHPND prevention in Penaeus vannamei',
    journal: 'Aquaculture',
    year: '2024',
    status: 'Published',
    type: 'research',
  },
  {
    title: 'AI-based early detection of white spot syndrome in shrimp farms',
    journal: 'Frontiers in Marine Science',
    year: '2023',
    status: 'Published',
    type: 'research',
  },
  {
    title: 'Microbiome dynamics during AHPND infection progression',
    journal: 'Scientific Reports',
    year: '2023',
    status: 'Under Review',
    type: 'research',
  },
  {
    title: 'A comprehensive review of probiotics in shrimp aquaculture',
    journal: 'Reviews in Aquaculture',
    year: '2022',
    status: 'Published',
    type: 'review',
  },
  {
    title: 'Antimicrobial peptides in aquaculture: Current status and future perspectives',
    journal: 'Fish & Shellfish Immunology',
    year: '2021',
    status: 'Published',
    type: 'review',
  },
];

type PublicationFilter = 'all' | 'research' | 'review';

export function ProfessionalSummarySection() {
  const { ref, isVisible } = useScrollReveal();
  const [pubFilter, setPubFilter] = useState<PublicationFilter>('all');

  const filteredPublications = publications.filter(pub => {
    if (pubFilter === 'all') return true;
    return pub.type === pubFilter;
  });
  return (
    <section id="summary" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title neon-text text-center mx-auto">Professional Summary</h2>
        </div>

        <div className="space-y-16 mt-12">
          {/* Professional Experience */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 relative overflow-hidden group hover:neon-border transition-all duration-300"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />
                  <div className="pl-4">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                      <span className="text-sm text-primary font-medium">{item.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-2">{item.organization}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skill Matrix */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Technical Skill Matrix</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSkills.map((category, index) => (
                <div key={index} className="glass-card p-6 hover:neon-border transition-all duration-300">
                  <h4 className="text-lg font-semibold text-primary mb-4">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Publications & Manuscripts</h3>
              </div>
              
              {/* Filter Tabs */}
              <div className="flex gap-2">
                {(['all', 'research', 'review'] as PublicationFilter[]).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setPubFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                      pubFilter === filter
                        ? 'bg-primary text-primary-foreground neon-border'
                        : 'bg-card/50 text-muted-foreground hover:bg-primary/20 hover:text-primary'
                    }`}
                  >
                    {filter === 'review' ? 'Reviews' : filter}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              {filteredPublications.map((pub, index) => (
                <div key={index} className="glass-card p-6 flex flex-wrap justify-between items-center gap-4 hover:neon-border transition-all duration-300">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-medium text-foreground">{pub.title}</h4>
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-accent/20 text-accent capitalize">
                        {pub.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{pub.journal} • {pub.year}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    pub.status === 'Published' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-secondary/20 text-secondary'
                  }`}>
                    {pub.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
