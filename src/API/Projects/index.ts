import { useState, useEffect } from 'react';

import { API, end_points} from "../data.ts";
import type { FetchProjectsDataStateI } from './types';

const FetchProjectsData = () => {
    const [state, setState] = useState<FetchProjectsDataStateI>({
        data: undefined,
        loading: true,
        error: undefined,
    });

    const fetchData = async () => {
        try {
            let response;
            try {
                response = await fetch(`${API}${end_points.projects}`, {});
            } catch (error) {
                // @ts-expect-error IDE
                throw new Error(error);
            }
            const responseContent = await response.json();
            if (!response.ok) {
                setState((prevState: FetchProjectsDataStateI) => ({
                    ...prevState,
                    error: responseContent.error,
                    loading: false,
                }));
            } else {
                setState((prevState: FetchProjectsDataStateI) => ({
                    ...prevState,
                    data: responseContent,
                    loading: false,
                }));
            }
        } catch (error) {
            setState((prevState: FetchProjectsDataStateI) => ({
                ...prevState,
                // @ts-expect-error IDE
                error: error.message,
                loading: false,
            }));
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return state;
};

export { FetchProjectsData };