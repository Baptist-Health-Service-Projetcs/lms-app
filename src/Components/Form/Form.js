import React from "react";
import RadioGroup from "../../hoc/radiogroup";
import TextInput from "../TextInput";

const Form = (props) => {
    const values = [
        {
            label: "Male",
            value: 1
        },
        {
            label: "Female",
            value: 0
        }
    ]
    return (
        <div>
            <h1>{props.title}</h1>
            <TextInput name="Name">Enter Your Name</TextInput> 
        <RadioGroup values={values} name="gender"></RadioGroup>
        </div> 
    );
};

export default Form;
