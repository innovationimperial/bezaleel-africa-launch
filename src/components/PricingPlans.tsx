
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Wifi } from "lucide-react";

export const PricingPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "$100",
      description: "Perfect for getting started",
      features: [
        "Company registration",
        "Bank Account setup"
      ],
      buttonText: "Get Started",
      popular: false,
      color: "bg-card border-border"
    },
    {
      name: "Advanced",
      price: "$385",
      description: "Everything In Basic",
      features: [
        "Website Domain",
        "1 Year Hosting",
        "Social Media Integration + Landing Page",
        "3 months Maintenance"
      ],
      buttonText: "Most Popular",
      popular: true,
      color: "bg-primary text-primary-foreground border-primary"
    },
    {
      name: "Premium",
      price: "$670",
      description: "Everything in Advanced",
      features: [
        "E-Commerce Store (50 products)",
        "Secure Payment Integration",
        "Admin Dashboard & User Roles",
        "Performance & Scalability",
        "Email Support"
      ],
      buttonText: "Go Premium",
      popular: false,
      color: "bg-card border-border"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pricing Plans List
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose Your Best Plan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.color} ${
                plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center pb-8">
                {/* Wifi icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Wifi className="w-8 h-8 text-primary" />
                </div>

                <CardTitle className="text-4xl font-bold mb-2">{plan.price}</CardTitle>
                <CardDescription className={plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                      <span className={plan.popular ? "text-primary-foreground" : "text-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full mt-8 ${
                    plan.popular 
                      ? 'bg-background text-foreground hover:bg-background/90' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>

                {/* Decorative plus icons */}
                <div className="flex justify-center space-x-2 pt-4">
                  <div className={`w-6 h-6 ${plan.popular ? 'text-primary-foreground/30' : 'text-muted-foreground'}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                  </div>
                  <div className={`w-6 h-6 ${plan.popular ? 'text-primary-foreground/30' : 'text-muted-foreground'}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
