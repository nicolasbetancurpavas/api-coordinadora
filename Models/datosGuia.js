import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EsquemaGuia = new Schema({

    id_guia: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{11}$/.test(v);
            },
            message: props => `${props.value} no es un id_guia válido. Debe tener 11 dígitos.`
        }
    },

    nit_cliente: {
        required: true,
        type: Number
    },

    div: {
        required: true,
        type: String
    },

    razon_social: {
        required: true,
        type: String
    },

    poblacion_destino: {
        required: true,
        type: String
    },

});

export const modeloGuia = mongoose.model('guias', EsquemaGuia)