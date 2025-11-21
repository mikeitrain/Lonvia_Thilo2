import React, { useState } from 'react';
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
  XMarkIcon,
} from '@heroicons/react/24/outline';

interface Disease {
  name: string;
  description: string;
  prevalence: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

interface Condition {
  title: string;
  description: string;
  symptoms: string[];
}

interface TreatmentApproach {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export default function UrologyPage() {
  const { t } = useLanguage();
  const [isOncologyModalOpen, setIsOncologyModalOpen] = useState(false);

  const urologicOncologyDiseases: Disease[] = [
    {
      name: 'Prostate Cancer',
      description: 'Most common cancer in men, affecting the prostate gland.',
      prevalence: '1 in 8 men will be diagnosed during their lifetime',
    },
    {
      name: 'Bladder Cancer',
      description: 'Cancer that begins in the cells of the bladder.',
      prevalence: '4th most common cancer in men',
    },
    {
      name: 'Kidney Cancer',
      description: 'Cancer that originates in the kidneys.',
      prevalence: 'Accounts for 3-4% of all adult cancers',
    },
    {
      name: 'Testicular Cancer',
      description: 'Cancer that develops in the testicles.',
      prevalence: 'Most common cancer in young men aged 15-35',
    },
  ];

  const services: Service[] = [
    {
      icon: <BeakerIcon className="w-8 h-8 text-primary-600" />,
      title: 'Diagnostic Services',
      description: 'State-of-the-art diagnostic procedures',
      details: [
        'Urodynamic Testing',
        'Cystoscopy',
        'Ultrasound & Imaging',
        'PSA Screening',
        'Urinalysis',
      ],
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-primary-600" />,
      title: 'General Urology',
      description: 'Comprehensive urological care',
      details: [
        'Kidney Stone Treatment',
        'Urinary Tract Infections',
        'Bladder Disorders',
        'Male Infertility',
        'Prostate Health',
      ],
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary-600" />,
      title: 'Minimally Invasive Surgery',
      description: 'Advanced surgical techniques',
      details: [
        'Laser Surgery',
        'Laparoscopic Procedures',
        'Robotic Surgery',
        'Endoscopic Surgery',
        'Stone Removal',
      ],
    },
  ];

  const commonConditions: Condition[] = [
    {
      title: 'Benign Prostatic Hyperplasia (BPH)',
      description: 'Enlarged prostate gland causing urinary symptoms',
      symptoms: ['Frequent urination', 'Weak urine stream', 'Difficulty starting urination', 'Incomplete bladder emptying'],
    },
    {
      title: 'Urinary Incontinence',
      description: 'Loss of bladder control',
      symptoms: ['Involuntary urine leakage', 'Urgency', 'Frequent bathroom visits', 'Nighttime urination'],
    },
    {
      title: 'Kidney Stones',
      description: 'Hard deposits of minerals and salts',
      symptoms: ['Severe pain in side and back', 'Pain during urination', 'Blood in urine', 'Nausea and vomiting'],
    },
    {
      title: 'Erectile Dysfunction',
      description: 'Inability to achieve or maintain an erection',
      symptoms: ['Difficulty getting an erection', 'Trouble maintaining an erection', 'Reduced sexual desire'],
    },
  ];

  const treatmentApproaches: TreatmentApproach[] = [
    {
      icon: <AcademicCapIcon className="w-12 h-12 text-primary-600" />,
      title: 'Evidence-Based Medicine',
      description: 'Treatment plans based on the latest clinical research and guidelines',
      benefits: [
        'Proven treatment protocols',
        'Continuous review of outcomes',
        'Integration of latest research',
        'Personalized care plans',
      ],
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-primary-600" />,
      title: 'Advanced Technology',
      description: 'Utilizing cutting-edge medical technology for optimal outcomes',
      benefits: [
        'Robotic-assisted surgery',
        'High-resolution imaging',
        'Minimally invasive techniques',
        'Faster recovery times',
      ],
    },
    {
      icon: <UserGroupIcon className="w-12 h-12 text-primary-600" />,
      title: 'Multidisciplinary Approach',
      description: 'Collaborative care involving specialists from various fields',
      benefits: [
        'Comprehensive evaluation',
        'Coordinated treatment plans',
        'Expert consultations',
        'Holistic patient care',
      ],
    },
  ];

  const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '5,000+', label: 'Procedures Performed' },
    { value: '98%', label: 'Patient Satisfaction' },
  ];

  const whyChooseReasons = [
    {
      icon: <ClipboardDocumentCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Expert Specialists',
      description: 'Board-certified urologists with extensive experience in treating complex urological conditions.',
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-primary-600" />,
      title: 'Advanced Technology',
      description: 'State-of-the-art diagnostic and treatment equipment for accurate diagnosis and effective treatment.',
    },
    {
      icon: <HeartIcon className="w-12 h-12 text-primary-600" />,
      title: 'Compassionate Care',
      description: 'Patient-centered approach ensuring comfort, privacy, and personalized treatment plans.',
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Proven Results',
      description: 'Excellent treatment outcomes with high success rates and patient satisfaction.',
    },
  ];

  const patientEducation = [
    {
      title: 'Understanding Your Condition',
      description: 'Comprehensive information about urological conditions, symptoms, and treatment options.',
    },
    {
      title: 'Prevention & Wellness',
      description: 'Tips and strategies for maintaining urological health and preventing common conditions.',
    },
    {
      title: 'Treatment Preparation',
      description: 'What to expect before, during, and after your urological procedures.',
    },
  ];

  const consultationExpectations = [
    'Detailed medical history review',
    'Comprehensive physical examination',
    'Discussion of symptoms and concerns',
    'Diagnostic testing recommendations',
    'Personalized treatment plan',
    'Answer all your questions',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      {/* Hero Section */}
      <div className="w-full relative">
        <div className="relative overflow-hidden mt-4 md:rounded-5xl md:border md:border-border-primary md:max-w-[95%] md:mx-auto">
          <Image
            className="w-full h-[500px] object-cover"
            alt="Urology Department"
            src="/test-1.jpg"
            width={1440}
            height={500}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {t('services.urology')}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-100 max-w-3xl mx-auto">
                Comprehensive urological care for men and women
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

      {/* Why Choose Lonvia Urology */}
      <section className="w-full py-16 bg-background-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Why Choose Lonvia Urology?
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Excellence in urological care with a patient-first approach
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

      {/* Services Grid */}
      <section className="w-full py-16 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Comprehensive urological services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            {/* Urologic Oncology Card (Clickable) */}
            <Card
              className="border-none shadow-box bg-primary-50 hover:shadow-box-xl transition-all duration-300 cursor-pointer"
              onClick={() => setIsOncologyModalOpen(true)}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <HeartIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-primary mb-2">
                  Urologic Oncology
                </h3>
                <p className="text-foreground-secondary mb-4">
                  Specialized cancer care for urological malignancies
                </p>
                <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center">
                  Learn More &gt;
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Conditions Grid */}
      <section className="w-full py-16 bg-background-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Common Urological Conditions
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Expert diagnosis and treatment for a wide range of conditions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonConditions.map((condition, index) => (
              <Card key={index} className="border-none shadow-box bg-background-primary hover:shadow-box-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground-primary mb-2">
                    {condition.title}
                  </h3>
                  <p className="text-foreground-secondary mb-4">{condition.description}</p>
                  <div className="mt-4">
                    <p className="font-semibold text-foreground-primary mb-2">Common Symptoms:</p>
                    <ul className="space-y-2">
                      {condition.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-foreground-secondary">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approaches Grid */}
      <section className="w-full py-16 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Our Treatment Approach
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Comprehensive, personalized care using the latest medical advances
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

      {/* Patient Education Cards */}
      <section className="w-full py-16 bg-background-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Patient Education
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Empowering you with knowledge about your urological health
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

      {/* Consultation CTA */}
      <section className="w-full py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Schedule Your Consultation
            </h2>
            <p className="text-lg text-foreground-secondary mb-8">
              Take the first step towards better urological health
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

      {/* Urologic Oncology Modal */}
      {isOncologyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-background-primary rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background-primary border-b border-border-primary p-6 flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground-primary">
                Urologic Oncology
              </h2>
              <button
                onClick={() => setIsOncologyModalOpen(false)}
                className="text-foreground-tertiary hover:text-foreground-primary transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-lg text-foreground-secondary mb-8">
                Our specialized urologic oncology team provides comprehensive care for patients with urological cancers, from diagnosis through treatment and follow-up care.
              </p>

              <h3 className="text-xl font-semibold text-foreground-primary mb-4">
                Conditions We Treat
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {urologicOncologyDiseases.map((disease, index) => (
                  <Card key={index} className="border border-border-primary">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-foreground-primary mb-2">
                        {disease.name}
                      </h4>
                      <p className="text-foreground-secondary mb-2">{disease.description}</p>
                      <p className="text-sm text-primary-600 font-semibold">
                        {disease.prevalence}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Schedule Consultation
                </button>
                <button
                  onClick={() => setIsOncologyModalOpen(false)}
                  className="bg-background-secondary hover:bg-neutral-200 text-foreground-primary border-2 border-border-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
