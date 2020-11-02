import React from "react";
import FormSelect from "./FormSelect";

const Form = (props) => {
    const formSelectData = [
        {
            content: "Frontend web development",
            value: "frontend"
        },
        {
            content: "Backend web development",
            value: "backend"
        }
    ];
    return (
        <div>
            <h3>{props.title}</h3>
            <p>This is the form</p>
            <FormSelect data={formSelectData}></FormSelect>
        </div>
    );
};

export default Form;
