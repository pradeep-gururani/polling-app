import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addPollRequest} from '../redux/actions';
class AddPoll extends Component {

    addpoll = data =>{
        data.preventDefault();
        let strOpt = `${this.refs.opt1.value}____${this.refs.opt2.value}____${this.refs.opt3.value}____${this.refs.opt4.value}`;

        let newPoll= {
            title: this.refs.title.value,
            options: strOpt
                    
        }

        this.props.addPollRequest(newPoll);

    }

    render() { 
        return (
            <div className="addpoll">
                <h3 className="mb-3">Add New Poll</h3>
                <form onSubmit = {this.addpoll}>
                        <input
                            type="text"
                            name="title"
                            ref="title"
                            className="form-control mb-3"
                            placeholder="poll title"
                            required
                        />
                        <input
                            type="text"
                            name="option1"
                            ref="opt1"
                            className="form-control mb-3"
                            placeholder="option-1"
                            required
                        />
                        <input
                            type="text"
                            name="option2"
                            ref="opt2"
                            className="form-control mb-3"
                            placeholder="option-2"
                            required
                        />
                        <input
                            type="text"
                            name="option3"
                            ref="opt3"
                            className="form-control mb-3"
                            placeholder="option-3"
                            required
                        />
                        <input
                            type="text"
                            name="option4"
                            ref="opt4"
                            className="form-control mb-3"
                            placeholder="option-4"
                            required
                        />
                <input type="submit" className="btn btn-info" value="submit" />
                </form>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    addedpoll: state.addpoll
  });
  
  const mapDispatchToProps = dispatch => ({
    addPollRequest: data => dispatch(addPollRequest(data))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddPoll);