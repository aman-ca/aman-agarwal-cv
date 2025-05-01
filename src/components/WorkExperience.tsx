
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const WorkExperience = () => {
  return (
    <section id="experience" className="section bg-white">
      <div className="container">
        <h2 className="flex items-center gap-2 text-primary mb-8">
          <Briefcase className="h-6 w-6" /> Work Experience
        </h2>

        <div className="space-y-8">
          {/* Reliance Industries */}
          <Card className="fade-in border-l-4 border-primary overflow-hidden shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl">Reliance Industries Limited</h3>
                  <p className="text-muted-foreground">Power Generation Business</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Business Finance Manager
                  </span>
                </div>
              </div>

              <ul className="space-y-2 list-disc list-inside text-foreground/90">
                <li>Prepared Final Investment Decision (FID) report for 760MWp Project.</li>
                <li>Tracked capital expenditures (CAPEX) and operational expenses (OPEX) for Solar Power Project.</li>
                <li>Assisted in converting stock-in-trade to capital assets (IND AS & tax compliance).</li>
                <li>Managed related-party transactions (Companies Act, SEBI LODR, IND AS compliance).</li>
                <li>Monthly financial statement preparation and Group Accounting Disclosure Committee reporting.</li>
                <li>Validated 250+ purchase orders for pricing, quantities, and compliance.</li>
              </ul>
            </CardContent>
          </Card>

          {/* S.R Goyal & Co */}
          <Card className="fade-in border-l-4 border-primary overflow-hidden shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl">S.R Goyal & Co.</h3>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Article Assistant
                  </span>
                </div>
              </div>

              <ul className="space-y-2 list-disc list-inside text-foreground/90">
                <li>Conducted Statutory, Internal, Concurrent, and Stock Audits for listed/unlisted firms.</li>
                <li>Tested controls for Procurement (P2P), Sales (O2C), Payroll (H2R) under IFC framework.</li>
                <li>Developed Risk Control Matrix for risk assessment.</li>
                <li>Ensured IND AS compliance (Ind AS-2, 115, 116, 16, 23).</li>
                <li>Reduced receivables collection period from 120 to 90 days by analyzing DSO.</li>
                <li>Identified INR 65 Lakhs in obsolete inventory to optimize cash conversion cycle.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
