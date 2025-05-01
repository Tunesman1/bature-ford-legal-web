
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gavel } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-lawfirm-burgundy text-white p-4 rounded-full">
            <Gavel className="h-12 w-12" />
          </div>
        </div>
        <h1 className="text-4xl font-serif font-bold text-lawfirm-burgundy mb-4">
          404: Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for may have been moved, deleted, or perhaps never existed. Please check the URL or navigate back to our homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/">
            <Button className="bg-lawfirm-burgundy hover:bg-lawfirm-burgundy-dark text-white">
              Return to Homepage
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-lawfirm-burgundy text-lawfirm-burgundy">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
