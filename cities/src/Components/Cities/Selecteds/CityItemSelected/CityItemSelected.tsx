import React from 'react'
import imagen from '../../../../assets/images/China.jpg'
import './CityItemSelected.scss'
interface Props {
    id: String,
    name: String,
    chinesename: String
}

const CitiesItemSelected: React.FC<Props> = ({ id, name, chinesename }) => {
    return (
        <div className="Item">
            <label className="control">
                <img alt="CityIcon" className="Imagen" src={imagen} />
                <div>
                    <p>{name}</p>
                    <p>{chinesename}</p>
                    <button id="DropButton">X</button>
                </div>
            </label>
        </div>
    )
}

export default CitiesItemSelected