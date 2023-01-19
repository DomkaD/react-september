import {useEffect, useState} from "react";

import {axiosInstance} from "../services/spacex.api";
import {Launch} from "./Launch/Launch";



export function SpaceX() {

    let [launches, setLaunches] = useState([])

    useEffect(() => {
        axiosInstance().then(value => setLaunches(value.data))
    }, [])


    return (<div>
        {launches.map((launch, index) => (<
            Launch
            item={launch}
            key={index}
        />))}
    </div>);
}