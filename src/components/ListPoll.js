import React, { Component } from "react";
import { connect } from "react-redux";
import {
  listPollRequest,
  takePollRequest,
  deletePollRequest,
  deletePollOptionRequest,
  addPollOptionRequest,
} from "../redux/actions";
const GETDATA = require("../services/GetData");
class ListPoll extends Component {
  componentDidMount() {
    this.props.listPollRequest();
  }
  constructor(props) {
    super(props);
    this.state = { 
                  edit_id: ''
                 };
  }
  _toggleEdit = data =>{
    // this.setState({});
  }
  render() {
    let adminId = GETDATA("loginData");
    return (
      <div className="listpoll">
        <div className="accordion">
          {this.props.polldata.data &&
            this.props.polldata.data.map(dat => (
              <div className="card mb-100" key={dat._id}>
                <div className="card-header" id={dat._id}>
                  <h5 className="mb-0">
                    {(this.state.edit_id === dat._id)
                    ?<input className="form-control" type="text" placeholder="Default input"></input>                
                    :
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {dat.title}
                    </button>
                    }
                    {adminId &&
                    adminId.user_id === "5a0419a09407e50012e97b4b" ? (
                      <div className="btn-group">

                        <button type="button" className="btn btn-info"
                          onClick={this._toggleEdit(dat._id)}
                        >
                          Edit
                        </button>

                        <button type="button" className="btn btn-success"
                        
                        >
                          Update
                        </button>

                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => this.props.deletePollRequest({ pollId: dat._id})}
                        >
                          Delete
                        </button>
                      </div>
                    ) : (
                      <span />
                    )}
                  </h5>
                </div>
                <div
                  id={dat._id}
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body" >
                  {(adminId &&
                      adminId.user_id === "5a0419a09407e50012e97b4b") 
                      ? 
                    <div className="add-opt pb-10">
                      <form className="form-inline"
                          onSubmit={(sub)=>{
                            sub.preventDefault();
                            this.props.addPollOptionRequest({pollId:dat._id,option:this.refs.poll.value})
                          }
                        }
                      >                      
                        <div className="form-group mx-sm-3 mb-2 poll-opt">                          
                          <input type="text" className="form-control" ref="poll" placeholder="type new option" required></input>
                        </div>
                        {/* <input type="su">Add</input> */}
                        <button type="submit" className="btn btn-primary mb-2">Add</button>
                      </form>
                    </div>
                    :<span></span>
                    }

                    {dat.options.map((opt, index) =>
                      adminId &&
                      adminId.user_id === "5a0419a09407e50012e97b4b" ? (
                        <div className="opt-actions" key={index}>  {/* for admin */}
                          <button
                            className="btn btn-info mr-1 mb-2"                                                                                    
                          >
                            {opt.option}
                          </button>

                          <div className = "btn-group">
                            <button type="button" className="btn btn-danger mb-2"
                              onClick ={()=>this.props.deletePollOptionRequest({pollId:dat._id,text:opt.option})}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          className="btn btn-info mr-1 mb-2"
                          key={index}
                          onClick={() =>
                            this.props.takePollRequest({
                              poll_id: dat._id,
                              option_text: opt.option
                            })
                          }
                        >
                          {opt.option}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  polldata: state.listPoll.data
});

const mapDispatchToProps = dispatch => ({
  takePollRequest: data => dispatch(takePollRequest(data)),
  listPollRequest: data => dispatch(listPollRequest(data)),
  deletePollRequest: data => dispatch(deletePollRequest(data)),
  deletePollOptionRequest : data => dispatch(deletePollOptionRequest(data)),
  addPollOptionRequest : data => dispatch(addPollOptionRequest(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPoll);
