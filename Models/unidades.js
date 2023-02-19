import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EsquemaUnidades = new Schema({

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

    estado_traking: {
        required: true,
        type: String
    },

    codigo_traking: {
        required: true,
        type: Number
    },

    etiqueta_1: {
        required: true,
        type: String
    },
    etiqueta_2: {
        required: true,
        type: String
    },

    referencia: {
        required: true,
        type: String
    },

    fecha_recogida: {
        required: true,
        type: String
    },
    fecha_entrega: {
        required: true,
        type: String
    },

});

export const modeloUnidades = mongoose.model('unidades', EsquemaUnidades)