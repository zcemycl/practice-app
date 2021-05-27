import React from 'react'
import CommentRecord from './CommentRecord/CommentRecord'
import Forms from './Forms/Forms';

const Comments = ({data,setData}) => {
    return (
        <>
        <CommentRecord data={data}/> 
        <Forms data={data} setData={setData}/>
        </>
    )
}

export default Comments
