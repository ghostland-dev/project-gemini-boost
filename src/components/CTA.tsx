import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Prêt à valoriser vos projets GitHub ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines de développeurs qui ont déjà amélioré leur visibilité professionnelle grâce à DocuMaster AI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="gap-2">
              <Github className="h-5 w-5" />
              Commencer maintenant
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Essai gratuit de 30 jours • Sans engagement • Sans carte bancaire
          </p>
        </div>
      </div>
    </section>
  );
};
