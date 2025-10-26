import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, GitCommit } from 'lucide-react';

const History = () => {
  const navigate = useNavigate();

  const history = [
    {
      id: '1',
      repos: ['awesome-react-app', 'nodejs-api-starter'],
      date: '2025-03-20',
      files: 8,
      commits: 5,
      status: 'completed',
    },
    {
      id: '2',
      repos: ['python-ml-toolkit'],
      date: '2025-03-15',
      files: 6,
      commits: 3,
      status: 'completed',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Historique</h1>
            <p className="text-muted-foreground">
              Consultez vos documentations générées
            </p>
          </div>

          {history.length === 0 ? (
            <Card className="text-center py-12 shadow-elegant">
              <CardContent>
                <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-4">
                  Aucune documentation générée pour le moment
                </p>
                <Button onClick={() => navigate('/repositories')} variant="hero">
                  Créer une documentation
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {history.map((item) => (
                <Card key={item.id} className="shadow-card hover:shadow-glow transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="mb-2">
                          Documentation générée
                        </CardTitle>
                        <CardDescription>
                          {item.repos.join(', ')}
                        </CardDescription>
                      </div>
                      <Badge>{item.status === 'completed' ? 'Terminé' : 'En cours'}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(item.date).toLocaleDateString('fr-FR')}
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        {item.files} fichiers
                      </div>
                      <div className="flex items-center gap-2">
                        <GitCommit className="h-4 w-4" />
                        {item.commits} commits
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-auto"
                        onClick={() => navigate('/results')}
                      >
                        Voir les détails
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default History;
