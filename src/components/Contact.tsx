
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2 className="text-primary mb-8">Contact Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="fade-in shadow-sm hover:shadow transition-all duration-300">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a href="tel:8949997241" className="text-lg font-medium hover:text-primary transition-colors">
                  8949997241
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="fade-in shadow-sm hover:shadow transition-all duration-300">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-lg font-medium">Mumbai</p>
              </div>
            </CardContent>
          </Card>

          <Card className="fade-in shadow-sm hover:shadow transition-all duration-300">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a 
                  href="mailto:amanagarwalsrg@gmail.com" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  amanagarwalsrg@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="fade-in shadow-sm hover:shadow transition-all duration-300">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/ca-amanagarwal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  https://www.linkedin.com/in/ca-amanagarwal/
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
