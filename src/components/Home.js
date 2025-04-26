import React from "react";
import PropTypes from 'prop-types';

class Home extends React.Component {
  render () {
  return (
    <div id="home">
      <h1 style={{ color: this.props.color }}>
        {this.props.username} is a Web Developer from {this.props.city}
      </h1>
    </div>
  );
}
}
Home.propTypes = {
  username: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Home;
