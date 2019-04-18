import React, { Component } from "react";
import { connect } from "react-redux";
import { listPollRequest, takePollRequest } from "../redux/actions";
class ListPoll extends Component {

  componentDidMount() {
    this.props.listPollRequest();
  }
  render() {          
    return (
      <div className="col-sm-9">
        <div className="accordion">
          {this.props.polldata.data &&
            this.props.polldata.data.map(dat => (
            <div className="card">
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
                </h5>
              </div>
              <div
                id={dat._id}
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  {dat.options.map(opt => (
                    <button
                      className="btn btn-info mr-1 mb-2"
                      key={opt}
                      onClick={() =>
                        this.props.takePollRequest({
                          poll_id: dat._id,
                          option_text: opt.option
                        })
                      }
                    >
                      {opt.option}
                    </button>
                  ))}
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
  listPollRequest: data => dispatch(listPollRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPoll);
