import {FormControl, FormGroup, FormLabel} from "react-bootstrap";

const FormInput = ({label, type, placeholder, value, onChange}) => {
    let formProps;

    switch (type) {
        case 'textarea':
            formProps = {as: type, value}
            break;
        case 'file':
            formProps = {type}
            break;
        default:
            formProps = {type, value}
            break;
    }

    return (
        <FormGroup className="mb-3">
            <FormLabel>{label}</FormLabel>
            <FormControl
                {...formProps}
                placeholder={placeholder}
                onChange={onChange}
            />
        </FormGroup>
    )
}

export default FormInput;