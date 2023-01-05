import React, { useState } from 'react'
import axios from "axios";

export const LikeButton = () => {
    const [like, setLike] = useState(0);
    const addLike = async () => {
        const post = await axios.patch('http://localhost:6942', { like });
        console.log(post)
        // if (post !== undefined) {
        //     navigate('/LoadingScreen')
        // }
    }

    return (
        <div>
            <button onClick={() => setLike(like + 1)}>like</button>
            {/* <div>{data}</div> */}
        </div >
    )
}

export default LikeButton;


