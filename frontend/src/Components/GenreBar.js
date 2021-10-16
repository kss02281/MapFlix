import React, { useEffect, useState } from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell
} from "recharts";
import {Dropdown, DropdownButton } from "react-bootstrap";
import "../css/GenreBar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const SORT_TYPE = {
    NONE: 'NONE',
    ASC: 'ASC',
    DESC: 'DESC,'
}

const GenreBar = ( {genreScore = []} ) => {
    
    const [sortType, setSortType] = useState(SORT_TYPE.NONE);
    const [genreScores, setGenreScores] = useState([...genreScore])

    useEffect(function updateGenreScoresByProp() {
        setGenreScores([...genreScore])
    }, [genreScore])

    const ASCButton = () => {
        const sortedGenreScores = [...genreScores]
        sortedGenreScores.sort((a, b) => {
            return a.score - b.score
        })

        setSortType(SORT_TYPE.DESC)
        setGenreScores(sortedGenreScores)
    }

    const DESCButton = () => {
        const sortedGenreScores = [...genreScores]
        sortedGenreScores.sort((a, b) => {
            return b.score - a.score
        })

        setSortType(SORT_TYPE.ASC)
        setGenreScores(sortedGenreScores)
    }

    const NoneButton = () => {
        const sortedGenreScores = setGenreScores(([...genreScore]))
        return sortedGenreScores

    }

    const handleSortHeaderClick = () => {
        if (sortType === SORT_TYPE.ASC) {
            const sortedGenreScores = [...genreScores]
            sortedGenreScores.sort((a, b) => {
                return a.score - b.score
            })

            setSortType(SORT_TYPE.DESC)
            setGenreScores(sortedGenreScores)
        } else if (sortType === SORT_TYPE.DESC) {
            const sortedGenreScores = [...genreScores]
            sortedGenreScores.sort((a, b) => {
                return b.score - a.score
            })

            setSortType(SORT_TYPE.ASC)
            setGenreScores(sortedGenreScores)
        }   else if  (sortType === SORT_TYPE.NONE) {
            const sortedGenreScores = [...genreScores]
            setSortType(SORT_TYPE.NONE)
            setGenreScores(sortedGenreScores)
            return genreScores
        }   else {
            throw new Error('Wrong sort type')
        }
    }

    console.log(genreScores)

    const genreTitle = genreScores.map((genreInfo) => (<div className="GenreItems">{genreInfo.genre}</div>));
    const genreScoreN = genreScores.map((genreInfo) => (<div className="ScoreItems" style={{backgroundColor:genreInfo.color}}>{genreInfo.score}</div>));
    const dGenreGraph = genreScores.map((genreInfo) => (<div className="GenreGrpahBar" style={{width:"20px",height:genreInfo.score, backgroundColor:genreInfo.color, marginTop:"20px"}}></div>));
    const GenreName = genreScores.map((genreInfo) => (<div className="GenreGraphText" style={{transform: "rotate(-270deg)",whiteSpace:"nowrap"}}>{genreInfo.genre}</div>));
return (
    <div className="GenreBox">
        <div className="GenreAScore">
            <div className="GenreTitle">Genre</div>
            <DropdownButton id="dropdown-basic-button" title="Score">
                <Dropdown.Item eventkey="item1" onClick={ASCButton}>ASC</Dropdown.Item>
                <Dropdown.Item eventkey="item2" onClick={DESCButton}>DESC</Dropdown.Item>
                <Dropdown.Item eventkey="item2" onClick={NoneButton}>ABC</Dropdown.Item>
            </DropdownButton>

            <div className="addCell">
            <div className="GenreContainer">
                {genreTitle}
            </div>
            <div className="ScoreContainer">{genreScoreN}</div>
            </div>
            
        </div>
        <div className="GapGS"/>
        {/* <div className="GenreGraph"> */}
            
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                width={600}
                height={400}
                data={genreScores}
                margin={{
                    top: 50,
                    right: 0,
                    left: 0,
                    bottom: 150
                }}
                barSize={40}
                >
                <XAxis dataKey="genre" stroke="white" angle={-45} textAnchor="end" scale="point" padding={{ left: 20, right: 16}} />
                <YAxis dataKey="score" />
                <Tooltip />
                <Legend stroke="white"/>
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="score">
                    {genreScore.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
                </BarChart>
            </ResponsiveContainer>
            {/* <div className="sideScore"> <p id="nowWeek">2020<br/>Week 38</p>
                <p id="rotateP">Score</p>
                </div>
            <div className="drawGenreGraph">
                <div className="GenreGrpahPosition">
                <div className="dGenreGraph">{dGenreGraph}</div>
                </div>
                
                <div className="GenreName">{GenreName}</div>
                </div>
            <div className=""></div>
            <div className="underGenre">Genre</div> */}
        {/* </div> */}
    </div>
);
}

export default GenreBar;