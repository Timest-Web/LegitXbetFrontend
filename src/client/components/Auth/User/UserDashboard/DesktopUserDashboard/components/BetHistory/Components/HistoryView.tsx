import React from "react";

interface HistoryViewProps{
    handleOpenModal: ()=>void
}

const HistoryView: React.FC<HistoryViewProps> = ({ handleOpenModal }) => {
    return ( <div className=" absolute bottom-4 md:top-6 flex md:h-12 px-4 py-2 text-left text-[11px] text-white font-medium bg-[#292D32] rounded-xl ">
        <button onClick={handleOpenModal} className="text-left">view</button>
    </div> );
}
 
export default HistoryView;