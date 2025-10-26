import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface Step {
  id: string;
  label: string;
  status: 'pending' | 'in-progress' | 'completed';
}

const Generate = () => {
  const navigate = useNavigate();
  const [steps, setSteps] = useState<Step[]>([
    { id: '1', label: 'Analyse des dépôts', status: 'pending' },
    { id: '2', label: 'Détection de la stack technique', status: 'pending' },
    { id: '3', label: 'Génération de la documentation', status: 'pending' },
    { id: '4', label: 'Création des fichiers Docker', status: 'pending' },
    { id: '5', label: 'Optimisation pour recruteurs', status: 'pending' },
    { id: '6', label: 'Commits sur GitHub', status: 'pending' },
  ]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setSteps((prev) =>
          prev.map((step, index) => {
            if (index < currentStep) return { ...step, status: 'completed' };
            if (index === currentStep) return { ...step, status: 'in-progress' };
            return step;
          })
        );
        setProgress(((currentStep + 1) / steps.length) * 100);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          const generatedDocs = {
            timestamp: new Date().toISOString(),
            repos: JSON.parse(localStorage.getItem('selectedRepos') || '[]'),
            config: JSON.parse(localStorage.getItem('docConfig') || '{}'),
          };
          localStorage.setItem('lastGeneration', JSON.stringify(generatedDocs));
          navigate('/results');
        }, 1000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [navigate, steps.length]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Génération en cours</h1>
            <p className="text-muted-foreground">
              L'IA analyse vos dépôts et génère la documentation...
            </p>
          </div>

          <Card className="mb-6 shadow-elegant">
            <CardHeader>
              <CardTitle>Progression</CardTitle>
              <CardDescription>
                {Math.round(progress)}% terminé
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="mb-4" />
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Étapes de génération</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex items-center gap-3 p-3 rounded-lg bg-accent/5"
                >
                  {step.status === 'completed' && (
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  )}
                  {step.status === 'in-progress' && (
                    <Loader2 className="h-5 w-5 text-primary animate-spin" />
                  )}
                  {step.status === 'pending' && (
                    <div className="h-5 w-5 rounded-full border-2 border-muted" />
                  )}
                  <span
                    className={
                      step.status === 'completed'
                        ? 'text-foreground font-medium'
                        : step.status === 'in-progress'
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground'
                    }
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Generate;
