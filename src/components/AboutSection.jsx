import { Briefcase, Code, User, Shield } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="pt-50 pb-10 px-4 relative snap-start min-h-screen">
      <div className="pt-0 container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">mí</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desarrollador Full Stack & Apasionado por la Tecnología
            </h3>

            <p className="text-muted-foreground">
              Soy desarrollador full stack con experiencia en la creación de aplicaciones web modernas, escalables y seguras. Utilizo tecnologías como React y Symfony, así como bases de datos como MySQL y PostgreSQL y despliegues con Docker.
            </p>

            <p className="text-muted-foreground">
              Me especializo en construir soluciones robustas tanto en el frontend como en el backend, enfocándome en la experiencia del usuario, el rendimiento y la calidad del código. Siempre busco aprender nuevas herramientas y seguir las mejores prácticas del sector.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Contáctame</a>
              <a
                href="/cv-antonio-tebar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descarga mi CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Desarrollo Web */}
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desarrollo Web</h4>
                  <p className="text-muted-foreground">
                    Construyo interfaces modernas y APIs eficientes, aplicando buenas prácticas y principios de arquitectura limpia en cada proyecto.
                  </p>
                </div>
              </div>
            </div>

            {/* Diseño UI/UX */}
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Diseño UI/UX</h4>
                  <p className="text-muted-foreground">
                    Diseño interfaces centradas en el usuario, combinando funcionalidad con estética para una experiencia intuitiva y atractiva.
                  </p>
                </div>
              </div>
            </div>

            {/* Seguridad */}
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Seguridad</h4>
                  <p className="text-muted-foreground">
                    Implemento prácticas de seguridad tanto en el cliente como en el servidor, asegurando la integridad de los datos y protegiendo las aplicaciones frente a vulnerabilidades comunes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
