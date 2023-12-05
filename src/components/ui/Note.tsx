import React from 'react';
import { UTextProps } from '../../types/util.types';

const Note = (props:UTextProps) => {
    return (
        <p
            className="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700">
            <strong className="text-blue-500">Note:</strong>
            {props.content}
        </p>
    )
}

export default Note;