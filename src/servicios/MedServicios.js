import { axiosConfig } from "../configuracion/axiosConfig";

const consultarMedias = (estado= true) => {
    return axiosConfig.get('medias?estado='+estado, {
        Headers: {
            'Content-Type' : 'application/json'
        }
    })
}

const crearMedia = (datos= {}) =>{
    return axiosConfig.post('medias', datos,{
        Headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editarMedia = (id, datos= {}) =>{
    return axiosConfig.put('medias/'+id, datos,{
        Headers: {
            'Content-Type': 'application/json'
        }
    })
}

const borrarMedia = id =>{
    return axiosConfig.delete('medias/'+id, {},{
        Headers: {
            'Content-Type': 'application/json'
        }
    })
}

export {
    consultarMedias,
    crearMedia,
    editarMedia, 
    borrarMedia
}