import PropTypes from 'prop-types';

const Button = ({text, style}) => {
    return (
        <button className="btn btn-primary" style={style}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
  };

export default Button
