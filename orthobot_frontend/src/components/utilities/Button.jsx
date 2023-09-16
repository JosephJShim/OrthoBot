export function Button({ color, handleClick, children }) {
    let backgroundColor = "bg-slate-400";
    let hoverColor = "hover:bg-slate-500";
    let borderColor = "border-slate-500";

    switch (color) {
        case "red":
            backgroundColor = "bg-red-400";
            hoverColor = "hover:bg-red-500";
            borderColor = "border-red-700";
            break;

        case "blue":
            backgroundColor = "bg-blue-400";
            hoverColor = "hover:bg-blue-500";
            borderColor = "border-blue-700";
            break;
        
        case "green":
            backgroundColor = "bg-green-400";
            hoverColor = "hover:bg-green-500";
            borderColor = "border-green-700";
            break;

        case "slate":
            backgroundColor = "bg-slate-400";
            hoverColor = "hover:bg-slate-500";
            borderColor = "border-slate-700";
            break;

        case "turquoise":
            backgroundColor = "bg-[#337588]";
            hoverColor = "hover:bg-[#275A69]";
            borderColor = "border-[#16323B]";
            break;
    }

    return (
        <button className={`${backgroundColor} ${borderColor} ${hoverColor} border-b-2 shadow-lg rounded-sm text-white font-bold text-xl px-3 py-1 w-fit min-w-fit`} onClick={handleClick}>
            {children}
        </button>
    )
}