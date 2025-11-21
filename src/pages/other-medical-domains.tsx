import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/landing-page/card';
import Image from 'next/image';
import {
  HeartIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  SparklesIcon,
  CheckCircleIcon,
  BeakerIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

export default function OtherMedicalDomainsPage() {
  const { t } = useLanguage();

  const medicalDomains = [
    {
      icon: <BeakerIcon className="w-8 h-8 text-primary-600" />,
      title: 'Endocrinology',
      description: 'Hormone and metabolic disorders',
      details: ['Thyroid Disorders', 'Diabetes Management', 'Pituitary Conditions', 'Adrenal Disorders', 'Metabolic Syndromes'],
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-primary-600" />,
      title: 'Rheumatology',
      description: 'Autoimmune and joint conditions',
      details: ['Rheumatoid Arthritis', 'Lupus', 'Fibromyalgia', 'Gout', 'Autoimmune Diseases'],
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary-600" />,
      title: 'Pulmonology',
      description: 'Respiratory and lung conditions',
      details: ['COPD', 'Asthma', 'Pulmonary Fibrosis', 'Sleep Apnea', 'Lung Cancer'],
    },
    {
      icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-primary-600" />,
      title: 'Gastroenterology',
      description: 'Digestive system disorders',
      details: ['IBD', 'GERD', 'Liver Disease', 'Pancreatic Disorders', 'Endoscopy'],
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8 text-primary-600" />,
      title: 'Nephrology',
      description: 'Kidney and urinary conditions',
      details: ['Chronic Kidney Disease', 'Dialysis', 'Kidney Stones', 'Hypertension', 'Electrolyte Disorders'],
    },
    {
      icon: <SparklesIcon className="w-8 h-8 text-primary-600" />,
      title: 'Hematology',
      description: 'Blood and bone marrow disorders',
      details: ['Anemia', 'Clotting Disorders', 'Leukemia', 'Lymphoma', 'Bone Marrow Transplant'],
    },
    {
      icon: <UserGroupIcon className="w-8 h-8 text-primary-600" />,
      title: 'Infectious Diseases',
      description: 'Complex infection management',
      details: ['HIV/AIDS', 'Hepatitis', 'Tropical Diseases', 'Antibiotic Resistance', 'Immunizations'],
    },
    {
      icon: <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-primary-600" />,
      title: 'Allergy & Immunology',
      description: 'Allergic and immune conditions',
      details: ['Food Allergies', 'Environmental Allergies', 'Asthma', 'Immune Deficiency', 'Anaphylaxis'],
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-primary-600" />,
      title: 'Cardiology',
      description: 'Heart and vascular health',
      details: ['Heart Disease', 'Arrhythmias', 'Heart Failure', 'Interventional Cardiology', 'Preventive Cardiology'],
    },
  ];

  const rareDiseases = [
    {
      name: 'Ehlers-Danlos Syndrome',
      description: 'Connective tissue disorder affecting skin, joints, and blood vessels',
      prevalence: 'Affects 1 in 5,000 people',
      expertise: 'Specialized diagnosis and management protocols',
    },
    {
      name: 'Amyloidosis',
      description: 'Protein buildup in organs affecting their function',
      prevalence: 'Rare condition with 3,000 new cases annually in the US',
      expertise: 'Advanced diagnostic imaging and treatment options',
    },
    {
      name: 'Sarcoidosis',
      description: 'Inflammatory disease affecting multiple organs',
      prevalence: 'Affects 1-40 per 100,000 people depending on ethnicity',
      expertise: 'Multidisciplinary care approach with monitoring',
    },
    {
      name: 'Vasculitis',
      description: 'Inflammation of blood vessels',
      prevalence: 'Multiple types with varying prevalence',
      expertise: 'Immunosuppressive therapy and close monitoring',
    },
  ];

  const specializedServices = [
    {
      category: 'Advanced Diagnostics',
      services: ['Genetic Testing', 'Molecular Diagnostics', 'Advanced Imaging', 'Specialized Laboratory Tests', 'Biomarker Analysis'],
    },
    {
      category: 'Interventional Procedures',
      services: ['Endoscopic Procedures', 'Minimally Invasive Surgery', 'Catheter-Based Treatments', 'Image-Guided Biopsies', 'Specialized Injections'],
    },
    {
      category: 'Chronic Disease Management',
      services: ['Personalized Treatment Plans', 'Medication Optimization', 'Lifestyle Counseling', 'Disease Monitoring', 'Complication Prevention'],
    },
  ];

  const expertiseAreas = [
    {
      title: 'Multidisciplinary Collaboration',
      description: 'Team-based approach for complex conditions',
      features: ['Expert consultations', 'Coordinated care plans', 'Specialist network', 'Integrated treatment'],
    },
    {
      title: 'Rare Disease Expertise',
      description: 'Specialized knowledge in uncommon conditions',
      features: ['Accurate diagnosis', 'Latest treatment protocols', 'Research participation', 'Patient registries'],
    },
    {
      title: 'Advanced Treatment Options',
      description: 'Access to cutting-edge therapies',
      features: ['Clinical trials', 'Novel medications', 'Innovative procedures', 'Personalized medicine'],
    },
    {
      title: 'Comprehensive Support',
      description: 'Complete patient and family care',
      features: ['Patient education', 'Support groups', 'Care coordination', 'Long-term follow-up'],
    },
  ];

  const stats = [
    { value: '9+', label: 'Medical Specialties' },
    { value: '50+', label: 'Rare Diseases Treated' },
    { value: '98%', label: 'Diagnostic Accuracy' },
  ];

  const whyChooseReasons = [
    {
      icon: <ClipboardDocumentCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Specialized Expertise',
      description: 'Access to specialists across multiple medical domains for complex conditions.',
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-primary-600" />,
      title: 'Rare Disease Focus',
      description: 'Dedicated team experienced in diagnosing and treating uncommon conditions.',
    },
    {
      icon: <HeartIcon className="w-12 h-12 text-primary-600" />,
      title: 'Patient Advocacy',
      description: 'Support and guidance through complex medical journeys.',
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Research Integration',
      description: 'Access to latest research and clinical trial opportunities.',
    },
  ];

  const successStories = [
    {
      title: 'Complex Diagnosis Success',
      description: 'Patient with undiagnosed condition for 5 years finally diagnosed and successfully treated through our multidisciplinary approach.',
    },
    {
      title: 'Rare Disease Management',
      description: 'Comprehensive treatment plan improved quality of life for patient with rare autoimmune condition.',
    },
    {
      title: 'Innovative Treatment',
      description: 'Access to clinical trial provided breakthrough therapy for previously untreatable condition.',
    },
  ];

  const consultationExpectations = [
    'Comprehensive medical history review',
    'Detailed symptom assessment',
    'Coordination with other specialists',
    'Advanced diagnostic planning',
    'Treatment options discussion',
    'Long-term care strategy',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">

      {/* Hero Section with large image */}
      <div className="w-full relative">
        <div className="relative overflow-hidden mt-4 md:rounded-5xl md:border md:border-border-primary md:max-w-[95%] md:mx-auto">
          <Image
            className="w-full h-[600px] object-cover"
            alt="Other Medical Domains"
            src="/test-5.jpg"
            width={1440}
            height={600}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="text-white px-8 md:px-16 max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('services.otherMedicalDomains')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Specialized care across rare diseases and additional medical specialties
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="w-full py-12 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-foreground-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full py-16 bg-background-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Why Choose Lonvia for Specialized Care?
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Expert care for complex and rare medical conditions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground-primary mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-foreground-secondary">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Medical Specialties Cards */}
      <section className="w-full py-16 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Additional Medical Specialties
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Comprehensive care across multiple medical domains
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicalDomains.map((domain, index) => (
              <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{domain.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground-primary mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-foreground-secondary mb-4">{domain.description}</p>
                  <ul className="space-y-2">
                    {domain.details.map((detail, idx) => (
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

      {/* Rare Diseases Grid */}
      <section className="w-full py-16 bg-background-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Rare Disease Expertise
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Specialized care for uncommon and complex conditions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rareDiseases.map((disease, index) => (
              <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground-primary mb-2">
                    {disease.name}
                  </h3>
                  <p className="text-foreground-secondary mb-3">{disease.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-sm font-semibold text-primary-600 mr-2">Prevalence:</span>
                      <span className="text-sm text-foreground-secondary">{disease.prevalence}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-sm font-semibold text-primary-600 mr-2">Our Expertise:</span>
                      <span className="text-sm text-foreground-secondary">{disease.expertise}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services 3-Column Grid */}
      <section className="w-full py-16 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Specialized Services
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Advanced medical services for complex conditions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground-primary mb-4 text-center">
                    {service.category}
                  </h3>
                  <ul className="space-y-3">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Comprehensive Approach Features Grid */}
      <section className="w-full py-16 bg-background-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Our Comprehensive Approach
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Integrated care for complex medical conditions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground-primary mb-2">
                    {area.title}
                  </h3>
                  <p className="text-foreground-secondary mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Cards */}
      <section className="w-full py-16 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Real results from our specialized care programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <ChatBubbleBottomCenterTextIcon className="w-12 h-12 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground-primary mb-2">
                    {story.title}
                  </h3>
                  <p className="text-foreground-secondary">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA with Expectations List + Buttons */}
      <section className="w-full py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Schedule Your Specialized Consultation
            </h2>
            <p className="text-lg text-foreground-secondary mb-8">
              Expert care for complex and rare medical conditions
            </p>
          </div>

          <Card className="border-none shadow-box bg-background-primary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground-primary mb-4">
                What to Expect During Your Visit
              </h3>
              <ul className="space-y-3 mb-8">
                {consultationExpectations.map((expectation, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground-secondary text-lg">{expectation}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-box">
                  Request Consultation
                </button>
                <button className="bg-background-secondary hover:bg-neutral-200 text-foreground-primary border-2 border-border-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}
