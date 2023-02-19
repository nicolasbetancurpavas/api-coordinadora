import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EsquemaRemitente = new Schema({

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

    nit: {
        required: true,
        type: Number
    },
    div: {
        required: true,
        type: Number
    },
    nombre: {
        required: true,
        type: String
    },

    telefono: {
        required: true,
        type: String
    },

    direccion: {
        required: true,
        type: String
    },

    equipo: {
        required: true,
        type: Number
    },

    ciudad: {
        required: true,
        type: String
    },
    lat: {
        required: true,
        type: String
    },
    lng: {
        required: true,
        type: String
    },

});

export const modeloRemitente = mongoose.model('remitente', EsquemaRemitente)