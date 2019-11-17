import React, { useState } from 'react'
import './PanelList.scss'
import CitiesList from '../../Cities/CitiesList'
import { MdSearch } from 'react-icons/md'

interface Props {
    cities: Array<{ id: String, name: String, chineseName: String }>
    onSelectAll(check: boolean): any,
    onSelectItem(value: { id: String, name: String, chineseName: String }): any
    deleteItemHandler(id:String):any
    onSearch(value:String):any
}

const PanelList: React.FC<Props> = ({ cities, onSelectAll,onSelectItem, deleteItemHandler,onSearch}) => {
    let inputState = useState({
        search: ''
    })
    
    //Handler for the general checkbox
    const checkedHandler = (event: any) => {
        onSelectAll(event.target.checked)
    }
    //Handler for the search input
    const onTypeHandler=(event:any)=>{
        inputState[1]({ search: event.target.value })
        onSearch( event.target.value)
    }

    return (
        <div className="Container">
            <div className="SearchBar">
                <span id="IconSearch"><MdSearch size={20} color="darkgray" /></span>
                <input id="InputSearch" value={inputState[0].search} type="text" onChange={onTypeHandler} placeholder="Search by name">
                </input>
            </div>
            <div id="TotalItems">
                <label className="control control-checkbox">
                    {cities.length} items
                    <input type="checkbox" onChange={checkedHandler} />
                    <div className="control_indicator"></div>
                </label>
            </div>
            <CitiesList
                cities={cities}
                search={inputState[0].search}
                onSelectItem = {onSelectItem}
                deleteItemHandler={deleteItemHandler}
            />
        </div>
    )
}

export default PanelList