import { MapPin, Code2, Sparkles, Rocket, Target, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';

const AboutMeCard = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden rounded-2xl backdrop-blur-xl shadow-xl border"
        style={{
          backgroundColor: `${theme.background.dark}e6`, // 90% opacity
          borderColor: theme.border.dark,
        }}
      >
        <div className="relative p-8">
          {/* Encabezado */}
          <div className="flex items-center gap-3 mb-8">
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <div
                  className="absolute -inset-2 rounded-full opacity-20 blur-sm"
                  style={{
                    background: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
                  }}
                />
                <Sparkles className="w-6 h-6 relative" style={{ color: theme.primary.light }} />
              </motion.div>
            </div>
            <div>
              <h3
                className="text-2xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.primary.light}, ${theme.secondary.light})`,
                }}
              >
                Sobre mí
              </h3>
              <p className="text-sm mt-1" style={{ color: theme.text.secondary }}>
                Mi viaje en el desarrollo de software
              </p>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="space-y-8">
            {/* Información personal */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-lg" style={{ color: theme.text.primary }}>
                  Soy <span className="font-bold" style={{ color: theme.primary.light }}>Owens</span>
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <div
                  className="flex items-center gap-3 p-2 rounded-lg border"
                  style={{
                    backgroundColor: `${theme.background.DEFAULT}80`, // 50% opacity
                    borderColor: theme.border.dark,
                  }}
                >
                  <Code2 className="w-5 h-5" style={{ color: theme.primary.light }} />
                  <p className="font-bold" style={{ color: theme.text.primary }}>Ingeniero en Informática</p>
                </div>

                <div
                  className="flex items-center gap-3 p-2 rounded-lg border"
                  style={{
                    backgroundColor: `${theme.background.DEFAULT}80`,
                    borderColor: theme.border.dark,
                  }}
                >
                  <MapPin className="w-4 h-4" style={{ color: theme.secondary.light }} />
                  <p className="text-sm" style={{ color: theme.text.secondary }}>Santiago, Chile</p>
                </div>
              </div>
            </div>

            {/* Objetivos y pasiones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Rocket, title: 'Stack Tecnológico', text: 'React, TypeScript, Node.js, AWS', color: theme.primary.light },
                { icon: Target, title: 'Especialización', text: 'Plataformas SaaS multi-tenant', color: theme.secondary.light },
                { icon: Lightbulb, title: 'Enfoque', text: 'Automatización y escalabilidad', color: theme.primary.light },
              ].map(({ icon: Icon, title, text, color }, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border"
                  style={{
                    backgroundColor: `${theme.background.DEFAULT}80`,
                    borderColor: theme.border.dark,
                  }}
                >
                  <Icon className="w-5 h-5 mb-2" style={{ color }} />
                  <h4 className="font-semibold mb-1" style={{ color: theme.text.primary }}>{title}</h4>
                  <p className="text-sm" style={{ color: theme.text.secondary }}>{text}</p>
                </div>
              ))}
            </div>

            {/* Descripción */}
            <p
              className="text-sm leading-relaxed p-4 rounded-xl border"
              style={{
                backgroundColor: `${theme.background.DEFAULT}80`,
                borderColor: theme.border.dark,
                color: theme.text.secondary,
              }}
            >
              Desarrollador Full Stack especializado en plataformas SaaS multi-tenant con React, TypeScript, Node.js y AWS. 
              Experiencia construyendo soluciones escalables que automatizan procesos empresariales y mejoran la eficiencia operativa. 
              Enfocado en arquitecturas robustas, CI/CD y metodologías ágiles para entregar productos de alto impacto.
            </p>
          </div>
        </div>

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

export default AboutMeCard;
