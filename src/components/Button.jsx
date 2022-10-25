const Button = ({url}) => {
    return (
        <a href={`/Termine/${url}`} class="flex justify-center items-center text-[#0A9084] pt-1 hover:underline"><img
            class="w-4 mr-2 object-contain"
            src="/right-arrow.png"
            alt="Menu"
        />Mehr Info</a>
    )
}

export default Button;