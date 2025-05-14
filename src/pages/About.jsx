// src/pages/Contact.jsx
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";


export const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
       <ThemeToggle />
      {/* Efecto de fondo */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Contacto</h1>
        <p>Puedes contactarme en: contacto@example.com</p>
      </main>

      {/* Footer (opcional, si lo usas) */}
      
    </div>
  );
};
