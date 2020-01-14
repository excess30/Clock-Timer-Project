import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <nav classname = "header navbar navbar-dark bg-dark">
    <div className="row m-auto">
                <i className="fa fa-hand-pointer-o fa-4x text-white"></i>
                <div className="h1 ml-2 my-auto text-light" href="/">{props.title}
                </div>
            </div>
    </nav>
);

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;