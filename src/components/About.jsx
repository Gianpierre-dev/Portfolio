import React from 'react'

const About = () => {
  const personalInfo = [
    { label: 'Nombre completo', value: 'Anthony Gianpierre Terrazas Tello' },
    { label: 'Fecha de nacimiento', value: '13 de junio, 2002 (22 años)' },
    { label: 'Ubicación', value: 'San Martín de Porres, Lima, Perú' },
    { label: 'Educación', value: 'IDAT - Desarrollo de Software (Egresado 2024)' },
    { label: 'Idiomas', value: 'Español (Nativo), Inglés (Básico)' },
  ]

  const softSkills = [
    'Comunicación asertiva',
    'Resolución de problemas',
    'Adaptabilidad',
    'Pensamiento lógico',
    'Trabajo bajo presión',
    'Trabajo en equipo'
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce más sobre mi trayectoria profesional y personal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Mi Historia
            </h3>
            <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
              <p>
                Soy Anthony Gianpierre Terrazas Tello, un desarrollador de software junior apasionado 
                por la tecnología y la innovación. Vivo en San Martín de Porres, Lima, Perú, y me 
                especializo en el desarrollo de aplicaciones web y análisis de datos.
              </p>
              <p>
                Mi enfoque se centra en crear soluciones eficientes y escalables utilizando las 
                mejores prácticas de desarrollo. Disfruto trabajando en proyectos que requieren 
                análisis crítico y resolución creativa de problemas.
              </p>
              <p>
                Actualmente trabajo como Programador Informático en Galdiaz S.A.C., donde desarrollo 
                y mantengo aplicaciones empresariales utilizando Python, SQL Server y herramientas 
                de Business Intelligence.
              </p>
            </div>
          </div>

          {/* Skills and Education */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div className="card p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Habilidades Blandas
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Liderazgo',
                  'Trabajo en equipo',
                  'Comunicación efectiva',
                  'Resolución de problemas',
                  'Adaptabilidad',
                  'Pensamiento crítico'
                ].map((skill) => (
                  <div key={skill} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="card p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Educación
              </h4>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold text-gray-900">
                    Desarrollo de Software
                  </h5>
                  <p className="text-gray-600">IDAT • 2024</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Especialización en desarrollo de aplicaciones web y móviles
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Interests */}
            <div className="card p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Intereses
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  '🤖 Inteligencia Artificial',
                  '📊 Análisis de Datos',
                  '🌐 Desarrollo Web',
                  '📱 Apps Móviles',
                  '🎮 Gaming',
                  '📚 Aprendizaje continuo'
                ].map((interest) => (
                  <span key={interest} className="skill-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Objetivos */}
        <div className="mt-16">
          <div className="card p-8 text-center bg-gradient-to-r from-blue-50 to-purple-50">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Objetivos Profesionales
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Mi objetivo es seguir creciendo como desarrollador de software, especializándome en 
              tecnologías emergentes como la inteligencia artificial y el análisis de datos. 
              Busco contribuir a proyectos innovadores que tengan un impacto positivo en la sociedad 
              y seguir aprendiendo de equipos multidisciplinarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 