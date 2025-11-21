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

export default function PlasticSurgeryPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <SparklesIcon className="w-8 h-8 text-primary-600" />,
      title: 'Facial Procedures',
      description: 'Rejuvenate and enhance facial features',
      details: [
        'Facelift',
        'Rhinoplasty',
        'Eyelid Surgery',
        'Brow Lift',
        'Facial Implants',
      ],
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-primary-600" />,
      title: 'Body Contouring',
      description: 'Sculpt and reshape your body',
      details: [
        'Liposuction',
        'Tummy Tuck',
        'Body Lift',
        'Arm Lift',
        'Thigh Lift',
      ],
    },
    {
      icon: <BeakerIcon className="w-8 h-8 text-primary-600" />,
      title: 'Breast Surgery',
      description: 'Enhancement and reconstructive procedures',
      details: [
        'Breast Augmentation',
        'Breast Reduction',
        'Breast Lift',
        'Breast Reconstruction',
        'Male Breast Reduction',
      ],
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary-600" />,
      title: 'Reconstructive Surgery',
      description: 'Restore form and function',
      details: [
        'Scar Revision',
        'Burn Reconstruction',
        'Hand Surgery',
        'Skin Cancer Reconstruction',
        'Trauma Reconstruction',
      ],
    },
  ];

  const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '3,000+', label: 'Successful Procedures' },
    { value: '99%', label: 'Patient Satisfaction' },
  ];

  const whyChooseReasons = [
    {
      icon: <ClipboardDocumentCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Board Certified',
      description: 'Highly trained and certified plastic surgeons with extensive experience.',
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-primary-600" />,
      title: 'Natural Results',
      description: 'Focus on achieving beautiful, natural-looking results that enhance your features.',
    },
    {
      icon: <HeartIcon className="w-12 h-12 text-primary-600" />,
      title: 'Patient Safety',
      description: 'State-of-the-art surgical facilities with the highest safety standards.',
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-primary-600" />,
      title: 'Personalized Care',
      description: 'Customized treatment plans tailored to your unique goals and anatomy.',
    },
  ];

  const treatmentApproaches = [
    {
      icon: <AcademicCapIcon className="w-12 h-12 text-primary-600" />,
      title: 'Aesthetic Excellence',
      description: 'Combining artistry with surgical precision',
      benefits: [
        'Natural-looking results',
        'Attention to detail',
        'Harmonious proportions',
        'Long-lasting outcomes',
      ],
    },
    {
      icon: <SparklesIcon className="w-12 h-12 text-primary-600" />,
      title: 'Advanced Techniques',
      description: 'Latest surgical and non-surgical methods',
      benefits: [
        'Minimally invasive options',
        'Reduced scarring',
        'Faster recovery',
        'Cutting-edge technology',
      ],
    },
    {
      icon: <UserGroupIcon className="w-12 h-12 text-primary-600" />,
      title: 'Comprehensive Support',
      description: 'Complete care throughout your journey',
      benefits: [
        'Detailed consultations',
        'Pre-operative planning',
        'Post-operative care',
        'Long-term follow-up',
      ],
    },
  ];

  const patientEducation = [
    {
      title: 'Understanding Your Options',
      description: 'Comprehensive information about surgical and non-surgical procedures available.',
    },
    {
      title: 'Preparing for Surgery',
      description: 'Important steps to ensure the best possible outcome and smooth recovery.',
    },
    {
      title: 'Recovery & Results',
      description: 'What to expect during healing and how to maintain your results long-term.',
    },
  ];

  const consultationExpectations = [
    'Private, confidential consultation',
    'Discussion of your aesthetic goals',
    'Physical examination and assessment',
    'Review of procedure options',
    'Realistic expectations and outcomes',
    'Detailed cost breakdown',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">

      <div className="w-full relative">
        <div className="relative overflow-hidden mt-4 md:rounded-5xl md:border md:border-border-primary md:max-w-[95%] md:mx-auto">
          <Image
            className="w-full h-[500px] object-cover"
            alt="Plastic Surgery"
            src="/test-3.jpg"
            width={1440}
            height={500}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {t('services.plasticSurgery')}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-100 max-w-3xl mx-auto">
                Aesthetic and reconstructive surgery excellence
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
              Why Choose Lonvia Plastic Surgery?
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Artistry, precision, and patient care combined
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
              Comprehensive aesthetic and reconstructive procedures
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
              Our Approach
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Excellence in every aspect of your care
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
              Making informed decisions about your aesthetic journey
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
              Begin your transformation journey today
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
                  View Gallery
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}
