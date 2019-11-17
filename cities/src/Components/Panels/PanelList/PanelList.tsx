import React, { useState } from 'react'
import './PanelList.scss'
import CitiesList from '../../Cities/CitiesList'
import { MdSearch } from 'react-icons/md'

interface Props {
    cities: Array<{ id: String, name: String, chineseName: String }>
    onSelectAll(check: boolean): any,
    onSelectItem(value: { id: String, name: String, chineseName: String }): any
    deleteItemHandler(id:String):any
}

const PanelList: React.FC<Props> = ({ cities, onSelectAll,onSelectItem, deleteItemHandler }) => {
    let inputState = useState({
        search: ''
    })
    
    const checkedHandler = (event: any) => {
        onSelectAll(event.target.checked)
    }


    return (
        <div className="Container">
            <div className="SearchBar">
                <span id="IconSearch"><MdSearch size={20} color="darkgray" /></span>
                <input id="InputSearch" value={inputState[0].search} type="text" onChange={event => inputState[1]({ search: event.target.value })} placeholder="Search by name">
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