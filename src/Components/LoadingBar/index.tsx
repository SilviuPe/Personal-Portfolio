import './index.css';

import type { LoadingBarComponentPropsI } from './types';

const LoadingBarComponent = (props: LoadingBarComponentPropsI) => {

    const {width, height} = props;

    return <div className={'loading-bar rotate'} style={{width: width, height: height}}></div>
}

export { LoadingBarComponent };