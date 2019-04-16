import React, { Component } from 'react';
import {connect} from 'react-redux';
class ListPoll extends Component {
    render() { 
        console.log('list',this.props.state.listPoll.data.data);
        
        return (
            <div className = "col-sm-9">
                <div className="accordion">                                           
                            {this.props.state.listPoll.data.data.map(dat=>(
                            <div className="card" key ={dat}> 
                                <div class="card-header" id={dat}>
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        {dat.title}
                                        </button>
                                    </h5>
                                </div>
        
                                <div id={dat} class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body">
                                        
                                       {dat.options.map(opt=>(                                           
                                           <button className ="btn btn-info" key={opt}>
                                                {opt.option}
                                             </button>
                                       ))} 
                                    </div>
                                </div>
                            </div>

                            ))

                            }   
                                                    

                </div>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    state: state
  });
  
  const mapDispatchToProps = dispatch => ({

  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListPoll);