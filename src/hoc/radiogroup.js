import InputField from "../Components/Form/InputField";

const RadioGroup = (props) => {
    const values = props.values;
    return ( 
        <div>
            {
                values.map((item, index) => {
                    return <InputField type="radio" key={index} value={item.value} name={props.name}>{item.label}</InputField> 
                })
            }
        </div>
     );
}
 
export default RadioGroup;