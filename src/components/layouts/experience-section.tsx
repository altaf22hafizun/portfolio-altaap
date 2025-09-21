import { Card } from "../ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Intern PT. Solusi Eksplorasi Rembulan Utama",
      location: "West Jakarta, Jakarta",
      period: "Feb 2025 - Mei 2025",
      position: "Front-end Developer",
      responsibilities: [
        "Developed landing page, login, and dashboard using Next.js.",
        "Integrated Figma designs and backend APIs using Axios.",
        "Implemented user authentication and ensured website responsiveness across devices.",
        "Collaborated in a team, supporting testing and debugging of web applications.",
      ],
    },
    {
      company: "PT Datindo Entrycom (Client Project during Internship)",
      location: "Central Jakarta, Jakarta",
      period: "Maret 2025 - Mei 2025",
      position: "Front-end Developer",
      responsibilities: [
        "Developed the Datindo web portal using Next.js, including daily, monthly, and custom report dashboards.",
        "Integrated Swagger APIs using Axios.",
        "Created responsive UI layouts across devices.",
        "Collaborated within a team, supporting testing and debugging of web applications.",
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
              // data-aos-duration="10000"
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
