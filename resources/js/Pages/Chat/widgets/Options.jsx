const Options = (props) => {
    return (
        <div className="options">
            <div className="flex flex-col md:flex-row justify-start items-center md:pr-7 mb-4">
                {props.options.map((option) => {
                    return (
                        <div
                            className="bg-[var(--secondary-color)] md:max-w-[45%] lg:max-w-[42%] border border-[var(--gray)] mb-5 mx-2 p-4 flex-1 text-[var(--white-or-black)] rounded-xl cursor-pointer hover:bg-[var(--gray)] transition-all"
                            onClick={option.handler}
                            key={option.id}
                        >
                            <p className="font-[500] text-[15px] font-poppins">
                                {" "}
                                {option.name}
                            </p>
                            <span className="text-[var(--white-or-black)] font-normal lg:max-w-[80%] line-clamp-1">
                                {option.desc}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Options;
