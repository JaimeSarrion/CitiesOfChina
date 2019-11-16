import React, { useState } from 'react'
import PanelList from '../Panels/PanelList/PanelList'
import PanelSelected from '../Panels/PanelSelected/PanelSelected'
import './Layout.scss'
/* VARIABLES */

//The json required for the Evaluation
const list = require('../../assets/data/cities-of-china.json')


const Layout: React.FC = () => {
    const inputState = useState({
        selectAll: false,
        citiesSelected: new Array<{ id: String, name: String, chineseName: String }>()
    })

    const onSelectAll = (check: boolean) => {
        if (check) {//All the cities are selected
            inputState[1](():any=>{ 
                const selected = list.cities.slice()
                return(
                    {
                        citiesSelected: selected,
                        selectAll: true 
                    }
                ) 
            });
        } else {
            inputState[1]({ citiesSelected: [], selectAll: false });
        }
    }

    //Logic for delete each item when 'CLEAR' buttton is clicked
    const onClickClear = () => {
        inputState[1]({ citiesSelected: [], selectAll: false });
    }

    //Logic for delete an item when the 'X' is clicked
    const deleteItemHandler = (id: String) => {
        var i = -1
        for (let index = 0; index < inputState[0].citiesSelected.length; index++) {
            if (id === inputState[0].citiesSelected[index].id) {
                i = index
            }
        }
        //The element is found
        if (i !== -1) {
            inputState[1]((prevState): any => {
                prevState.citiesSelected.splice(i, 1)
                return ({
                    citiesSelected:  prevState.citiesSelected,
                    selectAll: prevState.selectAll
                })
            })
        }
    }
    const selectItemHandler = (item:{ id: String, name: String, chineseName: String }) =>{
        //When the checkbox of 'all selection' is unchecked
        if (!inputState[0].selectAll) {
            inputState[1]((prevState):any =>{
                prevState.citiesSelected.push(item)
                return({
                    selectAll: prevState.selectAll ,
                    citiesSelected: prevState.citiesSelected
                })

            })
        }
    }

    return (
        <div>
            <p id="title">Cities of China</p>
            <div className="Panels">
                <PanelList
                    cities={list.cities}
                    onSelectAll={onSelectAll}
                    onSelectItem={selectItemHandler}
                    deleteItemHandler={deleteItemHandler}
                />
                <PanelSelected
                    cities={inputState[0].citiesSelected}
                    onClear={onClickClear}
                    deleteItemHandler={deleteItemHandler}
                />
            </div>
        </div>
    )
}

export default Layout