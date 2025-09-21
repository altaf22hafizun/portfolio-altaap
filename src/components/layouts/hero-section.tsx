import Image from "next/image";
import ProfileUser from "@/assets/images/altap.png";
import Link from "next/link";
import GithubIcon from "@/assets/icons/github";
import LinkedInIcon from "@/assets/icons/linked";
import EmailIcon from "@/assets/icons/email";
import InstagramIcon from "@/assets/icons/instagram";

export default function HeroSection() {
  const sosialMedia = [
    {
      name: "Github",
      href: "https://github.com/altaf22hafizun",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/altaf22hafizun/",
      icon: LinkedInIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/altafhafizun/",
      icon: InstagramIcon,
    },
    {
      name: "Email",
      href: "mailto:6Bk3o@example.com",
      icon: EmailIcon,
    },
  ];

  return (
    <section
      className="flex lg:min-h-screen items-center justify-center px-8 md:px-16 pt-12 md:pt-0"
      id="home"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        <div className="text-center py-10 md:text-left md:flex-1">
          <h5 className="text-xl md:text-2xl font-bold mb-4 tracking-wide">
            Welcome to My Portfolio
          </h5>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide md:tracking-widest text-teal-700">
            Altaf Hafizun
          </h1>
          <p className="mb-6 text-lg md:text-xl text-gray-600 max-w-md mx-auto md:mx-0">
            A web developer. Explore my projects and skills!
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            {sosialMedia.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                aria-label={`${item.name} Profile`}
              >
                <item.icon className="w-8 h-8 md:w-10 md:h-10 hover:fill-teal-700 transition-colors duration-300" />
              </Link>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end md:flex-1">
          <Image
            src={ProfileUser}
            width={400}
            height={400}
            alt="Altaf Hafizun"
            className="w-80 md:w-120 h-80 md:h-120 mx-auto relative rounded-full  mb-12 object-cover"
            priority={true}
          />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:scale-125 -z-10">
            <svg
              // width="400"
              // height="400"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-80 md:w-100 h-80 md:h-100"
            >
              <path
                fill="#14b8a6"
                d="M36.8,-32.5C49.2,-24.4,61.7,-12.2,60.7,-1.1C59.6,10.1,45,20.2,32.6,35.3C20.2,50.4,10.1,70.5,-0.9,71.5C-11.9,72.4,-23.8,54.1,-34.4,38.9C-44.9,23.8,-54.1,11.9,-57.2,-3.1C-60.3,-18.2,-57.4,-36.4,-46.9,-44.4C-36.4,-52.4,-18.2,-50.3,-3,-47.4C12.2,-44.4,24.4,-40.5,36.8,-32.5Z"
                transform="translate(100 100) scale(1.2)"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
