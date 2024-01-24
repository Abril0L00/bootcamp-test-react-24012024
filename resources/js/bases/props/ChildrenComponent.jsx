
import PropTypes from 'prop-types';

export const ChildrenComponent = ({btnText}) => {
    return (
        <>
        {/* <button>Propiedad {props['btn-text']}</button> */}
        <button>Propiedad {btnText}</button>
        </>
    )
}

ChildrenComponent.propTypes = {
    btnText: PropTypes.string.isRequired,
}