import React from 'react';

const Conversion = ({conversion, onSubmit, onChange}) => {
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <span>Change conversion:</span>
            <input step=".001"
                   required
                   type="number" name="conversion"
                   placeholder="Change conversion"
                   onChange={(e) => onChange(e)}
            />
            <input className="btn" type="submit" value="Change conversion"/>
        </form>
    );
};

export default Conversion;
