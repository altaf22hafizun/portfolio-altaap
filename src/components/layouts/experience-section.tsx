import { Card } from "../ui/card";
import { Calendar, Building, ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Rumah Sakit UMMI Bogor",
      location: "West Java, Indonesia",
      period: "Oct 2025 - Apr 2026",
      position: "IT Programmer",
      contributions: [
        "Designed and developed an SSO system integrating 4 internal applications.",
        "Developed a WhatsApp patient broadcast system handling 1,000+ patients per month.",
        "Developed an External Media Helpdesk System for managing IT requests and service reports.",
        "Enhanced SIMPEG and SAKU systems used by 300+ employees across 20 units."
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Livewire", "Tailwind CSS"],
    },
    {
      company: "PT. Solusi Eksplorasi Rembulan Utama",
      location: "West Jakarta, Indonesia",
      period: "Jan 2025 - Jun 2025",
      position: "Frontend Developer",
      contributions: [
        "Built the Databudi website providing e-commerce product insights and sales analytics.",
        "Containerized the frontend application using Docker.",
        "Performed data scraping with n8n to collect market data as the primary source for product insights."
      ],
      technologies: ["Next.js", "TypeScript", "Docker", "n8n", "Tailwind CSS"],
    },
    {
      company: "PT. Datindo Entrycom (Client Project)",
      location: "Central Jakarta, Indonesia",
      period: "Mar 2025 - May 2025",
      position: "Frontend Developer",
      contributions: [
        "Developed a web-based issuer data portal to manage and present issuer data in a single platform.",
        "Implemented advanced filtering and report download features to support daily, monthly, and custom reporting."
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Swagger"],
    },
  ];

  return (
    <section className="py-20 bg-white" id="experience">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:text-center" data-aos="fade-up">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold tracking-wide uppercase border border-teal-100">
            Professional Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Where I've Worked
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl md:mx-auto">
            My professional journey building impactful web applications and systems.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 md:border-l-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-21px] md:left-1/2 top-6 w-10 h-10 rounded-full bg-white border-4 border-teal-500 shadow-sm md:-translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                </div>

                {/* Date Side */}
                <div className={`hidden md:flex flex-1 pt-6 flex-col ${idx % 2 === 0 ? "items-end text-right" : "items-start text-left"}`}>
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <Calendar size={18} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                    <Building size={16} />
                    {exp.location}
                  </div>
                </div>

                {/* Content Card Side */}
                <div className="flex-1 w-full pl-8 md:pl-0" data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"} data-aos-duration="800">
                  <Card className="p-6 md:p-8 bg-slate-50 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl group hover:-translate-y-1">
                    
                    {/* Mobile Date */}
                    <div className="flex md:hidden items-center gap-2 text-teal-600 font-medium mb-3 text-sm">
                      <Calendar size={16} />
                      {exp.period}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">{exp.position}</h3>
                    <h4 className="text-lg font-medium text-teal-600">{exp.company}</h4>

                    <div className="mb-6">
                      <h5 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Key Contributions</h5>
                      <ul className="space-y-2">
                        {exp.contributions.map((item, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2 text-slate-600">
                            <ChevronRight size={18} className="text-teal-500 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-full shadow-sm group-hover:border-teal-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
