import React, { useState } from 'react'
import PanelList from '../Panels/PanelList/PanelList'
import PanelSelected from '../Panels/PanelSelected/PanelSelected'
import './Layout.scss'
/* VARIABLES */

//The json required for the Evaluation
const list = require('../../assets/data/cities-of-china.json')

const Layout:React.FC = () => {
    const inputState = useState({
        selectAll: false,
        citiesSelected: new Array
    })

    const onSelectAll = (check:boolean)=>{
        if (check) {//All the cities are selected
            console.log(check)
            inputState[1]({citiesSelected: list.cities, selectAll: true});
        }else{
            inputState[1]({citiesSelected: [], selectAll: false});
        }
    }

    const onClickClear= () =>{
        inputState[1]({citiesSelected: [], selectAll: false});
    }


    return (
        <div>
            <p id="title">Cities of China</p>
            <div className="Panels">
                <PanelList 
                    cities={list.cities} 
                    onSelectAll={onSelectAll}
                />
                <PanelSelected 
                    cities={inputState[0].citiesSelected}
                    onClear={onClickClear}
                />
            </div>
        </div>
    )
}

export default Layout