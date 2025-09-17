import { useRef } from 'react';

import type { DialogBoxComponentPropsI } from './types';
import './style.css';

const DialogBoxComponent = (props: DialogBoxComponentPropsI) => {

    const { content, open, closeCallback } = props;
    const dialogRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: React.MouseEvent) => {
        if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
            closeCallback(); // close if clicked outside the dialog
        }
    };

    return (
        <div className={`${open ? 'dialog-box-open dialog-box-component-overlay' : 'dialog-box-closed'}`} onClick={handleClickOutside}>
            {
                open ? <div className={`dialog-box-component-container`} ref={dialogRef}>
                        {content}
                    </div>
                    : null
            }
        </div>
    )
}

export { DialogBoxComponent };