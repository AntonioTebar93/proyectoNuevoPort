import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Sistema de login personalizado',
    image: '/path/to/your/image1.jpg',
    description: 'This is a description of project 1.',
    technologies: ['React', 'Symfony', 'Docker'],
    githubLink: 'https://github.com/yourusername/project1',
    demoLink: 'https://yourwebsite.com/project1',
  },
  {
    title: 'Aplicación de control de fichajes',
    image: '/path/to/your/image2.jpg',
    description: 'This is a description of project 2.',
    technologies: ['Symfony', 'Twig', 'MySQL', 'Docker'],
    githubLink: 'https://github.com/yourusername/project2',
    demoLink: 'https://yourwebsite.com/project2',
  },
  {
    title: 'Aplicación de control de fichajes',
    image: '/path/to/your/image2.jpg',
    description: 'This is a description of project 2.',
    technologies: ['Symfony', 'Twig', 'MySQL', 'Docker'],
    githubLink: 'https://github.com/yourusername/project2',
    demoLink: 'https://yourwebsite.com/project2',
  },
  {
    title: 'Aplicación de control de fichajes',
    image: '/path/to/your/image2.jpg',
    description: 'This is a description of project 2.',
    technologies: ['Symfony', 'Twig', 'MySQL', 'Docker'],
    githubLink: 'https://github.com/yourusername/project2',
    demoLink: 'https://yourwebsite.com/project2',
  },
];

export function ProjectsSection() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));

  const paginatedProjects = projects.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  // Animaciones de rebote horizontal para los botones
  const bounceLeft = {
    animate: {
      x: [0, -10, 0], // mueve 10px a la izquierda y regresa
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    },
  };

  const bounceRight = {
    animate: {
      x: [0, 10, 0], // mueve 10px a la derecha y regresa
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="projects" className="py-30 px-4 relative bg-secondary/30">
      <div className="pt-8 pb-40 container mx-auto max-w-6xl">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mis <span className="text-primary">Proyectos</span>
        </motion.h2>

        {/* Chevron izquierdo */}
        {currentPage > 0 && (
          <motion.button
            onClick={handlePrev}
            aria-label="Página anterior"
            className="absolute left-[300px]  top-[420px]  transform -translate-y-1/2 z-50 cursor-pointer transition-opacity duration-300"
            {...bounceLeft}
          >
            <ChevronLeft className="h-10 w-10 text-primary hover:drop-shadow-[0_0_6px_#00ff88]" />
          </motion.button>
        )}

        {/* Chevron derecho */}
        {currentPage < totalPages - 1 && (
          <motion.button
            onClick={handleNext}
            aria-label="Página siguiente"
            className="absolute right-[300px] top-[420px] transform -translate-y-1/2 z-50 cursor-pointer transition-opacity duration-300"
            {...bounceRight}
          >
            <ChevronRight className="h-10 w-10 text-primary hover:drop-shadow-[0_0_6px_#00ff88]" />
          </motion.button>
        )}

        <div className="relative flex items-center justify-center">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
            initial="initial"
            animate="animate"
          >
            {paginatedProjects.map((project, index) => (
              <motion.article
                key={project.title + index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg shadow-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="h-5 w-5" />
                    <span>Código</span>
                  </motion.a>
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="h-5 w-5" />
                    <span>Prueba</span>
                  </motion.a>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
