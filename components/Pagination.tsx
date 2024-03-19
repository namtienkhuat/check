export default function Pagination() {
    return (
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
    );
}
