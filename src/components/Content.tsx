import { useState } from "react";
import { percentage } from "../data/percentage";
import FormNumber from "./FormNumber";
import ResultContainer from "./ResultContainer";
import Tip from "./Tip";


export default function Content(){

    const [bill, setBill] = useState<number | ''>('')
    const [numberOfPeople, setNumberOfPeople] = useState<number | ''>('')
    const [customerTip, setCustomerTip] = useState<number | undefined>(undefined)


    return (
        <div className="bg-white w-full lg:max-w-5xl rounded-t-3xl md:rounded-3xl
            p-8 flex flex-col lg:flex-row gap-8 lg:gap-12">

            <div className="flex flex-col gap-8">
                <FormNumber
                    imgSrc="icon-dollar.svg"
                    label="Bill"
                    placeholder="0"
                    value={bill}
                    onChange={setBill}
                />
                <div className="flex flex-col gap-2">
                    <p className="font-space font-bold text-gray-500 text-sm">Select Tip %</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {percentage.map((tip) => (
                            <Tip
                                key={tip.percentage}
                                tip={tip.percentage}
                                customerTip={customerTip}
                                setCustomerTip={setCustomerTip}
                            />
                        ))}
                        <Tip
                            isCustom
                            setCustomerTip={setCustomerTip}
                        />
                    </div>
                </div>
                <FormNumber
                    imgSrc="icon-person.svg"
                    label="Number of People"
                    placeholder="0"
                    value={numberOfPeople}
                    onChange={setNumberOfPeople}
                />
            </div>

            <ResultContainer />
        </div>
    )

}
