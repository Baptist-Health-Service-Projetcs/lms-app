import RadioInput from "../Components/radio";

const RadioGroup = (props) => {
    const values = props.values;
    return ( 
        <div>
            {
                values.map((item, index) => {
                    return <RadioInput key={index} value={item.value} name={props.name}>{item.label}</RadioInput> 
                })
            }
        </div>
     );
}
 
export default RadioGroup;