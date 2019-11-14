import React from 'react'
import PanelList from '../Panels/PanelList/PanelList'
import PanelSelected from '../Panels/PanelSelected/PanelSelected'

/* VARIABLES */

//The json required for the Evaluation
const list = require('../../assets/data/cities-of-china.json')

const Layout = () => {
    /* Aqui voy a tener que ponerle estado, para pasarle las seleccionadas a PanelSelected */
    return (
        <div>
            <h6>Cities of china</h6>
            <PanelList cities = {list.cities}></PanelList>
            <PanelSelected></PanelSelected>
        </div>
    )
}

export default Layout