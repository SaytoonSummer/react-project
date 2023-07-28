'use client'
// Se importan los componentes que serán renderizados en cada ruta
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Home} from '../Components/Home'
import {Catalog} from '../Components/Catalog'
import {Client} from '../Components/Client'
import {Contact} from '../Components/Contact'
import {Video} from '../Components/Video'
import {Users} from '../Components/Users'
import {Update} from '../Components/Update'
import {Delete} from '../Components/Delete'

export const AppRouter = () => {
  return (
    // Definimos las rutas y los componentes que serán renderizados en cada una de ellas
    <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Catalog' element={<Catalog/>}/>
        <Route path='/Client' element={<Client/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Video' element={<Video/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/actualizar/:id' element={<Update/>}/>
        <Route path='/eliminar/:id' element={<Delete/>}/>
    </Routes>
  )
}