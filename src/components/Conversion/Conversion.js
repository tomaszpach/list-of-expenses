import React from 'react';

const Conversion = ({conversion, onSubmit, onChange}) => {
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <span>Update conversion:</span>
            <input step=".001"
                   required
                   type="number" name="conversion"
                   placeholder="Change conversion"
                   onChange={(e) => onChange(e)}
            />
            <input type="submit" value="Update conversion"/>
        </form>
    );
};

export default Conversion;
