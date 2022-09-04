const Separator = ({ color }) => {
    return (
        <div className="flex flex-row justify-center items-center h-14 my-8">
            <hr className={`bg-[${color}] black border-none h-0.5 w-10 rounded`} />
            <img className="h-full px-4" src="/Sunflower.png" />
            <hr className={`bg-[${color}] black border-none h-0.5 w-10 rounded`} />
            <hr />
        </div>
    );
}

export default Separator;