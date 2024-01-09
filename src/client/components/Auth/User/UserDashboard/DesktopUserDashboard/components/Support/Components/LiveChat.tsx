import React from "react";
import Image from "next/image";
import chatImg from '../../../../assets/CustomerCareAvatar.png'
import ReceivedIcon from "@/src/client/shared/Svg/ReceivedIcon";

interface LiveChatProps{
    handleCloseModal: ()=>void
}

const LiveChat: React.FC<LiveChatProps> = ({handleCloseModal}) => {
    return (
        <div className="bg-white w-full rounded-[1.25rem] px-6 py-2 md:p-6 mt-4">
            <section className="flex justify-between border-b-2 border-solid border-red-50 ">
                <h3 className="text-[1.375rem] font-bold ">Legit X bet Customer support</h3>
                <button onClick={handleCloseModal} className="w-[6.0625rem] h-[2.1875rem] border-[#5D5D5D] border rounded-md text-sm ">
                    Close 
                </button>
            </section>
            <section className="flex justify-end items-end my-8">
                <div className="flex flex-col space-y-1">
                    <Image height={50} width={50} src={chatImg} alt="avatar"/>
                    <h3 className="font-bold">Oliade joined</h3>
                    <h4 className="text-xs">Just now</h4>
                </div>
            </section>
            <p className="text-sm text-center my-16 ">Please tell us what you feel</p>
            <section className="relative">
                <div className="flex space-x-1 mb-4">
                    <h3 className="font-bold">Type Message</h3>
                    <div className="pt-1"><ReceivedIcon/></div> 
                </div>
                <textarea className="text-sm text-center md:w-[30vw] md:h-[25vh] w-[80vw] h-[30vh] p-5 bg-[#F5F5F5] flex justify-center items-center" placeholder="This is the beginning of your session with Oliade"></textarea>
                <button className="absolute bottom-4 right-2 w-[8.25rem] h-[2.1875rem] border-[#5D5D5D] border rounded-md text-sm">
                    Send response
                </button>
            </section>
        </div>
    );
}

export default LiveChat;
