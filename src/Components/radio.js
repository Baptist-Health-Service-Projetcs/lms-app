const RadioInput = (props) => {
    const {name, value} = props;
    return ( 
        <>
            <input type="radio" name={name} id={name} value={value} />
            <label htmlFor={name}>{props.children}</label>
        </>
     );
}
 
export default RadioInput;