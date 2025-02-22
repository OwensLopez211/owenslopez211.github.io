import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, Briefcase } from "lucide-react";

const Header = () => {
  const location = useLocation();

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-opacity-90 backdrop-blur-md"
    >
      <div className="relative h-[60px] px-6 flex justify-center items-center">
        {/* 🔹 Navegación con animación en el menú */}
        <nav className="relative flex items-center">
          <div className="flex gap-8 relative">
            {[
              { to: "/", icon: Home, label: "Inicio" },
              { to: "/work", icon: Briefcase, label: "Proyectos" },
              { to: "/about", icon: User, label: "Acerca" }
            ].map(({ to, icon: Icon, label }) => {
              const isActive = location.pathname === to;

              return (
                <Link
                  key={to}
                  to={to}
                  className="relative flex flex-col items-center px-4 py-2 transition-all"
                >
                  <Icon size={22} className={isActive ? "text-white" : "text-gray-400"} />
                  <span className={`text-sm font-medium ${isActive ? "text-white" : "text-gray-400"}`}>
                    {label}
                  </span>

                  {/* 🔹 Barra animada debajo del elemento activo */}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-[-2px] h-[3px] w-full bg-blue-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
