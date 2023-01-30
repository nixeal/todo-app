import React from "react";
import Todoitem from "./TodoItem";

class Todolist extends React.Component {
    render() {
        return (
            <div className="bg-primary text-white">
                {this.props.lists.map((list) => {
                    return (
                        <Todoitem
                            key={list.title}
                            list={list}
                            handleChange={this.props.handleChange}
                            deleteTodo={this.props.deleteTodo}
                        />
                    );
                })}
            </div>
        );
    }
}
export default Todolist;
