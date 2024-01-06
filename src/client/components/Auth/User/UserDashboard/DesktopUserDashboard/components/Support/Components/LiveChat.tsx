import React from "react";
import Image from "next/image";
import chatImg from '../../../../assets/CustomerCareAvatar.png'
import ReceivedIcon from "@/src/client/shared/Svg/ReceivedIcon";

interface LiveChatProps{
    handleCloseModal: ()=>void
}

const LiveChat: React.FC<LiveChatProps> = ({handleCloseModal}) => {
    return (
        <div className="bg-white w-full h-full rounded-[1.25rem] p-8 pt-24 mt-4">
            <section className="flex justify-between">
                <h3 className="text-[1.375rem] font-bold ">Legit X bet Customer support</h3>
                <button onClick={handleCloseModal} className="w-[6.0625rem] h-[2.1875rem] border-[#5D5D5D] border rounded-md text-sm ">
                    Close 
                </button>
            </section>
            <hr className="mt-4 mb-16"></hr>
            <section className="flex justify-end items-end">
                <div className="flex flex-col space-y-1">
                    <Image height={60} width={60} src={chatImg} alt="avatar"/>
                    <h3 className="font-bold">Oliade joined</h3>
                    <h4 className="text-xs">Just now</h4>
                </div>
            </section>
            <p className="text-sm text-center mt-16 mb-24">Please tell us what you feel</p>
            <section className="relative">
                <div className="flex space-x-1 mb-4">
                    <h3 className="font-bold">Type Message</h3>
                    <div className="pt-1"><ReceivedIcon/></div> 
                </div>
                <textarea className="text-sm text-center pt-12 w-[34.75rem] h-[12.4375rem] bg-[#F5F5F5]" placeholder="This is the beginning of your session with Oliade"></textarea>
                <button className="absolute bottom-4 right-2 w-[8.25rem] h-[2.1875rem] border-[#5D5D5D] border rounded-md text-sm">
                    Send response
                </button>
            </section>
        </div>
    );
}

export default LiveChat;
