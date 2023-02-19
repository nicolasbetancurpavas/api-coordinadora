import * as dotenv from 'dotenv' // variables de entorno 
dotenv.config()

import { ServidorAPI } from './API/ServidorApi.js'

let servidorGuias = new ServidorAPI() //Intancia de una clase (OBJETO)
servidorGuias.despertarServidor()

