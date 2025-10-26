import { Github, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(user ? '/dashboard' : '/')}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-glow">
              <Github className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DocuMaster AI
            </span>
          </div>
          
          {user ? (
            <div className="hidden md:flex items-center gap-8">
              <span onClick={() => navigate('/dashboard')} className="text-sm text-muted-foreground hover:text-foreground transition-smooth cursor-pointer">
                Dashboard
              </span>
              <span onClick={() => navigate('/repositories')} className="text-sm text-muted-foreground hover:text-foreground transition-smooth cursor-pointer">
                Dépôts
              </span>
              <span onClick={() => navigate('/history')} className="text-sm text-muted-foreground hover:text-foreground transition-smooth cursor-pointer">
                Historique
              </span>
            </div>
          ) : isHomePage && (
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Fonctionnalités
              </a>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Comment ça marche
              </a>
            </div>
          )}

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <span className="text-sm text-muted-foreground hidden md:inline">
                  {user.name}
                </span>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => navigate('/auth')}>
                  Connexion
                </Button>
                <Button variant="hero" size="sm" onClick={() => navigate('/auth')}>
                  Démarrer gratuitement
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
