
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, FileText, Building, CreditCard } from "lucide-react";

export const CountrySelector = () => {
  const countries = {
    "south-africa": {
      name: "🇿🇦 South Africa",
      flag: "🇿🇦",
      requirements: [
        "Valid passport or South African ID",
        "Proof of residential address",
        "Proposed company name (3 options)",
        "Business activity description"
      ],
      timeline: "5-7 business days",
      bankingPartners: ["FNB", "Standard Bank", "Nedbank", "ABSA"],
      features: [
        "CIPC registration",
        "Tax number allocation",
        "VAT registration available",
        "B-BBEE certificates"
      ]
    },
    "zambia": {
      name: "🇿🇲 Zambia",
      flag: "🇿🇲",
      requirements: [
        "Valid passport",
        "Proof of address",
        "Company name reservation",
        "Business objectives"
      ],
      timeline: "7-10 business days",
      bankingPartners: ["Stanbic Bank", "First National Bank", "Barclays"],
      features: [
        "PACRA registration",
        "Tax clearance certificate",
        "Business license",
        "Work permit assistance"
      ]
    },
    "zimbabwe": {
      name: "🇿🇼 Zimbabwe",
      flag: "🇿🇼",
      requirements: [
        "Valid passport",
        "Proof of residential address",
        "Company name search",
        "Memorandum & Articles"
      ],
      timeline: "10-14 business days",
      bankingPartners: ["Standard Chartered", "Barclays", "CBZ Bank"],
      features: [
        "ZIMRA registration",
        "Company registration certificate",
        "Tax compliance",
        "Import/export licenses"
      ]
    }
  };

  return (
    <section id="countries" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Country
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in company registration across three African countries. 
            Select your preferred jurisdiction to see specific requirements.
          </p>
        </div>

        <Tabs defaultValue="south-africa" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="south-africa" className="text-sm md:text-base">
              🇿🇦 South Africa
            </TabsTrigger>
            <TabsTrigger value="zambia" className="text-sm md:text-base">
              🇿🇲 Zambia
            </TabsTrigger>
            <TabsTrigger value="zimbabwe" className="text-sm md:text-base">
              🇿🇼 Zimbabwe
            </TabsTrigger>
          </TabsList>

          {Object.entries(countries).map(([key, country]) => (
            <TabsContent key={key} value={key}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">Requirements</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {country.requirements.map((req, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">Timeline</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {country.timeline}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      From document submission to company registration
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">Banking Partners</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {country.bankingPartners.map((bank, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {bank}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Building className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">Included Services</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {country.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
