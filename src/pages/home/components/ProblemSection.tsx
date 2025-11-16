
export default function BenefitsSection() {
  const benefits = [
    {
      icon: 'ri-global-line',
      title: 'International Expansion',
      description: 'Seamlessly expand your business into new international markets with automated compliance and regulatory support.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Reduce Risk',
      description: 'Minimize business risks through comprehensive partner verification, compliance automation, and regulatory oversight.'
    },
    {
      icon: 'ri-time-line',
      title: 'Save Time and Effort',
      description: 'Automate complex processes and paperwork, reducing expansion timelines from months to weeks with intelligent automation.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Benefits We Provide
          </h2>
          <p className="text-xl text-textDark max-w-3xl mx-auto">
            Our RegTech platform delivers comprehensive solutions that transform how European SMEs 
            expand into international markets, making the process faster, safer, and more efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-background hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${benefit.icon} text-2xl text-accent`}></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{benefit.title}</h3>
              <p className="text-textDark leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* First RegTech Platform Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-trophy-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Industry Pioneer</h3>
            <p className="text-lg text-textDark">
              We are the <strong>first RegTech platform specifically designed for SMEs</strong>, pioneering innovative solutions that make international business expansion accessible and efficient for small and medium enterprises.
            </p>
          </div>
        </div>

        {/* Visual Separator */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>

        {/* We Know Your Struggle Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              We Know Your Struggle
            </h3>
            <p className="text-lg text-textDark max-w-2xl mx-auto">
              As an SME, expanding internationally comes with unique challenges. We understand these pain points and have built our platform to address them directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-2xl border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-error-warning-line text-2xl text-red-600"></i>
              </div>
              <h4 className="text-xl font-semibold text-red-700 mb-4">Complex Compliance Requirements</h4>
              <p className="text-textDark leading-relaxed">
                Navigating different regulatory frameworks, tax systems, and legal requirements across multiple countries is overwhelming and time-consuming for small teams.
              </p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-search-line text-2xl text-orange-600"></i>
              </div>
              <h4 className="text-xl font-semibold text-orange-700 mb-4">Finding Trustworthy Partners</h4>
              <p className="text-textDark leading-relaxed">
                Identifying reliable business partners in foreign markets without proper vetting systems leads to costly mistakes and failed partnerships.
              </p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-money-dollar-circle-line text-2xl text-yellow-600"></i>
              </div>
              <h4 className="text-xl font-semibold text-yellow-700 mb-4">Limited Resources & Budget</h4>
              <p className="text-textDark leading-relaxed">
                High costs of legal consultations, market research, and compliance management strain already tight budgets, making expansion seem impossible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
