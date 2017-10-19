import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveNewCommentToServer, saveNewCommentToStore, saveEditedCommentToStore, saveEditedCommentToServer  } from '../actions'


class NewCommentForm extends Component {

    constructor(props) {

        super();
        
        this.state = {
            message: props.commentIsBeingEdited? props.commentWhichIsBeingEdited.body:"",
            userName: props.commentIsBeingEdited? props.commentWhichIsBeingEdited.author:"",
            newComment: true,
            comment:null
        }
        this.handleSumbit = this.handleSumbit.bind(this);

        this.clearFields = this.clearFields.bind(this);


    }





    handleSumbit(newComment) {

        if (newComment) {

            return () => {
                // console.log('this is a new comment')
                this.props.saveNewCommentToServer({ userName: this.state.userName, message: this.state.message, parentId:this.props.postId });
                this.props.saveNewCommentToStore({ userName: this.state.userName, message: this.state.message, parentId:this.props.postId });

               // const newPost = new CommentConstructor(this.state);
                // stringify that comment
                // const stringified = JSON.stringify(newPost);
                // create headers
                // const headers = { authorization: 'crazypassword', 'Content-Type': 'application/json' };
                // // make the post to server
                // fetch("http://localhost:3001/comments", {
                //     headers: headers,
                //     method: 'POST',
                //     body: stringified
                // })

                this.clearFields()
            
            }
        } else {

            return () => {

               console.log('this is an editd comment')
                const editObject = { author: this.state.userName, body: this.state.message, id:this.state.comment.id, parentId:this.state.comment.parentId, voteScore:this.state.comment.voteScore };
                 this.props.saveEditedCommentToServer(editObject);
                 this.props.saveEditedCommentToStore(editObject);
                // stringify that "edit object"
               // const stringified = JSON.stringify(editObject);
                // create headers
               // console.log(stringified)
              //  const headers = { authorization: 'crazypassword', 'Content-Type': 'application/json' };
                // make the put to server
                // fetch("http://localhost:3001/comments/" + this.props.editId, {
                //     headers: headers,
                //     method: 'PUT',
                //     body: stringified
                // })

                this.clearFields()
               // this.props.updatePost(editObject, this.props.editId)

            }




        }

    }






    clearFields() {

        this.setState({
            message: '',
            userName: ''
        })

     //   this.props.commentBeingEditedFalse()
    }




    componentWillReceiveProps(nextProps) {

      //  if (this.props.formMessage !== nextProps.formMessage || this.props.formUserName !== nextProps.formUserName)
            this.setState({ message: nextProps.commentWhichIsBeingEditedId? nextProps.commentWhichIsBeingEditedId.body:'', 
                            userName: nextProps.commentWhichIsBeingEditedId? nextProps.commentWhichIsBeingEditedId.author:'',
                            comment: nextProps.commentWhichIsBeingEditedId? nextProps.commentWhichIsBeingEditedId:'', 
                            newComment:!nextProps.commentIsBeingEdited })
        // if (this.props.commentBeingEdited !== nextProps.commentBeingEdited)
        //     this.setState({ newComment: !nextProps.commentBeingEdited })
    }


    render() {





        return (

            <div className = "columns is-centered">
                <div className = "column is-8">
                    <div className = "field">
                        <label className = "label"> Username </label> 
                        <div className = "control has-icons-left" >
                            <input className = "input is-success" value = { this.state.userName } type = "text" onChange = { (e) => this.setState({ userName: e.target.value })} placeholder = "Joe Smith"/>
                            <span className = "icon is-small is-left">
                                <i className = "fa fa-user"> </i> 
                            </span> 
                         </div>
                    </div>


            <div className = "field" >
            <label className = "label" > Message </label> 
                <div className = "control" >
                <textarea className = "textarea" value = { this.state.message } onChange = { (e) => this.setState({ message: e.target.value }) } placeholder = "Post your message here" > </textarea> 
            </div> 
        </div>
            <div className = "field is-grouped" >
                <div className = "control" >
                <button className = "button is-primary" onClick = { this.handleSumbit(this.state.newComment) } > Save </button> 
            </div> 
            <div className = "control" >
            <button className = "button is-link" onClick = { this.clearFields } > Cancel </button> 
            </div> 
        </div>
        </div> 
        </div>


        )
    }


}



const mapDispatchToProps = dispatch => {
  return {
    saveNewCommentToServer : (comment) =>dispatch(saveNewCommentToServer(comment)),

    saveNewCommentToStore : (comment) =>dispatch(saveNewCommentToStore(comment)),

    saveEditedCommentToServer : (comment) =>dispatch(saveEditedCommentToServer(comment)),

    saveEditedCommentToStore : (comment) =>dispatch(saveEditedCommentToStore(comment)),

  }
}


const mapStateToProps = state =>{

   return {
    commentIsBeingEdited:state.commentIsBeingEdited,
    commentWhichIsBeingEditedId:state.commentWhichIsBeingEdited

    }
}



export default connect(mapStateToProps,mapDispatchToProps)(NewCommentForm)