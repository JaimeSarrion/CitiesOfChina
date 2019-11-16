import React from 'react'
import './PanelSelected.scss'
import CitiesListSelected from '../../Cities/Selecteds/CitiesListSelected'

interface Props {
    cities: Array<{ id: String, name: String, chineseName: String }>;
    onClear():any
}


const PanelSelected:React.FC<Props> = ({cities, onClear}) => {

    console.log(cities[0])
    return(
        <div className="ContainerSelected">
            <div className = "Header">
                <p>2 items</p>
                <button onClick={onClear}>CLEAR</button>
            </div>
            <div>
                <CitiesListSelected cities={cities}/>
            </div>
        </div>

    )
}

export default PanelSelected