import React,{useState} from 'react';
import './index.css';
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";

const Modal = props => {
    
    const{list,index, updateData, formEdit, editForm, deleteData} = props
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

    const handleDelete = () => {
        deleteData(index);
        props.onClose();
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
                            <input type='text' placeholder={list[index].title} onChange={(e)=>editTitles(e)}/>
                        ) : (
                            <div>
                                <h4 className="modal-title">Title : </h4>
                                <div>{list[index].title}</div>
                            </div>
                            
                        )
                    }
                </div>
                <div className="modal-body">
                    {
                        formEdit === true ? (
                            <input type='text' placeholder={list[index].description} onChange={(e)=>editDescs(e)}/>
                        ) : (
                            <div>
                                <h4 className="modal-title">Desc : </h4>
                                <div>{list[index].description}</div>
                            </div>
                        )
                    }
                </div>
                <div className="modal-footer">
                    {
                        formEdit === true ? (
                            <button onClick={handleClick}>Submit</button>
                        ) : (
                            <div className="modal-button">
                                <button onClick={() => editForm(true)}  className="button green">Edit</button>
                                {list[index].status === 1 ? '' : (<button onClick={handleDelete} className="button red">Delete</button>)}
                                <button onClick={props.onClose} className="button yellow">Close</button>
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
    editForm: (show) => dispatch(action.editForm(show)),
    deleteData: (index) => dispatch(action.deleteData(index))
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Modal);