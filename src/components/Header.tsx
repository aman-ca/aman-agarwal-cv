
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-primary text-white py-12 md:py-20">
      <div className="container">
        <div className="fade-in flex flex-col items-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Aman Agarwal</h1>
          <div className="text-xl md:text-2xl text-accent font-medium mb-6">
            Chartered Accountant | B.Com
          </div>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
            Finance professional with expertise in business finance, investment analysis, 
            and accounting compliance.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-transparent hover:bg-accent hover:text-primary border border-accent text-accent transition-all duration-300"
          >
            Contact Me <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
