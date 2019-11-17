import React from 'react'
import CityItem from './City/CityItem'
import './CitiesList.scss'
/* import InfiniteScroll from 'react-infinite-scroller' */

/*
    NOTE: The code commmented is for the infinite scroller, only we have to comment the {list} and we have the infinite scroll
    I have commented the code, because when the Infinite scroll is on, the browser does not work properly.
*/ 

interface Props {
    cities: Array<{ id: String, name: String, chineseName: String }>,
    search: string,
    onSelectItem(value: { id: String, name: String, chineseName: String }): any
    deleteItemHandler(id: String): any
}
//This component is the left panel, where all the cities are allowed
const CitiesList: React.FC<Props> = ({ cities, search, onSelectItem, deleteItemHandler }) => {
/*     const [iterator, setIterator] = useState(19)
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
    })) */

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
/*     const loadFunc = () => {
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

            } else {


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
            }
        }



    } */
    return (
        <div className="Scroller">
{/*             <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={hashMore}
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={false}
            >
                {items}
            </InfiniteScroll> */}

            {list}
        </div>

    )
}

export default CitiesList