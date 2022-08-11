const NUMBER_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", style: "currency"
})

export function formatCurrency(number: number) {
    return NUMBER_FORMATTER.format(number)
}
