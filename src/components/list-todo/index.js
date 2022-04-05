import React from "react";
import './index.css';

const ListTodo = (props) => {
    const {list } = props;
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
                                <div>
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
                                
                                <div>
                                    {item.status === 1 ? item.title : ""}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ListTodo;