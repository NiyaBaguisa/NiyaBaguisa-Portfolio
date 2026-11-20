
//takes in a string with no spaces
export default function RainbowLetters({ word }) {
    const wordArr = [...word];

    return (
        <h1>
            {wordArr.map((letter, index) =>
                <span key={index}>{letter}</span>)}
        </h1>
    )
}