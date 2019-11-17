import React, { useState } from 'react'
import CityItem from './City/CityItem'
import './CitiesList.scss'
import InfiniteScroll from 'react-infinite-scroller'

interface Props {
    cities: Array<{ id: String, name: String, chineseName: String }>,
    search: string,
    onSelectItem(value: { id: String, name: String, chineseName: String }): any
    deleteItemHandler(id: String): any
}

const CitiesList: React.FC<Props> = ({ cities, search, onSelectItem, deleteItemHandler }) => {
    const [iterator, setIterator] = useState(19)
    const [hashMore, setHashMore] = useState(true)
    const [items, setItems] = useState(cities.slice(0, iterator).map((item) => {
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
    })

    )

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
    const loadFunc = () => {
        if (hashMore) {
            if (iterator + 20 < cities.length - 1) {
                setItems(prevState => {
                    return prevState.concat(cities.slice(iterator, iterator + 20).map((item) => {
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
                    }))
                })
                setIterator(iterator + 20)
                console.log(iterator);
            } else {
                console.log(cities.slice(iterator, cities.length));

                setItems(prevState => {
                    return prevState.concat(cities.slice(iterator, cities.length - 1).map((item) => {
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
                    }))
                })

                setIterator(cities.length - 1)
                setHashMore(false)
                console.log(items)
            }
        }



    }
    return (
        <div className="Scroller">
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={hashMore}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={false}
            >
                {items}
            </InfiniteScroll>
        </div>

    )
}

export default CitiesList