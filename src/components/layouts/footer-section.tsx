import GithubIcon from "@/assets/icons/github";
import LinkedInIcon from "@/assets/icons/linked";
import EmailIcon from "@/assets/icons/email";
import InstagramIcon from "@/assets/icons/instagram";
import Link from "next/link";

export default function FooterSection() {
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
    <footer className="flex items-start justify-center px-8 md:px-16 w-full bg-teal-700 border-t border-t-gray-200 dark:border-t-gray-700 py-12">
      <div className="flex flex-col items-start justify-between w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between w-full mb-10">
          <div className="flex flex-col">
            <h2 className="text-3xl font-extrabold text-white lg:text-4xl">
              Let’s Work Together
            </h2>
            <p className="text-gray-100 text-lg mt-2 max-w-lg">
              Open for collaborations, projects, or just a friendly chat.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-start space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Connect with Me
            </h3>
            <div className="flex space-x-6">
              {sosialMedia.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  aria-label={`${item.name} Profile`}
                  className="flex flex-col items-center text-xs text-white"
                >
                  <item.icon className="w-8 h-8 lg:w-10 lg:h-10 fill-gray-100 hover:fill-gray-300 transition-colors duration-300" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-100 dark:text-gray-400 text-center w-full border-t border-t-gray-200 dark:border-t-gray-700 pt-6">
          &copy; {new Date().getFullYear()} Altaf Hafizun. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
