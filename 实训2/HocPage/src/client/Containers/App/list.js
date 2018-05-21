import React, {Component} from 'react'
import Hoc from './Hoc'

class List extends Component {
    
    render(){
        return (
            <div className = 'list'>
                {
                    this.props.data.map((v,i)=>{
                        return (
                            <li key = {i}><i>{v.name}</i></li>
                        )
                    })
                }
            </div>
        )
    }
}
export default Hoc(List)