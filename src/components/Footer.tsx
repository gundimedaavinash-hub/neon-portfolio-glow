export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold neon-text font-orbitron tracking-wider">
              Dr. [Your Name]
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Aquaculture Research Scientist
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© {currentYear} All Rights Reserved</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Designed with 💙</span>
          </div>
        </div>

        {/* Decorative Glow Line */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </footer>
  );
}
