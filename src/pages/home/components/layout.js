import React,{useEffect} from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/actions/action";

import Title from "../../../components/title/index";
import ListTodo from "../../../components/list-todo/index";

const Home = (props) => {
    const { getData, list } = props;
    useEffect(() => {
        getData();
      },[]);
    return(
        <div>
            <Title text={'My To Do List'}/>
            <ListTodo list={list}/>
            {/* <div>
                {list.map((item,i)=>{
                    return(
                        <div key={i}>
                            <div>{item.status === 1 ? item.title : ""}</div>
                        </div>
                    )
                })}
            </div> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.datas,
    };
  };
  
  function mapDispatchToProps(dispatch){
  return{
      getData: () => dispatch(action.getData()),
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);