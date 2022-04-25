
import express from "express"; // importando i express
import path from "path"; // servir para definir caminhos padrões

const __dirname = path.resolve(path.dirname('')) // __dirname serve pra informar qual é o caminho padrão em minha pasta



const app = express(); // instanciando o express dentro da const app

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
        signos: 'Leão',
        img: 'https://static.wikia.nocookie.net/ssu/images/8/8b/Aiolia_Armadura_Divina_card.png/'

    },
    { 
        id: 2,
        nome: 'Aldebaran',
        signos: 'Touro',
        img: 'https://pm1.narvii.com/6403/ffe9e1b19c99f2c7da6471cf290c2e7695c15573_hq.jpg'

    },
    { 
        id: 3,
        nome: 'Shaka',
        signos: 'Virgem',
        img: 'http://pm1.narvii.com/7321/a4df13e5e19dd0fb961ae5e38b3ec6de84a40916r1-640-800v2_uhq.jpg'

    },
    { 
        id: 4,
        nome: 'Milo',
        signos: 'Escorpião',
        img: 'https://static.wikia.nocookie.net/ssu/images/9/93/Milo_OCE_UW_card_edit.png/'
    },

    {
        id: 5,
        nome:'Aiolos',
        signos: 'Sagitário',
        img: 'https://static.wikia.nocookie.net/ssu/images/d/d4/Aiolos_AD_card.png'
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

// app.get('/cadastro', (req, res) => {
//     res.render('cadastro.ejs')
// })