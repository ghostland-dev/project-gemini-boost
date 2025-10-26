import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, Download, ExternalLink, Github } from 'lucide-react';

const Results = () => {
  const navigate = useNavigate();

  const generatedFiles = [
    { name: 'README.md', size: '12 KB', type: 'Documentation' },
    { name: 'Dockerfile', size: '2 KB', type: 'Docker' },
    { name: 'docker-compose.yml', size: '3 KB', type: 'Docker' },
    { name: 'ARCHITECTURE.md', size: '8 KB', type: 'Documentation' },
    { name: 'API.md', size: '15 KB', type: 'Documentation' },
  ];

  const mockReadme = `# Awesome React App

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)]()
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)]()

## 📋 Description

Application React moderne construite avec TypeScript, offrant une architecture scalable et maintenable.

## 🚀 Installation

\`\`\`bash
npm install
npm run dev
\`\`\`

## 🛠️ Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS

## 📦 Docker

\`\`\`bash
docker-compose up -d
\`\`\`

## 🏗️ Architecture

Le projet suit une architecture en composants modulaires...

---
*Documentation générée par DocuMaster AI*`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Documentation générée !</h1>
            <p className="text-muted-foreground">
              Votre documentation a été créée et committée sur GitHub
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">5</CardTitle>
                <CardDescription>Fichiers générés</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">3</CardTitle>
                <CardDescription>Commits effectués</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">100%</CardTitle>
                <CardDescription>Taux de réussite</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="mb-8 shadow-elegant">
            <CardHeader>
              <CardTitle>Fichiers générés</CardTitle>
              <CardDescription>
                Documentation créée pour vos dépôts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {generatedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-accent/5"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {file.size}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">{file.type}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 shadow-elegant">
            <CardHeader>
              <CardTitle>Aperçu de la documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="readme">
                <TabsList>
                  <TabsTrigger value="readme">README.md</TabsTrigger>
                  <TabsTrigger value="docker">Docker</TabsTrigger>
                </TabsList>
                <TabsContent value="readme">
                  <div className="bg-muted/50 rounded-lg p-4 max-h-96 overflow-y-auto">
                    <pre className="text-sm whitespace-pre-wrap">
                      {mockReadme}
                    </pre>
                  </div>
                </TabsContent>
                <TabsContent value="docker">
                  <div className="bg-muted/50 rounded-lg p-4 max-h-96 overflow-y-auto">
                    <pre className="text-sm whitespace-pre-wrap">
{`FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]`}
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Github className="mr-2 h-5 w-5" />
              Voir sur GitHub
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Télécharger
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="mr-2 h-5 w-5" />
              Partager
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => navigate('/dashboard')}
            >
              Retour au dashboard
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;
