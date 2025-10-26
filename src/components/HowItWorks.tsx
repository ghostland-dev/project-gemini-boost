import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connectez votre compte GitHub",
    description: "Authentification sécurisée via OAuth en quelques secondes"
  },
  {
    number: "02",
    title: "Sélectionnez vos dépôts",
    description: "Choisissez les projets que vous souhaitez documenter"
  },
  {
    number: "03",
    title: "Configurez les options",
    description: "Personnalisez le type de documentation et les sections à générer"
  },
  {
    number: "04",
    title: "Laissez l'IA travailler",
    description: "Notre agent analyse, génère et commit automatiquement la documentation"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Comment ça marche
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quatre étapes simples pour une documentation professionnelle
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative flex gap-6 group"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border group-hover:bg-accent transition-smooth" />
                )}
                
                {/* Step Number */}
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-2xl font-bold text-primary shadow-glow group-hover:scale-110 transition-smooth">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground ml-9">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
