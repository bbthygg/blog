import { FbLogo } from "../assets/Fblogo";
import { TwitterLogo } from "../assets/TwitterLogo";
import { IgLogo } from "../assets/IgLogo";
import { InLogo } from "../assets/InLogo";
import { FooterLogo } from "../assets/FooterLogo";

export const Footer = () => {
    return (
        <div className="w-full bg-white">
            <div className="px-5 m-auto">
                <div className="grid grid-cols-3 mb-5">
                    <div className="flex flex-col gap-6">
                        <h4>About</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam
                        </p>
                        <div className="flex flex-col">
                            <a>Email : info@jstemplate.net</a>
                            <a>Phone : 880 123 456 789</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <a>Home</a>
                        <a>Blog</a>
                        <a>Contact</a>
                    </div>
                    <div className="flex gap-8">
                        <a>
                            <FbLogo />
                        </a>
                        <a>
                            <TwitterLogo />
                        </a>
                        <a>
                            <IgLogo />
                        </a>
                        <a>
                            <InLogo />
                        </a>
                    </div>
                </div>
                <div className="border-t-2 border-gray-400 flex py-5 items-center justify-between">
                    <FooterLogo />
                    <div className="grid grid-cols-3 gap-4">
                        <a className="border-r-2 mr-border-gray-400">Terms of Use</a>
                        <a className="border-r-2 mr-border-gray-400">Privacy Policy</a>
                        <a>Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
