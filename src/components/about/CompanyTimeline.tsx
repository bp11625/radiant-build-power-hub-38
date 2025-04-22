
const CompanyTimeline = () => {
  const timelineEvents = [
    {
      year: "2005",
      title: "Company Founded",
      description: "Started as an electrical contracting company with three employees"
    },
    {
      year: "2010",
      title: "Expansion into Construction",
      description: "Broadened our services to include full construction capabilities"
    },
    {
      year: "2014",
      title: "Solar Energy Division",
      description: "Launched dedicated solar energy division"
    },
    {
      year: "2017",
      title: "Fabrication Facilities",
      description: "Opened state-of-the-art fabrication facilities"
    },
    {
      year: "2020",
      title: "Integrated Logistics",
      description: "Added comprehensive logistics capabilities to our service offering"
    }
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300"></div>
          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center mb-12 last:mb-0">
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-xl font-bold text-blue-800">{event.year}</h3>
                      <p className="text-lg font-medium">{event.title}</p>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                    <div className="bg-blue-500 rounded-full h-8 w-8 border-4 border-white shadow-lg"></div>
                    <div className="md:w-1/2 md:pl-12 opacity-0 md:opacity-100"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right opacity-0 md:opacity-100"></div>
                    <div className="bg-blue-500 rounded-full h-8 w-8 border-4 border-white shadow-lg"></div>
                    <div className="md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold text-blue-800">{event.year}</h3>
                      <p className="text-lg font-medium">{event.title}</p>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTimeline;
