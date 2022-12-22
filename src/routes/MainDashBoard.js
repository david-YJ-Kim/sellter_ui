import * as React from 'react';
import {MainBashBoardContent} from "../component/page/MainDashBoardPage";
import Dashboard from "../component/page/demo_dashboard/Dashboard";
import {Header} from "../component/organisms/Header";

export default function MainDashBoard(){
    // return <MainBashBoardContent />
    return(
        <div>
            <Header />
            <Dashboard />

        </div>
        )
}