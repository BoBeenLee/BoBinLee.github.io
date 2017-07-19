import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';

const propTypes = {};

const defaultProps = {};

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        Contact
      </div>
    );
  }
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;
