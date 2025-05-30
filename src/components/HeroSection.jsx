import { FaGithub, FaLinkedin } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 snap-start"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Foto circular con borde verde eléctrico */}
        <div className="mb-10 opacity-0 animate-fade-in">
          <img
            src="/path/to/your/photo.jpg" // <-- reemplaza esta ruta por la de tu imagen
            alt="Foto de Antonio Tebar"
            className="w-40 h-40 rounded-full border-4 border-primary object-cover"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hola, mi nombre es </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Antonio
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Tebar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Soy un Desarrollador Full Stack especializado en aplicaciones multiplataforma y webs, para lo cual utilizo tecnologías modernas
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center gap-4">
  <a href="#projects" className="cosmic-button">
    Accede a mis proyectos
  </a>
  <a href="#projects" className="cosmic-button">
    Videopresentación
  </a>
</div>




          {/* Redes sociales */}
          <div className="flex justify-center gap-6 pt-6 opacity-0 animate-fade-in-delay-5">
            <a
              href="https://github.com/AntonioTebar93"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-muted-foreground hover:text-primary transition-transform transform hover:scale-125 duration-300 ease-in-out"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/antonio-tebar-alfaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-muted-foreground hover:text-primary transition-transform transform hover:scale-125 duration-300 ease-in-out"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
