import { Route, Routes } from 'react-router-dom';
import TheForm from '@/pages/form/TheForm.jsx';
import Home from '@/pages/home/Home.jsx';
import FormPage from "@/pages/form/FormPage.jsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<TheForm />} />
            <Route path="/formPage" element={<FormPage />}/>
        </Routes>
    );
}
