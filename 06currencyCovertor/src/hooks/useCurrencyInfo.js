import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        // fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                if (res && res[currency]) {
                    setData(res[currency]);
                } else {
                    console.error('Invalid response structure:', res);
                    setData({});
                }
            })
    }, [currency])

    // console.log(data);

    return data
}

export { useCurrencyInfo };