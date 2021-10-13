import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import '../css/ContentBox.scss';

function MovieBox () {
    const movieData = useSelector(
        state => (
            state.contentShow.content['movies']
        ),
        shallowEqual
    )
    const loading = useSelector(state => state.contentShow.loading);
    const error = useSelector(state => state.contentShow.error);

    useEffect(() => {
        console.log('saga result of movie')
        console.log(movieData)
    },[movieData])

    return (
        <>
            {loading && <p>Loading...</p>}
            {movieData === null && !loading && <p>No movie ranking list!</p>}
            {error && !loading && <p>{error}</p>}

            <h1 className="type">MOVIE</h1>
            <hr></hr><br></br>

            <div className="contentBox">
                <div className="posterBox">
                    <img className="poster" src="https://m.media-amazon.com/images/M/MV5BODAzMDM0ZjUtZDdiNC00ZWNiLWE1NzMtOTJkZmQ0ZDdjN2ZmXkEyXkFqcGdeQXVyMTI0NTI1MDEw._V1_.jpg"></img>
                </div>
                <div className='space'></div>
                <div className="rankBox">
                    {/* {
                        Object.entries(movieData).map((movie) => (
                        <div>
                            {movie.title}
                        </div>
                        ))
                    } */}
                </div>
            </div>
        </>
    )
}

export default MovieBox;

// {loading && <p>Loading...</p>}
// {movieData === null && !loading && <p>No movie ranking list!</p>}
// {error && !loading && <p>{error}</p>}

// <h1 className="type">MOVIE</h1>
// <hr></hr><br></br>

// <div className="contentBox">
//     <div className="posterBox">
//         <img className="poster" src="https://m.media-amazon.com/images/M/MV5BODAzMDM0ZjUtZDdiNC00ZWNiLWE1NzMtOTJkZmQ0ZDdjN2ZmXkEyXkFqcGdeQXVyMTI0NTI1MDEw._V1_.jpg"></img>
//     </div>
//     <div className='space'></div>

    // <div className="rankBox">
    //     {
    //         movieData != null && Object.entries(movieData).map((movie) => (
    //             <div>
    //                 <li>{movie}</li>
    //             </div>
    //         ))
    //     }
    // </div>
// </div>