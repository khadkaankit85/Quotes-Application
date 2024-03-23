import { Link } from "react-router-dom"

const Notfound = () => {
    return (
        <>
            <div className="mt-28">
                <h4 className="p-2 font-bold ">Sorry</h4>
                <p className="p-2">We can{"'"}t seem to find the resource you{"'"}re looking for.</p>
            </div>
            <img src="src\assets\error.svg" className="w-100" alt="this page is broken" />
            <div className="w-full flex items-center justify-center">
                <Link href="/"> <button className="mt-4 mx-auto border border-solid bg-yellow-100 hover:bg-yellow-300 text-black py-1 px-[3px] rounded-md">Home Page</button></Link>

            </div>
        </>
    )
}

export default Notfound
