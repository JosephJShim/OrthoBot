export function Text({ justification, children }) {
    return (
        <p className={`text-slate-500 text-2xl ${justification}`}>
            {children}
        </p>
    )
}