import React,{useState} from 'react';
import './index.css';
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";

const Modal = props => {
    
    const{list,index, updateData, formEdit, editForm} = props
    const[editTitle,setEditTitle] = useState('');
    const[editDesc,setEditDesc] = useState('');

    const editTitles = (e) => {
        setEditTitle(e.target.value)
    };

    const editDescs = (e) => {
        setEditDesc(e.target.value)
    };

    const handleClick = () =>{
        updateData(index,editTitle, editDesc);
        editForm(false);
    }

    if(!props.show){
        return null
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    {
                        formEdit === true ? (
                            <input type='text' placeholder="edit title" placeholder={list[index].title} onChange={(e)=>editTitles(e)}/>
                        ) : (
                            <h4 className="modal-title">{list[index].title}</h4>
                        )
                    }
                </div>
                <div className="modal-body">
                    {
                        formEdit === true ? (
                            <input type='text' placeholder="edit Description" placeholder={list[index].description} onChange={(e)=>editDescs(e)}/>
                        ) : (
                            <h4 className="modal-title">{list[index].description}</h4>
                        )
                    }
                </div>
                <div className="modal-footer">
                    {
                        formEdit === true ? (
                            <button onClick={handleClick}>Submit</button>
                        ) : (
                            <div className="modal-title">
                                <button onClick={() => editForm(true)}  className="button">Edit</button>
                                <button onClick={props.onClose} className="button">Close</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        list: state.datas,
        formEdit: state.formEdit,
    };
  };
  
  function mapDispatchToProps(dispatch){
  return{
    updateData: (idx,title,desc) => dispatch(action.updateData(idx,title,desc)),
    editForm: (show) => dispatch(action.editForm(show))
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Modal);