import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'
import {createReduxBoundAddListener} from 'react-navigation-redux-helpers'

// Adding Navigation as a service
import NavigationService from '../Services/NavigationServices';


const addListener = createReduxBoundAddListener('root')
// here is our redux-aware our smart component
function ReduxNavigation (props) {
    const { dispatch, nav } = props
    const navigation = {
        dispatch,
        state: nav,
        addListener
    }

    return <AppNavigation navigation={navigation} ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
    }}/>
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
