import React from 'react'
import dayjs from 'dayjs'

export default function TrMedia({index, media}) {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{media.nombre}</td>
            <td>{media.descripcion}</td>
            <td> {dayjs(media.fechaCreacion).format('DD/MM/YYYY')} </td>
            <td>{media.estado ? 'Activo' : 'Inactivo'} </td>
            <td>
                <button
                    type="button"
                    className="btn btn-outline-success">
                    EDITAR
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger">
                    BORRAR
                </button>
            </td>
        </tr>
    )
}
