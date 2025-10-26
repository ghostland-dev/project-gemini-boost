import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Star, GitFork, FileCode } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Repository {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  private: boolean;
  updatedAt: string;
}

const mockRepos: Repository[] = [
  {
    id: '1',
    name: 'awesome-react-app',
    description: 'A modern React application with TypeScript',
    language: 'TypeScript',
    stars: 45,
    forks: 12,
    private: false,
    updatedAt: '2025-03-15',
  },
  {
    id: '2',
    name: 'nodejs-api-starter',
    description: 'RESTful API with Node.js, Express and MongoDB',
    language: 'JavaScript',
    stars: 89,
    forks: 23,
    private: false,
    updatedAt: '2025-03-10',
  },
  {
    id: '3',
    name: 'python-ml-toolkit',
    description: 'Machine learning utilities and models',
    language: 'Python',
    stars: 156,
    forks: 34,
    private: true,
    updatedAt: '2025-03-01',
  },
];

const Repositories = () => {
  const navigate = useNavigate();
  const [selectedRepos, setSelectedRepos] = useState<string[]>([]);

  const toggleRepo = (repoId: string) => {
    setSelectedRepos((prev) =>
      prev.includes(repoId)
        ? prev.filter((id) => id !== repoId)
        : [...prev, repoId]
    );
  };

  const handleContinue = () => {
    if (selectedRepos.length === 0) {
      toast({
        title: 'Aucun dépôt sélectionné',
        description: 'Veuillez sélectionner au moins un dépôt',
        variant: 'destructive',
      });
      return;
    }
    localStorage.setItem('selectedRepos', JSON.stringify(selectedRepos));
    navigate('/configure');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Sélectionner les dépôts</h1>
            <p className="text-muted-foreground">
              Choisissez les dépôts à documenter avec l'IA ({selectedRepos.length} sélectionné
              {selectedRepos.length > 1 ? 's' : ''})
            </p>
          </div>

          <div className="grid gap-4 mb-8">
            {mockRepos.map((repo) => (
              <Card
                key={repo.id}
                className={`cursor-pointer transition-all shadow-card ${
                  selectedRepos.includes(repo.id)
                    ? 'border-primary shadow-glow'
                    : ''
                }`}
                onClick={() => toggleRepo(repo.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <Checkbox
                        checked={selectedRepos.includes(repo.id)}
                        onCheckedChange={() => toggleRepo(repo.id)}
                      />
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {repo.name}
                          {repo.private && (
                            <Badge variant="outline">Privé</Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {repo.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <FileCode className="h-4 w-4" />
                      {repo.language}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {repo.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      {repo.forks}
                    </div>
                    <div className="ml-auto">
                      Mis à jour le {new Date(repo.updatedAt).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => navigate('/dashboard')}>
              Retour
            </Button>
            <Button
              onClick={handleContinue}
              variant="hero"
              disabled={selectedRepos.length === 0}
            >
              Continuer ({selectedRepos.length})
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Repositories;
