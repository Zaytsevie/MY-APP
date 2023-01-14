import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    let initialState = [
        { id: 0, value: 0, name: "Ненужная вещь" },
        { id: 1, value: 3, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ];

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id);
        setCounters(newCounters);
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    const handleInc = (id) => {
        const incCounters = counters.map((counts) => ({
            ...counts,
            value: counts.id === id ? counts.value += 1 : counts.value
        }));
        setCounters(incCounters);
    };

    const handleDec = (id) => {
        const decCounters = counters.map((counts) => ({
            ...counts,
            value: counts.id === id ? counts.value -= 1 : counts.value
        }));
        setCounters(decCounters);
    };

    return (
        <>
            {counters.map(count => (
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete}
                    onIncrement={handleInc}
                    onDecrement={handleDec}
                />
            ))}
            <button
                className="btn btn-primary btm-sm m-2"
                onClick={() => handleReset()}
            >
                Сброс
            </button>
        </>
    );
};

export default CountersList;