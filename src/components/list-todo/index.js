import React,{useState} from "react";
import './index.css';
import Modal from "../modal/index";
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";

const ListTodo = (props) => {
    const {idx, choosenIndex, list } = props;
    const[show, setShow] = useState(false);

    const openDetail = (i) => {
        setShow(true);
        choosenIndex(i)
    }
    return (
        <div>
            <div className="list-column">
                <div className="list-undone">
                    <div>
                        List of Undone:
                    </div>
                    {list.map((item,i)=>{
                        return(
                            <div key={i}>
                                <div onClick={()=>openDetail(i)} className="list-todo">
                                    {item.status === 0 ? item.title : ""}
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
                <div className="list-done">
                    <div>
                        What you've done:
                    </div>
                    {list.map((item,i)=>{
                        return(
                            <div key={i}>
                                <div onClick={()=>openDetail(i)} className="list-todo">
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
    choosenIndex: (index) => dispatch(action.choosenIndex(index))
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);