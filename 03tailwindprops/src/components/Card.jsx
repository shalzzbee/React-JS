import React from 'react'
//props----in parameter then to access props.username otherwise
function Card({ username, btnText = "Visit Me" }) {

    // console.log("props: ", props);
    console.log(username);


    return (
        <div className="flex flex-col rounded-xl  p-4"
            style={{
                border: '0.88px solid',

                backdropFilter: 'saturate(180%) blur(14px)',
                background: ' #ffffff0d',
            }}
        >
            <div>
                <img
                    src="https://images.pexels.com/photos/28818953/pexels-photo-28818953/free-photo-of-charming-cafe-exterior-with-vintage-signage.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                    alt="nft-gif"
                    width="400"
                    height="400"
                    className="rounded-xl"
                />
            </div>
            <div className="flex flex-col  rounded-b-xl py-4 mb-4">
                <div className="flex justify-between">
                    <h1 className="font-RubikBold "></h1>
                    <h1 className="font-bold font-RubikBold"></h1>
                </div>
                <div className="flex  justify-between font-mono">
                    <p>{username}</p>
                    {/* <p>{btnText || "Visit Me"} </p> */}
                    <p>{btnText} </p>

                </div>
            </div>
        </div>
    )
}

export default Card;