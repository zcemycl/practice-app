import React from 'react'
import { Route,Switch,Redirect,useLocation } from 'react-router-dom';
import { ProGraph,Random,Auth,Chatapp,NotFound } from './components';
import { Signup,Login,Forgot,Reset,
    // Products,
    ThreeFiber,CommentLike } from './components';
import { Map,Annotate,Knowledge,ClusterMap } from './components';
import { Game,VisitRecords } from './components'
import Profile from './components/Auth/pages/Profile';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import {useAuth} from './contexts/AuthContext';

const LoadBalancer = ({products,isTourOpen,
    setIsTourOpen,setAnchorEl,isAuth,setIsAuth}) => {
    
    return (
        <Switch>
        <Route exact path="/" render={() => (
            <Knowledge {...{isTourOpen,setIsTourOpen,setAnchorEl}}/>)}/>
        <ProtectedContent exact path="/signup" component={Signup}/>
        <ProtectedContent exact path="/forgot" component={Forgot}/>
        <ProtectedContent exact path="/login" component={Login}/>
        <ProtectedContent exact path="/reset" component={Reset}/>
        <Route exact path="/prograph" component={ProGraph}/>
        <Route exact path="/auth"><Auth {...{isAuth,setIsAuth}}/></Route>
        <Route exact path="/gallery" component={Random}/>
        <Route exact path="/chatapp" component={Chatapp}/>
        <Route exact path="/3d" component={ThreeFiber}/>
        {/* <Route exact path="/shop"><Products {...{products}}/></Route> */}
        <Route exact path="/commentlike" component={CommentLike}/>
        <ProtectedContent exact path="/map" component={Map}/>
        <ProtectedContent exact path="/annotate" component={Annotate}/>
        <ProtectedContent exact path="/game" component={Game}/>
        <ProtectedContent exact path="/clustermap" component={ClusterMap}/>
        <ProtectedContent exact path="/visitrecords" component={VisitRecords}/>
        <ProtectedRoute exact path="/profile" component={Profile} 
            isAuth={isAuth}/>
        <Route component={NotFound}/>
        </Switch>
    )
}

function ProtectedContent(props){
    const {currentUser} = useAuth();
    const {path} = props;
    const location = useLocation();
    if (path==='/login'||path==='/signup'||path==='/reset'||path==='/forgot'){
        return currentUser ?(<Redirect to={location.state?.from ?? '/visitrecords'}/>) : (<Route {...props}/>)
    }
    return currentUser? <Route {...props}/>:<Redirect to={{pathname:'/login',state:{from:path}}}/>
}

export default LoadBalancer
