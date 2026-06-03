

export function formatCurrency(quantity : number) {
    return new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: 'USD',
    }).format(quantity)
}


export function calculateTipPerson(bill: number, customerTip: number, numberOfPeople: number) {
    return (bill * customerTip / 100) / numberOfPeople
}

export function calculateTotalPerson(bill: number, customerTip: number, numberOfPeople: number) {
    return (bill + bill * customerTip / 100) / numberOfPeople
}
