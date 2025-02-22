import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../sections/Header";
import Footer from "../generals/Footer";
import Squares from "./Squares";
import { useTheme } from "../../contexts/ThemeContext";

const Layout = () => {
  const { theme } = useTheme();
  const location = useLocation();
  
  const pageTransitionVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full" style={{ background: theme.background.dark }}>
      {/* Background with Squares */}
      <div className="fixed inset-0 w-full h-full">
        <div className="absolute inset-0">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor={theme.border.light}
            hoverFillColor={theme.hover.dark}
          />
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Page container with transitions */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.main
            className="relative flex flex-col w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] z-10"
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={location.pathname}
          >
            <div className="py-8 w-full overflow-x-hidden">
              <Outlet />
            </div>
          </motion.main>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;