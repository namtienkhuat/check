import Image from "next/image";

export default function Home() {
    return (
        // <main className="m">
        //     <div className="w-[1483px] h-[103px] flex items-center px-[40.75px] py-[26.5px] justify-between mx-auto">
        //         <Image src="/logo1.svg" alt="" width={231} height={45} />

        //         <div className="flex justify-between w-[296px] h-[28px] text-[#00000080] font-[600]">
        //             <a href="#!" className="text-primary ">
        //                 Home
        //             </a>
        //             <a href="#!">Products</a>
        //             <a href="#!">Contact</a>
        //         </div>
        //         <div className="w-[442.5px] h-[50px] flex justify-between">
        //             <div className="flex items-center w-[254.5px]">
        //                 <div className="flex items-center">
        //                     <div className="p-[10px]">
        //                         {" "}
        //                         <Image
        //                             src="/search.svg"
        //                             alt=""
        //                             width={28}
        //                             height={27}
        //                         />
        //                     </div>

        //                     <span className="font-[500] text-primary text-[18px] pl-[21px] pr-[29px]">
        //                         Search
        //                     </span>
        //                 </div>
        //                 <div className="flex items-center">
        //                     <div className="p-[10px]">
        //                         {" "}
        //                         <Image
        //                             src="/card.svg"
        //                             alt=""
        //                             width={28}
        //                             height={27}
        //                         />
        //                     </div>

        //                     <span className="font-[500] text-primary text-[18px] pl-[21px]">
        //                         Card
        //                     </span>
        //                 </div>
        //             </div>
        //             <button className="px-[34px] py-[12px] bg-primary font-[600] text-[18px] text-white rounded-[20px]">
        //                 Get started
        //             </button>
        //         </div>
        //     </div>
        //     <div className="flex w-[462px] h-[104px] px-[20px] py-[40px] justify-between items-center font-[700] text-[20px] ml-[22.5px]">
        //         <span className="text-primary">Home</span>
        //         <svg
        //             width="24"
        //             height="24"
        //             viewBox="0 0 24 24"
        //             fill="none"
        //             xmlns="http://www.w3.org/2000/svg"
        //         >
        //             <path
        //                 d="M11 9L14 12L11 15"
        //                 stroke="#3734A9"
        //                 stroke-width="1.5"
        //                 stroke-linecap="round"
        //                 stroke-linejoin="round"
        //             />
        //         </svg>
        //         <span className="text-primary">Featured store</span>
        //         <svg
        //             width="24"
        //             height="24"
        //             viewBox="0 0 24 24"
        //             fill="none"
        //             xmlns="http://www.w3.org/2000/svg"
        //         >
        //             <path
        //                 d="M11 9L14 12L11 15"
        //                 stroke="#3734A9"
        //                 stroke-width="1.5"
        //                 stroke-linecap="round"
        //                 stroke-linejoin="round"
        //             />
        //         </svg>
        //         <span className="text-[#00000080]">Product detail</span>
        //     </div>
        //     <div className="w-[1485px] h-[448px] relative m-[auto]">
        //         <Image
        //             src="/banner.jpg"
        //             alt=""
        //             width={1485}
        //             height={448}
        //             className="object-cover rounded-[20px] h-[448px]"
        //         />
        //         <div className="w-[424px] h-[400px] bg-white absolute left-[150px] rounded-[30px] top-[24px]  text-left grid gird-cols-1 p-[10px] items-center">
        //             <span className="font-[400] text-[52px] text-primary ">
        //                 Trendy Styles..
        //             </span>
        //             <span className="font-[700] text-primary text-[36px]">
        //                 Thousands styles More!
        //             </span>
        //             <p className="font-[400] text-[12px] leading-[18px]">
        //                 Having a pet means you have more joy, a new friend, a
        //                 happy person who will always be with you to have fun. We
        //                 have 200+ different pets that can meet your needs!
        //             </p>
        //             <div className="flex items-center justify-between">
        //                 <div className="flex items-center">
        //                     <Image
        //                         src="/play.svg"
        //                         alt=""
        //                         width={34}
        //                         height={34}
        //                     />
        //                     <span className="pl-[9px]">See How It Works</span>
        //                 </div>
        //                 <div className="flex bg-primary rounded-[10px] py-[10px] pl-[23px]">
        //                     <button className="text-[14px] text-white font-[700] ">
        //                         Shop collections
        //                     </button>
        //                     <Image
        //                         src="/vector.svg"
        //                         width={44.3}
        //                         height={37.9}
        //                         alt=""
        //                         className="pl-[8px] pr-[20.35px]"
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //         <Image
        //             src="/kid1.jpg"
        //             alt=""
        //             width={264.19}
        //             height={400}
        //             className="rounded-bl-[200px] absolute top-[24px]
        //             left-[800px]"
        //         />
        //         <Image
        //             src="/kid2.jpg"
        //             alt=""
        //             width={264.19}
        //             height={400}
        //             className="rounded-tr-[200px] absolute top-[24px] left-[1064px]
        //             "
        //         />
        //     </div>
        //     <div>
        //         <h3 className="font-[700] text-[48px] text-center py-[42px]">
        //             Our featured store
        //         </h3>
        //     </div>
        //     <div>
        //         <div className="flex w-[1485px] mx-auto ">
        //             <span className="text-primary font-[700] text-[24px]">
        //                 Filter
        //             </span>
        //             <div className="flex items-baseline">
        //                 <span className="text-primary font-[700] text-[24px] ml-[276px] mr-[10px]">
        //                     Ankara styles
        //                 </span>
        //                 <span className="text-[#5B5B5B] font-[400] text-[14px]">
        //                     Male & Female
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="w-[1485px] mx-auto pt-[48px] flex justify-between">
        //             <div className="w-[246px]">
        //                 <div className="flex flex-col">
        //                     <span className="font-[700] text-[#00171F]">
        //                         Gender
        //                     </span>
        //                     <div className="pt-[12px] pb-[16px]">
        //                         <div>
        //                             <input type="checkbox" name="male" />
        //                             <label htmlFor="male" className="pl-[10px]">
        //                                 Male
        //                             </label>
        //                         </div>
        //                         <div>
        //                             <input type="checkbox" name="female" />
        //                             <label
        //                                 htmlFor="female"
        //                                 className="pl-[10px]"
        //                             >
        //                                 Female
        //                             </label>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col">
        //                     <span className="font-[700] text-[#00171F]">
        //                         Age group
        //                     </span>
        //                     <div className="pt-[12px] pb-[16px]">
        //                         <div>
        //                             <input type="checkbox" name="adult" />
        //                             <label
        //                                 htmlFor="adult"
        //                                 className="pl-[10px]"
        //                             >
        //                                 Adult
        //                             </label>
        //                         </div>
        //                         <div>
        //                             <input type="checkbox" name="children" />
        //                             <label
        //                                 htmlFor="children"
        //                                 className="pl-[10px]"
        //                             >
        //                                 Children
        //                             </label>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div>
        //                     <span className="font-[700] text-[#00171F]">
        //                         Price
        //                     </span>
        //                     <div className="flex pt-[12px] pb-[16px]">
        //                         <div>
        //                             <select name="min" id="min">
        //                                 <option value="min">Min</option>
        //                             </select>
        //                         </div>
        //                         <div>
        //                             <select name="max" id="max">
        //                                 <option value="max">Max</option>
        //                             </select>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col">
        //                     <span className="font-[700] text-[#00171F]">
        //                         Size
        //                     </span>
        //                     <div className="pt-[12px] pb-[16px]">
        //                         <div>
        //                             <input type="checkbox" name="small" />
        //                             <label
        //                                 htmlFor="small"
        //                                 className="pl-[10px]"
        //                             >
        //                                 Small
        //                             </label>
        //                         </div>
        //                         <div>
        //                             <input type="checkbox" name="medium" />
        //                             <label
        //                                 htmlFor="medium"
        //                                 className="pl-[10px]"
        //                             >
        //                                 Medium
        //                             </label>
        //                         </div>
        //                         <div>
        //                             <input type="checkbox" name="large" />
        //                             <label
        //                                 htmlFor="large"
        //                                 className="pl-[10px]"
        //                             >
        //                                 Large
        //                             </label>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="w-[1171px] grid gap-x-[17px] gap-y-[24px] grid-cols-4">
        //                 <div className="w-[282px] h-[380px] px-[8px] pt-[8px]">
        //                     <Image
        //                         src="/card1.jpg"
        //                         alt=""
        //                         width={264}
        //                         height={264}
        //                         className="rounded-[10px]"
        //                     />
        //                     <div className="pt-[8px] pr-[18px] pl-[8px] pb-[16px] flex items-center justify-between">
        //                         <div>
        //                             <h3 className="font-[700] text-[15px] text-[#00171F]">
        //                                 Blouse and belted skirt
        //                             </h3>
        //                             <div className="flex py-[8px]">
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Gene:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Female
        //                                 </span>
        //                                 <Image
        //                                     src="/cham.svg"
        //                                     alt=""
        //                                     width={18}
        //                                     height={18}
        //                                     className="p-[7px]"
        //                                 />
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Age:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Ranges
        //                                 </span>
        //                             </div>
        //                             <h3 className="font-[700] text-[12px] text-[#00171F]">
        //                                 N8.900.000
        //                             </h3>
        //                         </div>
        //                         <div className="w-[47px] h-[47px] p-[10px] bg-[#3734A9] rounded-[20px]">
        //                             <Image
        //                                 src="/xe.svg"
        //                                 alt=""
        //                                 width={27}
        //                                 height={27}
        //                             ></Image>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="w-[282px] h-[380px] px-[8px] pt-[8px]">
        //                     <Image
        //                         src="/card2.jpg"
        //                         alt=""
        //                         width={264}
        //                         height={264}
        //                         className="rounded-[10px]"
        //                     />
        //                     <div className="pt-[8px] pr-[18px] pl-[8px] pb-[16px] flex items-center justify-between">
        //                         <div>
        //                             <h3 className="font-[700] text-[15px] text-[#00171F]">
        //                                 Blouse and belted skirt
        //                             </h3>
        //                             <div className="flex py-[8px]">
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Gene:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Female
        //                                 </span>
        //                                 <Image
        //                                     src="/cham.svg"
        //                                     alt=""
        //                                     width={18}
        //                                     height={18}
        //                                     className="p-[7px]"
        //                                 />
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Age:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Ranges
        //                                 </span>
        //                             </div>
        //                             <h3 className="font-[700] text-[12px] text-[#00171F]">
        //                                 N8.900.000
        //                             </h3>
        //                         </div>
        //                         <div className="w-[47px] h-[47px] p-[10px] bg-[#3734A9] rounded-[20px]">
        //                             <Image
        //                                 src="/xe.svg"
        //                                 alt=""
        //                                 width={27}
        //                                 height={27}
        //                             ></Image>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="w-[282px] h-[380px] px-[8px] pt-[8px]">
        //                     <Image
        //                         src="/card3.jpg"
        //                         alt=""
        //                         width={264}
        //                         height={264}
        //                         className="rounded-[10px]"
        //                     />
        //                     <div className="pt-[8px] pr-[18px] pl-[8px] pb-[16px] flex items-center justify-between">
        //                         <div>
        //                             <h3 className="font-[700] text-[15px] text-[#00171F]">
        //                                 Blouse and belted skirt
        //                             </h3>
        //                             <div className="flex py-[8px]">
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Gene:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Female
        //                                 </span>
        //                                 <Image
        //                                     src="/cham.svg"
        //                                     alt=""
        //                                     width={18}
        //                                     height={18}
        //                                     className="p-[7px]"
        //                                 />
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Age:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Ranges
        //                                 </span>
        //                             </div>
        //                             <h3 className="font-[700] text-[12px] text-[#00171F]">
        //                                 N8.900.000
        //                             </h3>
        //                         </div>
        //                         <div className="w-[47px] h-[47px] p-[10px] bg-[#3734A9] rounded-[20px]">
        //                             <Image
        //                                 src="/xe.svg"
        //                                 alt=""
        //                                 width={27}
        //                                 height={27}
        //                             ></Image>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="w-[282px] h-[380px] px-[8px] pt-[8px]">
        //                     <Image
        //                         src="/card4.jpg"
        //                         alt=""
        //                         width={264}
        //                         height={264}
        //                         className="rounded-[10px]"
        //                     />
        //                     <div className="pt-[8px] pr-[18px] pl-[8px] pb-[16px] flex items-center justify-between">
        //                         <div>
        //                             <h3 className="font-[700] text-[15px] text-[#00171F]">
        //                                 Blouse and belted skirt
        //                             </h3>
        //                             <div className="flex py-[8px]">
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Gene:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Female
        //                                 </span>
        //                                 <Image
        //                                     src="/cham.svg"
        //                                     alt=""
        //                                     width={18}
        //                                     height={18}
        //                                     className="p-[7px]"
        //                                 />
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Age:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Ranges
        //                                 </span>
        //                             </div>
        //                             <h3 className="font-[700] text-[12px] text-[#00171F]">
        //                                 N8.900.000
        //                             </h3>
        //                         </div>
        //                         <div className="w-[47px] h-[47px] p-[10px] bg-[#3734A9] rounded-[20px]">
        //                             <Image
        //                                 src="/xe.svg"
        //                                 alt=""
        //                                 width={27}
        //                                 height={27}
        //                             ></Image>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="w-[282px] h-[380px] px-[8px] pt-[8px]">
        //                     <Image
        //                         src="/card5.jpg"
        //                         alt=""
        //                         width={264}
        //                         height={264}
        //                         className="rounded-[10px]"
        //                     />
        //                     <div className="pt-[8px] pr-[18px] pl-[8px] pb-[16px] flex items-center justify-between">
        //                         <div>
        //                             <h3 className="font-[700] text-[15px] text-[#00171F]">
        //                                 Blouse and belted skirt
        //                             </h3>
        //                             <div className="flex py-[8px]">
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Gene:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Female
        //                                 </span>
        //                                 <Image
        //                                     src="/cham.svg"
        //                                     alt=""
        //                                     width={18}
        //                                     height={18}
        //                                     className="p-[7px]"
        //                                 />
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Age:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Ranges
        //                                 </span>
        //                             </div>
        //                             <h3 className="font-[700] text-[12px] text-[#00171F]">
        //                                 N8.900.000
        //                             </h3>
        //                         </div>
        //                         <div className="w-[47px] h-[47px] p-[10px] bg-[#3734A9] rounded-[20px]">
        //                             <Image
        //                                 src="/xe.svg"
        //                                 alt=""
        //                                 width={27}
        //                                 height={27}
        //                             ></Image>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="w-[282px] h-[380px] px-[8px] pt-[8px]">
        //                     <Image
        //                         src="/card6.jpg"
        //                         alt=""
        //                         width={264}
        //                         height={264}
        //                         className="rounded-[10px]"
        //                     />
        //                     <div className="pt-[8px] pr-[18px] pl-[8px] pb-[16px] flex items-center justify-between">
        //                         <div>
        //                             <h3 className="font-[700] text-[15px] text-[#00171F]">
        //                                 Blouse and belted skirt
        //                             </h3>
        //                             <div className="flex py-[8px]">
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Gene:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Female
        //                                 </span>
        //                                 <Image
        //                                     src="/cham.svg"
        //                                     alt=""
        //                                     width={18}
        //                                     height={18}
        //                                     className="p-[7px]"
        //                                 />
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Age:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Ranges
        //                                 </span>
        //                             </div>
        //                             <h3 className="font-[700] text-[12px] text-[#00171F]">
        //                                 N8.900.000
        //                             </h3>
        //                         </div>
        //                         <div className="w-[47px] h-[47px] p-[10px] bg-[#3734A9] rounded-[20px]">
        //                             <Image
        //                                 src="/xe.svg"
        //                                 alt=""
        //                                 width={27}
        //                                 height={27}
        //                             ></Image>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="w-[282px] h-[380px] px-[8px] pt-[8px]">
        //                     <Image
        //                         src="/card7.jpg"
        //                         alt=""
        //                         width={264}
        //                         height={264}
        //                         className="rounded-[10px]"
        //                     />
        //                     <div className="pt-[8px] pr-[18px] pl-[8px] pb-[16px] flex items-center justify-between">
        //                         <div>
        //                             <h3 className="font-[700] text-[15px] text-[#00171F]">
        //                                 Blouse and belted skirt
        //                             </h3>
        //                             <div className="flex py-[8px]">
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Gene:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Female
        //                                 </span>
        //                                 <Image
        //                                     src="/cham.svg"
        //                                     alt=""
        //                                     width={18}
        //                                     height={18}
        //                                     className="p-[7px]"
        //                                 />
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Age:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Ranges
        //                                 </span>
        //                             </div>
        //                             <h3 className="font-[700] text-[12px] text-[#00171F]">
        //                                 N8.900.000
        //                             </h3>
        //                         </div>
        //                         <div className="w-[47px] h-[47px] p-[10px] bg-[#3734A9] rounded-[20px]">
        //                             <Image
        //                                 src="/xe.svg"
        //                                 alt=""
        //                                 width={27}
        //                                 height={27}
        //                             ></Image>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="w-[282px] h-[380px] px-[8px] pt-[8px]">
        //                     <Image
        //                         src="/card8.jpg"
        //                         alt=""
        //                         width={264}
        //                         height={264}
        //                         className="rounded-[10px]"
        //                     />
        //                     <div className="pt-[8px] pr-[18px] pl-[8px] pb-[16px] flex items-center justify-between">
        //                         <div>
        //                             <h3 className="font-[700] text-[15px] text-[#00171F]">
        //                                 Blouse and belted skirt
        //                             </h3>
        //                             <div className="flex py-[8px]">
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Gene:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Female
        //                                 </span>
        //                                 <Image
        //                                     src="/cham.svg"
        //                                     alt=""
        //                                     width={18}
        //                                     height={18}
        //                                     className="p-[7px]"
        //                                 />
        //                                 <span className="italic font-[400] text-[10px] text-[#667479]">
        //                                     Age:
        //                                 </span>
        //                                 <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
        //                                     Ranges
        //                                 </span>
        //                             </div>
        //                             <h3 className="font-[700] text-[12px] text-[#00171F]">
        //                                 N8.900.000
        //                             </h3>
        //                         </div>
        //                         <div className="w-[47px] h-[47px] p-[10px] bg-[#3734A9] rounded-[20px]">
        //                             <Image
        //                                 src="/xe.svg"
        //                                 alt=""
        //                                 width={27}
        //                                 height={27}
        //                             ></Image>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="grid grid-cols-2 w-[1485px] pb-[97px] ">
        //         <div className="pt-[143px] flex w-[356px] h-[34px] justify-between items-center col-start-2 col-end-3">
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 strokeWidth="1.5"
        //                 stroke="currentColor"
        //                 className="w-6 h-6 text-primary"
        //             >
        //                 <path
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        //                 />
        //             </svg>
        //             <a
        //                 href="#!"
        //                 className="pt-[6px] pr-[13px] pb-[4px]  pl-[13px] bg-primary text-white rounded-[10px] font-bold text-[18px] "
        //             >
        //                 1
        //             </a>
        //             <a href="#!" className="text-primary font-bold text-[18px]">
        //                 2
        //             </a>
        //             <a href="#!" className="text-primary font-bold text-[18px]">
        //                 3
        //             </a>
        //             <a href="#!" className="text-primary font-bold text-[18px]">
        //                 4
        //             </a>
        //             <a href="#!" className="text-primary font-bold text-[18px]">
        //                 ...
        //             </a>
        //             <a href="#!" className="text-primary font-bold text-[18px]">
        //                 28
        //             </a>
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 strokeWidth="1.5"
        //                 stroke="currentColor"
        //                 className="w-6 h-6 text-primary"
        //             >
        //                 <path
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        //                 />
        //             </svg>
        //         </div>
        //     </div>
        //     <div className=" w-[1015px] h-[279px] mx-auto bg-primary rounded-[20px]">
        //         <h3 className=" font-bold text-[24px] text-white text-center pt-[43.5px] pb-[54px]">
        //             Sign up now so your selected item are saved to your personal
        //             cart.
        //         </h3>
        //         <div className="w-[775px] h-[102px] bg-white rounded-[20px] flex px-[22px] py-[27px] mx-auto justify-between">
        //             <input
        //                 type="text"
        //                 placeholder="Enter your Email"
        //                 className="w-[497px] border-solid border border-[#3734A9] rounded-[10px] py-[14px] px-[28px]"
        //             />
        //             <div className="flex bg-primary w-[222px] h-[48px]  rounded-[10px] justify-center items-center">
        //                 {" "}
        //                 <button className="font-bold text-[18px] text-white">
        //                     Sign up now
        //                 </button>
        //                 <Image
        //                     src="/vector.svg"
        //                     width={44.3}
        //                     height={37.9}
        //                     alt=""
        //                     className="pl-[8px] pr-[20.35px] "
        //                 />
        //             </div>
        //         </div>
        //     </div>
        //     <div className="w-[1320px] h-[318px] mx-auto border-solid border-t-[1.5px] border-[#3734A9] pt-[76px] px-[90px] mt-[97px] mb-[70px]">
        //         <div className="w-[1168px] h-[228px] flex justify-between">
        //             <div className="w-[419px] h-[195px]">
        //                 <Image
        //                     src="/logo2.svg"
        //                     alt=""
        //                     width={231}
        //                     height={45}
        //                 />
        //                 <p className="font-[400] text-[18px] text-[#7F848D] pt-[30px] pb-[24px]">
        //                     FashionForAll. Vestibulum non est nisl. Donec eget
        //                     sodales nisl. Donec ut velit erat.
        //                 </p>
        //                 <span className="font-[400] text-[18px]">
        //                     © 2022 All rights reserved.
        //                 </span>
        //             </div>
        //             <div className="grid grid-cols-2 grid-rows-5 w-[391px] h-[228px]">
        //                 <span className="font-[400] text-[#7F848D]">
        //                     Explore
        //                 </span>
        //                 <span className="font-[400] text-[#7F848D]">
        //                     Privacy policy
        //                 </span>
        //                 <span className="font-[400] text-[#7F848D]">
        //                     Product
        //                 </span>
        //                 <span className="font-[400] text-[#7F848D]">Legal</span>
        //                 <span className="font-[400] text-[#7F848D]">
        //                     Sell your product
        //                 </span>
        //                 <span className="font-[400] text-[#7F848D]">
        //                     Terms of service
        //                 </span>
        //                 <span className="font-[400] text-[#7F848D]">
        //                     Pricing
        //                 </span>
        //                 <span className="font-[400] text-[#7F848D]">
        //                     Help center
        //                 </span>
        //                 <span className="font-[400] text-[#7F848D]">
        //                     Reviews
        //                 </span>
        //                 <div>
        //                     <span className="font-bold">Social Media</span>
        //                     <div className="flex">
        //                         <Image
        //                             src="ig.svg"
        //                             alt=""
        //                             width={44}
        //                             height={44}
        //                         ></Image>
        //                         <Image
        //                             src="face.svg"
        //                             alt=""
        //                             width={44}
        //                             height={44}
        //                         ></Image>
        //                         <Image
        //                             src="yt.svg"
        //                             alt=""
        //                             width={44}
        //                             height={44}
        //                         ></Image>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </main>
        <main>
            <div className=" h-[103px] flex items-center pl-[161.75px] pr-[164.75px] pt-[59.5px] pb-[26.5px] justify-between ">
                <Image src="/logo1.svg" alt="" width={231} height={45} />

                <div className="flex justify-between gap-x-[59px] h-[28px] text-[#00000080] font-[600]">
                    <a href="#!" className="text-primary ">
                        Home
                    </a>
                    <a href="#!">Products</a>
                    <a href="#!">Contact</a>
                </div>
                <div className=" h-[50px] flex justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="p-[10px]">
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
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </div>

                            <span className="font-[500] text-primary text-[18px] pl-[21px] pr-[29px]">
                                Search
                            </span>
                        </div>
                        <div className="flex items-center">
                            <div className="p-[10px]">
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
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
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
            <div className="flex w-[462px] h-[104px] px-[20px] py-[40px] justify-between items-center font-[700] text-[20px] ml-[22.5px]">
                <span className="text-primary">Home</span>
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
                <span className="text-primary">Featured store</span>
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
                <span className="text-primary">Product detail</span>
            </div>
            <div className="flex items-center w-[1485px] justify-evenly">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-primary "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
                <div className="w-[720px] h-[987px] pt-[16px] pr-[8px] pl-[28px] mt-[52px]">
                    <Image
                        src="/card1.jpg"
                        alt=""
                        width={660}
                        height={660}
                        className="rounded-[10px]"
                    />
                    <div className="w-[246px] h-[86px] mt-[38px] mb-[30px]">
                        <h3 className="font-[700] text-[20px] text-[#00171F]">
                            A - shaped gown
                        </h3>
                        <div className="flex py-[8px]">
                            <span className="italic font-[400] text-[10px] text-[#667479]">
                                Gene:
                            </span>
                            <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
                                Female
                            </span>
                            <Image
                                src="/cham.svg"
                                alt=""
                                width={18}
                                height={18}
                                className="p-[7px]"
                            />
                            <span className="italic font-[400] text-[10px] text-[#667479]">
                                Age:
                            </span>
                            <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
                                Ranges
                            </span>
                        </div>
                        <h3 className="font-[700] text-[16px] text-[#00171F]">
                            N8.900.000
                        </h3>
                    </div>
                    {/* <div className="w-[47px] h-[47px] p-[10px] bg-[#3734A9] rounded-[20px]">
                        <Image
                            src="/xe.svg"
                            alt=""
                            width={27}
                            height={27}
                        ></Image>
                    </div> */}
                    <div className="w-[594px] h-[126px] flex justify-between ">
                        <Image
                            src="/card1.jpg"
                            alt=""
                            width={126}
                            height={126}
                            className="rounded-[10px]"
                        ></Image>
                        <Image
                            src="/card1.jpg"
                            alt=""
                            width={126}
                            height={126}
                            className="rounded-[10px]"
                        ></Image>
                        <Image
                            src="/card1.jpg"
                            alt=""
                            width={126}
                            height={126}
                            className="rounded-[10px]"
                        ></Image>
                        <Image
                            src="/card1.jpg"
                            alt=""
                            width={126}
                            height={126}
                            className="rounded-[10px]"
                        ></Image>
                    </div>
                </div>
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
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                </svg>
            </div>
            <div className="w-[1485px] h-[796px] pt-[51px] mx-auto mt-[45px]">
                <div className="w-[302px] h-[96px] flex flex-col">
                    <span className="text-[#99A2A5] font-[400] text-[14px]">
                        Store Number: 56hp90
                    </span>
                    <span className="text-[#00171F] font-bold text-[24px]">
                        A -shaped gown
                    </span>
                    <span className="text-[#3734A9] font-bold text-[20px] pt-[8px]">
                        N8,900.00
                    </span>
                </div>
                <div className="flex w-[428px] justify-between mt-[18px]">
                    <button className="w-[142px] h-[44px] py-[28px] pt-[10px] pb-[14px] rounded-[57px] font-bold bg-primary text-[#FDFDFD]">
                        Contact us
                    </button>
                    <div className="flex items-center pr-[28px] pl-[24px]  pt-[10px] pb-[14px] w-[268px] h-[44px] border-2 border-solid border-[#3734A9] rounded-[57px] justify-evenly">
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
                                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                            />
                        </svg>

                        <button className="font-bold text-primary">
                            Chat with Store owner
                        </button>
                    </div>
                </div>
                <div className="mt-[18px] flex justify-between items-center">
                    <div className="w-[517px] h-[418px] grid grid-cols-2 grid-rows-9">
                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Store Number
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            56hp90
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Gender
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            Female
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Age
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            Ranges
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Size
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            Medium adult
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Color
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            Brown and yellow
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Measurment request
                        </span>
                        <div className="flex items-start justify-between">
                            <span className="text-[#383939] text-[14px] font-[400]">
                                Yes
                            </span>
                            <div className="flex items-center justify-center">
                                <button className="font-[600] text-[14px] text-primary underline">
                                    Request for measurment
                                </button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-[15.26px] h-[10.71px] text-primary"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>
                            </div>
                        </div>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Location
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            Nation wide
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Published Date
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            16/11/2022
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Additional Information
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            Lorem ipsum dolor sit amet consectetur. Auctor
                            enimsemper egestas felis metus volutpat cursus
                            tortor. Sit.
                        </span>
                    </div>
                    <div className="w-[517px] h-[418px] py-[61px] px-[48px]">
                        <h3 className="font-[800] text-[22px] text-center">
                            Leave a complain or review
                        </h3>
                        <p className="font-[400] text-[16px] text-center leading-[28.46px]">
                            Lorem ipsum dolor sit amet consectetur. Quam libero
                            viverra faucibus condimentum.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between w-[603px] h-[68px] mt-[45px]">
                    <button className="w-[275px] text-white bg-primary font-bold text-[18px] rounded-[10px]">
                        Add to cart
                    </button>
                    <button className="w-[275px] text-primary bg-white border border-solid border-[#3734A9] font-bold text-[18px] rounded-[10px]">
                        Pay immediately
                    </button>
                </div>
            </div>
            <div className=" w-[1015px] h-[279px] mx-auto bg-primary rounded-[20px] mt-[239px]">
                <h3 className=" font-bold text-[24px] text-white text-center pt-[43.5px] pb-[54px]">
                    Sign up now so your selected item are saved to your personal
                    cart.
                </h3>
                <div className="w-[775px] h-[102px] bg-white rounded-[20px] flex px-[22px] py-[27px] mx-auto justify-between">
                    <input
                        type="text"
                        placeholder="Enter your Email"
                        className="w-[497px] border-solid border border-[#3734A9] rounded-[10px] py-[14px] px-[28px]"
                    />
                    <div className="flex bg-primary w-[222px] h-[48px]  rounded-[10px] justify-center items-center">
                        {" "}
                        <button className="font-bold text-[18px] text-white">
                            Sign up now
                        </button>
                        <Image
                            src="/vector.svg"
                            width={44.3}
                            height={37.9}
                            alt=""
                            className="pl-[8px] pr-[20.35px] "
                        />
                    </div>
                </div>
            </div>
            <div className="w-[1320px] h-[318px] mx-auto border-solid border-t-[1.5px] border-[#3734A9] pt-[76px] px-[90px] mt-[97px] mb-[70px]">
                <div className="w-[1168px] h-[228px] flex justify-between">
                    <div className="w-[419px] h-[195px]">
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
                    <div className="grid grid-cols-2 grid-rows-5 w-[391px] h-[228px]">
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
                            <div className="flex">
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
