const InputField = (props) => {
    const { name, value, type } = props;
    return (
        <div>
            <label htmlFor={value}>{props.children}</label>
            <input type={type} name={name} id={value} value={value} />
        </div>
    );
}

export default InputField;