import React, { Component } from 'react';


class Band extends Component {

  handleOnClick = () => {
  
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.id
    });
  }


  render() {
    return(
      <div>
        <ul>
          <li>{this.props.band.text}
            <p>
              <button onClick={this.handleOnClick}>Delete!</button>
            </p>
          </li>

        </ul>
      </div>
    );
  }
};

export default Band;
