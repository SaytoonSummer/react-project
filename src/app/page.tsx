'use client'
import './Styles/reset.css';
import './Styles/materialize.css';
import './Styles/style.css';
import 'jquery/dist/jquery.min.js';
import {BrowserRouter} from 'react-router-dom'
import { Header } from './Layout/Header'
import { AppRouter } from './Router/AppRouter'
import { Footer } from './Layout/Footer';


export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

