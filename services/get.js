import { modeloGuia } from '../Models/datosGuia.js';
import { modeloDestinatario } from '../Models/destinatario.js';
import { modeloRemitente } from '../Models/remitente.js';
import { modeloUnidades } from '../Models/unidades.js';

export class ServiciosGet {

    async traerData(id) {
        let datos = {}
        let guia = await modeloGuia.findOne({ id_guia: id })
        let remitente = await modeloRemitente.findOne({ id_guia: id })
        let destinatario = await modeloDestinatario.findOne({ id_guia: id })
        let unidades = await modeloUnidades.findOne({ id_guia: id })
        datos["datos_guias"] = guia
        datos["remitente"] = remitente
        datos["destinatario"] = destinatario
        datos["unidades"] = unidades
        return datos
    }

}