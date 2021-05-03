import React, { Component } from 'react';
import styled from "styled-components";

const HoverTextArea = styled.textarea`
  color: #000;
  borderRadius: 10px;
  :hover {
		color: #ed1212;
		cursor: pointer;
	}
`

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
  }

  addComment(e) {
    // Prevent the default behaviour of form submit
    e.preventDefault();

    // Get the value of the comment box
    // and make sure it not some empty strings
    const comment = e.target.elements.comment.value.trim();
    const name = e.target.elements.name.value.trim();

    // Make sure name and comment boxes are filled
    if (name && comment) {
      const commentObject = { name, comment };

      // Publish comment
      /*global Ably*/
      const channel = Ably.channels.get('comments');
      channel.publish('add_comment', commentObject, err => {
        if (err) {
          console.log('Unable to publish message; err = ' + err.message);
        }
      });

      // Clear input fields
      e.target.elements.comment.value = '';
      e.target.elements.name.value = '';
    }
  }

  render() {
    return (
      <div>
        <h3 style={{fontFamily:"sans-serif"}}>
          Kindly leave your thoughts below</h3>
        <form 
          style={{}}
          onSubmit={this.addComment}>
          <div style={{}}>
            <div style={{}}>
              <input type="text"
               style={{width:'50%',fontFamily:"sans-serif"}}
               name="name" placeholder="Your name"/>
            </div>
          </div>
          <div >
            <div >
              <HoverTextArea
                style={{width:'50%',border:'1px solid #888',
                padding:'5px',height:'12vh',
                fontFamily:"sans-serif",
                borderRadius:'5px',
                transition: "all 0.2s",
                "&:hover":{backgroundColor:"red"}}}
                name="comment" placeholder="Leave a comment"/>

            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;