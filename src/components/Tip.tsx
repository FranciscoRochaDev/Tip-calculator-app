
type TipProps = {
    tip?: number
    customerTip?: number
    isCustom?: boolean
}

const baseClass = `max-w-2xl w-full h-12 rounded-md font-space font-bold text-2xl text-center`

export default function Tip({ tip, customerTip, isCustom }: TipProps) {

    if (isCustom) {
        return (
            <input
                type="number"
                placeholder="Custom"
                className={`${baseClass} bg-grey-50 text-green-900 placeholder:text-grey-500
                    focus:outline-2 focus:outline-green-200 [appearance:textfield] cursor-pointer
                    [&::-webkit-outer-spin-button]:appearance-none
                    [&::-webkit-inner-spin-button]:appearance-none`}
            />
        )
    }

    const isSelected = customerTip === tip

    return (
        <button className={`${baseClass} bg-green-900 text-white
            ${isSelected ? 'bg-green-400 text-green-900' : 'bg-green-900 text-white'}
            hover:bg-grey-200 hover:text-green-900 transition-normal cursor-pointer
            outline-none`}>
            {tip}%
        </button>
    )

}
