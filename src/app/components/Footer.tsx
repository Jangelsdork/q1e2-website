import { FaInstagram } from "react-icons/fa";


type Props = {}

const Footer = (props: Props) => {
  return (
    
    <div className="w-full bg-white border-red-500 border-4 h-[20vh] flex flex-col items-end justify-center pr-8"> 
    <FaInstagram size={50}  />

    </div>
    
  )
}

export default Footer