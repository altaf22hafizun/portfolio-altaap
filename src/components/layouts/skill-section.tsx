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
import LaravelIcon from "@/assets/icons/laravel";
import VueJsIcon from "@/assets/icons/vue";
import DockerIcon from "@/assets/icons/docker";

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
    { name: "Laravel", icon: LaravelIcon, color: "fill-red-600" },
    { name: "React.Js", icon: ReactIcon, color: "fill-teal-300" },
    { name: "Next.js", icon: NextJsIcon },
    { name: "Vue.js", icon: VueJsIcon },
    { name: "Docker", icon: DockerIcon },
  ];

  return (
    <section
      className="flex items-center justify-center px-8 md:px-16 py-12 md:py-24"
      id="skills"
    >
      <div className="flex flex-col items-start justify-between w-full max-w-7xl">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
          {skills.map((item, index) => (
            <Card
              key={item.name}
              className="flex flex-col items-center justify-center gap-4 py-8 bg-teal-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1.33rem)] lg:w-[calc(20%-1.6rem)]"
              data-aos="fade-up"
              data-aos-delay={(index % 5) * 50}
            >
              {typeof item.icon === "function" ? (
                <item.icon
                  className={`w-16 h-16 md:w-20 md:h-20 ${
                    item.color ?? "fill-teal-600"
                  } hover:scale-110 transition-transform duration-300`}
                />
              ) : (
                <div className="relative w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-300">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <p className="font-semibold text-center text-base md:text-lg text-slate-800">
                {item.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
