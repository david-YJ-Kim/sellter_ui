import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import LoginPage from "./component/page/LoginPage";
import Login from  "./routes/Login";
import Dashboard from "./component/page/demo_dashboard/Dashboard";
import BizLicense from "./routes/BizLicense";
import ItemCollection from "./routes/ItemCollection";
import ItemDeploy from "./routes/ItemDeploy";
import KeywordCollection from "./routes/KeywordCollection";
import SaleManagement from "./routes/SaleManagement";
import AboutUs from "./routes/AboutUs";
import MainDashBoard from "./routes/MainDashBoard";

export default function App(){
    return(
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                {/*<Route path="/" element={<Dashboard />} />*/}
                <Route path="/" element={<Login />}/>
                <Route path="/main" element={<MainDashBoard />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/bizLicense" element={<BizLicense />}/>
                <Route path="/itemCollection" element={<ItemCollection />}/>
                <Route path="/itemDeploy" element={<ItemDeploy />}/>
                <Route path="/keywordCollection" element={<KeywordCollection />}/>
                <Route path="/salesManagement" element={<SaleManagement />}/>
                <Route path="/about-us" element={<AboutUs />}/>
            </Routes>
        </Router>
    );
}

