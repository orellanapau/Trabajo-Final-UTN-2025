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
                id: 3,
                author: 'Peter Parker',
                content: "Obvio y vos?",
                timestamp: '16:18'
            }
        ]
    },
    {
        id: 2,
        name: 'Scott',
        last_time_connected: 'Ahora',
        is_connected: true,
        profile_img:'https://i.pinimg.com/474x/5c/bc/6e/5cbc6e2f450c321b28c8adf1d8c460d1.jpg',
        status: 'Ant-Anthony',
        phone: '+54 1122 3344',
        messages:[
            {
                id: 1,
                author: 'Yo',
                content: "Hola Scott, todo bien?",
                timestamp: '12:17'
            },
            {
                id: 2,
                author: 'Scott',
                content: "Si y vos?",
                timestamp: '18:18'
            }
        ]
    },
    {
        id: 3,
        name: 'Wanda',
        last_time_connected: 'Ahora',
        is_connected: true,
        profile_img:'https://wallpapers.com/images/hd/wanda-maximoff-in-casual-wear-1hjb8ah37cmkgt7o.jpg',
        status: 'Billy y Tomy <3',
        phone: '+54 1166 3344',
        messages:[
            {
                id: 1,
                author: 'Yo',
                content: "Hola Wanda, todo bien?",
                timestamp: '11:17'
            },
            {
                id: 2,
                author: 'Wanda',
                content: "Si y vos?",
                timestamp: '11:20'
            }
        ]
    }

]

export default contacts