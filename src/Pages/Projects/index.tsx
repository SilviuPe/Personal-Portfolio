import { HeaderComponent} from "@components/Header";
import {useEffect} from "react";

function ProjectsPage() {

    useEffect(() => {
        document.title = "Projects";
    }, []);

    return (
        <>
            <HeaderComponent/>
        </>
    )
}

export { ProjectsPage };