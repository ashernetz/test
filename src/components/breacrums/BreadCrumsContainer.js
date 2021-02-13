import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BreadCrumComponent from './BreadCrumComponent';
import { actions } from '../../context';

class BreadCrums extends Component {
  constructor(props) {
    super(props);
    this.renderBreadcrums = this.renderBreadcrums.bind(this);
    this.breadcrumRedirection = this.breadcrumRedirection.bind(this);
  }

  breadcrumRedirection(search) {
    const { history } = this.props;
    history.push({
      pathname: `/plp/${search}`,
    });
  }

  renderBreadcrums() {
    const { breadCrumsData } = this.props;
    if (breadCrumsData) {
      return breadCrumsData.map(bread => (
        <BreadCrumComponent
          key={bread.id}
          name={bread.name}
          handleClick={this.breadcrumRedirection}
        />
      ));
    }
  }

  render() {
    return (
      <div className="breadcrums">
        <ul className="breadcrums__list">{this.renderBreadcrums()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    breadCrumsData: state.products.breadCrums,
  };
}


export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(BreadCrums),
);
