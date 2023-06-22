import React, {useEffect} from 'react';
import Chart from "../../components/visualiaztion/Chart";
import fakeData from "../../fakeData.json";

const Science = () => {
    if (window.innerWidth <= 1000) alert("Notice, that information will be better on PC, not in Phone");

    useEffect(() => {
        Chart(fakeData);
    }, []);

    return (
        <>
            <div id={'container'}/>

        </>
    );
}

export default Science;