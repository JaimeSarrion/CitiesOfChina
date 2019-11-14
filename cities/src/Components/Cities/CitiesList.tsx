import React, { useState } from 'react'
import CityItem from './City/CityItem'
import InfiniteScroll from 'react-infinite-scroller';
import './CitiesList.scss'
import Spinner from '../UI/Spinner/Spinner';
interface Props {
    cities: Array<{ id: String, name: String, chinesename: String }>,
    search:String
}

const CitiesList = (props: Props) => {
    useState({
        counter: 1
    })
    var list = props.cities.map(item => (
        <CityItem key={item.id.toString()} id={item.id} name={item.name} chinesename={item.chinesename} />
    ))

    function loadFunc(){
        console.log("hola")
    }
    console.log(props.search)
    return (
        <div className="Scroller">
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={true || false}
                loader={<div className="loader" key={0}><Spinner/></div>}
            >
                {list}
            </InfiniteScroll>
        </div>

    )
}

export default CitiesList