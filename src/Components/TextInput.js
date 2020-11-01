import styled, { css } from 'styled-components';

const Input = styled.input`
    border-radius: 30px;
    padding: 0.25em 1em;
`;
const TextInput = (props) => {
    const {name, value, type} = props;
    return ( 
        <div>
            <label htmlFor={name}>{props.children}</label>
            <input type={type} name={name} id={name} value={value} />
        </div>
     );
}
 
export default TextInput;