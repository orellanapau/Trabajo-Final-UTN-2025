//Acá van los datos de todos los contactos

const contacts = [
    {
        id: 1,
        name: 'Sofia',
        last_time_connected: '5 octubre 2025',
        is_connected: false,
        profile_img:'https://i.pinimg.com/originals/64/4f/b7/644fb77bb99879433be57f9657d85461.jpg',
        status: 'Estudiando...',
        phone: '+54 1155 6677',
        messages:[
            {
                id: 1,
                author: 'Sofia',
                content: "Hola! Vi tu portfolio, me encantaron tus diseños. Hacés páginas web también?",
                timestamp: '10:02'
            },
            {
                id: 2,
                author: 'Yo',
                content: "Hola Sofía! Sí, diseño y desarrollo sitios web con enfoque en experiencia de usuario 😊",
                timestamp: '10:03'
            },
            {
                id: 3,
                author: 'Sofia',
                content: "Buenísimo! Estoy necesitando una landing page para mi emprendimiento, te paso los detalles?",
                timestamp: '10:04'
            },
            {
                id: 4,
                author: 'Yo',
                content: "Claro! Pasame toda la info que tengas y vemos cómo podemos estructurarla 💻",
                timestamp: '10:05'
            }
        ]
    },
    {
        id: 2,
        name: 'Lucas',
        last_time_connected: 'Ahora',
        is_connected: true,
        profile_img:'https://cdn.pixabay.com/photo/2024/07/30/12/36/man-8932177_1280.png',
        status: 'Modo descanso activado',
        phone: '+54 1122 3344',
        messages:[
            {
                id: 1,
                author: 'Lucas',
                content: "Te pasé el prototipo actualizado, fijate si los cambios en el header te convencen.",
                timestamp: '14:31'
            },
            {
                id: 2,
                author: 'Yo',
                content: "Perfecto, lo veo ahora. Me gusta la nueva jerarquía visual, mucho más clara 👏",
                timestamp: '14:33'
            },
            {
                id: 3,
                author: 'Lucas',
                content: "Genial! Si te parece, mañana ajusto los colores y subo la versión final.",
                timestamp: '14:34'
            },
            {
                id: 4,
                author: 'Yo',
                content: "Dale, quedamos así. Mañana te doy feedback final para cerrar el diseño.",
                timestamp: '14:35'
            }
        ]
    },
    {
        id: 3,
        name: 'Martina',
        last_time_connected: 'Ahora',
        is_connected: true,
        profile_img:'https://tse2.mm.bing.net/th/id/OIP.ZTXhNh3LpALGjEZsvSFnbAHaHa?pid=Api',
        status: 'No puedo hablar, solo Lemonade',
        phone: '+54 1166 3344',
        messages:[
            {
                id: 1,
                author: 'Martina',
                content: "Hola! Vi tu perfil y me interesó tu trabajo. Estás disponible para nuevos proyectos?",
                timestamp: '17:42'
            },
            {
                id: 2,
                author: 'Yo',
                content: "Hola Martina! Sí, actualmente estoy abierta a nuevas oportunidades. Contame un poco del proyecto 😊",
                timestamp: '17:43'
            },
            {
                id: 3,
                author: 'Martina',
                content: "Perfecto, es un rediseño web para una marca local. Buscamos alguien con buena base UX/UI.",
                timestamp: '17:44'
            },
            {
                id: 4,
                author: 'Yo',
                content: "Excelente! Es justo el tipo de trabajo que disfruto. Si querés te envío mi portfolio actualizado.",
                timestamp: '17:45'
            }
        ]
    }

]

export default contacts