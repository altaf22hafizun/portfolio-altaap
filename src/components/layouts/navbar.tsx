// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Experience", href: "#experience" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();
//     const target = document.querySelector(href);
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
//         <Link
//           href="#home"
//           onClick={(e) => handleScrollTo(e, "#home")}
//           className="text-xl font-bold tracking-tighter text-slate-900"
//         >
//           Altaf<span className="text-teal-600">.</span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               onClick={(e) => handleScrollTo(e, link.href)}
//               className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Link
//             href="/documents/cv-altaap.pdf"
//             target="_blank"
//             className="px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
//           >
//             Download CV
//           </Link>
//         </nav>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden text-slate-900"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Toggle Menu"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg py-4 px-6 flex flex-col gap-4">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               onClick={(e) => handleScrollTo(e, link.href)}
//               className="text-base font-medium text-slate-700 hover:text-teal-600"
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Link
//             href="/documents/cv-altaap.pdf"
//             target="_blank"
//             className="text-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-md"
//           >
//             Download CV
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }
