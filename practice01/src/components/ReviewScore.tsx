import { useEffect, useState } from "react";


type ReviewScoreValue = 1 | 2 | 3 | 4 | 5;

interface Props {
    handleChange?: (selectedScore: ReviewScoreValue | null) => void;
}

export default function ReviewScore({
    handleChange,
}: Props) {
    const [currentHover, setCurrentHover] = useState<ReviewScoreValue | null>(null);
    const [selectedScore, setSelectedScore] = useState<ReviewScoreValue | null>(null);

    useEffect(() => {
        if (handleChange) {
            handleChange(selectedScore);
        }
    }, [selectedScore]);

    function renderButton(order: ReviewScoreValue) {
        let filled = false;

        if (currentHover && currentHover >= order) {
            filled = true;
        }

        if (selectedScore && selectedScore >= order) {
            filled = true;
        }

        return (
            <button
                className=" hover:cursor-pointer"
                key={order}
                onMouseEnter={() => setCurrentHover(order)}
                onMouseLeave={() => setCurrentHover(null)}
                onClick={() => {
                    if (selectedScore === order) {
                        setSelectedScore(null);
                    } else {
                        setSelectedScore(order);
                    }
                }}
            >
                {filled
                    ? <span className="text-yellow-500">★</span>
                    : <span className="text-yellow-700">☆</span>
                }
            </button>
        )
    }

    // // Alternative way
    // function renderButtons() {
    //     const orderArray = Array.from(Array(5).keys());
    //     const result = [];

    //     for (let order of orderArray) {
    //         result.push(renderButton(order as ReviewScoreValue));
    //     }
    //     return result;
    // }

    return (
        <>
            <div className="flex flex-nowrap">
                {(Array.from(Array(5).keys())).map((order) => renderButton((order + 1) as ReviewScoreValue))}
            </div>
        </>
        
    );
};
