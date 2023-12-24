import ReceivedIcon from "@/src/client/shared/Svg/ReceivedIcon";
import ExportIcon from "@/src/client/shared/Svg/ExportIcon";

const SupportTicket = () => {
  return (
    <div className="bg-white w-[54.8125rem] h-[54.625rem] rounded-3xl px-12 pt-24 ">
      <div>
        <h2 className="font-bold">Support/tickets</h2>
        <hr className="mt-6 mb-6"></hr>
        <table className="w-full">
          <tr className=" text-left ">
            <th>Username</th>
            <th>Email</th>
            <th>Ticket Id</th>
            <th>Priority</th>
            <th>Call number</th>
          </tr>
          <tr className=" text-left ">
            <td>Johnson Chidubem</td>
            <td>johnson@gmail.com</td>
            <td>1284647AHK</td>
            <td>High</td>
            <td>08182175835</td>
          </tr>
        </table>
        <hr className="mt-6 mb-6"></hr>
        <table className=" w-[19rem] ">
          <tr className="text-left ">
            <th>Date Created</th>
            <th>Status</th>
          </tr>
          <tr className=" text-left">
            <td>28/04/2023</td>
            <td>Open</td>
          </tr>
        </table>
        <hr className="mt-6 mb-6"></hr>
        <div className="flex justify-between font-bold">
          <div className="flex space-x-1">
            <h2>Customers comment</h2>
           <div className="p-1" ><ReceivedIcon /></div> 
          </div>
          <div className="flex space-x-1">
            <h2>Attach files</h2>
           <div className="p-1"><ExportIcon /></div> 
          </div>
        </div>
        <textarea className="bg-[#F5F5F5] w-[49.3125rem] h-[13.8125rem] mt-6 mb-6 "></textarea>
        <div className="flex justify-end items-end">
          <button className="text-[#5D5D5D]  w-[8.25rem] h-[2.1875rem] border border-solid rounded-sm">
            Open a ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportTicket;
