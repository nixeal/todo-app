import React from "react";
import { Button} from "react-bootstrap";

class Todoitem extends React.Component {
  render() {
    return (
          <li className="mt-5 vh-50 fs-3 mb-5" key={this.props.list.title} style={{listStyle:'none'}}>
            <input
            className="mx-4"
              type="checkbox"
              checked={this.props.list.completed}
              onChange={() => this.props.handleChange(this.props.list.title)}
            ></input>
            {this.props.list.title}
            <Button
              className="btn-md btn-outline-danger text-white ms-2"
              onClick={() => this.props.deleteTodo(this.props.list.title)}
            >
              Delete
            </Button>
          </li>
    );
  }
}
export default Todoitem;
