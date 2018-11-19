import React from "react";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";

class HomeRout extends React.Component {
  render() {
    const {
      t
    } = this.props;

    console.log(this.props);
    return (
      <React.Fragment>
        <div>{t('title')}</div>
        <Link to="/news">News</Link>
      </React.Fragment>
    );
  }
}

export default translate()(HomeRout);
