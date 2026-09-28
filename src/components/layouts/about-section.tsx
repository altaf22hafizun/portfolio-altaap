import UnduhIcon from "@/assets/icons/unduh";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const action = [
    { name: "Curriculum Vitae", href: "/documents/cv-altaap.pdf" },
    { name: "View Portfolio", href: "/documents/portfolio-altaf-hafizun.pdf" },
  ];

  const highlights = [
    {
      title: "Full-Stack Development",
      description: "End-to-end development of web-based applications.",
    },
    {
      title: "Healthcare & Enterprise Systems",
      description: "Experience working with systems supporting operational and business processes.",
    },
    {
      title: "Modern Web Stack",
      description: "PHP/Laravel, Livewire, Next.js, React, Vue, MySQL, PostgreSQL.",
    }
  ];

  return (
    <section
      className="flex items-start justify-center px-8 md:px-16 py-16 md:py-24 bg-slate-50"
      id="about"
    >
      <div className="flex flex-col lg:flex-row gap-12 items-start justify-between w-full max-w-7xl">
        {/* Left Side: Summary & Actions */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2
            className="text-3xl font-bold text-teal-700 md:text-4xl mb-6"
            data-aos="fade-up"
          >
            About Me
          </h2>
          <p
            className="mb-8 text-lg text-slate-600 text-justify md:text-left leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Full-Stack Developer experienced in building web-based systems for the healthcare and enterprise sectors. Skilled in PHP (Laravel, Livewire) and JavaScript/TypeScript (Next.js, React, Vue), with solid experience in MySQL and PostgreSQL. Experienced in end-to-end solution development, including Hospital Management Information Systems (SIMRS), HR systems, and enterprise reporting portals, with a strong focus on system reliability, data integrity, and timely feature delivery.
          </p>
          <div 
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {action.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                aria-label={item.name}
                className="px-6 py-3 bg-teal-700 text-white font-medium rounded-md hover:bg-teal-600 transition-colors shadow-sm"
              >
                <UnduhIcon className="w-5 h-5 inline-block mr-2 fill-white" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Highlights */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="150">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mt-1">
                <CheckCircle2 className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
