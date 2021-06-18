import {useEffect} from 'react'

export const GetSize = ({cardRef,dispatch}) => {
    useEffect(()=>{
        if (cardRef){
            dispatch({type:'value',key:'w',value:cardRef.current.clientWidth})
            dispatch({type:'value',key:'h',value:cardRef.current.clientHeight})
            dispatch({type:'value',key:'wW',value:window.innerWidth})
        }
    },[cardRef,dispatch])

    useEffect(()=>{
        const handleResize = () => {
            if (cardRef){
                dispatch({type:'value',key:'w',value:cardRef.current.clientWidth})
                dispatch({type:'value',key:'h',value:cardRef.current.clientHeight})
                dispatch({type:'value',key:'wW',value:window.innerWidth})
            }
        }
        window.addEventListener('resize',handleResize)
        return () => window.removeEventListener('resize',handleResize)
    },[cardRef,dispatch])
}

