import React from 'react'
import './CityItem.scss'
import imagen from '../../../assets/images/China.jpg'
interface Props {
    id: String,
    name: String,
    chinesename: String
}


const CityItem: React.FC<Props> = ({ id, name, chinesename }) => {

    return (
        <div className="Item">
            <label className="control control-checkbox">
                <img alt="CityIcon" className="Imagen" src={imagen} />
                <div>
                    <p>{name}</p>
                    <p>{chinesename}</p>    
                </div>
                <input type="checkbox" />
                <div className="control_indicator"></div>
            </label>
        </div>
    )
}

export default CityItem