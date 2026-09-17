const translations = {
  es: {
    navExperience: 'Experiencia', navWork: 'Proyectos', navStack: 'Tecnologías', navContact: 'Contacto',
    heroEyebrow: 'Disponible para puestos Senior .NET y Full-Stack',
    heroTitle: 'Creando software confiable para problemas de negocio complejos.',
    heroIntro: 'Soy Jonathan Benitez Barriga, ingeniero de software con 10 años de experiencia en C#/.NET, APIs, bases de datos y aplicaciones web modernas.',
    heroContact: 'Contáctame', heroWork: 'Ver proyectos', country: 'México',
    impactYears: 'Años creando software', impactBackend: 'Backend y sistemas empresariales', impactFullStack: 'Full stack', impactInterfaces: 'De APIs a interfaces de usuario',
    experience: 'Experiencia', fortraDates: '2024 — Actualidad',
    fortraDesc: 'Mantengo y evoluciono TLC y CCM, aplicaciones empresariales para conectividad de dispositivos, obtención de logs y aplicación de reglas de negocio.',
    fortraBullet1: 'Desarrollo nuevas funcionalidades, resuelvo incidencias de producción y coordino trabajo entre ambos productos.',
    fortraBullet2: 'Realizo revisiones de código y promuevo código limpio, desarrollo seguro y prácticas basadas en OWASP.',
    fortraBullet3: 'Investigué una actualización de Windows que afectó la obtención remota de logs y ayudé a definir la mitigación a nivel sistema operativo.',
    pinnacleDesc: 'Construí una aplicación interna para gestión de tiempo de proyectos con Angular, .NET 7 y PostgreSQL. Desarrollé capacidades CRM para asignación de especialistas e integraciones de servicios.',
    lennkenDesc: 'Desarrollé sistemas de firma de documentos y gestión de reclamaciones, usando servicios de Azure, pipelines de liberación y prácticas de entrega para operaciones empresariales.',
    selectedWork: 'Proyectos seleccionados', projectType1: 'Software empresarial', projectDesc1: 'Aplicaciones para flujos de dispositivos conectados, recolección de datos y aplicación de reglas de negocio.',
    projectType2: 'Plataforma interna', projectDesc2: 'Gestión de tiempo de proyectos para equipos internos, diseñada como aplicación full-stack.',
    projectType3: 'Flujos de negocio', projectName3: 'Gestión de reclamaciones', projectDesc3: 'Herramientas para recepción de reclamaciones, asignación de ajustadores, seguimiento de evidencia y reportes.',
    technicalStack: 'Tecnologías', skillsIntro: 'Disfruto todo el camino, desde diseñar un backend confiable hasta entregar una interfaz clara y útil.',
    backend: 'Backend', frontend: 'Frontend', dataDelivery: 'Datos y entrega',
    contactEyebrow: 'Trabajemos juntos', contactTitle: '¿Tienes un producto o sistema que necesita una implementación cuidadosa?', languageLevel: 'Inglés: Intermedio'
  }
};

const toggle = document.querySelector('.language-toggle');
const english = Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map(el => [el.dataset.i18n, el.innerHTML]));
let language = localStorage.getItem('portfolio-language') || 'en';

function applyLanguage(next) {
  language = next;
  const dictionary = next === 'es' ? translations.es : english;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = dictionary[el.dataset.i18n]; });
  document.documentElement.lang = next;
  document.title = next === 'es' ? 'Jonathan Benitez Barriga | Desarrollador Senior .NET' : 'Jonathan Benitez Barriga | Senior .NET Developer';
  toggle.textContent = next === 'es' ? 'EN' : 'ES';
  toggle.setAttribute('aria-pressed', String(next === 'es'));
  toggle.setAttribute('aria-label', next === 'es' ? 'Switch to English' : 'Cambiar idioma');
  localStorage.setItem('portfolio-language', next);
}

toggle.addEventListener('click', () => applyLanguage(language === 'en' ? 'es' : 'en'));
applyLanguage(language);
