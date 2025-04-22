
import { Sun, Building, Zap, Factory, Truck } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: "Solar Energy",
      description: "We design, install, and maintain solar power systems for commercial, industrial, and utility-scale applications.",
      color: "text-yellow-500",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      features: [
        "Solar panel installation and maintenance",
        "Solar farm development",
        "Battery storage solutions",
        "Energy efficiency consulting",
        "Renewable energy integration"
      ]
    },
    {
      icon: Building,
      title: "Construction",
      description: "Our construction services encompass everything from initial planning and design to project completion.",
      color: "text-blue-500",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
      features: [
        "Commercial building construction",
        "Industrial facility development",
        "Infrastructure projects",
        "Retrofitting and renovations",
        "Project management and consulting"
      ]
    },
    {
      icon: Zap,
      title: "Electrical Power Plants",
      description: "We specialize in the design, construction, and maintenance of electrical power plants.",
      color: "text-red-500",
      image: "https://images.unsplash.com/photo-1591964006776-90d42738b2a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: [
        "Power plant design and engineering",
        "Equipment installation and commissioning",
        "Maintenance and upgrades",
        "Control systems integration",
        "Compliance and regulatory support"
      ]
    },
    {
      icon: Factory,
      title: "Fabrication",
      description: "Our state-of-the-art fabrication facilities enable us to create custom components and structures.",
      color: "text-gray-700",
      image: "https://images.unsplash.com/photo-1518783261635-f434d794e8eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      features: [
        "Structural steel fabrication",
        "Custom metal components",
        "Pipe and duct fabrication",
        "Welding and assembly",
        "Quality control and testing"
      ]
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Effective logistics is crucial to project success. We provide comprehensive logistics services.",
      color: "text-green-600",
      image: "https://images.unsplash.com/photo-1581922227913-5dbd47593714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: [
        "Supply chain management",
        "Transportation and delivery",
        "Inventory management",
        "Warehousing and storage",
        "Logistics planning and optimization"
      ]
    }
  ];

  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Areas of Expertise</h2>
      {services.map((service, index) => (
        <div key={index} className={index < services.length - 1 ? "mb-16" : ""}>
          <div className="flex items-center mb-4">
            <service.icon className={`h-8 w-8 ${service.color} mr-4`} />
            <h3 className="text-2xl font-bold">{service.title}</h3>
          </div>
          <Separator className="mb-6" />
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-4">{service.description}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 bg-gray-200 h-64 rounded-lg overflow-hidden">
              <div className={`h-full w-full bg-[url('${service.image}')] bg-center bg-cover`}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
