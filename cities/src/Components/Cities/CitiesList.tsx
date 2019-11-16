import React, { useState } from 'react'
import CityItem from './City/CityItem'
import './CitiesList.scss'
interface Props {
    cities: Array<{ id: String, name: String, chineseName: String }>,
    search: string,
    onSelectItem(value: { id: String, name: String, chineseName: String }): any
    deleteItemHandler(id:String):any
}

const CitiesList: React.FC<Props> = ({ cities, search, onSelectItem, deleteItemHandler }) => {
    useState({
        counter: 1
    })
    var list = cities.map((item) => {
        if (search === '') {
            return (
                <CityItem
                    key={item.id.toString()}
                    id={item.id}
                    name={item.name}
                    chineseName={item.chineseName}
                    onSelectItem={onSelectItem}
                    deleteItemHandler={deleteItemHandler}
                />
            )
        } else {
            if (item.name.includes(search)) {
                return (
                    <CityItem
                        key={item.id.toString()}
                        id={item.id}
                        name={item.name}
                        chineseName={item.chineseName}
                        onSelectItem={onSelectItem}
                        deleteItemHandler={deleteItemHandler}
                    />
                )
            } else {
                return null
            }
        }

    })

    return (
        <div className="Scroller">
            {list}
        </div>
    )
}

export default CitiesList