// import { Loader } from "@heathmont/moon-core-tw";
import Image from 'next/image';
import Loader from '../../../assets/legitxbet.gif';


export const LoaderScreen = () => (
  <div className="flex items-center justify-center bg-black w-screen h-screen">
    <Image src={Loader} alt='loader alt' height={100} width={300} />
  </div>
);