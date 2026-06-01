import { percentage } from "../data/percentage";
import FormNumber from "./FormNumber";
import Tip from "./Tip";


export default function Content(){

    return (
        <div className="bg-white max-w-2xl w-full h-auto rounded-t-3xl md:rounded-3xl
            py-8 px-6 md:py-12 md:px-20 lg:p-8 flex flex-col gap-8">
            <FormNumber
                imgSrc="icon-dollar.svg"
                label="Bill"
                placeholder="0"
            />
            <div className="flex flex-col gap-2">
                <p className="font-space font-bold text-grey-500 text-sm">Select Tip %</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {percentage.map((tip) => (
                        <Tip
                            key={tip.percentage}
                            tip={tip.percentage}
                        />
                    ))}
                    <Tip isCustom />
                </div>
            </div>
            <FormNumber
                imgSrc="icon-person.svg"
                label="Number of People"
                placeholder="0"
            />
        </div>
    )

}
