import React from 'react';
import PropTypes from 'prop-types';

function HomeComponent(props) {
  return (
    <div className="home" data-test="component-home">

    </div>
  );
}

HomeComponent.propTypes = {
  onSubmitForm: PropTypes.func
};
HomeComponent.defaultProps = {

};

export default HomeComponent;
