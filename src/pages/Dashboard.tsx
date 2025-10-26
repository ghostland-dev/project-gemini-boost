import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { Github, FileText, Zap, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, connectGithub } = useAuth();

  const handleConnectGithub = () => {
    // Mock GitHub connection
    connectGithub('demo-user');
    navigate('/repositories');
  };

  const stats = [
    { label: 'Dépôts documentés', value: '0', icon: FileText },
    { label: 'Commits générés', value: '0', icon: Zap },
    { label: 'Vues augmentées', value: '+0%', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Tableau de bord</h1>
            <p className="text-muted-foreground">
              Bienvenue {user?.name}, gérez vos documentations IA
            </p>
          </div>

          {!user?.githubConnected ? (
            <Card className="mb-8 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-6 w-6" />
                  Connecter GitHub
                </CardTitle>
                <CardDescription>
                  Connectez votre compte GitHub pour commencer à documenter vos dépôts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleConnectGithub} variant="hero" size="lg">
                  <Github className="mr-2 h-5 w-5" />
                  Connecter avec GitHub
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="shadow-card">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {stat.label}
                      </CardTitle>
                      <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Actions rapides</CardTitle>
                  <CardDescription>
                    Commencez à générer des documentations professionnelles
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    onClick={() => navigate('/repositories')}
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    Sélectionner des dépôts
                  </Button>
                  <Button
                    onClick={() => navigate('/history')}
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Voir l'historique
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
