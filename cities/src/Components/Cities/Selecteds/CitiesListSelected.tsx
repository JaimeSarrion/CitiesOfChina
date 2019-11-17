import React from 'react'
import CityItemSelected from './CityItemSelected/CityItemSelected'
import './CitiesListSelected.scss'

interface Props {
    cities: Array<{ id: String, name: String, chineseName: String }>
    deleteItemHandler(id:String):any
}

const CitiesListSelected: React.FC<Props> = ({ cities, deleteItemHandler }) => {

    var list = cities.map((item) => {
        return (
            <CityItemSelected
                key={item.id.toString()} 
                id={item.id} 
                name={item.name} 
                chinesename={item.chineseName}
                deleteItemHandler={(id)=>{deleteItemHandler(id)}}
            />
        )
    })

    return (
        <div id="Panel">
            {list}
        </div>
    )

}

export default CitiesListSelected