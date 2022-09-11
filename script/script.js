const buttons = document.querySelectorAll('[data-btn]');
const content = document.getElementById('content');
const loadInfo = {
    title: '',
    subtitle: '',
    imgSrc: '',
    videoSrc: '',
    content: ''
};

const titles = ['PROGRAMADOR', 'DESARROLLADOR', 'FRONTEND', 'BACKEND'];
const subtitle = [
    '¿Qué es un programador?',
    '¿Qué es un desarrollador?',
    '¿Qué es Front End?',
    '¿Qué es Back End?'
];
const imgSrc = [
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=20',
    'https://images.unsplash.com/1/type-away-numero-dos.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=20',
    'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=20',
    'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=20'
];
const videoSrc = [
    'https://www.youtube.com/embed/feXu-xLoiig',
    'https://www.youtube.com/embed/Bw7ikAzPZts',
    'https://www.youtube.com/embed/e0NwBRUbE38',
    'https://www.youtube.com/embed/7_RfjvWmIm8'
]
const contentBody = [
    'Un <b>Programador</b> es un profesional que se encarga <b>de escribir, de depurar y de revisar</b> todo el código fuente de un software informático para que lleve a cabo determinadas tareas, o incluso para que mejore, incorporando nuevas funciones para hacer que sea una herramienta más completa y eficiente.<br><br>En web, el programador se encuentra ligado al mantenimiento del <b>back-end</b> del sitio web, y del soporte de su infraestructura',
    'Los <b>Desarrolladores Web</b> diseñan, crean y realizan mantenimiento a <b>páginas y aplicaciones web</b>, en tal sentido, trabajan en sitios de internet y de intranet.<br><br>Por lo general, son empleados por empresas especializadas en el <b>desarrollo de programas especializados o en consultoría informática</b>. Estos profesionales tienen la opción de trabajar directamente para la corporación o de manera independiente o a destajo.',
    '<b>Frontend</b> es la parte de un programa o dispositivo a la que un usuario puede acceder directamente. Son todas las tecnologías de <b>diseño y desarrollo web que corren en el navegador</b> y que se encargan de la interactividad con los usuarios.<br><br>Los desarrolladores frontend son aquellos que <b>crean los componentes visuales de un sitio web</b>. Dan formato a las imágenes, la animación y la interactividad de un sitio web.',
    '<b>Backend</b> es la capa de acceso a <b>datos de un software o cualquier dispositivo</b>, que no es directamente accesible por los usuarios. Además, contiene la lógica de la aplicación que maneja dichos datos.<br><br>El Backend también <b>accede al servidor</b>, que es una aplicación especializada que entiende la forma en la que el navegador hace solicitudes.\nLos desarrolladores backend se encargan de hacer que <b>la lógica del sitio funcione correctamente, la información se transmita de manera segura y el desempeño de la aplicación no entorpezca la experiencia del usuario.</b>'
]

const titleEl = document.getElementById('title');
const subtitleEl = document.getElementById('subtitle');
const imgEl = document.getElementById('img');
const vidEl = document.getElementById('video');
const contentEl = document.getElementById('content-body');

//Animation elements
const contentT = document.getElementById('content-t');
const contentC = document.getElementById('content-c');

let switchVar = false;

buttons.forEach((button, i) => {
    
    button.addEventListener('click', () =>{

        switchVar = true;
        if(switchVar){
            document.getElementById('main-container').style = 'animation-name: mainMenu; animation-duration: 1s; top: 5%;';
        }
        
        contentT.style = 'animation-name: content-fade-out; animation-duration: 1s; opacity: 0%';
        contentC.style = 'animation-name: content-fade-out; animation-duration: 1s; opacity: 0%';

        setTimeout(()=>{
            contentT.style = 'animation-name: content-fade-in; animation-duration: 1s; opacity: 100%';
            contentC.style = 'animation-name: content-fade-in; animation-duration: 1s; opacity: 100%';
            console.log(titles[i], titleEl)
            document.getElementById('content').style = 'display: flex;';
            titleEl.innerHTML = titles[i];
            subtitleEl.innerHTML = subtitle[i];
            imgEl.setAttribute('src', imgSrc[i]);
            vidEl.setAttribute('src', videoSrc[i]);
            contentEl.innerHTML = contentBody[i];
        }, 1000)

        

        
    });

});