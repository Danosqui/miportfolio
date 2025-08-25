
export default function Titulo ({ children, level = 1, className = '' })
 {
    return (
    <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 mt-4 self-center" >
        {children}
        </h1>
        </div>);
};