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

let cavaleirosDeOuro = [
    { 
        nome: 'Airos',
        signos: 'Leão'

    },
    { 
        nome: 'Aldebaran',
        signos: 'Touro'

    },
    { 
        nome: 'Chacka',
        signos: 'Virgem'

    },
    { 
        nome: 'Miro',
        signos: 'Escorpião'
    },

    {
        nome:'Afrodite',
        signos: 'Aquario'
    }

]

app.get('/', (req, res) => { //get é um metodo HTTP/HTTPS que serve para trazer uma pagina
    res.render('index.ejs', {
        cavaleirosDeOuro
    })

})

app.get('/detalhes', (req, res) => {
    res.render('detalhes.ejs')
})