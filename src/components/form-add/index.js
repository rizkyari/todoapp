import React,{useState} from "react";
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";

const FormAdd = (props) => {
    const{postData, formStatus} = props
    const[newTitle, setNewTitle] = useState('');
    const[newDesc, setNewDesc] = useState('');

    const changeTitle = event => {
        setNewTitle(event.target.value);
      };

    const changeDesc = event => {
        setNewDesc(event.target.value);
      };

    const handleSubmit = () =>{
        postData(newTitle, newDesc);
    }

    return (
        <>
            {formStatus === true ? (
                <div >
                <input type='text' placeholder="Input the title" onChange={(e)=>changeTitle(e)}/>
                <input type='text' placeholder="Input the description" onChange={(e)=>changeDesc(e)}/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            ) : ''}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        formStatus: state.form,
    };
  };
  
function mapDispatchToProps(dispatch){
  return{
    postData: (title,description) => dispatch(action.postData(title,description)),
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);