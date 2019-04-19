import React, { Component } from "react";
import { connect } from "react-redux";
import {
  listPollRequest,
  takePollRequest,
  deletePollRequest,
  deletePollOptionRequest,
  addPollOptionRequest,
  editPollTitleRequest
} from "../redux/actions";
const GETDATA = require("../services/GetData");
class ListPoll extends Component {
  componentDidMount() {
    this.props.listPollRequest();
  }
  constructor(props) {
    super(props);
    this.state = {
      edit_id: "",
      poll_title: ""
    };
  }
  _toggleEdit = edit_id => {
    this.setState({ edit_id });
  };

  render() {
    let adminId = GETDATA("loginData");
    let { edit_id } = this.state;
    return (
      <div className="listpoll">
        <div className="accordion">
          {this.props.polldata.data &&
            this.props.polldata.data.map((dat, index) => (
              <div className="card mb-100" key={dat._id}>
                <div className="card-header" id={dat._id}>
                  <h5 className="mb-0">
                    {edit_id === dat._id ? (
                      <form
                        className="editform"
                        onSubmit={sub => {
                          sub.preventDefault();
                          this.props.editPollTitleRequest({
                            pollId: dat._id,
                            title: this.refs.pollTitle.value
                          });
                          this.setState({ edit_id: "" });
                        }}
                      >
                        <input
                          className="form-control editform"
                          ref="pollTitle"
                          type="text"
                          required
                          placeholder={dat.title}
                        />
                        <input
                          type="submit"
                          className="btn edit-poll btn-success"
                          value="update"
                        />
                      </form>
                    ) : (
                      <div className="b-link">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          {dat.title}
                        </button>
                      </div>
                    )}
                    {adminId &&
                    adminId.user_id === "5a0419a09407e50012e97b4b" ? (
                      <div className="btn-group">
                        {edit_id === dat._id ? (
                          <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => {
                              this.setState({ edit_id: "" });
                            }}
                          >
                            Cancle
                          </button>
                        ) : (
                          <div className="b-edit">
                            <button
                              type="button"
                              className="btn btn-info"
                              onClick={() => this._toggleEdit(dat._id)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() =>
                                this.props.deletePollRequest({
                                  pollId: dat._id
                                })
                              }
                            >
                              Delete
                            </button>
                          </div>
                        )}
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
                  <div className="card-body">
                    {adminId &&
                    adminId.user_id === "5a0419a09407e50012e97b4b" ? (
                      <div className="add-opt pb-10">
                        <form
                          className="form-inline"
                          onSubmit={sub => {
                            sub.preventDefault();
                            this.props.addPollOptionRequest({
                              pollId: dat._id,
                              option: this.refs.poll.value
                            });
                          }}
                        >
                          <div className="form-group mx-sm-3 mb-2 poll-opt">
                            <input
                              type="text"
                              className="form-control"
                              ref="poll"
                              placeholder="type new option"
                              required
                            />
                          </div>
                          {/* <input type="su">Add</input> */}
                          <button
                            type="submit"
                            className="btn btn-primary mb-2"
                          >
                            Add
                          </button>
                        </form>
                      </div>
                    ) : (
                      <span />
                    )}

                    {dat.options.map((opt, index) =>
                      adminId &&
                      adminId.user_id === "5a0419a09407e50012e97b4b" ? (
                        <div className="opt-actions" key={index}>
                          {" "}
                          {/* for admin */}
                          <button className="btn btn-info mr-1 mb-2">
                            {opt.option}
                          </button>
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-danger mb-2"
                              onClick={() =>
                                this.props.deletePollOptionRequest({
                                  pollId: dat._id,
                                  text: opt.option
                                })
                              }
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
  deletePollOptionRequest: data => dispatch(deletePollOptionRequest(data)),
  addPollOptionRequest: data => dispatch(addPollOptionRequest(data)),
  editPollTitleRequest: data => dispatch(editPollTitleRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPoll);
