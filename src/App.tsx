import { Routes, Route } from "react-router-dom";
import { ContactPage, ExperiencePage, HomePage, ProjectsPage} from "./Pages";

export default function App() {
    return (
            <Routes>
                <Route path="/"  element={<HomePage/>}/>
                <Route path="/contact"  element={<ContactPage/>}/>
                <Route path="/home"  element={<HomePage/>}/>
                <Route path="/experience"  element={<ExperiencePage/>}/>
                <Route path="/projects"  element={<ProjectsPage/>}/>
            </Routes>
    );
}