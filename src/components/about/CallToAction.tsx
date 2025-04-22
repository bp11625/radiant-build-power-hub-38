
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="py-16 bg-blue-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Ready to Build Your Next Project with Us?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          We're committed to delivering excellence in every aspect of our work. 
          Contact us today to discuss your project needs.
        </p>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-6">
          Contact Us Today
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
