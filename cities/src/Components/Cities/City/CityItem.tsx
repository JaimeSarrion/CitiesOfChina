import React from 'react'
import './CityItem.scss'
import imagen from '../../../assets/images/China.jpg'
interface Props {
    id: String,
    name: String,
    chineseName: String
    onSelectItem(value: { id: String, name: String, chineseName: String }): any
    deleteItemHandler(id:String):any
}
const CityItem: React.FC<Props> = ({id, name, chineseName, onSelectItem, deleteItemHandler}) => {

    //Handler for the selection or deselection of an element
    const selectedItemHandler = (event:any) =>{
        if (event.target.checked) {
            onSelectItem({ id, name, chineseName})
        }else{
            deleteItemHandler(id)
        }
    }

    return (
        <div className="Item">
            <label className="control control-checkbox">
                <img alt="CityIcon" className="Imagen" src={imagen} />
                <div>
                    <p>{name}</p>
                    <p>{chineseName}</p>    
                </div>
                <input onChange={selectedItemHandler} type="checkbox" />
                <div className="control_indicator"></div>
            </label>
        </div>
    )
}

export default CityItem