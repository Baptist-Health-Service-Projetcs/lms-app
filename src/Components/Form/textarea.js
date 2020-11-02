const TextArea = (props) => {
    return (
        <>
            <label htmlFor={props.value}>{props.children}</label>
            <textarea name={props.name} id={props.value} value={props.value}></textarea>
        </>
    );
}

export default TextArea;