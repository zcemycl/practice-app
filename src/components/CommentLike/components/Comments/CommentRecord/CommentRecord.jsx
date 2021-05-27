import React from 'react'
import { Comment } from 'semantic-ui-react'

const CommentRecord = ({data}) => {
    return (
        <>
        {data
            .filter(d => d.Username && d.Comment)
            .map((d,index) => {
            if (d.Username && d.Comment){
                return <Comment key={index}>
                    <Comment.Content>
                    <Comment.Author as='a'>{d.Username}</Comment.Author>
                    <Comment.Metadata>
                        <div>{d.Timestamp}</div>
                    </Comment.Metadata>
                    <Comment.Text>{d.Comment}</Comment.Text>
                    </Comment.Content>
                </Comment>
            }
            return <></>
            })}
        </>
    )
}

export default CommentRecord


// export class CommentRecord extends Component {
//     constructor(props) {
//         super(props);
//         console.log(props)
//         // this.state =  {data:[]}
//         // console.log(props.data)
//         this.state = props.data
//     }


//     render() {
//         return (
//         <>
        
//         </>
//         )
//     }
// }

// export default CommentRecord
