import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../styled-components/button.scss';


export default function Button({text, path}) {
    return (
        <Link className='button-link' to={path}>
            {text}
        </Link>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}