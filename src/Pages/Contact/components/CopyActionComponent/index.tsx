import copyIcon from "@assets/icons/copyIcon.webp";

import type {CopyActionComponentPropsI} from './types.ts';

const CopyActionComponent = (props : CopyActionComponentPropsI) => {

    const {valueToCopy} = props;

    const handleCopy = () => {
        navigator.clipboard.writeText(valueToCopy)
            .then(() => {
                console.log("Copied:", valueToCopy);
                alert("Copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy:", err);
            });
    };

    return (
        <img src={copyIcon} alt={'copy'} width={18} style={{cursor: 'pointer'}} onClick={handleCopy}/>
    )
}

export { CopyActionComponent };