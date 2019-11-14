import React, { useState} from 'react'
import './PanelList.scss'
import CitiesList from '../../Cities/CitiesList'


interface Props {
    cities: Array<{id:String, name:String, chinesename:String}>;
}

const PanelList = (props: Props) => {
    let inputState = useState({
        search: ''
    })

    const searchHandler = (event:any)=>{
        inputState[0].search = event.target.value;
    }

    return(
        <div className="Container">
            <input type="text" onChange = {searchHandler} placeholder="Search..."></input>
            <input type="checkbox"></input> 
            {props.cities.length} items
            <CitiesList cities = {props.cities} search = {inputState[0].search}></CitiesList>
        </div>
    )
}

export default PanelList