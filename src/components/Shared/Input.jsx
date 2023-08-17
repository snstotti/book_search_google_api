import React, { forwardRef } from 'react';

export default forwardRef(({ className, errors = {}, ...props }, ref) => {
    const {name} = props;
    return (
        <>
            <input
                ref={ref}
                {...props}
                className={`form-control  ${Object.keys(errors).length && "is-invalid"}`}
                id={name}
                placeholder="Enter book title"
                aria-label="Enter book title"
            />
            
        </>
    );
});
