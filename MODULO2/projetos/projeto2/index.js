import express from "express"; // importando i express
import path from "path"; // servir para definir caminhos padrões

const __dirname = path.resolve(path.dirname('')) // __dirname serve pra informar qual é o caminho padrão em minha pasta



const app = express(); // instanciando o express dentro da const app
app.use(express.urlencoded({extended: true})) // O corpo(body) da requisição
app.use(express.json()) // converter para json
app.set("view engine", "ejs") // faz com que o express reconheça  o EJS como motor de visualização
app.use(express.static(path.join(__dirname, "public")))

const port = process.env.port || 3001;

app.listen(port, () => console.log(`Server in http://localhost:${port}`));  //lisente é uma funçao do express para criar um servidor


let pokemons = [
    {   
        id: 1,
        name: 'Bulbasaur',
        height: '0.7 m',
        weight: '6,9 kg',
        gender: ['Male','Female'],
        category: 'Seed',
        abilites: 'Overgrow',
        type: ['Grass', 'Poison'],
        weakness: ['Fire', 'Psychic', 'Flying', 'Ice'],
        image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'

    },
    { 
        id: 2,
        name: 'Ivysaur',
        height: '1.0 m',
        weight: '13.0 kg',
        gender: ['Male','Female'],
        category: 'Seed',
        abilites: 'Overgrow',
        type: ['Grass', 'Poison'],
        weakness: ['Fire', 'Psychic', 'Flying', 'Ice'],
        image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'

    },
    {   
        id: 3,
        name: 'Venusaur',
        height: '2.0 m',
        weight: '100.0 kg',
        gender: ['Male','Female'],
        category: 'Seed',
        abilites: 'Overgrow',
        type: ['Grass', 'Poison'],
        weakness: ['Fire', 'Psychic', 'Flying', 'Ice'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'

    },
    { 
        id: 4,
        name: 'Charmander',
        height: '0.6 m',
        weight: '8.5 kg',
        gender: ['Male','Female'],
        category: 'Lizard',
        abilites: 'Blaze',
        type: 'Fire',
        weakness: ['Water', 'Ground', 'Rock'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
    },

    {
        id: 5,
        name: 'Charmeleon',
        height: '1.1 m',
        weight: '19.0 kg',
        gender: 'Male' || 'Female',
        category: 'Flame',
        abilites: 'Blaze',
        type: 'Fire',
        weakness: ['Water', 'Ground', 'Rock'],
        image:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'
    }, 
    {
        id: 6,
        name: 'Charizard',
        height: '1.7 m',
        weight: '90.5 kg',
        gender: 'Male' || 'Female',
        category: 'Flame',
        abilites: 'Blaze',
        type: ['Fire','Flying'],
        weakness: ['Water', 'Ground', 'Rock'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
    }

]




app.get('/', (req, res) => { //get é um metodo HTTP/HTTPS que serve para trazer uma pagina
    res.render('index.ejs', {
        pokemons
    })

})

app.get('/detalhes/:id', (req, res) => {
    let pokemon = []
    pokemons.filter((element) =>{
        if(element.id == req.params.id){
            pokemon=element
        }
        console.log(pokemon)
    })
    res.render('detalhes.ejs', {pokemon})

})

app.get('/cadastro', (req, res) => {
    res.render('cadastro.ejs')
})

app.post('/cadastro',(req, res)=> {
    let id = pokemons[pokemons.length-1].id + 1
    const {name, height, width, gender, category, abilites, weakness, type, image} = req.body
    pokemons.push({id: id, name, height, width, gender, category, abilites, weakness, type, image})
    
    
    res.redirect('/')
})