import { useNavigate } from 'react-router-dom';
import Button from '../../components/base/Button';

export default function GCCBenefitsPage() {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/login');
  };

  const handleDownloadPolicy = () => {
    // TODO: Replace with actual policy document URL when available
    console.log('Download policy document - URL to be provided');
    // window.open('https://example.com/gcc-policy-document.pdf', '_blank');
  };

  const benefits = [
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
    },
    {
      icon: 'ri-leaf-line',
      title: 'ESG & Green Certification',
      description: 'Strong incentives for sustainable and green infrastructure'
    },
    {
      icon: 'ri-speed-line',
      title: 'Fast Approvals via MAITRI',
      description: 'Streamlined single-window clearance system'
    }
  ];

  const services = [
    {
      icon: 'ri-building-2-line',
      title: 'GCC Establishment',
      description: 'Complete setup and establishment of your Global Capability Centre'
    },
    {
      icon: 'ri-government-line',
      title: 'Incentive Advisory & Government Liaison',
      description: 'Expert guidance on maximizing incentives and government relations'
    },
    {
      icon: 'ri-file-shield-line',
      title: 'Entity Setup & Legal Support',
      description: 'Comprehensive legal framework and entity establishment'
    },
    {
      icon: 'ri-user-search-line',
      title: 'HR, Talent & Staffing Assistance',
      description: 'Complete talent acquisition and human resource management'
    },
    {
      icon: 'ri-flask-line',
      title: 'R&D and Innovation Centre Integration',
      description: 'Seamless integration of research and development capabilities'
    },
    {
      icon: 'ri-plant-line',
      title: 'ESG & Green Infrastructure Guidance',
      description: 'Sustainable infrastructure planning and ESG compliance'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Compliance & Ongoing Operations Support',
      description: 'Continuous compliance management and operational support'
    }
  ];

  const targetCompanies = [
    { icon: 'ri-computer-line', title: 'Tech & AI Companies', description: 'Cutting-edge technology and artificial intelligence firms' },
    { icon: 'ri-tools-line', title: 'Engineering & R&D Companies', description: 'Research and development focused organizations' },
    { icon: 'ri-bank-line', title: 'FinTech & BFSI', description: 'Financial technology and banking services' },
    { icon: 'ri-medicine-bottle-line', title: 'Pharma & MedTech', description: 'Pharmaceutical and medical technology companies' },
    { icon: 'ri-car-line', title: 'Auto Tech', description: 'Automotive technology and innovation companies' },
    { icon: 'ri-lightbulb-flash-line', title: 'Global Innovation Teams', description: 'International innovation and development teams' }
  ];

  const executionSteps = [
    { icon: 'ri-government-line', title: 'Regulatory Approvals', description: 'Navigate complex regulatory frameworks efficiently' },
    { icon: 'ri-building-4-line', title: 'Entity Setup', description: 'Complete legal entity establishment and registration' },
    { icon: 'ri-map-pin-line', title: 'Land Allocation', description: 'Secure optimal locations in designated GCC parks' },
    { icon: 'ri-gift-line', title: 'Incentive Acquisition', description: 'Maximize all available government incentives' },
    { icon: 'ri-shield-check-line', title: 'Compliance', description: 'Ensure ongoing regulatory compliance' },
    { icon: 'ri-line-chart-line', title: 'Long-term Expansion Strategy', description: 'Strategic planning for sustainable growth' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 font-medium text-sm mb-8">
            <i className="ri-trophy-line mr-2"></i>
            First Experts in the Industry
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build Your Global Capability Centre in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Maharashtra
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            We are the pioneers helping global companies unlock the massive advantages of the Maharashtra GCC Policy 2025.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="golden"
              onClick={handleBookCall}
              className="whitespace-nowrap cursor-pointer text-lg px-10 py-5 shadow-2xl hover:shadow-[#e4a513]/25 transform hover:scale-105 transition-all duration-300"
            >
              <i className="ri-phone-line mr-2"></i>
              Book a Strategy Call
            </Button>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20corporate%20futuristic%20India%20innovation%20theme%20with%20Maharashtra%20skyline%2C%20high-tech%20business%20environment%2C%20glass%20buildings%2C%20digital%20transformation%20elements%2C%20professional%20corporate%20atmosphere%20with%20blue%20and%20golden%20lighting%2C%20clean%20minimalist%20design%20representing%20global%20capability%20centers%20and%20technological%20advancement&width=1920&height=800&seq=gcc-hero-bg&orientation=landscape"
            alt="GCC Maharashtra Background"
            className="w-full h-full object-cover object-top opacity-20"
          />
        </div>
      </section>

      {/* About the Opportunity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Maharashtra: India's #1 GCC Destination
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              The Maharashtra GCC Policy 2025 represents the most comprehensive framework for Global Capability Centres in India, 
              offering unprecedented opportunities for global businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-building-2-line text-2xl text-white"></i>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">400</div>
              <div className="text-lg font-semibold text-slate-800 mb-2">New GCCs</div>
              <div className="text-sm text-slate-600">Expected to be established by 2030</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-2xl text-white"></i>
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">4 Lakh</div>
              <div className="text-lg font-semibold text-slate-800 mb-2">High-Skill Jobs</div>
              <div className="text-sm text-slate-600">Direct employment opportunities</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-money-rupee-circle-line text-2xl text-white"></i>
              </div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">₹11,700 Cr</div>
              <div className="text-lg font-semibold text-slate-800 mb-2">Incentives</div>
              <div className="text-sm text-slate-600">Available till 2040</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">This is the Best Time Ever to Set Up a GCC</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              As the first dedicated specialists in the GCC setup ecosystem, we understand the policy better than anyone else 
              and ensure you maximize every available incentive without missing any entitlements.
            </p>
          </div>
        </div>
      </section>

      {/* Why Maharashtra Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Unmatched Benefits & Incentives
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Maharashtra offers the most comprehensive incentive package for GCC establishments in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <i className={`${benefit.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are The Best Partner */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-300 font-medium text-sm mb-8">
              <i className="ri-star-line mr-2"></i>
              First Movers Advantage
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why We Are Your Best Partner
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              As the FIRST company exclusively focused on GCC setup in Maharashtra, we provide unmatched expertise and end-to-end execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-8">Our Unique Advantages</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-trophy-line text-sm text-slate-900"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">First & Only Specialists</h4>
                    <p className="text-slate-300">We are the FIRST company exclusively focused on GCC setup in Maharashtra</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-book-line text-sm text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Deep Policy Understanding</h4>
                    <p className="text-slate-300">We understand the policy better than anyone else in the market</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-money-dollar-circle-line text-sm text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Maximize Incentives</h4>
                    <p className="text-slate-300">Ensure clients don't miss any entitlements and maximize benefits</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20team%20working%20on%20global%20capability%20center%20setup%2C%20modern%20office%20environment%2C%20diverse%20professionals%20collaborating%2C%20Maharashtra%20business%20district%20background%2C%20corporate%20consulting%20atmosphere%2C%20high-tech%20workspace%20with%20charts%20and%20presentations%2C%20professional%20business%20consulting%20visualization&width=600&height=400&seq=gcc-team&orientation=landscape"
                alt="GCC Setup Team"
                className="w-full h-96 object-cover object-top rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* End-to-End Execution */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12">End-to-End Execution</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {executionSteps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                    <i className={`${step.icon} text-lg text-white`}></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
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
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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

      {/* Who Should Set Up GCC */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Who Should Set Up a GCC?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Maharashtra's GCC policy is designed for forward-thinking global companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetCompanies.map((company, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${company.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{company.title}</h3>
                <p className="text-slate-600 leading-relaxed">{company.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your GCC Starts Here
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Be part of India's fastest-growing global capability ecosystem — with the first experts leading your journey.
          </p>

          <div className="flex justify-center">
            <Button 
              variant="golden"
              onClick={handleBookCall}
              className="whitespace-nowrap cursor-pointer text-lg px-10 py-5 shadow-2xl hover:shadow-[#e4a513]/25 transform hover:scale-105 transition-all duration-300"
            >
              <i className="ri-calendar-line mr-2"></i>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
