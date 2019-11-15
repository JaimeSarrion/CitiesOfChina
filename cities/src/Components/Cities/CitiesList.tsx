import React, { useState } from 'react'
import CityItem from './City/CityItem'
import InfiniteScroll from 'react-infinite-scroller';
import './CitiesList.scss'
import Spinner from '../UI/Spinner/Spinner';
interface Props {
    cities: Array<{ id: String, name: String, chinesename: String }>,
    search: string
}

const CitiesList: React.FC<Props> = ({ cities, search }) => {
    useState({
        counter: 1
    })

    var list = cities.map((item) => {
        if (search === '') {
            return (
                <CityItem key={item.id.toString()} id={item.id} name={item.name} chinesename="El escorial" />
            )
        } else {
            if (item.name.includes(search)) {
                return (
                    <CityItem key={item.id.toString()} id={item.id} name={item.name} chinesename="El Escorial" />
                )
            } else {
                return null
            }
        }

    })

    function loadFunc() {
        console.log("Soy el loadFunc")
    }
    return (
        <div className="Scroller">
{/*             <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={true || false}
                loader={<div className="loader" key={0}><Spinner /></div>}
            >
            </InfiniteScroll> */}
            {list}

        </div>

    )
}

export default CitiesList