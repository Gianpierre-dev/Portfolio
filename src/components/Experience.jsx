import React from 'react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Programador Informático",
      company: "Galdiaz S.A.C.",
      period: "Enero 2024 - Actualidad",
      location: "Lima, Perú",
      type: "Tiempo Completo",
      description: "Desarrollo y mantenimiento de aplicaciones empresariales, automatización de procesos y análisis de datos.",
      technologies: ["Python", "SQL Server", "Power BI", "Excel VBA", "Business Intelligence"],
      achievements: [
        "Optimización de procesos de reporting reduciendo tiempo en 60%",
        "Desarrollo de dashboards interactivos para toma de decisiones",
        "Automatización de tareas repetitivas mejorando la eficiencia operativa"
      ]
    },
    {
      id: 2,
      title: "Desarrollador Front-End & SEO",
      company: "Mr. Sif",
      period: "Abril 2024 - Diciembre 2024",
      location: "Lima, Perú",
      type: "Freelance",
      description: "Desarrollo de interfaces web modernas y optimización SEO para mejorar la visibilidad online.",
      technologies: ["TailwindCSS", "AlpineJS", "HTML5", "CSS3", "JavaScript", "SEO"],
      achievements: [
        "Mejora del 40% en velocidad de carga de sitios web",
        "Incremento del 150% en tráfico orgánico",
        "Implementación de mejores prácticas de accesibilidad web"
      ]
    },
    {
      id: 3,
      title: "Desarrollador Web Junior",
      company: "Estudio Contable JJMM",
      period: "Marzo 2023 - Diciembre 2023",
      location: "Lima, Perú",
      type: "Tiempo Completo",
      description: "Desarrollo de sistemas web para gestión contable y automatización de procesos administrativos.",
      technologies: ["Python", "React", "MySQL", "FastAPI", "Bootstrap"],
      achievements: [
        "Desarrollo de sistema de gestión contable desde cero",
        "Reducción del 70% en tiempo de procesamiento de facturas",
        "Implementación de reportes automatizados"
      ]
    },
    {
      id: 4,
      title: "Desarrollador Front-End",
      company: "Ingecem Perú",
      period: "Enero 2018 - Diciembre 2022",
      location: "Lima, Perú",
      type: "Prácticas Profesionales",
      description: "Desarrollo de interfaces de usuario y aplicaciones web durante mis prácticas profesionales.",
      technologies: ["C#", "HTML5", "CSS3", "JavaScript", "Bootstrap", ".NET"],
      achievements: [
        "Colaboración en múltiples proyectos de desarrollo web",
        "Aprendizaje de metodologías ágiles de desarrollo",
        "Experiencia en trabajo en equipo multidisciplinario"
      ]
    }
  ]

  const getCompanyIcon = (company) => {
    // Retorna un icono SVG basado en el tipo de empresa
    if (company.includes('Galdiaz')) {
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      )
    }
    return (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" clipRule="evenodd"/>
      </svg>
    )
  }

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experiencia <span className="gradient-text">Profesional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block" 
                     style={{ top: '1.5rem' }}></div>

                {/* Content */}
                <div className="md:ml-16 card p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="mb-2 lg:mb-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {exp.location} • {exp.type}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Tecnologías utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Logros principales:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="card p-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              ¿Interesado en trabajar conmigo?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Estoy siempre abierto a nuevas oportunidades y desafíos. 
              Contactemos para discutir cómo puedo contribuir a tu equipo.
            </p>
            <button 
              className="btn-primary"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contactar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 