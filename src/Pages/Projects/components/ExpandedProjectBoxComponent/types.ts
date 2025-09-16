import type { FetchProjectsDataItemI } from '@api/Projects/types';

interface ExpandedProjectBoxComponentPropsI {
    data: FetchProjectsDataItemI;
    callbackMinimizeEvent: () => void;
}

export type { ExpandedProjectBoxComponentPropsI };