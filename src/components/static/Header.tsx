import React from 'react'

const Header = () => {
  return (
    <div className='w-full justify-center h- [70px]
    border-b-[1px] border-silver
    '>
        <div/>
    <div className='text-[30px] font-bold hover-cursor-pointer'> Logo
    <div className='flex items-center'> 
    <div className='w-[30px] h-[30px] bg-slate-400 flex items-center justify-center
    round rounded-md mr-4
    '> 
    <div className='text-white text-[20px]'/> 
    
    <div className='w-[70px] bg-slate-400 h-[35px]
    rounded flex justify-between items-center hover: cursor-pointer'/>


    <div  className='m1-2 font-bold '/>
        <div/>
        </div>

    </div>
    </div>
    </div>
    
  )
}

export default Header



// import { useDispatch } from "react-redux"
// import { logOut } from "../../global/globalState"

// const Header = () => {
//     const dispatch = useDispatch()
//     return (
//         <div className="
//         bg-black text-white h-20 flex
//         items-center justify-between px-8
//         " >
//             <div className="text-[40px] font-extrabold " >Logo</div>
//             <button
//                 className="
//             bg-[purple]
//             py-[8px]
//             px-[28px]
//             rounded-[30px]
//             text-[20px]
//             font-bold
//             transition-all
//             duration-300
//             hover:scale-[1.05]
//                 "

//                 onClick={() => {
//                     dispatch(logOut())
//                 }}
//             >Log Out</button>
//         </div>
//     )
// }

// export default Header