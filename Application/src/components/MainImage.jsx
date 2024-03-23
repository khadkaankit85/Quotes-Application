import './MainImage.css'
const MainImage = (props) => {

    return (
        <>
            <div onClick={() => {

            }} className='w-full bg-no-repeat bg-of-img h-80 mt-48 flex justify-center items-center relative'>
                <div className="absolute inset-0 bg-cover bg-blur" style={{ backgroundImage: `url(${props.imgLink})` }}></div>
                <p className={`relative z-10 p-1 text-${props.textcolor} text-center font-bold font-serif`}>{props.line || "loading....."}</p>
            </div>

        </>
    )
}

export default MainImage
