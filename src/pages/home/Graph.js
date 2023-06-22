import {useEffect} from "react";
import Chart from "../../components/visualiaztion/Chart";
import fakeData from '../../fakeData.json';

const Graph = () => {

    useEffect(() => {
        Chart(fakeData);
    }, []);

    return (
        <>
            <div id={'container'}/>
        </>
    );
}

export default Graph;