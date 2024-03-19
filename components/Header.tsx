import Image from "next/image";
import { useState } from "react";

export default function Header({ increase }: any) {
    return (
        <div className="px-[40.75px] py-[26.5px] flex items-center justify-between mx-auto">
            <Image src="/logo1.svg" alt="" width={231} height={45} />

            <div className="flex justify-between text-[#00000080] font-[600] gap-x-[59px]">
                <a href="#!" className="text-primary ">
                    Home
                </a>
                <a href="#!">Products</a>
                <a href="#!">Contact</a>
            </div>
            <div className="flex justify-between gap-x-[29px]">
                <div className="flex items-center w-[254.5px]">
                    <div className="flex items-center">
                        <div className="p-[10px]">
                            {" "}
                            <Image
                                src="/search.svg"
                                alt=""
                                width={28}
                                height={27}
                            />
                        </div>

                        <span className="font-[500] text-primary text-[18px] pl-[21px] pr-[29px]">
                            Search
                        </span>
                    </div>
                    <div className="flex items-center">
                        <div className="p-[10px] relative">
                            {" "}
                            <Image
                                src="/card.svg"
                                alt=""
                                width={28}
                                height={27}
                            />
                            {increase > 0 ? (
                                <span className="add font-bold px-[6px] absolute top-0 right-0 text-[12px] rounded-[8px] text-primary bg-white border-[3px] border-solid border-[#3734A9]">
                                    {increase}
                                </span>
                            ) : undefined}
                        </div>

                        <span className="font-[500] text-primary text-[18px] pl-[21px]">
                            Card
                        </span>
                    </div>
                </div>
                <button className="px-[34px] py-[12px] bg-primary font-[600] text-[18px] text-white rounded-[20px]">
                    Get started
                </button>
            </div>
        </div>
    );
}
