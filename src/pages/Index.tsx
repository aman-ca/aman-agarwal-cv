
import React from "react";
import Header from "@/components/Header";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header with Name and Title */}
      <Header />
      
      {/* Work Experience Section */}
      <WorkExperience />
      
      {/* Education Section */}
      <Education />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-white text-center py-6">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Aman Agarwal. All rights reserved.</p>
          <p className="text-sm mt-2 text-white/70">
            Chartered Accountant | Business Finance Professional
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
