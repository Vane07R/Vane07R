const btn = document.querySelector('#langBtn');
btn.addEventListener('click', function(event) {
    event.preventDefault();
    let opt = btn.getAttribute('data-opt');
    Object.keys(lang[opt]).forEach(key => {
        const text = lang[opt][key];
        console.log({text, key});
        document.querySelectorAll('[data-lang="' + key + '"]').forEach(el => {
          el.innerHTML = text;
        });
    });
    if (opt == 'es') {
        btn.setAttribute('data-opt', 'en');
    } else {
        btn.setAttribute('data-opt', 'es');
    }
});

const bT = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   bT.value = 'Sending...';

   const serviceID = 'service_ajxq9fc';
   const templateID = 'template_7myol9q';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      bT.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      bT.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});




let lang = {
    es: {
        title: "Hola",
        inicio: "Inicio",
        sobre_mi: "Sobre mí",
        habilidades: "Habilidades",
        proyectos: "Proyectos",
        resumen: "Resumen",
        contacto: "Contacto",
        languaje: "Cambiar Idioma",
        nombre: "ALLISON RODRIGUEZ",
        slogan:"GARANTIZANDO CALIDAD SIN EXCUSAS",
        vision: "¡Hola! Soy Allison, estudiante de ingeniería en sistemas y redes informáticas, como futura profesional de esta área estoy interesado en aprender y crecer en mi campo más que todo en el desarrollo de software, análisis de sistemas y arquitecturas de software, ya que me apasiona la tecnología y su constante evolución, me gusta el aprendizaje continuo y la resolución de problemas complejos.",
        Sobremi: "Sobre Mi",
        detalles: "Detalles personales",
        dedicacion: "Me dedico a aprender software día a día.",
        busco: "Estoy en busca de oportunidades para aplicar mis habilidades y conocimientos en el desarrollo de proyectos innovadores. Me entusiasma trabajar en colaboración con otros profesionales y aprender de ellos, porque creo firmemente que el trabajo en equipo y la colaboración son claves para lograr resultados excelentes en cualquier proyecto. Estoy comprometida con mi crecimiento profesional y estoy emocionada por lo que el futuro me depara en mi carrera en Ingeniería en Sistemas y Redes Informáticas.",
        Des: "Descargar CV",
        Obj: "Objetivo",
        objetivo: "Desarrollar mis conocimientos profesionalmente dentro de una empresa como líder en el desarrollo de software y proyectos innovadores donde pueda aplicar mis habilidades y aptitudes, contribuyendo a estos con mi experiencia y conocimientos en el área de tecnología.",
        Cert: "Certificaciones",
        certificaciones: "CCNA: Introduction to Networks",
        Hab: "Habilidades blandas",
        Adap:"Adaptabiliad",
        Trabajo: "Trabajo en equipo",
        Lid: "Liderazgo",
        Com: "Comunicación y escucha activa",
        Plan: "Planificación",
        Pac: "Paciencia",
        Habil: "Habilidades duras",
        man: "Manejo de personas",
        mane:"Manejo de base de datos",
        admi:"Administración de redes",
        ges: "Gestión de proyectos",
        manejo: "Manejo de metodologias agiles:Scrum,KANBAN,DESING SPRINT,PMI",
        comp: "Comprensión de los principios de diseño de interfaz de usuario y la experiencia de usuario",
        Val: "Valores profesionales",
        hon:"Honesta",
        res:"Responsable",
        eti:"Ética",
        soli: "Solidaria",
        hum:"Humilde",
        resp:"Respetuosa",
        cono:"Mis conocimientos",
        conocimientos:"Actualmente estudio para especializarme al 100% en",
        cali:"CALIDAD TESTING",
        BD:"BASES DE DATOS",
        MA:"METODOLOGIAS AGILES",
        HD:"HERRAMIENTAS DE DISEÑO",
        pro:"Proyectos",
        proyect:"Proyectos en los que he participado",
        pan:"PanApp",
        año:"2021",
        des:"Desarrollada en android studio",
        descri:"PanApp es una aplicación móvil, que fue desarrollada en un entorno educativo, su función principal es la de registrar pedidos de un restaurante mediante un usuario previamente registrado.",
        rol:"Rol: Programacion BackEnd",
        uni:"Universidad Gerardo Barrios",
        Fell:"FellsGood",
        Año:"2022",
        lav:"Desarrollada en Laravel",
        descripcion:"FellsGood: es una aplicación que se creó con el fin de ayudar a las personas a comunicarse de una manera más rápido debido a la pandemia, contaba con una inteligencia que media las emociones de los usuarios para ayudarle a controlarlas recomendándole actividades que debería realizar.",
        ro:"Rol: QA Testing",
        U:"Universidad Gerardo Barrios",
        con:"Contacto",
        contacto:"Ponte en contacto ahora mismo!",
        celular:"Teléfono",
        correo:"Correo",
    

    },
    en: {
        title: "Hello",
        inicio: "Home",
        sobre_mi: "About me",
        habilidades: "Skills",
        proyectos: "Projects",
        resumen: "Summary",
        contacto: "Contact",
        languaje: "Change language",
        nombre: "ALLISON RODRIGUEZ",
        slogan:"GUARANTEEING QUALITY WITHOUT EXCUSES",
        vision: "Hello! I am Allison, a computer systems and network engineering student, as a future professional in this area I am interested in learning and growing in my field, more than anything in software development, systems analysis and software architectures, since I am passionate about technology and its constant evolution, I like continuous learning and solving complex problems",
        Sobremi: "About me",
        detalles: "Personal details",
        dedicacion: "I dedicate myself to learning software day by day.",
        busco: "I am looking for opportunities to apply my skills and knowledge in the development of innovative projects. I am excited to work collaboratively with other professionals and learn from them, because I firmly believe that teamwork and collaboration are key to achieving excellent results in any project. I am committed to my professional growth and I am excited for what the future holds for me in my career in Computer Systems and Network Engineering.",
        Des: "Downloand CV",
        Obj: "Objective",
        objetivo: " Develop my knowledge professionally within a company as a leader in software development and innovative projects where I can apply my skills and aptitudes, contributing to them with my experience and knowledge in the technology area.",
        Cert: "Certifications",
        certificaciones: "CCNA: Introduction to Networks",
        Hab: "Soft skills",
        Adap:"Aadaptability",
        Trabajo: "Teamwork",
        Lid: "Leadership",
        Com: "Communication and active listening",
        Plan: "Planning",
        Pac: "Patience",
        Habil: "Hard skills",
        man: "Persons handling",
        mane:"Database management",
        admi:"Network administration",
        ges: "Project management",
        manejo: "Management of agile methodologies:Scrum,KANBAN,DESING SPRINT,PMI",
        comp: "Understanding of user interface design principles and user experience",
        Val: "Professional values",
        hon:"Honest",
        res:"Responsible",
        eti:"Ethic",
        soli: "Solidarity",
        hum:"Humble",
        resp:"Respectful",
        cono:"My knowledge",
        conocimientos:"I am currently studying to specialize 100% in",
        cali:"QUALITY TESTING",
        BD:"DATABASES",
        MA:"AGILE METHODOLOGIES",
        HD:"DESIGN TOOLS",
        pro:"Projects",
        proyect:"Projects in which I have participated",
        pan:"PanApp",
        año:"2021",
        des:"Developed in android studio",
        descri:"PanApp is a mobile application, which was developed in an educational environment, its main function is to register orders from a restaurant through a previously registered user.",
        rol:"Role: BackEnd Programming",
        uni:"Gerardo Barrios University",
        Fell:"FellsGood",
        da:"2022",
        lav:"Developed in Laravel",
        descripcion:"FellsGood: is an application that was created in order to help people communicate faster due to the pandemic, it had intelligence that measures the emotions of users to help them control them by recommending activities that they should do.",
        ro:"Role: QA Testing",
        U:"Gerardo Barrios University",
        con:"Contact",
        contacto:"Get in touch right now!",
        celular:"Phone",
        correo:"Mail",








        

        
    },
}