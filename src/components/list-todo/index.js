import React,{useState} from "react";
import './index.css';
import Modal from "../modal/index";
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";

const ListTodo = (props) => {
    const {idx, choosenIndex, list, finishTask } = props;
    const[show, setShow] = useState(false);

    const openDetail = (i) => {
        setShow(true);
        choosenIndex(i)
    }
    return (
        <div>
            <div className="list-column">
                <div className="list-undone">
                    <div className="title-list">
                        List of Undone:
                    </div>
                    {list.map((item,i)=>{
                        return(
                            <div key={i}>
                                <div  className="list-todo">
                                    <div>{item.status === 0 ? (
                                        <div className="undone">
                                            <div onClick={()=>openDetail(i)}>{item.title}</div>
                                            <button onClick={() => finishTask(i)}>Done</button>
                                        </div>
                                        ) : ""}</div>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
                <div className="list-done">
                    <div className="title-list">
                        What you've done:
                    </div>
                    {list.map((item,i)=>{
                        return(
                            <div key={i}>
                                <div onClick={()=>openDetail(i)} className="list-todo done">
                                    {item.status === 1 ? item.title : ""}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Modal onClose={() => setShow(false)} show={show} index={idx} list={list}/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        idx: state.idx,
    };
  };
  
  function mapDispatchToProps(dispatch){
  return{
    choosenIndex: (index) => dispatch(action.choosenIndex(index)),
    finishTask: (index) => dispatch(action.finishTask(index)),
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);