import copyIcon from "@assets/icons/copyIcon.webp";

import type {CopyActionComponentPropsI} from './types.ts';

const CopyActionComponent = (props : CopyActionComponentPropsI) => {

    const {valueToCopy} = props;

    const copyToClipboard = async (value: string) => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(value);
                console.log('Copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        } else {
            // fallback for insecure context
            const textArea = document.createElement('textarea');
            textArea.value = value;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                console.log('Copied using fallback!');
            } catch (err) {
                console.error('Fallback copy failed', err);
            }
            document.body.removeChild(textArea);
        }
    };

    return (
        <img src={copyIcon} alt={'copy'} width={18} style={{cursor: 'pointer'}} onClick={()=>{copyToClipboard(valueToCopy)}}/>
    )
}

export { CopyActionComponent };