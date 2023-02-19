import { ServiciosGet } from '../services/get.js'

export class Controlador {
    constructor() { }

    async datosMostrar(request, response) {
        let id_guia = request.params.id;

        let servicios = new ServiciosGet()

        try {
            response.status(200).json({
                "mensaje": "Exito en la consulta",
                "datos": await servicios.traerData(id_guia)
            })

        } catch (error) {
            response.status(400).json({
                "mensaje": "Error en la consulta" + error,
                "datos": null,
            })
        }
    }

}