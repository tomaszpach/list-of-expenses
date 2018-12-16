import React from 'react';
import Input from "../Inputs/_input";

const Conversion = ({conversion, onSubmit, onChange}) => {
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <Input title="Type new conversion:"
                   step=".001"
                   required
                   type="number"
                   name="conversion"
                   placeholder="Example: 4.382"
                   onChange={(e) => onChange(e)}/>
            <input className="btn" type="submit" value="Change conversion"/>
        </form>
    );
};

export default Conversion;
