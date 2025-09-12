import redirectIcon from "@assets/icons/redirectIconUp.png";

import type {RedirectActionComponentPropsI} from './types';

const RedirectActionComponent = (props: RedirectActionComponentPropsI) => {

    const {linkToRedirect} = props;

    return (
        <img src={redirectIcon} alt={'redirect'} width={12} style={{cursor: 'pointer'}} onClick={() => {
            window.open(linkToRedirect);
        }}/>
    )
}

export { RedirectActionComponent };