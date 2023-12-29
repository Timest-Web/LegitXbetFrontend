import React from "react";

interface HistoryViewProps{
    handleOpenModal: ()=>void
}

const HistoryView: React.FC<HistoryViewProps> = ({ handleOpenModal }) => {
    return ( <div className=" absolute top-6 flex flex-col space-y-3 pt-4 p-2 text-left text-[11px] text-white font-medium bg-[#292D32] w-[5.438rem] h-[2.813rem] rounded-xl ">
        <button onClick={handleOpenModal} className="text-left" >view</button>
    </div> );
}
 
export default HistoryView;