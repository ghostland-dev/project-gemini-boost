import { FileText, Container, Tag, GitCommit, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: FileText,
    title: "Documentation complète",
    description: "README, guides d'utilisation, architecture détaillée générés automatiquement selon votre stack technique"
  },
  {
    icon: Container,
    title: "Docker & Compose",
    description: "Fichiers Dockerfile et docker-compose.yml optimisés pour un déploiement immédiat"
  },
  {
    icon: Tag,
    title: "Optimisation SEO",
    description: "Titres, tags, labels et descriptions attractives pour maximiser la visibilité de vos projets"
  },
  {
    icon: GitCommit,
    title: "Commits automatisés",
    description: "Documentation poussée automatiquement sur votre dépôt, sans toucher au code source"
  },
  {
    icon: Zap,
    title: "Analyse intelligente",
    description: "Détection automatique des frameworks, langages et architecture de votre projet"
  },
  {
    icon: Shield,
    title: "Sécurité garantie",
    description: "Accès sécurisé via OAuth, aucune modification du code source de vos projets"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Fonctionnalités puissantes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour valoriser vos projets GitHub auprès des recruteurs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-glow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
