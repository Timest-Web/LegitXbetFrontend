import SubmitButton from "../../Constants/SubmitButton";

const NotificationPopUp = () => {
    return ( <div className="bg-white w-[61.25rem] h-[34rem] rounded-[1.25rem] p-8 mt-4">
        <section className="flex justify-between">
            <h3 className="pt-2">
            New sign up Bonuses
            </h3>
            <div>
                <SubmitButton buttonContent="Delete"/>
            </div>
        </section>
        <hr className="mt-4 mb-4"></hr>
        <p className=" font-medium ">Lorem ipsum dolor sit amet consectetur. Pulvinar risus sapien volutpat nulla aliquam egestas sit aliquam. Tempor ultrices cursus leo leo magna. Turpis aliquet quis facilisi pellentesque id. Laoreet risus felis purus sagittis quam cras.</p>
        <div className="mt-72 flex justify-end items-end">
            <SubmitButton buttonContent="Okay, got it"/>
        </div>
    </div> );
}
 
export default NotificationPopUp;