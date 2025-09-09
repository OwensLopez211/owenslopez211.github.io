import { motion } from "framer-motion";
import { Gamepad2, Dumbbell, Target, Zap, Code2 } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

const HobbiesCard = () => {
  const { theme } = useTheme();

  const hobbies = [
    {
      icon: Dumbbell,
      title: "Basketball",
      description: "Deporte que practico regularmente para mantenerme activo y desarrollar coordinación y trabajo en equipo.",
      color: theme.primary.light
    },
    {
      icon: Target,
      title: "RPG Games",
      description: "Disfruto de juegos de rol que requieren planificación estratégica y toma de decisiones complejas.",
      color: theme.secondary.light
    },
    {
      icon: Zap,
      title: "Shooters",
      description: "Juegos de acción competitivos que desarrollan reflejos rápidos y coordinación mano-ojo.",
      color: theme.primary.light
    },
    {
      icon: Code2,
      title: "Programación Creativa",
      description: "Proyectos personales y experimentos con nuevas tecnologías como hobby fuera del trabajo.",
      color: theme.secondary.light
    }
  ];

  return (
    <div className="w-full">
      <div
        className="relative rounded-2xl backdrop-blur-xl shadow-xl border p-8"
        style={{
          backgroundColor: `${theme.background.dark}e6`, // 90% opacity
          borderColor: theme.border.dark,
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <motion.div
            animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div
              className="absolute -inset-2 rounded-full opacity-20 blur-sm"
              style={{
                background: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
              }}
            />
            <div
              className="p-2.5 rounded-xl relative"
              style={{ backgroundColor: `${theme.background.DEFAULT}80` }} // 50% opacity
            >
              <Gamepad2 className="w-5 h-5" style={{ color: theme.primary.light }} />
            </div>
          </motion.div>
          <div>
            <h3
              className="text-xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
              }}
            >
              Hobbies e Intereses
            </h3>
            <p className="text-sm" style={{ color: theme.text.secondary }}>
              Actividades que disfruto en mi tiempo libre
            </p>
          </div>
        </div>

        {/* Lista de hobbies */}
        <div className="space-y-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-300"
              style={{
                backgroundColor: `${theme.background.DEFAULT}80`, // 50% opacity
                borderColor: theme.border.dark,
              }}
            >
              <div
                className="p-3 rounded-lg shrink-0"
                style={{ backgroundColor: `${theme.background.light}80` }} // 50% opacity
              >
                <hobby.icon style={{ color: hobby.color }} className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold mb-1" style={{ color: theme.text.primary }}>
                  {hobby.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: theme.text.secondary }}>
                  {hobby.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Espaciado adicional para alineación */}
        <div className="h-8"></div>

        {/* Decoración de fondo */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl"
          style={{
            background: `linear-gradient(to bottom right, ${theme.primary.light}1a, ${theme.secondary.light}1a)`, // 10% opacity
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl"
          style={{
            background: `linear-gradient(to top right, ${theme.secondary.light}1a, ${theme.primary.light}1a)`,
          }}
        />
      </div>
    </div>
  );
};

export default HobbiesCard;