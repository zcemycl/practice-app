import React from 'react'
import { Route,Switch } from 'react-router-dom';
import { ProGraph,Random,Auth,Chatapp,NotFound } from './components';
import { 
    // Products,
    ThreeFiber,CommentLike } from './components';
import { Map,Annotate,Knowledge,ClusterMap } from './components';
import { Game,VisitRecords } from './components'
import Profile from './components/Auth/pages/Profile';
import ProtectedRoute from './components/Auth/ProtectedRoute';

const LoadBalancer = ({products,isTourOpen,
    setIsTourOpen,setAnchorEl,isAuth,setIsAuth}) => {
    
    return (
        <Switch>
        <Route exact path="/" render={() => (
            <Knowledge {...{isTourOpen,setIsTourOpen,setAnchorEl}}/>)}/>
        <Route exact path="/prograph" component={ProGraph}/>
        <Route exact path="/auth"><Auth {...{isAuth,setIsAuth}}/></Route>
        <Route exact path="/gallery" component={Random}/>
        <Route exact path="/chatapp" component={Chatapp}/>
        <Route exact path="/3d" component={ThreeFiber}/>
        {/* <Route exact path="/shop"><Products {...{products}}/></Route> */}
        <Route exact path="/map" component={Map}/>
        <Route exact path="/commentlike" component={CommentLike}/>
        <Route exact path="/annotate" component={Annotate}/>
        <Route exact path="/game" component={Game}/>
        <Route exact path="/clustermap" component={ClusterMap}/>
        <Route exact path="/visitrecords" component={VisitRecords}/>
        <ProtectedRoute exact path="/profile" component={Profile} 
            isAuth={isAuth}/>
        <Route component={NotFound}/>
        </Switch>
    )
}

export default LoadBalancer
