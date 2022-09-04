const Separator = ({ color }) => {
    return (
        <div className="flex flex-row justify-center items-center h-14 my-8">
            <hr class={`bg-[#565B60] black border-none h-0.5 w-10 rounded`} />
            <img class="h-full px-4" src="/Sunflower.png" />
            <hr class={`bg-[#565B60] black border-none h-0.5 w-10 rounded`} />
            <hr />
        </div>
    );
}

export default Separator;