import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    
    state = {
        modal: false,
        food: '',
        calories: 0
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const newItem = {
            food: this.state.food,
            calories: this.state.calories
        };

        //Add item via addItem action
        this.props.addItem(newItem);

        //Close modal
        this.toggle();
    }
    
    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                    className="addItem"
                >
                Add Item</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle} >Add food to daily consumption</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="food">Item</Label>
                                <Input 
                                    type="text"
                                    name="food"
                                    id="food"
                                    placeholder="Add food..."
                                    onChange={this.onChange}
                                />
                                <Input 
                                    type="number"
                                    name="calories"
                                    id="calories"
                                    placeholder="Add calories..."
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item    
})

export default connect(mapStateToProps, { addItem })(ItemModal);