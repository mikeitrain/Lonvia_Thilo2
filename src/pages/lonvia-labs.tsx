import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  BeakerIcon,
  SparklesIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function LonviaLabsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services", icon: "🔬" },
    { id: "hormones", label: "Hormones", icon: "💊" },
    { id: "aesthetics", label: "Aesthetics", icon: "✨" },
    { id: "metabolic", label: "Metabolic", icon: "⚖️" },
    { id: "cognitive", label: "Cognitive", icon: "🧠" },
    { id: "mental", label: "Mental Health", icon: "💚" },
    { id: "longevity", label: "Longevity", icon: "⏳" },
    { id: "sexual", label: "Sexual Health", icon: "❤️" },
    { id: "performance", label: "Performance", icon: "⚡" },
    { id: "wellness", label: "Wellness", icon: "🌟" }
  ];

  const services = [
    {
      id: 1,
      title: "Hormone Optimization",
      category: "hormones",
      icon: "💊",
      description: "Comprehensive hormone testing and optimization therapy including testosterone, growth hormone, and thyroid optimization.",
      features: [
        "Testosterone Replacement Therapy (TRT)",
        "Growth Hormone Optimization",
        "Thyroid Optimization",
        "Comprehensive Hormone Panels"
      ],
      duration: "3-6 months"
    },
    {
      id: 2,
      title: "Hair Loss Prevention & Restoration",
      category: "aesthetics",
      icon: "✨",
      description: "Advanced treatments for male and female pattern baldness using cutting-edge therapies and medications.",
      features: [
        "Finasteride & Dutasteride",
        "Minoxidil Therapy",
        "PRP Hair Restoration",
        "Hair Transplant Consultation"
      ],
      duration: "6-12 months"
    },
    {
      id: 3,
      title: "Weight Management & Body Composition",
      category: "metabolic",
      icon: "⚖️",
      description: "Personalized weight loss programs using GLP-1 medications, metabolic optimization, and body composition analysis.",
      features: [
        "Semaglutide (Ozempic/Wegovy)",
        "Tirzepatide (Mounjaro/Zepbound)",
        "Metabolic Panel Testing",
        "Body Composition Analysis"
      ],
      duration: "3-12 months"
    },
    {
      id: 4,
      title: "Cognitive Enhancement",
      category: "cognitive",
      icon: "🧠",
      description: "Optimize mental performance, focus, memory, and cognitive function through targeted nootropics and lifestyle interventions.",
      features: [
        "Cognitive Assessment",
        "Nootropic Protocols",
        "Memory Enhancement",
        "Focus Optimization"
      ],
      duration: "2-6 months"
    },
    {
      id: 5,
      title: "Mental Health & Wellness",
      category: "mental",
      icon: "💚",
      description: "Comprehensive mental health support including stress management, anxiety and depression treatment, and therapeutic interventions.",
      features: [
        "Mental Health Assessment",
        "Stress Management",
        "Anxiety & Depression Support",
        "Therapy Referrals"
      ],
      duration: "3-12 months"
    },
    {
      id: 6,
      title: "Longevity & Anti-Aging",
      category: "longevity",
      icon: "⏳",
      description: "Comprehensive anti-aging protocols including peptide therapy, NAD+ optimization, and longevity biomarkers.",
      features: [
        "Peptide Therapy",
        "NAD+ IV Therapy",
        "Longevity Biomarkers",
        "Cellular Health Assessment"
      ],
      duration: "6-12 months"
    },
    {
      id: 7,
      title: "Sexual Health Optimization",
      category: "sexual",
      icon: "❤️",
      description: "Comprehensive sexual health optimization for men and women including hormone therapy and performance enhancement.",
      features: [
        "ED Treatment",
        "Libido Enhancement",
        "Hormone Optimization",
        "Performance Protocols"
      ],
      duration: "3-6 months"
    },
    {
      id: 8,
      title: "Athletic Performance Enhancement",
      category: "performance",
      icon: "⚡",
      description: "Optimize athletic performance through advanced testing, supplementation, and recovery protocols.",
      features: [
        "Performance Testing",
        "Recovery Optimization",
        "Supplement Protocols",
        "Injury Prevention"
      ],
      duration: "3-9 months"
    },
    {
      id: 9,
      title: "Skin Health & Aesthetics",
      category: "aesthetics",
      icon: "✨",
      description: "Advanced skincare protocols, anti-aging treatments, and aesthetic optimization programs.",
      features: [
        "Skincare Protocols",
        "Anti-Aging Treatments",
        "Aesthetic Consultations",
        "Supplement Regimens"
      ],
      duration: "3-6 months"
    },
    {
      id: 10,
      title: "Sleep Optimization",
      category: "wellness",
      icon: "🌟",
      description: "Comprehensive sleep analysis and optimization protocols to improve sleep quality and recovery.",
      features: [
        "Sleep Study Analysis",
        "Supplement Protocols",
        "Sleep Hygiene Optimization",
        "Recovery Tracking"
      ],
      duration: "2-4 months"
    }
  ];

  const labPanels = [
    { name: "Hormone Panel", markers: "25+ markers" },
    { name: "Metabolic Panel", markers: "30+ markers" },
    { name: "Cardiovascular", markers: "20+ markers" },
    { name: "Nutritional Status", markers: "15+ markers" },
    { name: "Inflammatory Markers", markers: "10+ markers" },
    { name: "Thyroid Function", markers: "8+ markers" },
    { name: "Liver Function", markers: "12+ markers" },
    { name: "Kidney Function", markers: "8+ markers" }
  ];

  const successStories = [
    {
      name: "Marcus T.",
      age: 34,
      program: "Hormone Optimization",
      result: "Increased energy, improved muscle mass, better sleep quality.",
      quote: "After 6 months on TRT, I feel like I'm in my twenties again. My energy is through the roof and my workouts have never been better."
    },
    {
      name: "Jennifer L.",
      age: 29,
      program: "Hair Loss Prevention",
      result: "Significant hair regrowth, improved confidence.",
      quote: "The hair loss program completely changed my life. I've regained not just my hair, but my confidence too."
    },
    {
      name: "David R.",
      age: 42,
      program: "Weight Management",
      result: "Lost 45 lbs, improved metabolic health.",
      quote: "The GLP-1 program helped me lose weight I'd been struggling with for years. The medical supervision made all the difference."
    }
  ];

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter(service => service.category === activeCategory);

  const getCategoryTitle = () => {
    if (activeCategory === "all") return "All Optimization Services";
    const category = categories.find(cat => cat.id === activeCategory);
    return category ? `${category.label} Optimization` : "All Optimization Services";
  };

  return (
    <div className="bg-background-primary w-full">
      {/* Hero Section */}
      <section className="relative bg-[#0E5A46] text-white py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-xl">🔬</span>
            <span className="text-sm font-semibold">Advanced Health Optimization</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Lonvia Labs
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-100 leading-relaxed">
            Optimize your health, enhance your performance, and unlock your full potential with our cutting-edge health optimization protocols.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/case/create')}
              className="bg-white text-[#0E5A46] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Start Your Journey
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0E5A46] transition-all duration-300">
              View Lab Results
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground-primary">
            How Lonvia Labs Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                <BeakerIcon className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground-primary">
                Comprehensive Assessment
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                Complete detailed health questionnaire and schedule comprehensive lab testing to establish your baseline.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground-primary">
                Expert Consultation
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                Meet with our specialized physicians to review results and create your personalized optimization protocol.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                <SparklesIcon className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground-primary">
                Ongoing Optimization
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                Receive treatments, medications, and supplements with regular monitoring and protocol adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-background-primary border-b border-border-primary sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-[#10552E] text-white shadow-md"
                    : "bg-background-secondary text-foreground-secondary hover:bg-neutral-100 border border-border-primary"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background-primary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground-primary">
              {getCategoryTitle()}
            </h2>
            <p className="text-foreground-secondary text-lg">
              {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'} available
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-background-secondary border border-border-primary rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center text-3xl mb-4">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 text-foreground-primary">
                    {service.title}
                  </h3>

                  <p className="text-foreground-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground-primary mb-3 uppercase tracking-wide">
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-foreground-secondary">
                          <span className="text-primary-600 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                    <ClockIcon className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => router.push('/case/create')}
                      className="w-full bg-[#10552E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0d4323] transition-colors duration-200"
                    >
                      Start Optimization
                    </button>
                    <button className="w-full bg-transparent border-2 border-[#10552E] text-[#10552E] px-6 py-3 rounded-lg font-semibold hover:bg-[#10552E] hover:text-white transition-all duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Testing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground-primary">
              Comprehensive Lab Testing
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Our advanced laboratory testing provides detailed insights into your health markers and optimization opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {labPanels.map((panel, index) => (
              <div
                key={index}
                className="bg-white border border-border-primary rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-3">
                  <BeakerIcon className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground-primary">
                  {panel.name}
                </h3>
                <p className="text-primary-600 font-medium">
                  {panel.markers}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => router.push('/case/create')}
              className="bg-[#10552E] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0d4323] transition-colors duration-200 shadow-lg"
            >
              Order Lab Testing
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background-primary">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground-primary">
              Success Stories
            </h2>
            <p className="text-xl text-foreground-secondary">
              Real results from real patients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-background-secondary border border-border-primary rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground-primary">
                      {story.name}, {story.age}
                    </div>
                    <div className="text-sm text-primary-600 font-medium">
                      {story.program}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-foreground-primary mb-2 uppercase tracking-wide">
                    Result:
                  </div>
                  <p className="text-foreground-secondary font-medium">
                    {story.result}
                  </p>
                </div>

                <div className="border-t border-border-primary pt-4">
                  <p className="text-foreground-secondary italic leading-relaxed">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#10552E] text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Your Health?
          </h2>
          <p className="text-xl mb-12 text-gray-100 leading-relaxed">
            Join thousands of patients who have transformed their health with Lonvia Labs. Start your optimization journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => router.push('/case/create')}
              className="bg-white text-[#10552E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#10552E] transition-all duration-300">
              Schedule Consultation
            </button>
          </div>

          <p className="text-gray-200">
            Free consultation • No commitment required • Results guaranteed
          </p>
        </div>
      </section>
    </div>
  );
}
