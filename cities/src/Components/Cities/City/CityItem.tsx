import React from 'react'
import './CityItem.scss'


interface Props {
    id:String,
    name:String,
    chinesename:String
}


const CityItem = (props:Props) => {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.chinesename}</p>
        </div>
    )
}

export default CityItem