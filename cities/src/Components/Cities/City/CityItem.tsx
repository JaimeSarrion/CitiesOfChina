import React from 'react'
import './CityItem.scss'


interface Props {
    id:String,
    name:String,
    chinesename:String
}


const CityItem:React.FC<Props> = ({id,name,chinesename}) => {
    console.log(chinesename)
    return(
        <div className="Container">
            <p>{name}</p>
            <p>{chinesename}</p>
        </div>
    )
}

export default CityItem