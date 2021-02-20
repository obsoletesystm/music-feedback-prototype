import React from "react";
import PropTypes from 'prop-types';
import Icon from '../Icon';
import "./Navbar.scss";

const Navbar = ({ username }) => (
  <div className="navbar">
    <Icon icon="all_inclusive" label="SKIOMUSIC" />
    <div className="navbar__center">
      <span className="navbar__center__link">CONTESTS</span>
      <span className="navbar__center__link">SONG FEEDBACK</span>
      <span className="navbar__center__link">MARKETING SERVICES</span>
      <span className="navbar__center__link">PRICING</span>
    </div>
    <div className="navbar__right">
    <span className="navbar__right__item"><Icon icon="chat_bubble_outline" /></span>
    <span className="navbar__right__item"><Icon icon="notifications_none" /></span>
    <span className="navbar__right__item"><Icon icon="account_circle" label={username} /><Icon icon="arrow_drop_down" /></span>
    </div>
  </div>
);

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Navbar;