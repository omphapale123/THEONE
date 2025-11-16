
import { useNavigate } from 'react-router-dom';
import Button from '../../components/base/Button';

export default function GCCOverviewPage() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/login');
  };

  const handleGetInsights = () => {
    navigate('/login');
  };

  const gccBenefits = [
    {
      icon: 'ri-percent-line',
      title: '25% Capital Subsidy',
      description: 'Significant capital investment support for your GCC setup'
    },
    {
      icon: 'ri-file-text-line',
      title: '100% Stamp Duty Exemption',
      description: 'Complete exemption on stamp duty for property transactions'
    },
    {
      icon: 'ri-flashlight-line',
      title: '100% Electricity Duty Exemption',
      description: 'Five years of complete electricity duty exemption'
    },
    {
      icon: 'ri-team-line',
      title: 'Skill Development Subsidy',
      description: 'Up to ₹10,000 per employee for skill development programs'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'IP & R&D Support',
      description: 'Comprehensive support for intellectual property and research activities'
    },
    {
      icon: 'ri-home-line',
      title: '50% Property Tax Rebate',
      description: 'Substantial savings on property tax obligations'
    },
    {
      icon: 'ri-building-line',
      title: 'GCC Parks Access',
      description: 'Premium locations in Mumbai, Pune, Nagpur, and Nashik'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Deep STEM Talent Pool',
      description: 'Access to India\'s vast pool of skilled technical professionals'
    }
  ];

  const policyHighlights = [
    {
      icon: 'ri-building-4-line',
      number: '400',
      label: 'New GCCs',
      description: 'Target by 2030'
    },
    {
      icon: 'ri-user-star-line',
      number: '4 Lakh',
      label: 'High-Skill Jobs',
      description: 'Direct employment'
    },
    {
      icon: 'ri-map-pin-line',
      number: '4',
      label: 'GCC Parks',
      description: 'Mumbai, Pune, Nagpur, Nashik'
    },
    {
      icon: 'ri-line-chart-line',
      number: '€130B+',
      label: 'Trade Volume',
      description: 'Post EU-India agreement'
    }
  ];

  const whyGccsMatter = [
    {
      icon: 'ri-global-line',
      title: 'EU-India Partnership',
      description: 'Strengthening bilateral trade and innovation cooperation'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Tech Innovation Demand',
      description: 'Rising global demand for technology and AI solutions'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Skilled Workforce',
      description: 'Access to cost-efficient, highly skilled talent pool'
    },
    {
      icon: 'ri-building-line',
      title: 'Strong Infrastructure',
      description: 'World-class infrastructure and business environment'
    },
    {
      icon: 'ri-government-line',
      title: 'Policy Support',
      description: 'Comprehensive government incentives and support'
    }
  ];

  const ourServices = [
    {
      icon: 'ri-building-2-line',
      title: 'GCC Establishment',
      description: 'Complete setup and establishment of your Global Capability Centre from ground up'
    },
    {
      icon: 'ri-government-line',
      title: 'Incentive Advisory & Government Liaison',
      description: 'Expert guidance on maximizing incentives and seamless government relations'
    },
    {
      icon: 'ri-file-shield-line',
      title: 'Entity Setup & Legal Support',
      description: 'Comprehensive legal framework and entity establishment services'
    },
    {
      icon: 'ri-user-search-line',
      title: 'HR, Talent & Staffing',
      description: 'Complete talent acquisition and human resource management solutions'
    },
    {
      icon: 'ri-flask-line',
      title: 'R&D and Innovation Centre',
      description: 'Seamless integration of research and development capabilities'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Compliance & Operations',
      description: 'Continuous compliance management and operational support'
    }
  ];

  const simplificationSteps = [
    {
      icon: 'ri-search-line',
      title: 'Assessment & Planning',
      description: 'We analyze your business needs and create a customized GCC roadmap',
      step: '1'
    },
    {
      icon: 'ri-government-line',
      title: 'Regulatory Navigation',
      description: 'We handle all government approvals and regulatory requirements',
      step: '2'
    },
    {
      icon: 'ri-building-4-line',
      title: 'Setup & Infrastructure',
      description: 'We establish your entity, secure locations, and build infrastructure',
      step: '3'
    },
    {
      icon: 'ri-team-line',
      title: 'Talent Acquisition',
      description: 'We recruit and onboard the right talent for your GCC',
      step: '4'
    },
    {
      icon: 'ri-gift-line',
      title: 'Incentive Maximization',
      description: 'We ensure you receive all eligible benefits and subsidies',
      step: '5'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Launch & Scale',
      description: 'We support your GCC launch and ongoing expansion',
      step: '6'
    }
  ];

  const businessBenefits = [
    'Helps with strategic future planning and market positioning',
    'Enables exporters/importers to understand evolving demand patterns',
    'Shows how global innovation landscape is shifting',
    'Helps EU companies understand India market opportunities',
    'Helps Indian SMEs understand global business trends',
    'Provides competitive intelligence for market expansion'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-8">
              <i className="ri-building-2-line mr-2"></i>
              Your GCC Setup Partner
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              We Help You Build Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Global Capability Centre
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              From planning to launch, we simplify the entire GCC setup process and maximize your benefits under the Maharashtra GCC Policy 2025.
            </p>

            <p className="text-lg text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed">
              As the first dedicated GCC setup specialists, we handle all complexities so you can focus on innovation and growth.
            </p>

            <Button 
              variant="primary"
              onClick={handleLearnMore}
              className="whitespace-nowrap cursor-pointer text-lg px-10 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <i className="ri-arrow-right-line mr-2"></i>
              Start Your GCC Journey
            </Button>
          </div>

          <div className="mt-16">
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20corporate%20business%20innovation%20center%20with%20global%20connectivity%2C%20professional%20office%20environment%20showcasing%20technology%20and%20collaboration%2C%20clean%20minimalist%20design%20with%20blue%20and%20white%20color%20scheme%2C%20representing%20global%20capability%20centers%20and%20international%20business%20operations%2C%20futuristic%20workspace%20with%20digital%20elements&width=1200&height=600&seq=gcc-overview-hero&orientation=landscape"
              alt="GCC Overview"
              className="w-full h-96 object-cover object-top rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* What is a GCC Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What is a GCC?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A simple explanation of Global Capability Centres and how they differ from traditional outsourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">GCC = Your Own Innovation Center</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="ri-check-line text-xs text-white"></i>
                    </div>
                    <p className="text-slate-700">A company's own high-skill, high-value centre in another country</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="ri-close-line text-xs text-white"></i>
                    </div>
                    <p className="text-slate-700">Not outsourcing, not BPO - it's your own operation</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="ri-lightbulb-line text-xs text-white"></i>
                    </div>
                    <p className="text-slate-700">Used for technology, R&D, engineering, AI, finance, support</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="ri-building-line text-xs text-slate-900"></i>
                    </div>
                    <p className="text-slate-700">Like a "second headquarters" for innovation and operations</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20modern%20office%20workspace%20showing%20global%20capability%20center%20operations%2C%20diverse%20team%20collaborating%20on%20technology%20projects%2C%20clean%20corporate%20environment%20with%20blue%20and%20emerald%20color%20scheme%2C%20innovation%20and%20research%20development%20atmosphere%2C%20high-tech%20business%20setting&width=600&height=400&seq=gcc-what-is&orientation=landscape"
                alt="GCC Operations"
                className="w-full h-96 object-cover object-top rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GCC Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Unmatched GCC Benefits & Incentives
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Maharashtra offers the most comprehensive incentive package for GCC establishments in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {gccBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <i className={`${benefit.icon} text-lg text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">₹11,700 Crore in Incentives Available Till 2040</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We ensure you maximize every benefit and don't miss any entitlements under the Maharashtra GCC Policy 2025.
            </p>
          </div>
        </div>
      </section>

      {/* How We Simplify Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-medium text-sm mb-8">
              <i className="ri-lightbulb-line mr-2"></i>
              Our Simplified Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How We Simplify Your GCC Setup
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We handle all the complexities, so you can focus on what matters most - innovation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {simplificationSteps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <i className={`${step.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-500">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <i className="ri-star-line text-sm text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">End-to-End Support</h3>
                <p className="text-slate-700 leading-relaxed">
                  From initial consultation to post-launch operations, we provide comprehensive support at every stage. 
                  Our expertise ensures smooth execution, regulatory compliance, and maximum benefit realization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive GCC Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial setup to ongoing operations, we provide complete end-to-end GCC establishment services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GCCs Matter Now */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why GCCs Matter Now
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The convergence of global trends is making GCCs more important than ever before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whyGccsMatter.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <i className={`${item.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {policyHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${highlight.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{highlight.number}</div>
                <div className="text-lg font-semibold text-slate-800 mb-2">{highlight.label}</div>
                <div className="text-sm text-slate-600">{highlight.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your GCC?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Let us handle the complexities while you focus on innovation. Start your GCC journey with India's first dedicated specialists.
          </p>

          <Button 
            variant="golden"
            onClick={handleGetInsights}
            className="whitespace-nowrap cursor-pointer text-lg px-10 py-5 shadow-2xl hover:shadow-[#e4a513]/25 transform hover:scale-105 transition-all duration-300"
          >
            <i className="ri-calendar-line mr-2"></i>
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}