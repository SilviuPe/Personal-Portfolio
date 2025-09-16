interface FetchProjectsDataStackItemI {
    title: string;
    value: string;
}

interface FetchProjectsDataItemI {
    repo_url : string;
    banner_url : string;
    workflow_url : string;
    description : string;
    project_name : string;
    stack: FetchProjectsDataStackItemI[]
}

interface FetchProjectsDataStateI {
    data: undefined | FetchProjectsDataItemI[];
    loading: boolean;
    error: undefined | string;
}

export type { FetchProjectsDataStateI, FetchProjectsDataItemI, FetchProjectsDataStackItemI};