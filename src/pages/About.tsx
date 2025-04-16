
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Sun, 
  Zap, 
  Factory, 
  Truck, 
  Award, 
  Users,
  Shield, 
  Globe,
  Briefcase
} from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-800">PowerBuild Construction</div>
          <div className="flex space-x-6">
            <Link to="/" className="font-medium text-gray-600 hover:text-blue-800">Home</Link>
            <Link to="/about" className="font-medium text-blue-800 border-b-2 border-blue-800">About</Link>
            <a href="#" className="font-medium text-gray-600 hover:text-blue-800">Services</a>
            <a href="#" className="font-medium text-gray-600 hover:text-blue-800">Projects</a>
            <a href="#" className="font-medium text-gray-600 hover:text-blue-800">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About PowerBuild Construction</h1>
          <p className="text-xl max-w-3xl">We are a forward-thinking construction company with a strong commitment to innovation, quality, and client satisfaction. With expertise spanning multiple sectors, we deliver comprehensive solutions for today's complex infrastructure needs.</p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2005, PowerBuild Construction began as a small electrical contracting company and has since grown into a multifaceted organization offering a wide array of construction and energy services.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our journey has been characterized by continuous learning, adaptation, and a relentless pursuit of excellence. Today, we stand as a leader in the industry, delivering innovative solutions that help our clients succeed in an ever-changing landscape.
            </p>
            <p className="text-lg text-gray-700">
              We take pride in our diverse team of professionals who bring specialized expertise in solar energy, traditional construction, electrical power plant development, fabrication, and logistics management.
            </p>
          </div>
          <div className="md:w-1/2 bg-gray-200 h-80 rounded-lg overflow-hidden">
            <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-center bg-cover"></div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-all border-t-4 border-blue-600">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-100 rounded-full mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                  <p className="text-gray-600">We strive for excellence in every project, delivering quality work that exceeds expectations.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all border-t-4 border-green-600">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-green-100 rounded-full mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Safety</h3>
                  <p className="text-gray-600">Safety is our top priority - for our employees, clients, and all stakeholders involved in our projects.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all border-t-4 border-purple-600">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-purple-100 rounded-full mb-4">
                    <Globe className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
                  <p className="text-gray-600">We're committed to sustainable practices that minimize environmental impact while maximizing efficiency.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all border-t-4 border-orange-600">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-orange-100 rounded-full mb-4">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Teamwork</h3>
                  <p className="text-gray-600">Our collaborative approach ensures that diverse expertise comes together to create optimal solutions.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Areas of Expertise</h2>
        
        {/* Solar Energy */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <Sun className="h-8 w-8 text-yellow-500 mr-4" />
            <h3 className="text-2xl font-bold">Solar Energy</h3>
          </div>
          <Separator className="mb-6" />
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                We design, install, and maintain solar power systems for commercial, industrial, and utility-scale applications. Our solar solutions are tailored to maximize energy production and ROI while reducing carbon footprint.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Solar panel installation and maintenance</li>
                <li>Solar farm development</li>
                <li>Battery storage solutions</li>
                <li>Energy efficiency consulting</li>
                <li>Renewable energy integration</li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-gray-200 h-64 rounded-lg overflow-hidden">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80')] bg-center bg-cover"></div>
            </div>
          </div>
        </div>
        
        {/* Construction */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <Building className="h-8 w-8 text-blue-500 mr-4" />
            <h3 className="text-2xl font-bold">Construction</h3>
          </div>
          <Separator className="mb-6" />
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                Our construction services encompass everything from initial planning and design to project completion. We specialize in commercial, industrial, and infrastructure projects, delivering high-quality results on time and within budget.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Commercial building construction</li>
                <li>Industrial facility development</li>
                <li>Infrastructure projects</li>
                <li>Retrofitting and renovations</li>
                <li>Project management and consulting</li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-gray-200 h-64 rounded-lg overflow-hidden">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80')] bg-center bg-cover"></div>
            </div>
          </div>
        </div>
        
        {/* Electrical Power Plants */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <Zap className="h-8 w-8 text-red-500 mr-4" />
            <h3 className="text-2xl font-bold">Electrical Power Plants</h3>
          </div>
          <Separator className="mb-6" />
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                We specialize in the design, construction, and maintenance of electrical power plants. Our team has extensive experience in developing efficient, reliable power generation facilities that meet the highest standards of safety and performance.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Power plant design and engineering</li>
                <li>Equipment installation and commissioning</li>
                <li>Maintenance and upgrades</li>
                <li>Control systems integration</li>
                <li>Compliance and regulatory support</li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-gray-200 h-64 rounded-lg overflow-hidden">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1591964006776-90d42738b2a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-center bg-cover"></div>
            </div>
          </div>
        </div>
        
        {/* Fabrication */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <Factory className="h-8 w-8 text-gray-700 mr-4" />
            <h3 className="text-2xl font-bold">Fabrication</h3>
          </div>
          <Separator className="mb-6" />
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                Our state-of-the-art fabrication facilities enable us to create custom components and structures for a variety of applications. We provide precision fabrication services to support our construction and energy projects.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Structural steel fabrication</li>
                <li>Custom metal components</li>
                <li>Pipe and duct fabrication</li>
                <li>Welding and assembly</li>
                <li>Quality control and testing</li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-gray-200 h-64 rounded-lg overflow-hidden">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1518783261635-f434d794e8eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80')] bg-center bg-cover"></div>
            </div>
          </div>
        </div>
        
        {/* Logistics */}
        <div>
          <div className="flex items-center mb-4">
            <Truck className="h-8 w-8 text-green-600 mr-4" />
            <h3 className="text-2xl font-bold">Logistics</h3>
          </div>
          <Separator className="mb-6" />
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                Effective logistics is crucial to project success. We provide comprehensive logistics services to ensure materials and equipment are delivered where they need to be, when they need to be there.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Supply chain management</li>
                <li>Transportation and delivery</li>
                <li>Inventory management</li>
                <li>Warehousing and storage</li>
                <li>Logistics planning and optimization</li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-gray-200 h-64 rounded-lg overflow-hidden">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1581922227913-5dbd47593714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-center bg-cover"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Timeline */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300"></div>
            
            {/* Timeline Items */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-blue-800">2005</h3>
                  <p className="text-lg font-medium">Company Founded</p>
                  <p className="text-gray-600">Started as an electrical contracting company with three employees</p>
                </div>
                <div className="bg-blue-500 rounded-full h-8 w-8 border-4 border-white shadow-lg"></div>
                <div className="md:w-1/2 md:pl-12 opacity-0 md:opacity-100"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right opacity-0 md:opacity-100"></div>
                <div className="bg-blue-500 rounded-full h-8 w-8 border-4 border-white shadow-lg"></div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold text-blue-800">2010</h3>
                  <p className="text-lg font-medium">Expansion into Construction</p>
                  <p className="text-gray-600">Broadened our services to include full construction capabilities</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-blue-800">2014</h3>
                  <p className="text-lg font-medium">Solar Energy Division</p>
                  <p className="text-gray-600">Launched dedicated solar energy division</p>
                </div>
                <div className="bg-blue-500 rounded-full h-8 w-8 border-4 border-white shadow-lg"></div>
                <div className="md:w-1/2 md:pl-12 opacity-0 md:opacity-100"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right opacity-0 md:opacity-100"></div>
                <div className="bg-blue-500 rounded-full h-8 w-8 border-4 border-white shadow-lg"></div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold text-blue-800">2017</h3>
                  <p className="text-lg font-medium">Fabrication Facilities</p>
                  <p className="text-gray-600">Opened state-of-the-art fabrication facilities</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-blue-800">2020</h3>
                  <p className="text-lg font-medium">Integrated Logistics</p>
                  <p className="text-gray-600">Added comprehensive logistics capabilities to our service offering</p>
                </div>
                <div className="bg-blue-500 rounded-full h-8 w-8 border-4 border-white shadow-lg"></div>
                <div className="md:w-1/2 md:pl-12 opacity-0 md:opacity-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="overflow-hidden">
            <div className="bg-gray-200 h-56">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] bg-center bg-cover"></div>
            </div>
            <CardContent className="text-center py-6">
              <h3 className="text-xl font-bold mb-1">Michael Johnson</h3>
              <p className="text-blue-600 font-medium mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">25+ years of experience in construction and energy</p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="bg-gray-200 h-56">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80')] bg-center bg-cover"></div>
            </div>
            <CardContent className="text-center py-6">
              <h3 className="text-xl font-bold mb-1">Jennifer Lopez</h3>
              <p className="text-blue-600 font-medium mb-3">Chief Operations Officer</p>
              <p className="text-gray-600 text-sm">Expert in project management and process optimization</p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="bg-gray-200 h-56">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] bg-center bg-cover"></div>
            </div>
            <CardContent className="text-center py-6">
              <h3 className="text-xl font-bold mb-1">David Martinez</h3>
              <p className="text-blue-600 font-medium mb-3">Chief Technical Officer</p>
              <p className="text-gray-600 text-sm">Specialist in renewable energy and electrical systems</p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="bg-gray-200 h-56">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] bg-center bg-cover"></div>
            </div>
            <CardContent className="text-center py-6">
              <h3 className="text-xl font-bold mb-1">Sarah Williams</h3>
              <p className="text-blue-600 font-medium mb-3">Chief Financial Officer</p>
              <p className="text-gray-600 text-sm">Financial strategist with construction industry expertise</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Next Project with Us?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">We're committed to delivering excellence in every aspect of our work. Contact us today to discuss your project needs.</p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-6">Contact Us Today</Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PowerBuild Construction</h3>
              <p className="text-gray-400">Building tomorrow's infrastructure today with innovation and excellence.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Solar Energy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Construction</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Electrical Power Plants</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fabrication</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Logistics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <address className="not-italic text-gray-400 space-y-2">
                <p>123 Construction Way</p>
                <p>Building City, BC 12345</p>
                <p className="mt-4">Phone: (123) 456-7890</p>
                <p>Email: info@powerbuild.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-gray-400 text-center">
            <p>&copy; {new Date().getFullYear()} PowerBuild Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
