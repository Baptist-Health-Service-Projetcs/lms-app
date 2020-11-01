import React from "react";
import RadioGroup from "../../hoc/RadioGroup";
import InputField from "./InputField";
import TextField from "./textarea";
import CheckInput from "./checkbox";

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
            <InputField name="Name">Enter Your Name</InputField> 
            <RadioGroup values={values} name="gender"></RadioGroup>
            <TextField name="Message" value="Hello World">Message</TextField>
            <InputField type="checkbox">Hello</InputField>
        </div> 
    );
};

export default Form;
