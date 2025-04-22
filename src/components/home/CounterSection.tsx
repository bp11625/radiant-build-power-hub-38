
import { useEffect, useState } from 'react';
import { Users, Briefcase, Calendar } from 'lucide-react';

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('counter-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const animatedValue = (endValue: number) => {
    if (!isVisible) return "0";
    return endValue.toString();
  };

  return (
    <div id="counter-section" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="counter p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <Users className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-[#1a3c6b] mb-2">
              {animatedValue(250)}+
            </h2>
            <p className="text-gray-600">Employees</p>
          </div>

          <div className="counter p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <Calendar className="w-10 h-10 text-orange-500" />
            </div>
            <h2 className="text-4xl font-bold text-[#1a3c6b] mb-2">
              1,000 MT
            </h2>
            <p className="text-gray-600">Monthly Production</p>
          </div>

          <div className="counter p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <Calendar className="w-10 h-10 text-red-500" />
            </div>
            <h2 className="text-4xl font-bold text-[#1a3c6b] mb-2">
              {animatedValue(20)}+
            </h2>
            <p className="text-gray-600">Years Experience</p>
          </div>

          <div className="counter p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <Briefcase className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-[#1a3c6b] mb-2">
              {animatedValue(500)}+
            </h2>
            <p className="text-gray-600">Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
