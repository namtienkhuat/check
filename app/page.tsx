"use client";
import Product from "@/components/Product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    const [filter, setFilter] = useState("");
    const handleFilterChange = (e: any) => {
        setFilter(e.target.value);
        console.log(filter);
    };
    const data = [
        {
            id: 1,
            image: "/card1.jpg",
            title: "Blouse and belted skirt",
            gene: "Female",
            age: "Ranges",
            price: " N8.900.000",
        },
        {
            id: 2,
            image: "/card2.jpg",
            title: "Pink ankara mixed gown",
            gene: "Female",
            age: "0 - 11",
            price: " N8.900.000",
        },
        {
            id: 3,
            image: "/card3.jpg",
            title: "A - shaped gown",
            gene: "Female",
            age: "Ranges",
            price: " N8.900.000",
        },
        {
            id: 4,
            image: "/card4.jpg",
            title: "Blouse and belted skirt",
            gene: "Female",
            age: "Ranges",
            price: " N8.900.000",
        },
        {
            id: 5,
            image: "/card5.jpg",
            title: "Ankara suit",
            gene: "Male",
            age: "Ranges",
            price: " N8.900.000",
        },
        {
            id: 6,
            image: "/card6.jpg",
            title: "Brown ball gown",
            gene: "Female",
            age: "0 - 11",
            price: " N8.900.000",
        },
        {
            id: 7,
            image: "/card7.jpg",
            title: "Male suit",
            gene: "Male",
            age: "Ranges",
            price: " N8.900.000",
        },
        {
            id: 8,
            image: "/card8.jpg",
            title: "Flared gown",
            gene: "Female",
            age: "Ranges",
            price: " N8.900.000",
        },
    ];
    return (
        <main className="mx-[120px]">
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
                            <div className="p-[10px]">
                                {" "}
                                <Image
                                    src="/card.svg"
                                    alt=""
                                    width={28}
                                    height={27}
                                />
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
            <div className="flex items-center font-[700] text-[20px] gap-x-[6px] py-[40px] px-[20px] mt-[53px]">
                <a href="#!" className="no-underline text-primary">
                    Home
                </a>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11 9L14 12L11 15"
                        stroke="#3734A9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <a href="#!" className="no-underline text-primary">
                    Featured Store
                </a>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11 9L14 12L11 15"
                        stroke="#3734A9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <a href="#!" className="no-underline">
                    Product Detail
                </a>
            </div>
            <div className="m-auto bg-[url('/banner.jpg')] object-cover rounded-[20px] py-[34px] flex items-center gap-[300px]">
                <div className=" bg-white rounded-[30px] text-left flex flex-col p-[10px] ml-[120px] h-fit">
                    <span className="font-[400] text-[52px] text-primary ">
                        Trendy Styles..
                    </span>
                    <span className="font-[700] text-primary text-[36px] ">
                        Thousands styles More!
                    </span>
                    <p className="font-[400] text-[12px] leading-[18px]">
                        Having a pet means you have more joy, a new friend, a
                        happy person who will always be with you to have fun. We
                        have 200+ different pets that can meet your needs!
                    </p>
                    <div className="flex items-center gap-[30px] mt-[23px]">
                        <div className="flex items-center">
                            <Image
                                src="/play.svg"
                                alt=""
                                width={34}
                                height={34}
                            />
                            <span className="pl-[9px]">See How It Works</span>
                        </div>
                        <div className="flex bg-primary rounded-[10px] py-[10px] pl-[23px]">
                            <button className="text-[14px] text-white font-[700] ">
                                Shop collections
                            </button>
                            <Image
                                src="/vector.svg"
                                width={44.3}
                                height={37.9}
                                alt=""
                                className="pl-[8px] pr-[20.35px]"
                            />
                        </div>
                    </div>
                </div>
                <Image
                    src="/kid2.jpg"
                    alt=""
                    width={264.19}
                    height={400}
                    className="rounded-[200px] mr-[120px]"
                />
            </div>
            <div>
                <h3 className="font-[700] text-[48px] text-center py-[42px]">
                    Our featured store
                </h3>
            </div>
            <div>
                <div className="grid grid-cols-[30%_35%_35%] items-center mx-auto">
                    <span className="text-primary font-[700] text-[24px]">
                        Filter
                    </span>

                    <div className="flex items-baseline">
                        <span className="text-primary font-[700] text-[24px] mr-[10px]">
                            Ankara styles
                        </span>
                        <span className="text-[#5B5B5B] font-[400] text-[14px]">
                            Male & Female
                        </span>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center justify-between">
                        <input
                            type="text"
                            onChange={handleFilterChange}
                            className="w-full p-4 outline-none text-primary "
                            placeholder="Search for the product you need..."
                        />
                        <button className="p-4 text-white bg-primary  rounded-[5px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mx-auto pt-[48px] grid grid-cols-[1fr_4fr] gap-[59px]">
                    <div className="">
                        <div className="flex flex-col">
                            <span className="font-[700] text-[#00171F]">
                                Gender
                            </span>
                            <div className="pt-[12px] pb-[16px]">
                                <div>
                                    <input type="checkbox" name="male" />
                                    <label htmlFor="male" className="pl-[10px]">
                                        Male
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" name="female" />
                                    <label
                                        htmlFor="female"
                                        className="pl-[10px]"
                                    >
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-[700] text-[#00171F]">
                                Age group
                            </span>
                            <div className="pt-[12px] pb-[16px]">
                                <div>
                                    <input type="checkbox" name="adult" />
                                    <label
                                        htmlFor="adult"
                                        className="pl-[10px]"
                                    >
                                        Adult
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" name="children" />
                                    <label
                                        htmlFor="children"
                                        className="pl-[10px]"
                                    >
                                        Children
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="font-[700] text-[#00171F]">
                                Price
                            </span>
                            <div className="flex pt-[12px] pb-[16px]">
                                <div>
                                    <select name="min" id="min">
                                        <option value="min">Min</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="max" id="max">
                                        <option value="max">Max</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-[700] text-[#00171F]">
                                Size
                            </span>
                            <div className="pt-[12px] pb-[16px]">
                                <div>
                                    <input type="checkbox" name="small" />
                                    <label
                                        htmlFor="small"
                                        className="pl-[10px]"
                                    >
                                        Small
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" name="medium" />
                                    <label
                                        htmlFor="medium"
                                        className="pl-[10px]"
                                    >
                                        Medium
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" name="large" />
                                    <label
                                        htmlFor="large"
                                        className="pl-[10px]"
                                    >
                                        Large
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-x-[17px] gap-y-[24px] grid-cols-4 ">
                        {data.length > 0 &&
                            data.map((item) => (
                                <Product
                                    key={item.id}
                                    item={item}
                                    handle={() => router.push("/detail")}
                                ></Product>
                            ))}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 ">
                <div className="pt-[143px] flex h-[34px] gap-x-[12px] items-center col-start-2 col-end-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-primary"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                    </svg>
                    <a
                        href="#!"
                        className="pt-[6px] px-[11.5px] pb-[4px] bg-primary text-white rounded-[10px] font-bold text-[18px] "
                    >
                        1
                    </a>
                    <a
                        href="#!"
                        className="text-primary font-bold text-[18px] pt-[6px] px-[11.5px] pb-[4px]"
                    >
                        2
                    </a>
                    <a
                        href="#!"
                        className="text-primary font-bold text-[18px] pt-[6px] px-[11.5px] pb-[4px]"
                    >
                        3
                    </a>
                    <a
                        href="#!"
                        className="text-primary font-bold text-[18px] pt-[6px] px-[11.5px] pb-[4px]"
                    >
                        4
                    </a>
                    <a
                        href="#!"
                        className="text-primary font-bold text-[18px] pt-[6px] px-[11.5px] pb-[4px]"
                    >
                        ...
                    </a>
                    <a
                        href="#!"
                        className="text-primary font-bold text-[18px] pt-[6px] px-[11.5px] pb-[4px]"
                    >
                        28
                    </a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-primary"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </div>
            </div>
            <div className="bg-primary rounded-[20px] mt-[171px] mx-[160px] pb-[43.5px]">
                <h3 className=" font-bold text-[24px] text-white text-center pt-[43.5px] px-[100px] pb-[54px]">
                    Sign up now so your selected item are saved to your personal
                    cart.
                </h3>
                <div className=" bg-white rounded-[20px] grid grid-cols-[2fr_1fr] gap-x-[12px] px-[22px] py-[27px] mx-[140px]">
                    <input
                        type="text"
                        placeholder="Enter your Email"
                        className="border-solid border border-[#3734A9] rounded-[10px] py-[14px] px-[28px]"
                    />
                    <div className="flex bg-primary rounded-[10px] justify-center items-center">
                        <button className="font-bold text-[18px] text-white">
                            Sign up now
                        </button>
                        <Image
                            src="/vector.svg"
                            width={40}
                            height={34}
                            alt=""
                            className="pl-[8px] pr-[20.35px] "
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto border-solid border-t-[1.5px] border-[#3734A9] pt-[76px] px-[90px] mt-[124px] mb-[80px]">
                <div className="grid grid-cols-[1fr_1fr_1fr]">
                    <div className="">
                        <Image
                            src="/logo2.svg"
                            alt=""
                            width={231}
                            height={45}
                        />
                        <p className="font-[400] text-[18px] text-[#7F848D] pt-[30px] pb-[24px]">
                            FashionForAll. Vestibulum non est nisl. Donec eget
                            sodales nisl. Donec ut velit erat.
                        </p>
                        <span className="font-[400] text-[18px]">
                            © 2022 All rights reserved.
                        </span>
                    </div>
                    <div className=" col-start-3 grid grid-cols-2 grid-rows-5 w-[391px] h-[228px]">
                        <span className="font-[400] text-[#7F848D]">
                            Explore
                        </span>
                        <span className="font-[400] text-[#7F848D]">
                            Privacy policy
                        </span>
                        <span className="font-[400] text-[#7F848D]">
                            Product
                        </span>
                        <span className="font-[400] text-[#7F848D]">Legal</span>
                        <span className="font-[400] text-[#7F848D]">
                            Sell your product
                        </span>
                        <span className="font-[400] text-[#7F848D]">
                            Terms of service
                        </span>
                        <span className="font-[400] text-[#7F848D]">
                            Pricing
                        </span>
                        <span className="font-[400] text-[#7F848D]">
                            Help center
                        </span>
                        <span className="font-[400] text-[#7F848D]">
                            Reviews
                        </span>
                        <div>
                            <span className="font-bold">Social Media</span>
                            <div className="flex justify-between">
                                <Image
                                    src="ig.svg"
                                    alt=""
                                    width={44}
                                    height={44}
                                ></Image>
                                <Image
                                    src="face.svg"
                                    alt=""
                                    width={44}
                                    height={44}
                                ></Image>
                                <Image
                                    src="yt.svg"
                                    alt=""
                                    width={44}
                                    height={44}
                                ></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
