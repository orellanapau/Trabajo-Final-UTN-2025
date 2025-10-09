//Acá van los datos de todos los contactos

const contacts = [
    {
        id: 1,
        name: 'Peter Parker',
        last_time_connected: '5 octubre 2025',
        is_connected: false,
        profile_img:'https://hips.hearstapps.com/hmg-prod/images/spider-man-no-way-home-tom-holland-1-1629769756.jpg?crop=0.582xw:1.00xh;0.244xw,0&resize=1200:*',
        status: 'Estudiando...',
        phone: '+54 1155 6677',
        messages:[
            {
                id: 1,
                author: 'Yo',
                content: "Todo bien?",
                timestamp: '16:17'
            }, 
            {
                id: 2,
                author: 'Peter Parker',
                content: "Obvio, y vos?",
                timestamp: '16:18'
            },
            {
                id: 3,
                author: 'Yo',
                content: "Tranqui, solo tratando de sobrevivir a la semana",
                timestamp: '16:19'
            },
            {
                id: 4,
                author: 'Peter Parker',
                content: "Jaja, te entiendo. A veces siento que ser Spider-Man no es tan distinto de sobrevivir a la facu.",
                timestamp: '16:20'
            },
            {
                id: 5,
                author: 'Yo',
                content: "Exacto! Pero al menos vos tenés telarañas y yo solo café ☕",
                timestamp: '16:21'
            },
            {
                id: 6,
                author: 'Peter Parker',
                content: "Cierto, aunque a veces las telarañas se enredan más de lo que ayudan 😂",
                timestamp: '16:22'
            }
        ]
    },
    {
        id: 2,
        name: 'Scott',
        last_time_connected: 'Ahora',
        is_connected: true,
        profile_img:'https://i.pinimg.com/474x/5c/bc/6e/5cbc6e2f450c321b28c8adf1d8c460d1.jpg',
        status: 'Modo hormiga activado 🐜',
        phone: '+54 1122 3344',
        messages:[
            {
                id: 1,
                author: 'Yo',
                content: "Ey Scott, alguna vez comiste algo diminuto a propósito?",
                timestamp: '15:10'
            }, 
            {
                id: 2,
                author: 'Scott',
                content: "Jaja, todo el tiempo! Las mini hamburguesas son mis favoritas 😎",
                timestamp: '15:11'
            },
        ]
    },
    {
        id: 3,
        name: 'Wanda',
        last_time_connected: 'Ahora',
        is_connected: true,
        profile_img:'https://wallpapers.com/images/hd/wanda-maximoff-in-casual-wear-1hjb8ah37cmkgt7o.jpg',
        status: 'No puedo hablar, solo Lemonade',
        phone: '+54 1166 3344',
        messages:[
            {
                id: 1,
                author: 'Yo',
                content: "Wanda, ¿ya escuchaste Lemonade de Louis Tomlinson?",
                timestamp: '18:05'
            },
            {
                id: 2,
                author: 'Wanda',
                content: "Sí! Está buenísima, tiene ese toque dulce-amargo 🍋",
                timestamp: '18:06'
            },
            {
                id: 3,
                author: 'Yo',
                content: "Totalmente, me pegó el estribillo, no puedo sacármelo de la cabeza",
                timestamp: '18:07'
            },
            {
                id: 4,
                author: 'Wanda',
                content: "Jajaja, lo sé! La escucho mientras hago un poco de magia, combina perfecto",
                timestamp: '18:08'
            },
            {
                id: 5,
                author: 'Yo',
                content: "Perfecto!!! Voy a agregarla a mi playlist ya mismo",
                timestamp: '18:09'
            }
        ]
    }

]

export default contacts