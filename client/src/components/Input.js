import React from "react";

const Input = ({ label, type, name, value, handleChange, ...rest }) => {
    return (
        <div>
            <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                    {label}
                </span>
                <input
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    required
                    {...rest}
                />
            </label>
        </div>
    );
};

export default Input;
