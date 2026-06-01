
type FormNumberProps = {
    imgSrc: string,
    label: string,
    placeholder: string,
}

export default function FormNumber({ imgSrc, label, placeholder } : FormNumberProps ) {

    return (
        <form className="flex flex-col gap-2">
            <label className="font-space font-bold text-grey-500 text-sm">{label}</label>
            <div className="relative flex items-center cursor-pointer" >
                <span className="absolute pointer-events-none left-4">
                    <img src={`/images/${imgSrc}`} alt={label} />
                </span>
                <input
                    type="number"
                    min='0'
                    className="w-full h-12 border-none focus:outline-green-400 py-2 px-4 rounded-md bg-gray-50
                    font-sans text-2xl text-right text-green-900 font-bold
                    [&::-webkit-outer-spin-button]:appearance-none
                    [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder={placeholder}
                />
            </div>
        </form>
    )

}
