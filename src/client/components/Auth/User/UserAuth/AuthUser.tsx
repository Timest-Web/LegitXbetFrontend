import Image from "next/image";
import Logo from '../../../../../assets/logo1.png';

const AuthUser = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-gray-400 lg:p-0 px-6">
        <Image src={Logo} alt="img alt" />
        <h1 className="lg:text-5xl font-bold lg:mt-0 mt-5">
          Oops! <span className="text-gold lg:text-8xl text-5xl"> 401 </span>{" "}
          User Not Found
        </h1>
        <p className="lg:text-2xl mt-2">
          you will be redirect to login page in a seconds
        </p>
      </div>
    );
}

export default AuthUser