type TipTotalProps = {
    titleTip: string,
    subTitleTip: string,
    total: number
}

export default function TipTotal({ titleTip, subTitleTip, total } : TipTotalProps) {

    return (
        <div className="flex items-center justify-between">
            <div>
                <p className="font-space text-white text-sm text-left font-bold">{titleTip}</p>
                <span className="font-space text-grey-400 text-xs text-left font-bold">/ {subTitleTip}</span>
            </div>
            <p className="font-space text-green-400 text-5xl text-right font-bold">${total}</p>
        </div>
    )

}
