import PropTypes from 'prop-types';
import { AlertText } from './Alert.styled';

export const Alert = ({ type }) => {
    return <AlertText>{type}</AlertText>
}

Alert.propTypes = {
    type: PropTypes.oneOf(['warning', 'error','sucsses'])
}