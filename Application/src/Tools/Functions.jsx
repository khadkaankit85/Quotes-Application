import { useEffect, useState } from "react"


export const useGreeting = () => {
    const [greeting, setgreeting] = useState("")

    useEffect(() => {
        const gretter = setInterval(() => {
            let dateNow = new Date()
            let timeNow = dateNow.toLocaleTimeString()
            // console.log(timeNow)
            if (timeNow.endsWith('AM') || timeNow.endsWith('a.m.')) {
                setgreeting("Good Morning")
                // console.log("Hello AM")
            }
            else {
                setgreeting("Good Afternoon")
                // console.log("Hello PM")
            }
        }, 1000);
        return () => { clearInterval(gretter) }
    },
        [])

    return greeting

}
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}