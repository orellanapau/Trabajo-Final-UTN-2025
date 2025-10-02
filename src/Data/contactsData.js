//Acá van los datos de todos los contactos

const contacts = [
    {
        id: 1,
        name: 'Dibu',
        last_time_connected: '5 octubre 2025',
        is_connected: false,
        profile_img:'https://soydelrojo.com/wp-content/uploads/2022/05/El-Dibu-Martinez-esta-listo-para-un-nuevo-partido-de-la-Seleccion-Argentina..jpg',
        messages:[
            {
                id: 1,
                author: 'Yo',
                content: "Todo bien?",
                timestamp: '16:17'
            }
        ]
    },
    {
        id: 2,
        name: 'Maria',
        last_time_connected: 'Ahora',
        is_connected: true,
        profile_img:'https://fleeknews.cl/wp-content/uploads/2021/08/maria-becerra-e1630095860501.jpeg',
        messages:[
            {
                id: 1,
                author: 'Yo',
                content: "Hola Mari, todo bien?",
                timestamp: '16:17'
            },
            {
                id: 2,
                author: 'Maria',
                content: "Si y vos?",
                timestamp: '16:18'
            }
        ]
    }
]

export default contacts