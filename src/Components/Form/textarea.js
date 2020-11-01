const TextField = (props) => {
    return ( 
        <>  
            <label htmlFor={props.name}>{props.children}</label>
            <textarea name={props.name} id={props.name} value={props.value}></textarea>
        </>
     );
}
 
export default TextField;