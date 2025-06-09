
import { FileText, CheckCircle, CreditCard, Building } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Documents",
      description: "Upload your passport and business details through our secure online portal"
    },
    {
      icon: CheckCircle,
      title: "We Handle Registration",
      description: "Our experts process your application and handle all government submissions"
    },
    {
      icon: Building,
      title: "Receive Certificates",
      description: "Get your registration certificate, tax ID, and all required documents"
    },
    {
      icon: CreditCard,
      title: "Open Bank Account",
      description: "We'll help you set up your corporate bank account and optional services"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple 4-step process to get your company registered and running
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border z-0" />
              )}
              
              <div className="relative bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
