

interface ViewDeleteProps{
    handleOpenModal: ()=>void
}

const ViewDelete: React.FC<ViewDeleteProps> = ({ handleOpenModal }) => {
    return ( <div className=" absolute top-6 flex flex-col space-y-3 pt-4 p-2 text-left text-[11px] text-white font-medium bg-[#292D32] w-[87px] h-[69px] rounded-xl ">
        <button onClick={handleOpenModal} className="text-left" >view</button>
        <h3>Delete</h3>
    </div> );
}
 
export default ViewDelete;