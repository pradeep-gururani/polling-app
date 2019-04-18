import React, { Component } from "react";
import { connect } from "react-redux";
import { listPollRequest, takePollRequest, deletePollRequest } from "../redux/actions";
const GETDATA = require("../services/GetData");
class ListPoll extends Component {

  componentDidMount() {
    this.props.listPollRequest();
  }
  deletepoll = data =>{
    console.log('--data------',data);
    this.props.deletePollRequest({pollId:data});
  }
  render() {          
    let adminId = GETDATA('loginData'); 
    return (
      <div className="listpoll">
        <div className="accordion">
          {this.props.polldata.data &&
            this.props.polldata.data.map(dat => (
            <div className="card mb-100" key = {dat._id}>
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
                  {(adminId && adminId.user_id === '5a0419a09407e50012e97b4b')?
                    <div className="btn-group" >
                      <button type="button" className="btn btn-info">Edit</button>
                      <button type="button" className="btn btn-danger"
                        onClick={()=>this.deletepoll(dat._id)}
                      >Delete {dat._id}</button>                    
                    </div>
                    :<span></span>
                  }
                </h5>
              </div>
              <div
                id={dat._id}
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  {dat.options.map((opt,index) => (
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
  listPollRequest: data => dispatch(listPollRequest(data)),
  deletePollRequest: data => dispatch(deletePollRequest(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPoll);
