import { type ChangeEvent } from "react"

type FormNumberProps = {
    imgSrc: string,
    label: string,
    placeholder: string,
    value: number | '',
    onChange: (value: number | '') => void,
}

export default function FormNumber({ imgSrc, label, placeholder, value, onChange }: FormNumberProps) {

    const inputId = label.toLowerCase().replace(/\s+/g, '-')

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value
        onChange(newValue === '' ? '' : Number(newValue))
    }

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={inputId} className="font-space font-bold text-gray-500 text-sm">{label}</label>
            <div className="relative flex items-center cursor-pointer">
                <span className="absolute pointer-events-none left-4">
                    <img src={`/images/${imgSrc}`} alt={label} />
                </span>
                <input
                    id={inputId}
                    type="number"
                    min={0}
                    value={value}
                    className="w-full h-12 border-none focus:outline-green-400 py-2 px-4 rounded-md bg-gray-50
                    font-sans text-2xl text-right text-green-900 font-bold
                    [&::-webkit-outer-spin-button]:appearance-none
                    [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            </div>
        </div>
    )

}
