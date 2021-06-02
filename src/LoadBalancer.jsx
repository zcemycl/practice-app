import React from 'react'
import { Route,Switch } from 'react-router-dom';
import { ProGraph,Random,Auth,Chatapp,NotFound } from './components';
import { Products,ThreeFiber,CommentLike } from './components';
import { Map,Annotate,Knowledge,ClusterMap } from './components';
import { Game } from './components'
import Profile from './components/Auth/pages/Profile';
import ProtectedRoute from './components/Auth/ProtectedRoute';

const LoadBalancer = ({products,setSelected,isTourOpen,
    setIsTourOpen,setAnchorEl,isAuth,setIsAuth}) => {
    
    return (
        <Switch>
        <Route exact path="/" render={() => (
            <Knowledge {...{setSelected,isTourOpen,
                setIsTourOpen,setAnchorEl}}/>)}/>
        <Route exact path="/prograph" render={() => (
            <ProGraph {...{setSelected}}/>)}/>
        <Route exact path="/auth">
            <Auth {...{isAuth,setIsAuth,setSelected}}/>
        </Route>
        <Route exact path="/gallery" render={() => (
            <Random {...{setSelected}}/>)}/>
        <Route exact path="/chatapp" render={() => (
            <Chatapp {...{setSelected}}/>)}/>
        <Route exact path="/3d" render={() => (
            <ThreeFiber {...{setSelected}}/>)}/>
        <Route exact path="/shop">
            <Products {...{products,setSelected}}/>
        </Route>
        <Route exact path="/map" render={() => (
            <Map {...{setSelected}}/>)}/>
        <Route exact path="/commentlike" render={() => (
            <CommentLike {...{setSelected}}/>)}/>
        <Route exact path="/annotate" render={() => (
            <Annotate {...{setSelected}}/>)}/>
        <Route exact path="/game" render={() => (
            <Game {...{setSelected}}/>)}/>
        
        <Route exact path="/clustermap" render={() => (
            <ClusterMap {...{setSelected}}/>)}/>
        <ProtectedRoute exact path="/profile" component={Profile}
            isAuth={isAuth}/>
        <Route render={() => (<NotFound {...{setSelected}}/>)}/>
        </Switch>
    )
}

export default LoadBalancer
