import './page.css';
import Home from "../PageWindow/pages/home"
import { useEffect, useState } from 'react';


function PageWindow(prop: any) {
    // const [page, setPage] = useState('')
    useEffect (() => {
        
    },[prop])
    console.log(prop)

    return (
        <>
        <div>
            <Home/>
        </div>
        </>
    );
}

export default PageWindow;
