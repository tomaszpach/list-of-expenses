import React from 'react';
import Input from "../../_partials/_input";
import InputBtn from "../../_partials/_inputBtn";

const Conversion = ({conversion, onSubmit, onChange}) => {
    return (
        <form className="conversion" onSubmit={(e) => onSubmit(e)}>
            <Input title="Type new conversion:"
                   step=".001"
                   required
                   type="number"
                   name="conversion"
                   placeholder="Example: 4.382"
                   onChange={(e) => onChange(e)}/>

            <InputBtn value="Change conversion"/>
        </form>
    );
};

export default Conversion;
