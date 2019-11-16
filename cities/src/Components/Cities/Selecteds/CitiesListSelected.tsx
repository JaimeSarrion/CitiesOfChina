import React from 'react'
import CitiesItemSelected from './CityItemSelected/CityItemSelected'

interface Props {
    cities: Array<{ id: String, name: String, chineseName: String }>
}

const CitiesListSelected:React.FC<Props> =()=>{

    return(
        <div  className="Scroller">
            <CitiesItemSelected
                name="Paco"
                chinesename="Calatraba"
                id="Calatraba"
            />
            <CitiesItemSelected
                name="Paco"
                chinesename="Calatraba"
                id="Calatraba"
            />
            <CitiesItemSelected
                name="Paco"
                chinesename="Calatraba"
                id="Calatraba"
            />
            <CitiesItemSelected
                name="Paco"
                chinesename="Calatraba"
                id="Calatraba"
            />
        </div>
    )

}

export default CitiesListSelected