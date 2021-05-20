const githubLink = 'https://github.com/Sennt03/'

const img1 = './img/senntcloud.jpg'
const github1 = githubLink + 'Mean-Stack-Nube-Online'
const link1 = 'https://senntcloud.herokuapp.com'
const nombre1 = 'SenntCloud'
const tecnologias1 = 'Mean Stack'
const descripcion1 = 'Sistema de nube online donde puedes subir tus archivos, subir imagenes, crear carpetas y desde cualquier dispositivo solo iniciando sesion puedes descargarlos'

const img2 = './img/senntshop.jpg'
const github2 = githubLink + 'NodeJS-Sistema-Tienda-Online'
const link2 = 'https://senntshop.herokuapp.com'
const nombre2 = 'SenntShop'
const tecnologias2 = 'NodeJS y MySql'
const descripcion2 = 'Sistema de tienda online con NodeJS, javascript moderno y subida de imagenes a cloudinary'

const img3 = './img/senntio.jpg'
const github3 = githubLink + 'MeanStack-Mini-red-social'
const link3 = 'https://sennt-io.herokuapp.com'
const nombre3 = 'SenntIO'
const tecnologias3 = 'Mean Stack'
const descripcion3 = 'Mini red social con Angular, NodeJS y MongoDB. Puedes añadir, editar y borrar publicaciones - Configuracion de perfil - Vista de perfil de todos los usuarios y mas'

const img4 = './img/landingpage.jpg'
const github4 = githubLink + 'Css-Landing-Page'
const link4 = 'https://Sennt03.github.io/Css-Landing-Page'
const nombre4 = 'Landing Page'
const tecnologias4 = 'Html5 - Css3'
const descripcion4 = 'Landing page simple con css flexbox y css grid'

const img5 = './img/senntblog.jpg'
const github5 = githubLink + 'DJango-Blog'
const link5 = 'https://senntblog.herokuapp.com/'
const nombre5 = 'SenntBlog'
const tecnologias5 = 'DJango - MySQL'
const descripcion5 = 'CRUD completo con DJango y el ORM junto a mysql. Puedes registrarte, crear categorias, crear entradas, editarlas, eliminarlas. Tambien filtar las entradas por categorias y por usuarios'

const btns = document.querySelectorAll('.detalles')

btns.forEach(btn => {
    btn.addEventListener('click', On)
});


function On(e){
    reseatAll()
    const id = e.target.getAttribute('_id')
    if(id == '1'){
        setText(img1, github1, link1, nombre1, tecnologias1, descripcion1)
    }else if(id == '2'){
        setText(img2, github2, link2, nombre2, tecnologias2, descripcion2)
    }else if(id == '3'){
        setText(img3, github3, link3, nombre3, tecnologias3, descripcion3)
    }else if(id == '4'){
        setText(img4, github4, link4, nombre4, tecnologias4, descripcion4)
    }else if(id == '5'){
        setText(img5, github5, link5, nombre5, tecnologias5, descripcion5)
    }
    abrir()
}

function reseatAll(){
    setText('', '', '', '', '')
}

function setText(imgSrc, githubSrc, linkSrc, nombreApp, tecnApp, descripApp){
    const img = document.getElementById('img-modal')
    const github = document.getElementById('github-modal')
    const link = document.getElementById('link-modal')
    const nombre = document.getElementById('nombre-modal')
    const tecnologias = document.getElementById('tecnologias-modal')
    const descripcion = document.getElementById('descripcion-modal')

    img.src = imgSrc
    github.href = githubSrc
    link.href = linkSrc
    nombre.innerHTML = nombreApp
    tecnologias.innerHTML = tecnApp
    descripcion.innerHTML = descripApp
}

function abrir(){
    const btnOn = document.getElementById('btn-modal')
    btnOn.checked = true
}