const FormSelect = ({ data }) => {
    return (
        <>
            <select>
                {
                    data.map((item, index) =>
                        <option value={item.value} key={index}>{item.content}</option>
                    )
                }
            </select>
        </>
    );
}

export default FormSelect;