import React from 'react'

const dummyLetters = [
    {
        id: 1,
        publicId: crypto.randomUUID(),
        writeDate: new Date("2026-09-10"),
        openDate: new Date("2027-09-10"),
        letter: "I hope you are still making things you love.",
    },
    {
        id: 2,
        publicId: crypto.randomUUID(),
        writeDate: new Date("2026-08-21"),
        openDate: new Date("2030-01-01"),
        letter: "Please remember how excited you were about the future.",
    },
    {
        id: 3,
        publicId: crypto.randomUUID(),
        writeDate: new Date("2026-07-03"),
        openDate: new Date("2026-09-01"),
        letter: "Did everything work out the way you imagined?",
    },
    {
        id: 4,
        publicId: crypto.randomUUID(),
        writeDate: new Date("2025-12-24"),
        openDate: new Date("2026-12-24"),
        letter: "I hope this year was kinder to you.",
    },
];

async function LetterPage({params, }: {params: Promise<{letterId: string}>}) {
    const { letterId } = await params;
    
    return (
        <div>
            <h1>{letterId}</h1>
        </div>
    )
}

export default LetterPage