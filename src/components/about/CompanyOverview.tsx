
const CompanyOverview = () => {
  return (
    <div className="py-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6">
            Founded in 2005, PowerBuild Construction began as a small electrical contracting 
            company and has since grown into a multifaceted organization offering a wide array 
            of construction and energy services.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our journey has been characterized by continuous learning, adaptation, and a relentless 
            pursuit of excellence. Today, we stand as a leader in the industry, delivering innovative 
            solutions that help our clients succeed in an ever-changing landscape.
          </p>
          <p className="text-lg text-gray-700">
            We take pride in our diverse team of professionals who bring specialized expertise in 
            solar energy, traditional construction, electrical power plant development, fabrication, 
            and logistics management.
          </p>
        </div>
        <div className="md:w-1/2 bg-gray-200 h-80 rounded-lg overflow-hidden">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-center bg-cover"></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
