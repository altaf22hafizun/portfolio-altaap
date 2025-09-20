import UnduhIcon from "@/assets/icons/unduh";
import Link from "next/link";

export default function AboutSection() {
  const action = [
    { name: "Curriculum Vitae", href: "#projects" },
    { name: "Resume", href: "#projects" },
    { name: "View Portfolio", href: "#projects" },
  ];

  return (
    <section
      className="flex items-center justify-center px-6 py-12"
      id="about"
    >
      <div className="flex flex-col items-center justify-between w-full max-w-4xl text-center">
        {/* <h2 className="text-3xl font-bold text-primary md:text-4xl mb-4">
          About Me
        </h2> */}
        <p className="mb-6 text-lg text-gray-600">
          I`m Altaf Hafizun, a web developer with a passion for creating
          user-friendly and visually appealing websites. With a strong
          foundation in HTML, CSS, and JavaScript, I specialize in building
          dynamic and interactive web applications that deliver exceptional user
          experiences.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {action.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              aria-label={item.name}
              className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300"
            >
              <UnduhIcon className="w-5 h-5 inline-block mr-2 fill-white" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
