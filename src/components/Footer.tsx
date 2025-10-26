import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <Github className="h-5 w-5" />
              </div>
              <span className="font-bold">DocuMaster AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Documentation intelligente pour vos projets GitHub
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Produit</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-smooth">Fonctionnalités</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-smooth">Tarifs</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Entreprise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">À propos</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Carrières</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Légal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">Confidentialité</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Conditions</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Sécurité</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 DocuMaster AI. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
