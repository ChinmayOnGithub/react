import { useId } from 'react'
import PropTypes from 'prop-types'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrecy = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""

}) {

    const id = useId()


    return (
        <div
            className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={id} className='text-black/40 mb-2 inline-block'>
                    {label}
                </label>
                <input
                    id={id}
                    type="number"
                    className='outline-none w-full bg-transparent py-1.5'
                    placeholder='Amount'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className="w-1/2 flex-col flex-wrap justify-end text-right items-center">
                <p className='text-xs text-gray-500 m-2'>Currency Type</p>
                <select
                    className='rounded-lg px-1 py-0.5 h-8 bg-gray-100 cursor-pointer outline-none'
                    value={selectedCurrecy}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                    name=""
                    id="">
                    {
                        currencyOptions.map((currency) => (
                            <option
                                key={currency}
                                value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>

        </div >
    )
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    onAmountChange: PropTypes.func.isRequired,
    onCurrencyChange: PropTypes.func.isRequired,
    currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedCurrecy: PropTypes.string,
    amountDisabled: PropTypes.bool,
    currencyDisabled: PropTypes.bool,
    className: PropTypes.string
};

export default InputBox;

// export default InputBox