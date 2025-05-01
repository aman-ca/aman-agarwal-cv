
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { School } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      qualification: "CA",
      year: "2019-24",
      institute: "ICAI",
      score: "58.71%",
      achievements: "Exemption in FR, SFM, Economic Law"
    },
    {
      qualification: "B.Com",
      year: "2022",
      institute: "University of Rajasthan",
      score: "58.33%",
      achievements: "70.83% (1st Division)"
    },
    {
      qualification: "12th",
      year: "2019",
      institute: "RBSE",
      score: "94.40%",
      achievements: "100/100 in Accounts & Business"
    }
  ];

  return (
    <section id="education" className="section bg-secondary">
      <div className="container">
        <h2 className="flex items-center gap-2 text-primary mb-8">
          <School className="h-6 w-6" /> Education
        </h2>

        <div className="overflow-x-auto fade-in">
          <Table className="border border-border">
            <TableHeader>
              <TableRow className="bg-primary/10">
                <TableHead>Qualification</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Institute</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Achievements</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {educationData.map((item, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{item.qualification}</TableCell>
                  <TableCell>{item.year}</TableCell>
                  <TableCell>{item.institute}</TableCell>
                  <TableCell>{item.score}</TableCell>
                  <TableCell>{item.achievements}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Education;
