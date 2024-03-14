import Image from "next/image";

export default function Product({ item, handle }: any) {
    const { image, title, gene, age, price } = item;
    return (
        <div className="px-[8px] pt-[8px] h-fit" key={item.id} onClick={handle}>
            <Image
                src={item.image}
                alt=""
                width={264}
                height={264}
                className="rounded-[10px]"
            />
            <div className="pt-[8px] px-[8px] pb-[16px] flex items-center gap-1">
                <div className="flex flex-col gap-y-[8px] overflow-hidden w-[calc(100%_-_47px)]">
                    <h3 className="font-[700] text-[15px] text-[#00171F] text-ellipsis overflow-hidden whitespace-nowrap">
                        {item.title}
                    </h3>
                    <div className="flex">
                        <span className="italic font-[400] text-[10px] text-[#667479]">
                            Gene:
                        </span>
                        <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
                            {item.gene}
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
                            {item.age}
                        </span>
                    </div>
                    <h3 className="font-[700] text-[12px] text-[#00171F]">
                        {item.price}
                    </h3>
                </div>
                <div className="p-[10px] bg-[#3734A9] rounded-[20px] h-fit">
                    <Image
                        src="/xe.svg"
                        alt=""
                        width={27}
                        height={27}
                        className="min-w-[27px]"
                    ></Image>
                </div>
            </div>
        </div>
    );
}
