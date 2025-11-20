import React, { useState } from 'react';
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
  XMarkIcon,
} from '@heroicons/react/24/outline';

interface Condition {
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

interface CommonCondition {
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

export default function OrthopedicsPage() {
  const { t } = useLanguage();
  const [isSportsModalOpen, setIsSportsModalOpen] = useState(false);

  const sportsInjuries: Condition[] = [
    {
      name: 'ACL Tear',
      description: 'Anterior cruciate ligament injury common in sports.',
      prevalence: 'Over 200,000 ACL injuries annually in the US',
    },
    {
      name: 'Rotator Cuff Tear',
      description: 'Damage to the muscles and tendons around the shoulder.',
      prevalence: 'Affects 2 million people in the US each year',
    },
    {
      name: 'Meniscus Tear',
      description: 'Cartilage damage in the knee joint.',
      prevalence: 'One of the most common knee injuries',
    },
    {
      name: 'Tennis Elbow',
      description: 'Overuse injury affecting the elbow tendons.',
      prevalence: 'Affects 1-3% of the population',
    },
  ];

  const services: Service[] = [
    {
      icon: <BeakerIcon className="w-8 h-8 text-primary-600" />,
      title: 'Diagnostic Services',
      description: 'Advanced imaging and diagnostic procedures',
      details: [
        'X-Ray Imaging',
        'MRI Scans',
        'CT Scans',
        'Bone Density Testing',
        'Joint Arthroscopy',
      ],
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-primary-600" />,
      title: 'Joint Care',
      description: 'Comprehensive joint treatment and replacement',
      details: [
        'Hip Replacement',
        'Knee Replacement',
        'Shoulder Surgery',
        'Joint Preservation',
        'Arthritis Treatment',
      ],
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary-600" />,
      title: 'Spine Care',
      description: 'Expert spine treatment and surgery',
      details: [
        'Spinal Fusion',
        'Disc Replacement',
        'Scoliosis Treatment',
        'Minimally Invasive Surgery',
        'Pain Management',
      ],
    },
  ];

  const commonConditions: CommonCondition[] = [
    {
      title: 'Osteoarthritis',
      description: 'Degenerative joint disease affecting cartilage',
      symptoms: ['Joint pain and stiffness', 'Reduced range of motion', 'Swelling', 'Bone spurs'],
    },
    {
      title: 'Fractures',
      description: 'Broken bones requiring specialized treatment',
      symptoms: ['Severe pain', 'Swelling and bruising', 'Deformity', 'Inability to use the limb'],
    },
    {
      title: 'Back Pain',
      description: 'Chronic or acute spinal discomfort',
      symptoms: ['Lower back pain', 'Muscle spasms', 'Limited flexibility', 'Radiating pain'],
    },
    {
      title: 'Carpal Tunnel Syndrome',
      description: 'Nerve compression in the wrist',
      symptoms: ['Numbness and tingling', 'Weakness in hand', 'Pain in wrist', 'Difficulty gripping'],
    },
  ];

  const treatmentApproaches: TreatmentApproach[] = [
    {
      icon: <AcademicCapIcon className="w-12 h-12 text-primary-600" />,
      title: 'Conservative Treatment',
      description: 'Non-surgical approaches for optimal recovery',
      benefits: [
        'Physical therapy programs',
        'Pain management techniques',
        'Medication protocols',
        'Lifestyle modifications',
      ],
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-primary-600" />,
      title: 'Surgical Excellence',
      description: 'State-of-the-art surgical interventions',
      benefits: [
        'Minimally invasive techniques',
        'Robotic-assisted surgery',
        'Joint replacement expertise',
        'Rapid recovery protocols',
      ],
    },
    {
      icon: <UserGroupIcon className="w-12 h-12 text-primary-600" />,
      title: 'Rehabilitation Focus',
      description: 'Comprehensive post-treatment care',
      benefits: [
        'Customized rehab programs',
        'Sports medicine integration',
        'Progress monitoring',
        'Return to activity planning',
      ],
    },
  ];

  const stats = [
    { value: '20+', label: 'Years of Experience' },
    { value: '10,000+', label: 'Procedures Performed' },
    { value: '97%', label: 'Patient Satisfaction' },
  ];

  const whyChooseReasons = [
    {
      icon: <ClipboardDocumentCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Expert Surgeons',
      description: 'Board-certified orthopedic surgeons with subspecialty training in all areas.',
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-primary-600" />,
      title: 'Advanced Techniques',
      description: 'Minimally invasive and robotic-assisted procedures for faster recovery.',
    },
    {
      icon: <HeartIcon className="w-12 h-12 text-primary-600" />,
      title: 'Patient-Centered',
      description: 'Individualized treatment plans designed around your lifestyle and goals.',
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Proven Outcomes',
      description: 'Exceptional surgical results with high success rates and satisfaction.',
    },
  ];

  const patientEducation = [
    {
      title: 'Understanding Your Diagnosis',
      description: 'Detailed information about orthopedic conditions, treatment options, and expected outcomes.',
    },
    {
      title: 'Pre-Surgery Preparation',
      description: 'Comprehensive guidance on preparing for surgery and optimizing your health.',
    },
    {
      title: 'Rehabilitation Journey',
      description: 'What to expect during recovery and how to achieve the best possible results.',
    },
  ];

  const consultationExpectations = [
    'Comprehensive physical examination',
    'Review of medical history and imaging',
    'Discussion of treatment options',
    'Surgical vs. non-surgical approaches',
    'Recovery timeline and expectations',
    'Personalized treatment recommendations',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <NavigationBar />

      {/* Hero Section */}
      <div className="w-full relative">
        <div className="relative overflow-hidden mt-4 md:rounded-5xl md:border md:border-border-primary md:max-w-[95%] md:mx-auto">
          <Image
            className="w-full h-[500px] object-cover"
            alt="Orthopedics Department"
            src="/test-2.jpg"
            width={1440}
            height={500}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {t('services.orthopedics')}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-100 max-w-3xl mx-auto">
                Expert care for bones, joints, and muscles
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

      {/* Why Choose Lonvia Orthopedics */}
      <section className="w-full py-16 bg-background-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Why Choose Lonvia Orthopedics?
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Leading orthopedic care with innovative treatments
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
              Comprehensive orthopedic care for all your needs
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

            {/* Sports Medicine Card (Clickable) */}
            <Card
              className="border-none shadow-box bg-primary-50 hover:shadow-box-xl transition-all duration-300 cursor-pointer"
              onClick={() => setIsSportsModalOpen(true)}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <HeartIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-primary mb-2">
                  Sports Medicine
                </h3>
                <p className="text-foreground-secondary mb-4">
                  Specialized care for athletic injuries and performance
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
              Common Orthopedic Conditions
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Expert treatment for a wide range of musculoskeletal conditions
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
              Comprehensive care from diagnosis to full recovery
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
              Empowering you with knowledge about your orthopedic health
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
              Take the first step towards pain-free movement
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

      {/* Sports Medicine Modal */}
      {isSportsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-background-primary rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background-primary border-b border-border-primary p-6 flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground-primary">
                Sports Medicine
              </h2>
              <button
                onClick={() => setIsSportsModalOpen(false)}
                className="text-foreground-tertiary hover:text-foreground-primary transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-lg text-foreground-secondary mb-8">
                Our sports medicine specialists provide comprehensive care for athletes of all levels, from weekend warriors to professional competitors.
              </p>

              <h3 className="text-xl font-semibold text-foreground-primary mb-4">
                Common Sports Injuries We Treat
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {sportsInjuries.map((injury, index) => (
                  <Card key={index} className="border border-border-primary">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold text-foreground-primary mb-2">
                        {injury.name}
                      </h4>
                      <p className="text-foreground-secondary mb-2">{injury.description}</p>
                      <p className="text-sm text-primary-600 font-semibold">
                        {injury.prevalence}
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
                  onClick={() => setIsSportsModalOpen(false)}
                  className="bg-background-secondary hover:bg-neutral-200 text-foreground-primary border-2 border-border-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
