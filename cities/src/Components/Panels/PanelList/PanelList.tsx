import React from 'react'
import './PanelList.scss'
import CitiesList from '../../Cities/CitiesList'
const PanelList = () => {
    return(
        <div className="Container">
            <input type="text" placeholder="Search..."></input>
            <p>x Total </p>
            <CitiesList></CitiesList>
        </div>
    )
}

export default PanelList