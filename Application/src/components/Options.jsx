/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Options = (props) => {
    return (
        <>
            <Link to={props.link}>
                <div className="jokesButton cursor-pointer inline-flex p-1 w-16 h-16 justify-between flex-col items-center  bg-slate-50 rounded-md active:bg-slate-400 text-black">
                    <img src={props.src} alt="smily" className="w-9 h-10 flex justify-center align-center flex-row" />
                    <h3 className="text-black mb-1">{props.option}</h3>
                </div>
            </Link>
        </>
    )
}

export default Options
