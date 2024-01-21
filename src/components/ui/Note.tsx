import React from 'react';
import { UTextProps } from '../../types/props.types';

const Note = (props:UTextProps) => {
    return (
        <p
            className="mb-6 rounded border-l-4 border-neutral-800 bg-gray-200 p-2">
            <strong className="text-blue-500">Note: </strong>
            {props.content}
        </p>
    )
}

export default Note;