import React from 'react';
import { UInputProps } from '../../types/props.types';

const Textarea = (props:UInputProps) => {
    return <div className="col-span-full">
        <label htmlFor={props.id} className="block text-sm font-medium leading-6 text-gray-900">
            {props.label}
        </label>
        <div className="mt-2">
            <textarea
                id={props.id}
                name={props.name}
                rows={props.rows}
                className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
              <p className="mt-3 text-sm leading-6 text-gray-600">{props.placeholder}</p>
        </div>
    </div>
}

export default Textarea;