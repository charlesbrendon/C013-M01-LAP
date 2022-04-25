
import express from "express"; // importando i express
import path from "path"; // servir para definir caminhos padrões

const __dirname = path.resolve(path.dirname('')) // __dirname serve pra informar qual é o caminho padrão em minha pasta



const app = express(); // instanciando o express dentro da const app

app.use(express.urlencoded({extended: true})) // O corpo(body) da requisição
app.use(express.json()) // converter para json
app.set("view engine", "ejs") // faz com que o express reconheça  o EJS como motor de visualização
app.use(express.static(path.join(__dirname, "public")))


const port = 3001;

app.listen(port, () => { // lisente é uma funçao do express para criar um servidor
    console.log(`Rodando na porta ${port}`)
});

let cavaleiros = [
    { 
        id: 1,
        nome: 'Aiolia',
        tipo: 'Ouro',
        signos: 'Leão',
        iframe: '<iframe width=560 height=315 src=https://www.youtube.com/embed/6tHE_XebirI title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>',
        img: 'https://static.wikia.nocookie.net/ssu/images/8/8b/Aiolia_Armadura_Divina_card.png/'

    },
    { 
        id: 2,
        nome: 'Aldebaran',
        tipo: 'Ouro',
        signos: 'Touro',
        iframe: '<iframe width=560 height=315 src=https://www.youtube.com/embed/6tHE_XebirI title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>',
        img: 'https://pm1.narvii.com/6403/ffe9e1b19c99f2c7da6471cf290c2e7695c15573_hq.jpg'

    },
    { 
        id: 3,
        nome: 'Shaka',
        tipo: 'Ouro',
        signos: 'Virgem',
        iframe: '<iframe width=560 height=315 src=https://www.youtube.com/embed/6tHE_XebirI title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>',
        img: 'http://pm1.narvii.com/7321/a4df13e5e19dd0fb961ae5e38b3ec6de84a40916r1-640-800v2_uhq.jpg'

    },
    { 
        id: 4,
        nome: 'Milo',
        tipo: 'Ouro',
        signos: 'Escorpião',
        iframe: '<iframe width=560 height=315 src=https://www.youtube.com/embed/6tHE_XebirI title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>',
        img: 'https://static.wikia.nocookie.net/ssu/images/9/93/Milo_OCE_UW_card_edit.png/'
    },

    {
        id: 5,
        nome:'Aiolos',
        tipo: 'Ouro',
        signos: 'Sagitário',
        iframe: '<iframe width=560 height=315 src=https://www.youtube.com/embed/6tHE_XebirI title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>',
        img: 'https://static.wikia.nocookie.net/ssu/images/d/d4/Aiolos_AD_card.png'
    },

    {  
        id: 6,
        nome:'Ikki',
        tipo:'Bronze',
        signo:'Fenix',
        iframe: '<iframe width=560 height=315 src=https://www.youtube.com/embed/6tHE_XebirI title=YouTube video player frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>',
        img: ''

    }

]


app.get('/', (req, res) => { //get é um metodo HTTP/HTTPS que serve para trazer uma pagina
    res.render('index.ejs', {
        cavaleiros
    })

})

app.get('/detalhes/:id', (req, res) => {
   let cavaleiro = []
   cavaleiros.filter((element) => { 
    if(element.id == req.params.id){
        cavaleiro=element
    }
    console.log(cavaleiro)
    
} )
    res.render('detalhes.ejs', {cavaleiro})
    
})


app.get('/cadastro', (req, res) => {
    res.render('cadastro.ejs')
})

app.post('/cadastro',(req, res)=> {
    let id = cavaleiros[cavaleiros.length-1].id + 1
    const {nome, signo, tipo, iframe, img } = req.body
    cavaleiros.push({id: id, nome, signo, tipo, iframe, img })
    
    
    res.redirect('/')
})