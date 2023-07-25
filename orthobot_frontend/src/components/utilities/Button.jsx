export function Button({ color, handleClick, children }) {
    let backgroundColor = "bg-slate-400";
    let hoverColor = "hover:bg-slate-500";
    let ringColor = "ring-slate-500";

    switch (color) {
        case "red":
            backgroundColor = "bg-red-400";
            hoverColor = "hover:bg-red-500";
            ringColor = "ring-red-500";
            break;

        case "blue":
            backgroundColor = "bg-blue-400";
            hoverColor = "hover:bg-blue-500";
            ringColor = "ring-blue-500";
            break;
        
        case "green":
            backgroundColor = "bg-green-400";
            hoverColor = "hover:bg-green-500";
            ringColor = "ring-green-500";
            break;

        case "slate":
            backgroundColor = "bg-slate-400";
            hoverColor = "hover:bg-slate-500";
            ringColor = "ring-slate-500";
            break;
    }

    return (
        <button className={`${backgroundColor} ${ringColor} ${hoverColor} ring-4 text-white font-bold text-xl px-3 py-1 w-fit rounded-xl min-w-fit`} onClick={handleClick}>
            {children}
        </button>
    )
}