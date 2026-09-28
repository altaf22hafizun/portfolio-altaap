"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Card } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "../ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ProjectDangauStudio from "@/assets/images/project-dangau-studio.png";
import ProjectSugarCare from "@/assets/images/project-sugar-care.png";
import ProjectPortalDatindo from "@/assets/images/project-portal-datindo.png";
import ProjectDatabudi from "@/assets/images/project-databudi.png";
import ProjectPerkampunganAdat from "@/assets/images/project-kampung-adat.png";
import ProjectPuncakLabuang from "@/assets/images/project-puncak-labuang.png";
import ProjectRumahSinggah from "@/assets/images/project-m-ihpan.png";
import ProjectIventoryJurusan from "@/assets/images/project-iventory-jurusan.png";
import ProjectSSO from "@/assets/images/project-sso.jpg";
import ProjectBroadcast from "@/assets/images/project-broadcast.jpg";
import ProjectSIMEG from "@/assets/images/project-simpeg.jpg";
import ProjectSAKU from "@/assets/images/project-saku.jpg";
import ProjectHelpdesk from "@/assets/images/project-helpdesk.jpg";

export default function ProjectSection() {
  const projects = [
    {
      title: "Sistem Single Sign-On (SSO) Rumah Sakit",
      description: "A centralized Single Sign-On (SSO) system for hospitals that provides secure and seamless access across multiple internal applications.",
      image: ProjectSSO,
      technologies: ["PHP", "Livewire", "MySQL", "Laravel", "Tailwind CSS"],
    },
    {
      title: "Sistem Broadcast Whatsapp Pasien",
      description: "A web-based system for sending WhatsApp notifications to registered and scheduled patients, featuring recipient selection based on queue data, message templates, and notification delivery history.",
      image: ProjectBroadcast,
      technologies: ["PHP", "Livewire", "MySQL", "Laravel", "Tailwind CSS"],
    },
    {
      title: "Sistem kepegawaian ( SIMPEG )",
      description: "A hospital personnel management system for managing employee data, document exports, device access, and mobile notification broadcasts.",
      image: ProjectSIMEG,
      technologies: ["PHP", "Livewire", "MySQL", "Laravel", "Bootstrap CSS"],
    },
    {
      title: "SISTEM APPRAISAL KINERJA UMMI( SAKU )",
      description: "A performance management system for handling unit and individual evaluations, KPI cutoff and closing processes, training proposals, and idea card submissions.",
      image: ProjectSAKU,
      technologies: ["PHP", "Livewire", "MySQL", "Laravel", "Bootstrap CSS"],
    },
    {
      title: "Sistem Helpdesk EKSTERNAL Media UMMI",
      description: "A web-based request management system for the UMMI Group network to submit graphic design and videography work requests to the Multimedia Unit.",
      image: ProjectHelpdesk,
      technologies: ["PHP", "Livewire", "PostgreSQL", "Laravel", "Tailwind CSS"],
    },
    {
      title: "Dangau Studio - Platform Bisnis Seni Digital",
      description: "The Dangau Studio website is a digital platform for the art community in West Sumatra, particularly Dangau Studio, showcasing artist profiles, an online gallery, virtual exhibitions, and an e-commerce system integrated with Midtrans & RajaOngkir.",
      image: ProjectDangauStudio,
      technologies: ["PHP", "MySQL", "Laravel", "Tailwind CSS", "RajaOngkir", "Midtrans"],
    },
    {
      title: "Website Sugar Care",
      description: "The Sugar Care website provides comprehensive information about the app’s features, advantages, FAQs, videos, and an “About Us” section, along with a button to download the application.",
      image: ProjectSugarCare,
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Website Portal Datindo",
      description: "The Datindo web portal is a platform for generating daily, monthly, and custom reports, integrated with RESTful APIs documented via Swagger and accessed using Axios.",
      image: ProjectPortalDatindo,
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Swagger API", "Axios", "Zustand"],
    },
    {
      title: "Website Databudi",
      description: "The Databudi website offers e-commerce market insights for Indonesian brands, featuring Shopee unlock insights and analytics tools, integrated with RESTful APIs via Axios.",
      image: ProjectDatabudi,
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Directus", "Axios"],
    },
    {
      title: "Website Perkampungan Adat Sijunjung",
      description: "Perkampungan Adat Sijunjung is a Laravel web platform showcasing the traditional village of Sijunjung, West Sumatra, with interactive virtual tours, local UMKM products and tour packages, cultural gallery, articles, and online transactions.",
      image: ProjectPerkampunganAdat,
      technologies: ["PHP", "MySQL", "Laravel", "Bootstrap", "Virtual Tour 360"],
    },
    {
      title: "Website Puncak Labuang",
      description: "Website Pariwisata Puncak Labuang is an information system platform showcasing tourism-related events, articles on biodiversity, and plant barcodes that can be scanned via a mobile app.",
      image: ProjectPuncakLabuang,
      technologies: ["PHP", "MySQL", "Laravel", "Bootstrap"],
    },
    {
      title: "Website Rumah Singgah M Ihpan",
      description: "Website Rumah Singgah Pasien M. Ihpan is a web platform providing temporary accommodation for patients and families from remote areas, particularly Pasaman, undergoing treatment in Padang. Key features include a reservation system and donation integration with Midtrans to support operations.",
      image: ProjectRumahSinggah,
      technologies: ["PHP", "MySQL", "Laravel", "Bootstrap", "Midtrans"],
    },
    {
      title: "Website Iventory Jurusan Teknologi Informasi",
      description: "Sistem Informasi Inventori Jurusan Teknologi Informasi is a PHP and MySQL web application for managing inventory, featuring login, item management, stock monitoring, search, and transaction recording.",
      image: ProjectIventoryJurusan,
      technologies: ["PHP", "MySQL", "Bootstrap"],
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;
    if (isHovered) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => clearInterval(intervalId);
  }, [api, isHovered]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section className="py-20 bg-slate-50" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:text-center" data-aos="fade-up">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold tracking-wide uppercase">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Project Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl md:mx-auto">
            Showcasing my web development projects built with modern technologies.
          </p>
        </div>

        <div 
          className="relative px-2 md:px-10" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {projects.map((project, idx) => (
                <CarouselItem key={idx} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden flex flex-col h-full bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group select-none">
                    <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        draggable={false}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2">{project.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons for Desktop */}
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 z-10">
              <button 
                onClick={() => api?.scrollPrev()} 
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-teal-600 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 z-10">
              <button 
                onClick={() => api?.scrollNext()} 
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-teal-600 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {api && Array.from({ length: api.scrollSnapList().length }).map((_, idx) => (
              <button
                key={idx}
                className={`transition-all duration-300 rounded-full ${
                  current === idx ? "w-6 h-2.5 bg-teal-600" : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                onClick={() => scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
