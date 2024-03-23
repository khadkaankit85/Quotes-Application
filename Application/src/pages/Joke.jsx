import PageHeader from "../components/PageHeader"
import MainImage from "../components/MainImage"
import { useEffect, useState } from "react"
import { getRandomNumber } from "../Tools/Functions"

const Joke = () => {
    const [data, setdata] = useState("")
    const [Num, setNum] = useState(0)
    useEffect(() => {
        const fetchdata = async () => {
            //to generate random num between two nums: Math.floor(Math.random() * (max - min + 1)) + min;
            let id = getRandomNumber(1, 2)
            let res = await fetch(`http://localhost:3000/jokes?id=${id}`)
            let response = await res.json()
            console.log(response)
            setdata(response[0]["joke"])
        }
        console.log(Num)
        fetchdata()
    }, [Num])



    return (
        <>
            <PageHeader />
            <MainImage textcolor="black" line={data} imgLink="https://t3.ftcdn.net/jpg/05/71/65/42/360_F_571654288_W1tktzV1RjxUBdz4uWavaElmur7gi6Wd.jpg" />
            <div className="my-[15px] flex justify-center items-center w-full">
                <button onClick={() => { setNum(Num + 1); setdata("") }} className="m-auto border border-white bg-yellow-500 px-3 py-1 rounded-full text-black hover:bg-yellow-700">Load Another</button>
            </div>
        </>
    )
}

export default Joke
