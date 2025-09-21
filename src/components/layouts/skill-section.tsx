import HtmlIcon from "@/assets/icons/html";
import { Card } from "../ui/card";
import CssIcon from "@/assets/icons/css";
import JsIcon from "@/assets/icons/js";
import PhpIcon from "@/assets/icons/php";
import MySqlIcon from "@/assets/images/mysql-logo.svg";
import TailwindIcon from "@/assets/images/tailwind-logo.svg";
import PostgresqlIcon from "@/assets/images/postgresql-logo.svg";
import NextJsIcon from "@/assets/images/next-logo.svg";
import Image from "next/image";
import DartIcon from "@/assets/icons/dart";
import { BootstrapIcon } from "@/assets/icons/bootstrap";
import GitIcon from "@/assets/icons/git";
import ReactIcon from "@/assets/icons/react";
import FlutterIcon from "@/assets/icons/flutter";
import TypeScriptIcon from "@/assets/images/typescript-logo.svg";

export default function SkillSection() {
  const skills = [
    { name: "HTML", icon: HtmlIcon, color: "fill-orange-600" },
    { name: "CSS", icon: CssIcon, color: "fill-blue-600" },
    { name: "JavaScript", icon: JsIcon, color: "fill-yellow-300" },
    { name: "Php", icon: PhpIcon, color: "fill-[#777BB4]" },
    { name: "Dart", icon: DartIcon, color: "fill-[#0175C2]" },
    { name: "Flutter", icon: FlutterIcon, color: "fill-[#0175C2]" },
    { name: "MySQL", icon: MySqlIcon },
    { name: "PostgreSQL", icon: PostgresqlIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "Bootstrap", icon: BootstrapIcon, color: "fill-purple-600" },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "Git", icon: GitIcon, color: "fill-orange-600" },
    { name: "Laravel", icon: PhpIcon, color: "fill-[#777BB4]" },
    { name: "React.Js", icon: ReactIcon, color: "fill-teal-300" },
    { name: "Next.js", icon: NextJsIcon },
  ];

  return (
    <section
      className="flex items-center justify-center px-8 md:px-16 py-12 md:py-24"
      id="skills"
    >
      <div className="flex flex-col items-start justify-between w-full max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
          {skills.map((item, index) => (
            <Card
              key={item.name}
              className="flex flex-col items-center justify-center gap-2 bg-teal-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 30}
              data-aos-offset="10"
              data-aos-duration="10000"
            >
              {typeof item.icon === "function" ? (
                <item.icon
                  className={`w-20 h-20 ${
                    item.color ?? "fill-teal-600"
                  } hover:scale-110 transition-transform duration-300`}
                />
              ) : (
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="hover:scale-110 transition-transform duration-300"
                />
              )}
              <p className="font-semibold text-center mt-2 text-lg">
                {item.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
