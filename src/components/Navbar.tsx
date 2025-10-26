import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-glow">
              <Github className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DocuMaster AI
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Fonctionnalités
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Comment ça marche
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Tarifs
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Connexion
            </Button>
            <Button variant="hero" size="sm">
              Démarrer gratuitement
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
