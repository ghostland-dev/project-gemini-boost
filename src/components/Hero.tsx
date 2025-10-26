import { ArrowRight, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Propulsé par Gemini AI</span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Transformez vos dépôts GitHub en{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              documentation professionnelle
            </span>
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Agent IA intelligent qui analyse, documente et optimise automatiquement vos projets pour impressionner recruteurs et entreprises
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="gap-2" onClick={() => window.location.href = '/auth'}>
              <Github className="h-5 w-5" />
              Connecter GitHub
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="glass" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              Voir la démo
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Gratuit pendant 30 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Sans carte bancaire</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
