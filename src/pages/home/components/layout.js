import React,{useEffect} from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/actions/action";

import Title from "../../../components/title/index";
import ListTodo from "../../../components/list-todo/index";
import FormAdd from "../../../components/form-add/index";

const Home = (props) => {
    const { getData, list, visibleForm,formStatus } = props;
    useEffect(() => {
        getData();
      },[]);

    const hideForm = () => {
        visibleForm(true);
    }

    return(
        <div>
            <Title text={'My To Do List'}/>
            {
                formStatus === true ? '' : (
                    <button onClick={hideForm}>Add To Do List</button>
                )
            }
            <FormAdd />
            <ListTodo list={list}/>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.datas,
        formStatus: state.form,
    };
  };
  
  function mapDispatchToProps(dispatch){
  return{
      getData: () => dispatch(action.getData()),
      visibleForm: (status) => dispatch(action.visibleForm(status))
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);