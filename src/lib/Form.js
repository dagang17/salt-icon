import React from 'react';
import classnames from 'classnames';

class IconForm extends React.Component {
  render() {
    try {
      const Svg = require('../svg/form.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: form`);
      return null;
    }
  }
}

IconForm.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// http://facebook.github.io/react/docs/reusable-components.html
IconForm.propTypes = {
  className: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  width: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  height: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  fill: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

IconForm.displayName = 'IconForm';

export default IconForm;