import React, { Component } from 'react'
import store from 'store'
import reducer, { key } from 'reducers/hello'
import {actions} from 'actions/hello'
import styles from './hello.less'
import connect from 'utils/ConnectDecorator'
import { withRouter } from 'react-router-dom'
import { injectReducer } from 'utils/createReducer'
import AsyncLoading from 'utils/AsyncLoadingDecorator'

@withRouter
@connect(key, actions)
@AsyncLoading
export default class Hello extends Component {
    render() {
    // console.log(this, 'this')
        return (
            <div className={styles.hello}>
            Hello1
            </div>
        )
    }
}

// const HelloComponent =  connect((state)=>{
// 	return state[key]
// }, (dispatch) =>{
// 	return bindActionCreators(actions, dispatch)
// })(Hello)


injectReducer(store, { key, reducer })

// export default withRouter(HelloComponent)