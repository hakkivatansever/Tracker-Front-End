import type { MouseEventHandler } from "react";
import Button from "./Button";
import ReviewScore from "./ReviewScore";

interface Props {
    imgSrc: string;
    title: string;
    body: string;
    buttonText: string;
    onButtonClick: MouseEventHandler;
}

export default function Card({
    imgSrc,
    title,
    body,
    buttonText,
    onButtonClick,
}: Props) {
    return (
        <article className="border border-1 border-neutral-100 rounded-lg w-[18rem] overflow-hidden shadow-lg">
            <div className="h-42 bg-cover bg-center" style={{
                "backgroundImage": `url(${imgSrc})`,
            }}></div>

            <div className="p-4">
                <h3 className="text-lg text-neutral-600 font-bold">
                    {title}
                </h3>

                <ReviewScore />

                <p className="text-neutral-600 mb-3 text-justify">
                    {body}
                </p>

                <Button onClick={onButtonClick}>
                    {buttonText}
                </Button>
            </div>
        </article>
    );
};
