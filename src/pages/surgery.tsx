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

export default function SurgeryPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <BeakerIcon className="w-8 h-8 text-primary-600" />,
      title: 'General Surgery',
      description: 'Comprehensive surgical procedures',
      details: [
        'Hernia Repair',
        'Gallbladder Surgery',
        'Appendectomy',
        'Colon Surgery',
        'Thyroid Surgery',
      ],
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-primary-600" />,
      title: 'Minimally Invasive Surgery',
      description: 'Advanced laparoscopic techniques',
      details: [
        'Laparoscopic Surgery',
        'Robot-Assisted Surgery',
        'Endoscopic Procedures',
        'Faster Recovery',
        'Reduced Scarring',
      ],
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary-600" />,
      title: 'Emergency Surgery',
      description: 'Urgent surgical care when needed',
      details: [
        '24/7 Availability',
        'Trauma Surgery',
        'Acute Conditions',
        'Rapid Response',
        'Critical Care',
      ],
    },
    {
      icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-primary-600" />,
      title: 'Specialized Procedures',
      description: 'Advanced surgical expertise',
      details: [
        'Bariatric Surgery',
        'Vascular Surgery',
        'Breast Surgery',
        'Endocrine Surgery',
        'Soft Tissue Surgery',
      ],
    },
  ];

  const stats = [
    { value: '30+', label: 'Years of Experience' },
    { value: '8,000+', label: 'Surgeries Performed' },
    { value: '98%', label: 'Success Rate' },
  ];

  const whyChooseReasons = [
    {
      icon: <ClipboardDocumentCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Expert Surgeons',
      description: 'Board-certified surgeons with extensive experience in all surgical specialties.',
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-primary-600" />,
      title: 'Advanced Technology',
      description: 'State-of-the-art operating rooms with the latest surgical equipment.',
    },
    {
      icon: <HeartIcon className="w-12 h-12 text-primary-600" />,
      title: 'Patient Safety',
      description: 'Rigorous safety protocols and highest standards of surgical care.',
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Proven Results',
      description: 'Excellent surgical outcomes with low complication rates.',
    },
  ];

  const treatmentApproaches = [
    {
      icon: <AcademicCapIcon className="w-12 h-12 text-primary-600" />,
      title: 'Evidence-Based Surgery',
      description: 'Latest surgical techniques and protocols',
      benefits: [
        'Proven surgical methods',
        'Continuous quality improvement',
        'Research-backed approaches',
        'Best practice guidelines',
      ],
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-primary-600" />,
      title: 'Minimally Invasive',
      description: 'Advanced surgical techniques for faster recovery',
      benefits: [
        'Smaller incisions',
        'Less pain',
        'Shorter hospital stays',
        'Quicker return to normal',
      ],
    },
    {
      icon: <UserGroupIcon className="w-12 h-12 text-primary-600" />,
      title: 'Comprehensive Care',
      description: 'Complete surgical care from consultation to recovery',
      benefits: [
        'Pre-operative optimization',
        'Surgical excellence',
        'Post-operative monitoring',
        'Recovery support',
      ],
    },
  ];

  const patientEducation = [
    {
      title: 'Preparing for Surgery',
      description: 'Essential information about pre-operative preparation and what to bring.',
    },
    {
      title: 'During Your Procedure',
      description: 'Understanding what happens in the operating room and anesthesia options.',
    },
    {
      title: 'Recovery Process',
      description: 'Post-operative care instructions and what to expect during healing.',
    },
  ];

  const consultationExpectations = [
    'Detailed surgical evaluation',
    'Discussion of surgical options',
    'Risk and benefit analysis',
    'Pre-operative instructions',
    'Post-operative care planning',
    'Answer all your questions',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <NavigationBar />

      <div className="w-full relative">
        <div className="relative overflow-hidden mt-4 md:rounded-5xl md:border md:border-border-primary md:max-w-[95%] md:mx-auto">
          <Image
            className="w-full h-[500px] object-cover"
            alt="Surgery"
            src="/test-5.jpg"
            width={1440}
            height={500}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {t('services.surgery')}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-100 max-w-3xl mx-auto">
                Advanced surgical care with exceptional outcomes
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
              Why Choose Lonvia Surgery?
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Excellence in surgical care with patient safety first
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
              Our Surgical Services
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Comprehensive surgical solutions for all your needs
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
              Our Surgical Approach
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Excellence at every stage of your surgical journey
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

      <section className="w-full py-16 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-primary mb-4">
              Patient Education
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Knowledge and preparation for your surgical journey
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
              Schedule Your Consultation
            </h2>
            <p className="text-lg text-foreground-secondary mb-8">
              Expert surgical care when you need it
            </p>
          </div>

          <Card className="border-none shadow-box bg-background-primary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground-primary mb-4">
                What to Expect During Your Consultation
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
                  Book Consultation
                </button>
                <button className="bg-background-secondary hover:bg-neutral-200 text-foreground-primary border-2 border-border-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                  Emergency Contact
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
