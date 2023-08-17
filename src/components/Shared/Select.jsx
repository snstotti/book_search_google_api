import React, { forwardRef } from 'react'

export default forwardRef(({ children, label, defaultValue,errors = {}, ...props }, ref) => {
    const { name } = props;

    return (
        <>
            <label htmlFor={name} className="form-label">{label}</label>
            <select
                ref={ref}
                {...props}
                defaultValue={defaultValue}
                className="form-select form-select-sm" id={name}>
                {children}

            </select>
            {Object.keys(errors) && <div id={name} class="invalid-feedback">
                {errors.message}
            </div>}
        </>
    )
})
