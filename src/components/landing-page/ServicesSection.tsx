import React from "react";
import { useRouter } from "next/router";
import { Card, CardContent } from "@/components/landing-page/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const router = useRouter();

  const services = [
    { name: t('services.urology'), desc: t('services.urology.desc'), icon: "🫁", route: "/urology" },
    { name: t('services.orthopedics'), desc: t('services.orthopedics.desc'), icon: "🦴", route: "/orthopedics" },
    { name: t('services.plasticSurgery'), desc: t('services.plasticSurgery.desc'), icon: "✨", route: "/plastic-surgery" },
    { name: t('services.internalMedicine'), desc: t('services.internalMedicine.desc'), icon: "🩺", route: "/internal-medicine" },
    { name: t('services.surgery'), desc: t('services.surgery.desc'), icon: "🏥", route: "/surgery" },
    { name: t('services.oncology'), desc: t('services.oncology.desc'), icon: "🎗️", route: "/oncology" },
    { name: t('services.ent'), desc: t('services.ent.desc'), icon: "👂", route: "/ent" },
    { name: t('services.ophthalmology'), desc: t('services.ophthalmology.desc'), icon: "👁️", route: "/ophthalmology" },
    { name: t('services.dermatology'), desc: t('services.dermatology.desc'), icon: "🧴", route: "/dermatology" },
    { name: t('services.neurology'), desc: t('services.neurology.desc'), icon: "🧠", route: "/neurology" },
    { name: t('services.pediatrics'), desc: t('services.pediatrics.desc'), icon: "👶", route: "/pediatrics" },
    { name: t('services.geriatrics'), desc: t('services.geriatrics.desc'), icon: "👴", route: "/geriatrics" },
    { name: t('services.otherMedicalDomains'), desc: t('services.otherMedicalDomains.desc'), icon: "🏥", route: "/other-medical-domains" },
  ];

  return (
    <section className="w-full py-16 bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-primary mb-4">
            {t('landing.services.title')}
          </h2>
          <p className="text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto">
            {t('landing.services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl group-hover:text-4xl transition-all duration-300">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground-primary group-hover:text-primary-600 mb-2 transition-colors duration-300">{service.name}</h3>
                  <p className="text-foreground-secondary mb-4">{service.desc}</p>
                  <button
                    onClick={() => router.push(service.route)}
                    className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    {t('landing.services.learnMore')} &gt;
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}; 