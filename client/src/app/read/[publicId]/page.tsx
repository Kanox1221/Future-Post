import React from 'react'

async function LetterPage({params, }: {params: Promise<{publicId: string}>}) {
    const { publicId } = await params;

    const res = await fetch(`http://localhost:8080/api/letters/${publicId}`);

    console.log(res.status);

    const letter = await res.json();
    
    return (
        <div>
            <h1>{letter.writeDate.split("T")[0]}</h1>
            <p>{letter.letter}</p>
        </div>
    )
}

export default LetterPage