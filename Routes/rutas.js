import express from 'express'
import { Controlador } from '../Controllers/Controlador.js'

let destinatario = new Controlador()

export let rutas = express.Router()

rutas.get('/dateAlll/:id', destinatario.datosMostrar)
