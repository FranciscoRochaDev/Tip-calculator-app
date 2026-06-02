import TipTotal from "./TipTotal";

export default function ResultContainer() {

    return (
        <div className="w-full h-auto bg-green-900 rounded-2xl p-6 flex flex-col gap-6">
            <TipTotal
                titleTip="Tip Amount"
                subTitleTip="person"
                total={0}
            />
            <TipTotal
                titleTip="Total"
                subTitleTip="person"
                total={0}
            />
            <button className="mt-auto w-full py-2 px-8 border-none bg-green-750 font-sans text-lg text-center font-bold
                text-green-800 rounded-sm hover:bg-green-200 hover:text-green-900 transition-normal cursor-pointer">
                RESET
            </button>
        </div>
    )

}
