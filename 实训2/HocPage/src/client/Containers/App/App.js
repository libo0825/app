import React, { Component} from 'react'
import { connect } from 'react-redux'
import { fetchPage, currentPage  } from '../../Redux/actions'
import './App.css'

import List from './list'

class App extends Component{
    constructor(){
        super()
        this.state = {
            
        }
    }
    componentDidMount() {
        const { dispatch, conditions } = this.props;
        dispatch(fetchPage(conditions.currentPage, conditions.pageSize))
        // this.props.dispatch(fetchPage(1))
    }
    componentWillReceiveProps(nextProps) {
        if ((this.props.conditions.currentPage !== nextProps.conditions.currentPage) ||
             (this.props.conditions.pageSize !== nextProps.conditions.pageSize)) {
            this.props.dispatch(fetchPage(nextProps.conditions.currentPage, nextProps.conditions.pageSize));
        }
    }
    render(){
        const { dispatch } = this.props;
        return(
            <div>
                <List {...this.props.conditions} getUpdateCur={(cur, size) => {dispatch(currentPage(cur, size))}}/>
            </div>
        )   
    }
}

const mapStateToProps = (state) => {
    return {
        conditions: state.conditions,
    }
}

export default connect(mapStateToProps)(App)