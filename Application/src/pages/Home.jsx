import './Home.css'
import Options from '../components/Options'
import { useGreeting } from '../Tools/Functions'
import { getRandomNumber } from '../Tools/Functions'
import { useEffect, useState } from 'react'

const Home = () => {
    const [advice, setadvice] = useState("")
    //-----------------------------------------------------------
    let greet = useGreeting()
    // console.log(greet)
    let userName = localStorage.getItem("username");

    if (!userName) {
        userName = prompt("Enter Your username: ");
        if (userName !== null && userName !== "") {
            localStorage.setItem("username", userName);
        }
    }

    if (userName) {
        // console.log(userName);
        // console.log("hello");
    }
    //-----------------------------------------------------------
    // advice of the day

    useEffect(() => {
        let a = setInterval(async () => {
            let adviceId = getRandomNumber(1, 100)
            console.log(adviceId)
            let res = await fetch(`http://localhost:3000/advices/${adviceId}`)
            let resp = await res.json()
            console.log(resp)
            setadvice(resp.slip.advice)

        }, 10000);

        return () => {
            clearInterval(a)
        }
    }, [])
    //..........................................................
    // to manage set interval properly, we should use it inside useEffect().
    // setInterval(() => {
    //     console.log("interval exe")
    // }, 1000)
    //..........................................................


    return (
        <div className=''>
            <h1 className="text-center mt-5">Home</h1>
            <section className=" mt-5 mx-auto border border-hidden rounded-2xl p-4 h-1/5 oftheday" style={{ width: "97%" }} >
                <h3 className="font-bold font-serif">
                    {greet}
                    {/* Todo: Variables to be added letter */}
                </h3>
                <h4>
                    {userName || "Dear User" + "\n"}
                </h4>
                <h3>Advice Of The Day.....{"\n"}</h3>
                <h4>{advice || "Loading...."}</h4>
            </section>
            <section>
                <h3 className="font-semibold p-4 mb-2">For You</h3>
                <section className="options h-fit mx-auto  flex-wrap border-red flex gap-2" style={{ width: "85%" }}>

                    {/* Reusability of the code is a must in react:) */}
                    <Options src="src\assets\smile.svg" option="Jokes" link={"/jokes"} />
                    <Options src="src\assets\advice.svg" option="Advice" link="/advices" />
                    <Options src="src\assets\advice.svg" option="Insults" link="/insults" />

                </section>
            </section>
        </div>
    )
}

export default Home
