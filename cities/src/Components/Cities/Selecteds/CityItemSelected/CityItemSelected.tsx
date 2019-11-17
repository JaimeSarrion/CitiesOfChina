import React from 'react'
import imagen from '../../../../assets/images/China.jpg'
import './CityItemSelected.scss'
interface Props {
    id: String,
    name: String,
    chinesename: String
    deleteItemHandler(id:String):any
}

const CityItemSelected: React.FC<Props> = ({ id, name, chinesename, deleteItemHandler }) => {

    //Handler for the click on the X button
    const clickHandler:any = ()=>{
        deleteItemHandler(id)
    }

    return (
        <div className="Item">
            <div className="control">
                <img alt="CityIcon" className="Imagen" src={imagen} />
                <div>
                    <p>{name}</p>
                    <p>{chinesename}</p>
                </div>
                <button onClick={()=>{clickHandler()}} id="DropButton">X</button>

            </div>

        </div>
    )
}

export default CityItemSelected