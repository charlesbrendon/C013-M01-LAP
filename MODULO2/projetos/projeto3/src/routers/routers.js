import express from 'express'
import { 
    getIndex, 
    getDetalhes,
    getDeletar,
    getCadastro,
    postCadastro,
    getEditar,
    postEditar
} from '../controller/Controllador.js'


export const routers = express.Router()

routers.get('/', getIndex)
routers.get('/detalhes/:id', getDetalhes)
routers.get('/deletar/:id', getDeletar)

routers.get('/cadastro', getCadastro)
routers.post('/cadastro', postCadastro)

routers.get('/editar/:id', getEditar)
routers.post('/editar/:id', postEditar)

