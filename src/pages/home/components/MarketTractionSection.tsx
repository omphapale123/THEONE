import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MarketTractionSection() {
  const navigate = useNavigate();
  const [counters, setCounters] = useState({
    trade: 0,
    smes: 0,
    growth: 0
  });

  const targetValues = {
    trade: 130,
    smes: 79,
    growth: 125
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targetValues).map(key => {
      const target = targetValues[key as keyof typeof targetValues];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals.find(interval => interval === intervals[Object.keys(targetValues).indexOf(key)]));
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const stats = [
    {
      value: `€${counters.trade}B+`,
      label: 'EU-India Trade Volume',
      description: 'Annual bilateral trade continues to grow',
      icon: 'ri-exchange-line'
    },
    {
      value: `${counters.smes}%`,
      label: 'SMEs Planning India Investment',
      description: 'European SMEs seeking Indian market entry',
      icon: 'ri-building-2-line'
    },
    {
      value: `${counters.growth}%`,
      label: 'Market Growth Potential',
      description: 'Projected growth in EU-India business partnerships',
      icon: 'ri-line-chart-line'
    }
  ];

  const handleBenefitsClick = () => {
    navigate('/gcc-overview');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Powered by Indo-German Momentum
          </h2>
          <p className="text-xl text-textDark max-w-3xl mx-auto">
            The EU-India trade relationship is experiencing unprecedented growth, creating 
            massive opportunities for SMEs ready to expand across borders.
          </p>
        </div>

        {/* FTA Information */}
        <div className="mb-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 max-w-4xl mx-auto">
          <div className="flex items-center justify-center text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
              <i className="ri-handshake-line text-2xl text-primary"></i>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">EU-India FTA</div>
              <div className="text-base text-textLight font-medium">Free Trade Agreement expected to conclude by December 2025</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${stat.icon} text-2xl text-primary`}></i>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <h3 className="text-lg font-semibold text-textDark mb-2">{stat.label}</h3>
              <p className="text-sm text-textDark/70">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Market Insights */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-2">
                <i className="ri-line-chart-line mr-2"></i>
                Strategic Market Insights
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
               Market Opportunity
              </h3>
              
              <p className="text-lg text-textDark leading-relaxed">
                The EU-India trade relationship represents one of the fastest-growing bilateral partnerships globally. With India's digital transformation and Europe's technological expertise, the potential for SME collaboration has never been greater.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-5 rounded-xl border border-primary/20 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">€130B+</div>
                  <div className="text-sm text-textLight">Current Trade Volume</div>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-5 rounded-xl border border-accent/20 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-accent mb-2">79%</div>
                  <div className="text-sm text-textLight">German firms investing by 2030</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-5 rounded-xl border border-primary/20 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">€223B</div>
                  <div className="text-sm text-textLight">Projected by 2032</div>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-5 rounded-xl border border-accent/20 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-accent mb-2">15%+</div>
                  <div className="text-sm text-textLight">Annual Growth Rate</div>
                </div>
              </div>

              {/* Strategic Advantages */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-textDark mb-3">Strategic Advantages</h4>
                <div className="space-y-3">
                  <div className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 mt-1 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <i className="ri-check-line text-primary"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-textDark">Growing Technology Demand</div>
                      <div className="text-sm text-textLight">European innovation meets India's expanding digital economy</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 mt-1 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <i className="ri-check-line text-primary"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-textDark">Simplified Regulatory Frameworks</div>
                      <div className="text-sm text-textLight">Emerging policies making cross-border expansion easier than ever</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 mt-1 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <i className="ri-check-line text-primary"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-textDark">Strong Government Support</div>
                      <div className="text-sm text-textLight">Bilateral trade agreements and incentive programs driving growth</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 mt-1 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <i className="ri-check-line text-primary"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-textDark">Cost-Effective Expansion</div>
                      <div className="text-sm text-textLight">Access to skilled talent and competitive operational costs</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 mt-1 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <i className="ri-check-line text-primary"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-textDark">Innovation Ecosystem</div>
                      <div className="text-sm text-textLight">Thriving startup culture and R&D capabilities in both regions</div>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleBenefitsClick}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer transform hover:scale-105 mt-6"
              >
                <i className="ri-gift-line mr-2"></i>
                Explore GCC Benefits in India
              </button>
            </div>

            {/* Visual Element - Enhanced */}
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-accent/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <i className="ri-global-line text-3xl text-white"></i>
                  </div>
                  <h4 className="text-2xl font-bold text-textDark mb-2">Why Now?</h4>
                  <p className="text-textLight">The perfect convergence of opportunity</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-accent/5 to-transparent p-4 rounded-xl border-l-4 border-accent">
                    <div className="flex items-start">
                      <i className="ri-rocket-line text-2xl text-accent mr-3 mt-1"></i>
                      <div>
                        <div className="font-semibold text-textDark mb-1">Digital Acceleration</div>
                        <div className="text-sm text-textLight">India's rapid tech adoption creating massive opportunities</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-xl border-l-4 border-primary">
                    <div className="flex items-start">
                      <i className="ri-government-line text-2xl text-primary mr-3 mt-1"></i>
                      <div>
                        <div className="font-semibold text-textDark mb-1">Policy Support</div>
                        <div className="text-sm text-textLight">GCC incentives worth ₹11,700 Crore available now</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-accent/5 to-transparent p-4 rounded-xl border-l-4 border-accent">
                    <div className="flex items-start">
                      <i className="ri-team-line text-2xl text-accent mr-3 mt-1"></i>
                      <div>
                        <div className="font-semibold text-textDark mb-1">Talent Pool</div>
                        <div className="text-sm text-textLight">Access to world-class engineering and business talent</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-xl border-l-4 border-primary">
                    <div className="flex items-start">
                      <i className="ri-shield-check-line text-2xl text-primary mr-3 mt-1"></i>
                      <div>
                        <div className="font-semibold text-textDark mb-1">Compliance Made Easy</div>
                        <div className="text-sm text-textLight">Our RegTech platform automates complex regulatory requirements</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-accent/5 to-transparent p-4 rounded-xl border-l-4 border-accent">
                    <div className="flex items-start">
                      <i className="ri-time-line text-2xl text-accent mr-3 mt-1"></i>
                      <div>
                        <div className="font-semibold text-textDark mb-1">Perfect Timing</div>
                        <div className="text-sm text-textLight">EU-India FTA negotiations nearing completion by December 2025</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Visual Element */}
                <div className="mt-6 pt-6 border-t border-accent/20">
                  <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <i className="ri-flag-line text-white text-xl"></i>
                        </div>
                        <div className="text-2xl font-bold text-primary">🇪🇺</div>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                          <div className="w-8 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                          <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                        </div>
                        <div className="text-2xl font-bold text-accent">🇮🇳</div>
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                          <i className="ri-building-line text-white text-xl"></i>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                        Strategic Partnership Bridge
                      </div>
                      <div className="text-sm text-textLight">
                        Connecting European innovation with Indian market opportunities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
