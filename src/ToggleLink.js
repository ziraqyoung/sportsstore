import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

export class ToggleLink extends Component {
  render() {
    return(
      <>
      <Route
        path={ this.props.to }
        exact={this.props.exact}
        children={ routeProps => {
          const baseClasses = this.props.className || 'btn btn-block m-2';
          const activeClasses = this.props.activeClasses || 'btn-primary';
          const inActiveClasses = this.props.inActiveClasses || 'btn-secondary'

          const combinedClasses = `${baseClasses} ${ routeProps.match ? activeClasses : inActiveClasses }`

          return <Link to={this.props.to} className={combinedClasses} >
            { this.props.children }
            </Link>
        }}
      />
      </>
    )
  }
}
