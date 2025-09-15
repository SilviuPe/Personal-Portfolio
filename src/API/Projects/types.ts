interface FetchProjectsDataItemI {
    github_link : string;
    banner_url : string;
}

interface FetchProjectsDataStateI {
    data: undefined | FetchProjectsDataItemI[];
    loading: boolean;
    error: undefined | string;
}

export type { FetchProjectsDataStateI, FetchProjectsDataItemI};