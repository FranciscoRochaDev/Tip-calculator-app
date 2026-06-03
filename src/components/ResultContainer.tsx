import TipTotal from "./TipTotal";

type ResultContainerProps = {
    tipPerson: number,
    totalPerson: number,
    hasValue: boolean
    handleReset: () => void
}

export default function ResultContainer({ tipPerson, totalPerson, hasValue, handleReset} : ResultContainerProps) {

    return (
        <div className="w-full h-auto bg-green-900 rounded-2xl p-6 flex flex-col gap-6">
            <TipTotal
                titleTip="Tip Amount"
                subTitleTip="person"
                total={tipPerson}

            />
            <TipTotal
                titleTip="Total"
                subTitleTip="person"
                total={totalPerson}
            />
            <button
                className={`mt-auto w-full py-2 px-8 border-none ${hasValue ? 'bg-green-400 text-green-800' : 'bg-green-750 text-green-800'} font-sans text-lg text-center font-bold
                rounded-sm hover:bg-green-200 hover:text-green-900 transition-normal cursor-pointer`}
                onClick={handleReset}
            >
                RESET
            </button>
        </div>
    )

}
