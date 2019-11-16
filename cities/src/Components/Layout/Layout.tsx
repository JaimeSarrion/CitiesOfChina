import React, { useState } from 'react'
import PanelList from '../Panels/PanelList/PanelList'
import PanelSelected from '../Panels/PanelSelected/PanelSelected'
import './Layout.scss'
/* VARIABLES */

//The json required for the Evaluation
const list = require('../../assets/data/cities-of-china.json')

const Layout:React.FC = () => {
    useState({
        selectAll: false,
        citiesSelected: Array
    })
    /* Aqui voy a tener que ponerle estado, para pasarle las seleccionadas a PanelSelected */
    const onSelectAll = ()=>{
        
    }


    return (
        <div>
            <p id="title">Cities of China</p>
            <div className="Panels">
                <PanelList cities={list.cities}></PanelList>
                <PanelSelected cities={list.cities}></PanelSelected>
            </div>
        </div>
    )
}

export default Layout