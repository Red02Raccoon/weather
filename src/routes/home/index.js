import React from "react";
import { Link } from "react-router-dom";
import i18n from '../../services/i18n';
import { translate, Trans } from "react-i18next";

class HomeRout extends React.Component {
  render() {
    const {
      t
    } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <React.Fragment>
        <button onClick={() => changeLanguage('ru')}>ru</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <div>{t('title')}</div>
        <Link to="/news">News</Link>
      </React.Fragment>
    );
  }
}

export default translate()(HomeRout);
