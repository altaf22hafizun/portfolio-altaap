import { Card } from "../ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Rumah Sakit UMMI Bogor",
      location: "West Java, Indonesia",
      period: "Oct 2025 - Apr 2026",
      position: "IT Programmer",
      responsibilities: [
        "Designed and developed an SSO system for centralized authentication across the hospital's internal systems, integrating 4 systems in the initial phase and supporting 20 users.",
        "Developed a WhatsApp patient broadcast system using Wappin for service information, covering 1,000+ patients per month, 20+ manual broadcasts, and 100+ automated broadcasts during the implementation period.",
        "Developed an External Media Helpdesk System to manage tickets and monitor UMMI Group's external media services, used by 20 users and generating integrated service reports.",
        "Developed and enhanced SIMPEG to support HR data management, broadcast notifications, document management, and data synchronization, used by over 300 employees.",
        "Developed and enhanced the UMMI Performance Appraisal System (SAKU) to support performance evaluations through IKU and IKI assessments and Employee Idea Cards, used by over 300 employees across 20 units.",
      ],
    },
    {
      company: "PT. Solusi Eksplorasi Rembulan Utama",
      location: "West Jakarta, Indonesia",
      period: "Jan 2025 - Jun 2025",
      position: "Frontend Developer",
      responsibilities: [
        "Built the Databudi website, one of PT Solusi Eksplorasi Rembulan Utama's (SERU) products, using Next.js to provide product insights and sales performance comparisons.",
        "Containerized the frontend application using Docker, Dockerfile, and Docker Compose for development purposes.",
        "Performed data scraping using n8n to collect data as the primary source for product insights and comparisons.",
      ],
    },
    {
      company: "PT. Datindo Entrycom (Client Project)",
      location: "Central Jakarta, Indonesia",
      period: "Mar 2025 - May 2025",
      position: "Frontend Developer",
      responsibilities: [
        "Developed a web-based issuer data portal using Next.js to manage and present issuer data in a single platform.",
        "Developed filtering and report download features to support daily, monthly, and custom reporting, including the ability to download all data at once.",
      ],
    },
  ];

  return (
    <section
      className="flex items-start justify-center px-6 md:px-16 py-12"
      id="experience"
    >
      <div className="flex flex-col items-start justify-between w-full max-w-7xl">
        <h2
          className="text-3xl font-bold text-primary md:text-4xl mb-2"
          data-aos="fade-right"
          data-aos-duration="10000"
        >
          Experience
        </h2>
        <p
          className="text-gray-600 text-lg mb-8 text-justify"
          data-aos="fade-right"
          data-aos-delay="20"
          data-aos-duration="10000"
        >
          My professional journey, including internships and work experience in
          web development.
        </p>
        <div className="flex flex-col gap-8 w-full">
          {experiences.map((item, idx) => (
            <Card
              key={idx}
              className="flex flex-col bg-teal-600 text-white rounded-xl shadow hover:shadow-2xl transition-shadow duration-300 p-6"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              data-aos-offset="10"
              data-aos-duration="10000"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-xl md:text-2xl">
                    {item.company}
                  </h3>
                  <p className="font-medium text-base mb-2">{item.position}</p>
                </div>
                <span className="text-lg font-semibold">{item.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-100 text-justify">
                {item.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
