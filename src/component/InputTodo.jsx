import React from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
class Inputtodo extends React.Component {
    state = {
        title: ""
    };

    onChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoItem(this.state.title);
            this.setState({
                title: ""
            });
        } else {
            alert("Please write item");
        }
    };

    render() {
      
        return (
                <div className='bg-primary m-0 p-0  shadow'>
                    <Form >
                        <div className="row">
                            <FormGroup>
                                <FormControl
                                    className=" fs-2 w-50 mx-auto my-2 text-center"
                                    type="text"
                                    value={this.state.title}
                                    placeholder="Enter the todo item"
                                    onChange={this.onChange}
                                >
                                </FormControl>
                            </FormGroup>
                            <Button className="btn-outline-warning btn-lg w-25 mx-auto text-white  my-2 p-2" onClick={this.handleSubmit}>Submit</Button>
                        </div>
                    </Form>
                </div>
        );
    }
}
export default Inputtodo;
