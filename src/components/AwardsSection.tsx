import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Trophy, Medal, Star, Award, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const awards = [
  {
    icon: Trophy,
    title: 'Best Oral Presentation Award',
    organization: 'World Aquaculture Society',
    year: '2023',
    description: 'Awarded for outstanding research presentation on novel AHPND diagnostics at the annual World Aquaculture conference.',
    fullDetails: 'Presented groundbreaking research on a novel multiplex qPCR assay for simultaneous detection of multiple AHPND-causing Vibrio strains. The presentation covered the development, validation, and field application of the diagnostic tool across 15 commercial shrimp farms in Southeast Asia. The work demonstrated 98% sensitivity and 99% specificity compared to gold-standard methods.',
    criteria: 'Selected from over 200 oral presentations based on scientific merit, presentation quality, and potential industry impact.',
    prize: 'Cash award of $2,000 and invitation to keynote at next year\'s regional conference.',
  },
  {
    icon: Medal,
    title: 'Young Scientist Research Grant',
    organization: 'International Society for Aquaculture Research',
    year: '2022',
    description: 'Competitive research grant supporting AI-based disease detection project in shrimp aquaculture.',
    fullDetails: 'Three-year grant of $150,000 to develop and deploy computer vision systems for early disease detection in commercial shrimp farms. The project involves training deep learning models on over 50,000 annotated images and implementing edge computing solutions for real-time monitoring.',
    criteria: 'Awarded to researchers under 35 with demonstrated innovation potential. Selection rate: 8% of applicants.',
    prize: 'Research funding plus mentorship from senior scientists and industry partners.',
  },
  {
    icon: Star,
    title: 'Excellence in Graduate Research',
    organization: 'University of Aquatic Sciences',
    year: '2018',
    description: 'University-wide recognition for exceptional doctoral dissertation on AHPND molecular pathogenesis.',
    fullDetails: 'Dissertation titled "Molecular Mechanisms of AHPND Pathogenesis: From Toxin Expression to Host Response" was recognized as the top doctoral thesis across all science departments. The work identified novel virulence factors and characterized the host immune response timeline during infection.',
    criteria: 'Annual award given to the most impactful doctoral dissertation based on publication record, citations, and external examiner reviews.',
    prize: 'Gold medal, certificate of distinction, and $5,000 research continuation grant.',
  },
  {
    icon: Award,
    title: 'Innovation in Aquaculture Award',
    organization: 'National Fisheries Association',
    year: '2021',
    description: 'Recognition for developing novel probiotic formulations with demonstrated efficacy in commercial settings.',
    fullDetails: 'Developed a multi-strain probiotic formulation that reduced AHPND mortality by 35% in controlled challenge trials and 28% in commercial farm applications. The formulation has been licensed to two feed companies and is currently used in over 500 hectares of shrimp farms.',
    criteria: 'Industry-nominated award for research with demonstrated commercial application and measurable economic impact.',
    prize: 'Plaque, industry partnership opportunities, and $10,000 innovation fund.',
  },
  {
    icon: Trophy,
    title: 'Best Poster Presentation',
    organization: 'Asian-Pacific Aquaculture Conference',
    year: '2020',
    description: 'First place poster award for microbiome profiling research in disease-resistant shrimp strains.',
    fullDetails: 'Poster presented 16S rRNA and shotgun metagenomic analysis of gut microbiomes from disease-resistant and susceptible shrimp strains. Identified 12 bacterial genera significantly enriched in resistant animals, forming the basis for next-generation probiotic development.',
    criteria: 'Evaluated on visual design, scientific content, and presenter interaction by a panel of 5 judges.',
    prize: 'Certificate and travel grant for next year\'s conference.',
  },
  {
    icon: Medal,
    title: 'Early Career Researcher Fellowship',
    organization: 'Marine Biology Foundation',
    year: '2019',
    description: 'Prestigious fellowship supporting international research collaboration on antimicrobial development.',
    fullDetails: 'One-year fellowship enabling a research visit to the Institute of Marine Biotechnology in Germany. Focused on bacteriophage isolation and endolysin characterization for aquaculture applications. Resulted in 3 co-authored publications and ongoing international collaboration.',
    criteria: 'Competitive fellowship for early-career researchers (within 3 years of PhD) with strong publication records.',
    prize: 'Living stipend, research budget of €30,000, and travel support.',
  },
];

interface AwardType {
  icon: typeof Trophy;
  title: string;
  organization: string;
  year: string;
  description: string;
  fullDetails: string;
  criteria: string;
  prize: string;
}

export function AwardsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedAward, setSelectedAward] = useState<AwardType | null>(null);

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
              onClick={() => setSelectedAward(award)}
              className={`glass-card p-6 group hover:neon-border transition-all duration-500 cursor-pointer ${
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
              <p className="text-sm text-muted-foreground/80 line-clamp-2">
                {award.description}
              </p>
              
              {/* Click indicator */}
              <p className="text-xs text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                Click for details →
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Award Detail Modal */}
      <Dialog open={!!selectedAward} onOpenChange={() => setSelectedAward(null)}>
        <DialogContent className="glass-card border-primary/30 max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedAward && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/30 to-secondary/30 flex items-center justify-center neon-border">
                    <selectedAward.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">{selectedAward.year}</span>
                    <DialogTitle className="text-xl text-foreground">{selectedAward.title}</DialogTitle>
                  </div>
                </div>
                <DialogDescription className="text-muted-foreground font-medium">
                  {selectedAward.organization}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Overview</h4>
                  <p className="text-muted-foreground">{selectedAward.description}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Details</h4>
                  <p className="text-muted-foreground">{selectedAward.fullDetails}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Selection Criteria</h4>
                  <p className="text-muted-foreground">{selectedAward.criteria}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Prize</h4>
                  <p className="text-muted-foreground">{selectedAward.prize}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
