
import { Award, Shield, Globe, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const CoreValues = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering quality work that exceeds expectations.",
      borderColor: "border-blue-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Safety is our top priority - for our employees, clients, and all stakeholders involved in our projects.",
      borderColor: "border-green-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We're committed to sustainable practices that minimize environmental impact while maximizing efficiency.",
      borderColor: "border-purple-600",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Our collaborative approach ensures that diverse expertise comes together to create optimal solutions.",
      borderColor: "border-orange-600",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className={`hover:shadow-lg transition-all border-t-4 ${value.borderColor}`}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 ${value.iconBg} rounded-full mb-4`}>
                    <value.icon className={`h-8 w-8 ${value.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
