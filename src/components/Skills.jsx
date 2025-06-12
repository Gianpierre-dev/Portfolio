import React, { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages')

  const skillsData = {
    languages: {
      title: 'Lenguajes de Programación',
      icon: '💻',
      skills: [
        { name: 'Python', level: 90, description: 'Desarrollo backend, automatización, análisis de datos' },
        { name: 'JavaScript', level: 85, description: 'Frontend interactivo, React, Node.js' },
        { name: 'C#', level: 75, description: 'Aplicaciones empresariales, .NET Framework' },
        { name: 'SQL', level: 80, description: 'Gestión de bases de datos, consultas complejas' },
        { name: 'HTML5', level: 95, description: 'Estructura semántica, accesibilidad web' },
        { name: 'CSS3', level: 90, description: 'Diseño responsivo, animaciones, Flexbox/Grid' }
      ]
    },
    frameworks: {
      title: 'Frameworks y Librerías',
      icon: '🚀',
      skills: [
        { name: 'React', level: 85, description: 'Componentes reutilizables, hooks, estado global' },
        { name: 'TailwindCSS', level: 90, description: 'Diseño utility-first, componentes modernos' },
        { name: 'FastAPI', level: 80, description: 'APIs RESTful rápidas y documentadas' },
        { name: 'AlpineJS', level: 75, description: 'Interactividad ligera en el frontend' },
        { name: 'Bootstrap', level: 85, description: 'Diseño responsivo rápido' },
        { name: '.NET', level: 70, description: 'Aplicaciones empresariales robustas' }
      ]
    },
    databases: {
      title: 'Bases de Datos',
      icon: '🗄️',
      skills: [
        { name: 'SQL Server', level: 85, description: 'Administración, stored procedures, optimización' },
        { name: 'MySQL', level: 80, description: 'Diseño de esquemas, consultas optimizadas' },
        { name: 'PostgreSQL', level: 75, description: 'Consultas avanzadas, funciones' },
        { name: 'SQLite', level: 85, description: 'Bases de datos ligeras para aplicaciones' }
      ]
    },
    tools: {
      title: 'Herramientas y Tecnologías',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 85, description: 'Control de versiones, colaboración en equipo' },
        { name: 'Power BI', level: 80, description: 'Dashboards interactivos, visualización de datos' },
        { name: 'Excel VBA', level: 75, description: 'Automatización de procesos, macros avanzadas' },
        { name: 'Vite', level: 80, description: 'Build tool moderno para desarrollo frontend' },
        { name: 'VS Code', level: 90, description: 'Entorno de desarrollo optimizado' },
        { name: 'Postman', level: 85, description: 'Pruebas y documentación de APIs' }
      ]
    },
    methodologies: {
      title: 'Metodologías y Soft Skills',
      icon: '📋',
      skills: [
        { name: 'Scrum', level: 80, description: 'Desarrollo ágil, sprints, retrospectivas' },
        { name: 'SEO', level: 75, description: 'Optimización para motores de búsqueda' },
        { name: 'Responsive Design', level: 90, description: 'Diseño adaptable a todos los dispositivos' },
        { name: 'Problem Solving', level: 85, description: 'Análisis y resolución creativa de problemas' },
        { name: 'Team Work', level: 90, description: 'Colaboración efectiva en equipos multidisciplinarios' },
        { name: 'Continuous Learning', level: 95, description: 'Adaptación constante a nuevas tecnologías' }
      ]
    }
  }

  const categories = Object.keys(skillsData);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones efectivas
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{skillsData[category].icon}</span>
              {skillsData[category].title}
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              <span className="mr-3">{skillsData[activeCategory].icon}</span>
              {skillsData[activeCategory].title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData[activeCategory].skills.map((skill, index) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                    <span className="text-sm font-medium text-blue-600">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `slideIn 1s ease-out ${index * 0.1}s both`
                      }}
                    />
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Desarrollo Full Stack
            </h4>
            <p className="text-gray-600">
              Experiencia completa desde el frontend hasta el backend y bases de datos
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Automatización
            </h4>
            <p className="text-gray-600">
              Optimización de procesos mediante scripts y herramientas de automatización
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Análisis de Datos
            </h4>
            <p className="text-gray-600">
              Visualización y análisis de datos con herramientas como Power BI y Python
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: ${skillsData[activeCategory].skills.map(s => s.level)}%;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills
