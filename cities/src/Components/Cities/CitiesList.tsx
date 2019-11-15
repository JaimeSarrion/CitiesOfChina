import React, { useState } from 'react'
import CityItem from './City/CityItem'
import './CitiesList.scss'
interface Props {
    cities: Array<{ id: String, name: String, chineseName: String }>,
    search: string
}

const CitiesList: React.FC<Props> = ({ cities, search }) => {
    useState({
        counter: 1
    })
    var list = cities.map((item) => {
        if (search === '') {
            return (
                <CityItem key={item.id.toString()} id={item.id} name={item.name} chinesename={item.chineseName} />
            )
        } else {
            if (item.name.includes(search)) {
                return (
                    <CityItem key={item.id.toString()} id={item.id} name={item.name} chinesename={item.chineseName} />
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