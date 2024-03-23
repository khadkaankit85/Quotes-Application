import PageHeader from "../components/PageHeader"
import MainImage from "../components/MainImage"
import { useEffect, useState } from "react"

const Quote = () => {
    const [data, setdata] = useState("")
    const [Num, setNum] = useState(0)
    useEffect(() => {
        const fetchdata = async () => {
            let res = await fetch(`http://localhost:3000/advices`)
            let response = await res.json()
            // console.log(response)
            setdata(response["slip"]["advice"])
        }
        console.log(Num)
        fetchdata()
    }, [Num])



    return (
        <>
            <PageHeader />
            <MainImage textcolor="white" line={data} imgLink="https://i.scdn.co/image/ab67616d0000b273ee5c9962b0df9fa19a456e99" />
            <div className="my-[15px] flex justify-center items-center w-full">
                <button onClick={() => { setNum(Num + 1); setdata("") }} className="m-auto border border-white bg-yellow-500 px-3 py-1 rounded-full text-black hover:bg-yellow-700">Load Another</button>
            </div>
        </>
    )
}

export default Quote
