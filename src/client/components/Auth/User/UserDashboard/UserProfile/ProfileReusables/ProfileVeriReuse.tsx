import Padlock from "@/src/client/shared/Svg/Padlock";

const ProfileVeriReuse = () => {
    return (  <div className="flex space-x-6 font-bold opacity-50 pl-6 mt-6">
    <div className="flex space-x-3">
      <Padlock />
      <h3>Security & Safety</h3>
    </div>
    <h3>Profile Verification</h3>
  </div> );
}
 
export default ProfileVeriReuse;