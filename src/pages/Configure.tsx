import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Configure = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState({
    generateReadme: true,
    generateDocker: true,
    generateArchitecture: true,
    generateApi: true,
    optimizeForRecruiters: true,
    autoCommit: true,
    customInstructions: '',
  });

  const handleChange = (key: keyof typeof config, value: boolean | string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleGenerate = () => {
    localStorage.setItem('docConfig', JSON.stringify(config));
    toast({
      title: 'Configuration enregistrée',
      description: 'Démarrage de la génération...',
    });
    navigate('/generate');
  };

  const options = [
    {
      key: 'generateReadme',
      label: 'README personnalisé',
      description: 'Génère un README complet adapté à votre stack',
    },
    {
      key: 'generateDocker',
      label: 'Docker & Docker Compose',
      description: 'Crée les fichiers de configuration Docker',
    },
    {
      key: 'generateArchitecture',
      label: 'Documentation d\'architecture',
      description: 'Explique la structure et les composants du projet',
    },
    {
      key: 'generateApi',
      label: 'Documentation API',
      description: 'Documente les endpoints et les modèles de données',
    },
    {
      key: 'optimizeForRecruiters',
      label: 'Optimisation recruteur',
      description: 'Ajoute titres, tags et descriptions attractives',
    },
    {
      key: 'autoCommit',
      label: 'Commits automatiques',
      description: 'Commit la documentation directement sur GitHub',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Configuration</h1>
            <p className="text-muted-foreground">
              Personnalisez la documentation générée par l'IA
            </p>
          </div>

          <Card className="mb-6 shadow-elegant">
            <CardHeader>
              <CardTitle>Options de génération</CardTitle>
              <CardDescription>
                Sélectionnez les éléments à générer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {options.map((option) => (
                <div
                  key={option.key}
                  className="flex items-center justify-between space-x-2"
                >
                  <div className="flex-1">
                    <Label
                      htmlFor={option.key}
                      className="text-base font-medium cursor-pointer"
                    >
                      {option.label}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                  <Switch
                    id={option.key}
                    checked={config[option.key as keyof typeof config] as boolean}
                    onCheckedChange={(checked) =>
                      handleChange(option.key as keyof typeof config, checked)
                    }
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="mb-6 shadow-elegant">
            <CardHeader>
              <CardTitle>Instructions personnalisées</CardTitle>
              <CardDescription>
                Ajoutez des directives spécifiques pour l'IA (optionnel)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Ex: Mettez l'accent sur les performances, ajoutez des exemples d'utilisation avancée..."
                value={config.customInstructions}
                onChange={(e) =>
                  handleChange('customInstructions', e.target.value)
                }
                rows={4}
              />
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => navigate('/repositories')}>
              Retour
            </Button>
            <Button onClick={handleGenerate} variant="hero">
              Générer la documentation
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Configure;
