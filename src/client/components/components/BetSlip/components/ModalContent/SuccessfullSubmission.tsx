// import { FilesCopy, GenericCheckAlternative, GenericShareAndroid, NotificationsAlert } from "@heathmont/moon-icons-tw";

// const SuccessfulSubmission = ({
//   totalStake,
//   potentialWins,
//   ticketCode,
//   handleClick,
//   closeModal,
// }: {totalStake}) => {
//   return (
//     <div className="flex flex-col items-center justify-center p-10">
//       <div className="bg-gold p-2 rounded-full">
//         <GenericCheckAlternative height={40} width={40} />
//       </div>

//       <p className="font-bold mt-3 text-[18px]">Submission Successful</p>
//       <div className="mt-5 w-[300px]">
//         <div className="flex items-center justify-between w-full">
//           <p>Total Stake</p>
//           <p className="font-semibold">{totalStake}</p>
//         </div>
//         <div className="flex items-center justify-between w-full">
//           <p>Potential Win</p>
//           <p className="font-semibold">{`${potentialWins}`}</p>
//         </div>
//         <div className="flex items-center justify-between w-full">
//           <div className="flex items-center justify-center">
//             <p>Booking Code</p>
//             <NotificationsAlert height={26} width={26} />
//           </div>
//           <div className="flex items-center space-x-2">
//             <GenericShareAndroid height={26} width={26} />
//             <FilesCopy height={26} width={26} />
//             <p className="font-semibold">{ticketCode}</p>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col mt-6 w-full space-y-4 px-8">
//         <button
//           className="text-white bg-gold py-2 px-6 w-full"
//           onClick={handleClick}
//         >
//           ok
//         </button>
//         <button
//           className="border border-gold font-bold w-full py-2 px-6 text-gold"
//           onClick={() => closeModal()}
//         >
//           Rebet
//         </button>
//       </div>
//     </div>
//   );
// };


// export default SuccessfulSubmission;