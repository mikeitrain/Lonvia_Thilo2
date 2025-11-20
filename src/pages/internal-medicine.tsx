import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { NavigationBar } from '@/components/layout/NavigationBar';
import { Footer } from '@/components/layout/Footer';
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

export default function InternalMedicinePage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <HeartIcon className="w-8 h-8 text-primary-600" />,
      title: 'Cardiovascular Health',
      description: 'Heart and vascular system care',
      details: [
        'Hypertension Management',
        'Heart Disease Prevention',
        'Cholesterol Management',
        'Cardiac Risk Assessment',
        'ECG & Stress Testing',
      ],
    },
    {
      icon: <BeakerIcon className="w-8 h-8 text-primary-600" />,
      title: 'Diabetes Care',
      description: 'Comprehensive diabetes management',
      details: [
        'Type 1 & 2 Diabetes',
        'Blood Sugar Monitoring',
        'Insulin Management',
        'Dietary Counseling',
        'Complication Prevention',
      ],
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary-600" />,
      title: 'Preventive Medicine',
      description: 'Proactive health management',
      details: [
        'Annual Physical Exams',
        'Health Screenings',
        'Immunizations',
        'Lifestyle Counseling',
        'Disease Prevention',
      ],
    },
    {
      icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-primary-600" />,
      title: 'Chronic Disease Management',
      description: 'Long-term condition care',
      details: [
        'Respiratory Diseases',
        'Kidney Disease',
        'Thyroid Disorders',
        'Arthritis',
        'Gastrointestinal Conditions',
      ],
    },
  ];

  const stats = [
    { value: '25+', label: 'Years of Experience' },
    { value: '15,000+', label: 'Patients Treated' },
    { value: '96%', label: 'Patient Satisfaction' },
  ];

  const whyChooseReasons = [
    {
      icon: <ClipboardDocumentCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Comprehensive Care',
      description: 'Complete medical care for adults covering all major organ systems.',
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-primary-600" />,
      title: 'Evidence-Based',
      description: 'Treatment based on the latest medical research and clinical guidelines.',
    },
    {
      icon: <HeartIcon className="w-12 h-12 text-primary-600" />,
      title: 'Patient-Centered',
      description: 'Personalized care plans that address your unique health needs.',
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Coordinated Care',
      description: 'Seamless coordination with specialists when needed for optimal outcomes.',
    },
  ];

  const treatmentApproaches = [
    {
      icon: <AcademicCapIcon className="w-12 h-12 text-primary-600" />,
      title: 'Holistic Approach',
      description: 'Treating the whole person, not just symptoms',
      benefits: [
        'Comprehensive assessments',
        'Lifestyle integration',
        'Mental health consideration',
        'Long-term wellness focus',
      ],
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-primary-600" />,
      title: 'Advanced Diagnostics',
      description: 'State-of-the-art testing and monitoring',
      benefits: [
        'In-house laboratory',
        'Advanced imaging',
        'Continuous monitoring',
        'Early disease detection',
      ],
    },
    {
      icon: <UserGroupIcon className="w-12 h-12 text-primary-600" />,
      title: 'Collaborative Care',
      description: 'Working together for your health',
      benefits: [
        'Multidisciplinary team',
        'Specialist referrals',
        'Care coordination',
        'Family involvement',
      ],
    },
  ];

  const commonConditions = [
    {
      title: 'Hypertension',
      description: 'High blood pressure requiring monitoring and treatment',
    },
    {
      title: 'Diabetes Mellitus',
      description: 'Chronic condition affecting blood sugar regulation',
    },
    {
      title: 'Respiratory Infections',
      description: 'Acute and chronic respiratory illnesses',
    },
    {
      title: 'Thyroid Disorders',
      description: 'Conditions affecting thyroid hormone production',
    },
    {
      title: 'Arthritis',
      description: 'Joint inflammation and pain management',
    },
    {
      title: 'Digestive Disorders',
      description: 'Gastrointestinal conditions and treatments',
    },
  ];

  const patientEducation = [
    {
      title: 'Understanding Your Condition',
      description: 'Comprehensive information about your diagnosis and treatment options.',
    },
    {
      title: 'Lifestyle Modifications',
      description: 'Practical guidance on diet, exercise, and healthy living.',
    },
    {
      title: 'Medication Management',
      description: 'How to safely use and manage your medications for optimal results.',
    },
  ];

  const consultationExpectations = [
    'Detailed medical history review',
    'Comprehensive physical examination',
    'Discussion of symptoms and concerns',
    'Diagnostic testing if needed',
    'Treatment plan development',
    'Preventive care recommendations',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <NavigationBar />

      <div className="w-full relative">
        <div className="relative overflow-hidden mt-4 md:rounded-5xl md:border md:border-border-primary md:max-w-[95%] md:mx-auto">
          <Image
            className="w-full h-[500px] object-cover"
            alt="Internal Medicine"
            src="/test-4.jpg"
            width={1440}
            height={500}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {t('services.internalMedicine')}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-100 max-w-3xl mx-auto">
                Comprehensive adult healthcare and disease management
              </p>
            </div>
          </div>
        </div>
      </div>

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

      <section className="w-full py-16 bg-background-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Why Choose Lonvia Internal Medicine?
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Expert care for your long-term health and wellness
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

      <section className="w-full py-16 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Comprehensive medical care for all adult health needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground-primary mb-2">
                    {service.title}
                  </h3>
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

      <section className="w-full py-16 bg-background-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Common Conditions We Treat
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Expert management of a wide range of medical conditions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonConditions.map((condition, index) => (
              <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground-primary mb-2">
                    {condition.title}
                  </h3>
                  <p className="text-foreground-secondary">{condition.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Our Treatment Approach
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Comprehensive, coordinated care for optimal health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatmentApproaches.map((approach, index) => (
              <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{approach.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground-primary mb-2 text-center">
                    {approach.title}
                  </h3>
                  <p className="text-foreground-secondary mb-4 text-center">{approach.description}</p>
                  <ul className="space-y-2 mt-4">
                    {approach.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground-secondary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-background-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Patient Education
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Empowering you to take control of your health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {patientEducation.map((item, index) => (
              <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <ChatBubbleBottomCenterTextIcon className="w-12 h-12 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground-secondary">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Schedule Your Appointment
            </h2>
            <p className="text-lg text-foreground-secondary mb-8">
              Partner with us for your long-term health
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
                  Book Appointment
                </button>
                <button className="bg-background-secondary hover:bg-neutral-200 text-foreground-primary border-2 border-border-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
