import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { NavigationBar } from '@/components/layout/NavigationBar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/landing-page/card';
import Image from 'next/image';
import {
  HeartIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  BeakerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export default function OncologyPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <BeakerIcon className="w-8 h-8 text-primary-600" />,
      title: 'Medical Oncology',
      description: 'Chemotherapy and targeted therapies',
      details: ['Chemotherapy', 'Immunotherapy', 'Targeted Therapy', 'Hormone Therapy', 'Clinical Trials'],
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-primary-600" />,
      title: 'Radiation Oncology',
      description: 'Advanced radiation treatment',
      details: ['External Beam Radiation', 'Brachytherapy', 'IMRT', 'Stereotactic Radiosurgery', 'Proton Therapy'],
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary-600" />,
      title: 'Surgical Oncology',
      description: 'Cancer surgery expertise',
      details: ['Tumor Removal', 'Lymph Node Dissection', 'Minimally Invasive Surgery', 'Reconstructive Surgery', 'Palliative Surgery'],
    },
    {
      icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-primary-600" />,
      title: 'Supportive Care',
      description: 'Comprehensive patient support',
      details: ['Pain Management', 'Nutritional Support', 'Psychological Counseling', 'Palliative Care', 'Survivorship Programs'],
    },
  ];

  const stats = [
    { value: '20+', label: 'Years of Experience' },
    { value: '5,000+', label: 'Patients Treated' },
    { value: '95%', label: 'Patient Satisfaction' },
  ];

  const whyChooseReasons = [
    {
      icon: <ClipboardDocumentCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Multidisciplinary Team',
      description: 'Collaborative approach with oncologists, surgeons, and specialists.',
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-primary-600" />,
      title: 'Advanced Treatments',
      description: 'Access to the latest cancer treatments and clinical trials.',
    },
    {
      icon: <HeartIcon className="w-12 h-12 text-primary-600" />,
      title: 'Compassionate Care',
      description: 'Supporting you and your family throughout the cancer journey.',
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Proven Outcomes',
      description: 'High success rates and focus on long-term survival and quality of life.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <NavigationBar />
      <div className="w-full relative">
        <div className="relative overflow-hidden mt-4 md:rounded-5xl md:border md:border-border-primary md:max-w-[95%] md:mx-auto">
          <Image className="w-full h-[500px] object-cover" alt="Oncology" src="/test-1.jpg" width={1440} height={500} priority />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">{t('services.oncology')}</h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-100 max-w-3xl mx-auto">Comprehensive cancer care and treatment</p>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full py-12 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-lg text-foreground-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-background-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">Why Choose Lonvia Oncology?</h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">Leading cancer care with hope and healing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground-primary mb-2">{reason.title}</h3>
                  <p className="text-foreground-secondary">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">Our Services</h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">Comprehensive cancer treatment options</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground-primary mb-2">{service.title}</h3>
                  <p className="text-foreground-secondary mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground-secondary">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">Schedule Your Consultation</h2>
            <p className="text-lg text-foreground-secondary mb-8">Expert cancer care when you need it most</p>
          </div>
          <Card className="border-none shadow-box bg-background-primary">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-box">Book Consultation</button>
                <button className="bg-background-secondary hover:bg-neutral-200 text-foreground-primary border-2 border-border-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">Contact Us</button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
