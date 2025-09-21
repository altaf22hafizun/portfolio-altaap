import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ProjectDangauStudio from "@/assets/images/project-dangau-studio.png";
import ProjectSugarCare from "@/assets/images/project-sugar-care.png";
import ProjectPortalDatindo from "@/assets/images/project-portal-datindo.png";
import ProjectDatabudi from "@/assets/images/project-databudi.png";
import ProjectPerkampunganAdat from "@/assets/images/project-kampung-adat.png";
import ProjectPuncakLabuang from "@/assets/images/project-puncak-labuang.png";
import ProjectRumahSinggah from "@/assets/images/project-m-ihpan.png";
import ProjectIventoryJurusan from "@/assets/images/project-iventory-jurusan.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function ProjectSection() {
  const projects = [
    {
      title: "Dangau Studio - Platform Bisnis Seni Digital",
      description:
        "The Dangau Studio website is a digital platform for the art community in West Sumatra, particularly Dangau Studio, showcasing artist profiles, an online gallery, virtual exhibitions, and an e-commerce system integrated with Midtrans & RajaOngkir.",
      image: ProjectDangauStudio,
      technologies: [
        "PHP",
        "MySQL",
        "Laravel",
        "Tailwind CSS",
        "RajaOngkir",
        "Midtrans - Payment Gateway",
      ],
    },
    {
      title: "Website Sugar Care",
      description:
        "The Sugar Care website provides comprehensive information about the app’s features, advantages, FAQs, videos, and an “About Us” section, along with a button to download the application.",
      image: ProjectSugarCare,
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Website Portal Datindo",
      description:
        "The Datindo web portal is a platform for generating daily, monthly, and custom reports, integrated with RESTful APIs documented via Swagger and accessed using Axios.",
      image: ProjectPortalDatindo,
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Swagger API",
        "Axios",
        "Zustand",
      ],
    },
    {
      title: "Website Databudi",
      description:
        "The Databudi website offers e-commerce market insights for Indonesian brands, featuring Shopee unlock insights and analytics tools, integrated with RESTful APIs via Axios.",
      image: ProjectDatabudi,
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Directus",
        "Axios",
      ],
    },
    {
      title: "Website Perkampungan Adat Sijunjung",
      description:
        "Perkampungan Adat Sijunjung is a Laravel web platform showcasing the traditional village of Sijunjung, West Sumatra, with interactive virtual tours, local UMKM products and tour packages, cultural gallery, articles, and online transactions.",
      image: ProjectPerkampunganAdat,
      technologies: [
        "PHP",
        "MySQL",
        "Laravel",
        "Bootstrap",
        "Virtual Tour 360",
      ],
    },
    {
      title: "Website Puncak Labuang",
      description:
        "Website Pariwisata Puncak Labuang is an information system platform showcasing tourism-related events, articles on biodiversity, and plant barcodes that can be scanned via a mobile app.",
      image: ProjectPuncakLabuang,
      technologies: ["PHP", "MySQL", "Laravel", "Bootstrap"],
    },
    {
      title: "Website Rumah Singgah M Ihpan",
      description:
        "Website Rumah Singgah Pasien M. Ihpan is a web platform providing temporary accommodation for patients and families from remote areas, particularly Pasaman, undergoing treatment in Padang. Key features include a reservation system and donation integration with Midtrans to support operations.",
      image: ProjectRumahSinggah,
      technologies: [
        "PHP",
        "MySQL",
        "Laravel",
        "Bootstrap",
        "Midtrans - Payment Gateway",
      ],
    },
    {
      title: "Website Iventory Jurusan Teknologi Informasi",
      description:
        "Sistem Informasi Inventori Jurusan Teknologi Informasi is a PHP and MySQL web application for managing inventory, featuring login, item management, stock monitoring, search, and transaction recording. ",
      image: ProjectIventoryJurusan,
      technologies: ["PHP", "MySQL", "Bootstrap"],
    },
  ];

  return (
    <section
      className="flex items-start justify-center px-8 md:px-16 py-12"
      id="about"
    >
      <div className="flex flex-col items-start justify-between w-full max-w-7xl">
        <h2
          className="text-3xl font-bold text-primary md:text-4xl mb-4"
          data-aos="fade-left"
          data-aos-duration="100000"
        >
          Project Experience
        </h2>
        <p
          className="mb-6 text-lg text-gray-600 text-justify"
          data-aos="fade-left"
          data-aos-duration="10000"
        >
          Showcasing my web development projects built with modern technologies.
        </p>
        {/* 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {projects.map((item, idx) => (
            <Card
              key={idx}
              className="flex flex-col gap-2 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <Image
                src={item.image}
                width={400}
                height={400}
                alt={item.title}
                className="w-full hover:scale-105 transition-transform duration-300 object-cover"
              />
              <CardHeader className="p-4">
                <CardTitle className="text-xl md:text-2xl text-teal-700 font-bold">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-base text-gray-600 text-justify">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-sm bg-teal-700 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
        */}
        {/* Grid untuk layar md ke atas */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((item, idx) => (
            <Card
              key={idx}
              className="flex flex-col gap-2 bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              data-aos-offset="10"
            >
              <Image
                src={item.image}
                width={400}
                height={400}
                alt={item.title}
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <CardHeader className="p-4">
                <CardTitle className="text-xl text-teal-700 font-bold">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm text-justify">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-xs bg-teal-700 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Carousel untuk layar sm ke bawah */}
        <div className="md:hidden">
          <Carousel className="w-full grid grid-cols-1 overflow-hidden">
            <CarouselContent className="flex gap-4">
              {projects.map((item, idx) => (
                <CarouselItem key={idx} className="basis-full">
                  <Card
                    className="flex flex-col gap-2 bg-white rounded-xl shadow overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={idx * 20}
                    data-aos-offset="10"
                  >
                    <Image
                      src={item.image}
                      width={200}
                      height={200}
                      alt={item.title}
                      className="w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-teal-700">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-sm">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="text-xs bg-teal-700 text-white px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
