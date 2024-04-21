import React, { useEffect, useState } from 'react'
import { consultarMedias, crearMedia } from '../../servicios/MedServicios'

import Generos from '../generos/Generos'
import Directores from '../directores/Directores'
import Productora from '../productoras/Productoras'
import Tipos from '../tipos/Tipos'

export default function Medias() {

  const [setMedias] = useState([])
  const [error, setError] = useState(false)
  const [media, setMedia] = useState({
    serial: '',
    titulo: '',
    sinopsis: '',
    url: '',
    imagen: '',
    genero: Generos(),
    director: Directores(),
    productora: Productora(),
    tipo: Tipos()
  })

  useEffect(() => {
    consultarTodo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const consultarTodo = async () => {
    try {
      const { data } = await consultarMedias()
      setMedias(data)
      if (error) {
        setError(false)
      }
    } catch (e) {
      console.error(e)
      setError(true)
    }
  }

  const handleChange = e => {
    setMedia({
      ...media,
      [e.target.name]: e.target.value
    })
  }

  const guardado = async () => {
    try {
      const respuesta = await crearMedia(media)
      consultarTodo()
      setMedia({
        serial: '',
        titulo: '',
        sinopsis: '',
        url: '',
        imagen: '',
        genero: Generos(),
        director: Directores(),
        productora: Productora(),
        tipo: Tipos()
      })
      setMedia(true)
      console.log(respuesta)
    } catch (error) {
      console.log(error)
    }
  }
}