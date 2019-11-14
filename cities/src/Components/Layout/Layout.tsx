import React, { Component } from 'react'
import PanelList from '../Panels/PanelList/PanelList'
import PanelSelected from '../Panels/PanelSelected/PanelSelected'
class Layout extends Component{


    render(){
        return(
            <div>
                <h6>Cities of china</h6>
                <PanelList></PanelList>
                <PanelSelected></PanelSelected>
            </div>
        )
    }
}

export default Layout