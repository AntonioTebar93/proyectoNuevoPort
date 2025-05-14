import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
  // Agrega más proyectos aquí...
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-30 px-4 relative bg-secondary/30">
      <div className="pt-8 pb-25 container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Mis <span className="text-primary">Proyectos</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          animate="animate"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: 0, // Animación hacia arriba
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1, // Retraso secuencial
              }}
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
                  <span>Prueba el proyecto</span>
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
