import React, { useState } from 'react'
import './PanelList.scss'
import CitiesList from '../../Cities/CitiesList'
import { MdSearch } from 'react-icons/md'

interface Props {
    cities: Array<{ id: String, name: String, chinesename: String }>;
}

const PanelList = (props: Props) => {
    let inputState = useState({
        search: ''
    })



    return (
        <div className="Container">
            <div className="SearchBar">
                <span id="IconSearch"><MdSearch size={20} color="darkgray" /></span>
                <input id="InputSearch" type="text" onChange={event => inputState[1]({ search: event.target.value })} placeholder="Search by name">
                </input>
            </div>
            <div id="TotalItems">
                <label className="control control-checkbox">
                    {props.cities.length} items
                    <input type="checkbox" />
                    <div className="control_indicator"></div>
                </label>
            </div>
            <CitiesList cities={props.cities} search={inputState[0].search}></CitiesList>
        </div>
    )
}

export default PanelList