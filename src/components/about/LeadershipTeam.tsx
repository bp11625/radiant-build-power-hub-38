
import { Card, CardContent } from "@/components/ui/card";

const LeadershipTeam = () => {
  const leaders = [
    {
      name: "Michael Johnson",
      role: "Chief Executive Officer",
      description: "25+ years of experience in construction and energy",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Jennifer Lopez",
      role: "Chief Operations Officer",
      description: "Expert in project management and process optimization",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      name: "David Martinez",
      role: "Chief Technical Officer",
      description: "Specialist in renewable energy and electrical systems",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Sarah Williams",
      role: "Chief Financial Officer",
      description: "Financial strategist with construction industry expertise",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {leaders.map((leader, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="bg-gray-200 h-56">
              <div className={`h-full w-full bg-[url('${leader.image}')] bg-center bg-cover`}></div>
            </div>
            <CardContent className="text-center py-6">
              <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{leader.role}</p>
              <p className="text-gray-600 text-sm">{leader.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
