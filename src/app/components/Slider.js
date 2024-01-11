import { Forward } from "../assets/Forward";
import { Back } from "../assets/Back";
export const Slider = () => {
    return (
        <div className=" relative flex flex-col bg-white ">
            <img src="Photo.png" className="relative " />
            <div
                className="
     absolute left-5 bottom-14  flex w-[600px] p-10 flex-col items-start gap-[24px] rounded-xl bg-gray-100 border-1 border-gray-100 border-solid"
            >
                <div>
                    <div className="text-gray-800 font-semibold text-2xl leading-10 text-[#181A2A]">
                        Grid system for better Design User Interface
                    </div>
                </div>
                <div className="text-gray-400 text-lg">August 20, 2022</div>
            </div>
            <div className="w-full flex justify-end items-center gap-3 mt-3">
                <div className="flex justify-center items-center border">
                    <Back />
                </div>
                <div className="flex justify-center items-center ">
                    <Forward />
                </div>
            </div>
        </div>
    );
}
