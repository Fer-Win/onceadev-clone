import localFont from "next/font/local"
import { ReactElement } from "react"

const myFont = localFont({src: "../../public/fonts/Fractul-Regular.ttf"})
interface CardProps {
  tag: string,
  icon: ReactElement
}

const Card: React.FC<CardProps> = ({tag,icon}) => {
  return (
    <div style={myFont.style} className="h-[22rem] px-5 py-5 cursor-pointer overflow-hidden w-[15rem] flex flex-col justify-between bg-transparent border-[1px] border-[#ffffff33] rounded-2xl relative group transition-all ease-in-out duration-300">
   
       <div className=" h-[20%] z-20 ">
        <div className="border-[1px] rounded-full h-14 w-14 flex justify-center items-center  border-[#ffffff33] group-hover:border-black ">
       {icon}
        </div>
       </div>
       <div className=" h-[20%] flex justify-between items-center z-20">
        <div className="text-xl w-[60%]    leading-6 group-hover:text-black">{tag}</div>
        <div className="bg-white group-hover:bg-black rounded-full h-11 w-11 flex justify-center items-center">
        <svg className="w-4 h-4 text-black group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
        </div>
       </div>
       <div className="h-full w-full bg-white absolute top-full group-hover:top-0 transition-all duration-300 ease-in-out left-0 z-0 "></div>
    </div>
  )
}
export default Card