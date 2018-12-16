import React from 'react';

const Conversion = ({conversion, onSubmit, onChange}) => {
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <span>Update conversion:</span>
            <input step=".001"
                   type="number" name="conversion"
                   placeholder="Change conversion"
                   onChange={(e) => onChange(e)}
                   value={conversion}
            />
            <input type="submit" value="Update conversion"/>
        </form>
    );
};

export default Conversion;
