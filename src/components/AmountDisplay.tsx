import { formtaCurrency } from "../helpers"

type AmountDisplayProps = {
    label?: string
    amount: number
}
const AmountDisplay = ({label, amount} : AmountDisplayProps) => {
    return (
        <p className="text-2xl  text-blue-600 font-bold">
            {label && `${label}:`}
            <span className="font-black text-black">
                {formtaCurrency(amount)}
            </span>
        </p>
    )
}

export default AmountDisplay