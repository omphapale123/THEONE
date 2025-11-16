import { useNavigate } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function CTASection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  const handleGCCBenefits = () => {
    navigate('/gcc-benefits');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to expand your business Globally?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Start your journey today.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="golden"
              onClick={handleGetStarted}
              className="whitespace-nowrap cursor-pointer text-lg px-10 py-5 shadow-2xl hover:shadow-[#e4a513]/25 transform hover:scale-105 transition-all duration-300"
            >
              Get Limited Early Access
            </Button>
            <button
              onClick={handleGCCBenefits}
              className="px-10 py-5 bg-[#e4a513] text-white hover:bg-[#e4a513]/90 transition-all duration-300 rounded-lg font-semibold whitespace-nowrap cursor-pointer text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              GCC Access in India
            </button>
          </div>
      </div>
    </section>
  );
}