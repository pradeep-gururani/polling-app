import React, { Component } from "react";
import { connect } from "react-redux";
import {
  listPollRequest,
  takePollRequest,
  deletePollRequest,
  deletePollOptionRequest
} from "../redux/actions";
const GETDATA = require("../services/GetData");
class ListPoll extends Component {
  componentDidMount() {
    this.props.listPollRequest();
  }
  _deletepoll = data => {
    console.log("--data------", data);
    this.props.deletePollRequest({ pollId: data });
  };
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
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {dat.title}
                    </button>
                    {adminId &&
                    adminId.user_id === "5a0419a09407e50012e97b4b" ? (
                      <div className="btn-group">
                        <button type="button" className="btn btn-info">
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => this._deletepoll(dat._id)}
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
                            <button type="button" className="btn btn-danger"
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPoll);
