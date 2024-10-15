import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/shalzzbee')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])

    return (
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">Github followers : {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} /></div>
    )
}

export default Github;


//LOADER CONCEPT--click krne se pehele se hi api ka data cache me rakhlega
//async caller
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shalzzbee')
    return response.json();
}