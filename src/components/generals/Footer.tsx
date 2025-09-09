import { motion, AnimatePresence } from "framer-motion";
import { HeartIcon } from "lucide-react";
import { useTheme } from '../../contexts/ThemeContext';
import { useState, useCallback, useRef } from 'react';

const Footer = () => {
  const { theme } = useTheme();
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; buttonX: number; buttonY: number }>>([]);
  const heartButtonRef = useRef<HTMLButtonElement>(null);

  const handleHeartClick = useCallback(() => {
    if (heartButtonRef.current) {
      const buttonRect = heartButtonRef.current.getBoundingClientRect();
      const footerRect = heartButtonRef.current.closest('footer')?.getBoundingClientRect();
      
      if (footerRect) {
        // Posición relativa del botón dentro del footer
        const buttonX = buttonRect.left - footerRect.left + (buttonRect.width / 2);
        const buttonY = buttonRect.top - footerRect.top + (buttonRect.height / 2);
        
        // Generar un solo corazón flotante desde la posición exacta del botón
        const newHeart = {
          id: Date.now(),
          x: Math.random() * 40 - 20, // -20 a 20px desde el centro del botón
          y: Math.random() * 10 + 5,   // 5 a 15px desde el centro del botón
          buttonX,
          buttonY,
        };
        
        setHearts(prev => [...prev, newHeart]);
        
        // Limpiar corazón después de la animación
        setTimeout(() => {
          setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
        }, 2000);
      }
    }
  }, []);
  
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: `${theme.background.dark}d9`,
      }}
      className="relative w-full py-3" // Reducido de py-4 a py-3
    >
      {/* Línea de gradiente superior */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${theme.primary.DEFAULT}33, transparent)`
        }}
      />
      {/* Fondo con gradiente */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme.primary.DEFAULT}1a, transparent, ${theme.secondary.DEFAULT}1a)`
        }}
      />
      {/* Corazones flotantes */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute pointer-events-none z-20"
            initial={{
              opacity: 1,
              scale: 0,
              x: heart.buttonX + heart.x,
              y: heart.buttonY - heart.y,
            }}
            animate={{
              opacity: 0,
              scale: [0, 1.5, 0.8, 0],
              x: heart.buttonX + heart.x,
              y: heart.buttonY - heart.y - 80,
              rotate: [0, 10, -5, 0],
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            style={{
              left: 0,
              top: 0,
            }}
          >
            <HeartIcon 
              className="w-4 h-4" 
              style={{ 
                color: '#ef4444',
                fill: '#ef4444'
              }} 
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-center">
          {/* Copyright con gradiente */}
          <motion.div
            style={{
              backgroundImage: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
            className="font-mono text-xs sm:text-sm tracking-tight text-transparent font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            © {new Date().getFullYear()} Owens López
          </motion.div>
          {/* Separador visible solo en desktop */}
          <span className="hidden sm:inline mx-2" style={{ color: theme.primary.light }}>•</span>
          {/* Mensaje adicional */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              backgroundImage: `linear-gradient(to right, ${theme.secondary.light}, ${theme.primary.light})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
            className="font-mono text-xs sm:text-sm tracking-tight text-transparent font-medium flex items-center gap-1"
          >
            Hecho con pasión y tecnologías modernas
            <motion.button
              ref={heartButtonRef}
              onClick={handleHeartClick}
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.4 }}
              className="cursor-pointer focus:outline-none relative"
            >
              <HeartIcon 
                className="w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-200" 
                style={{ 
                  color: theme.primary.DEFAULT,
                  fill: 'none'
                }} 
              />
            </motion.button>
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;