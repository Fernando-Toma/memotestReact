import { useEffect, useState } from "react";

const IMAGES = [
"https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
"https://icongr.am/devicon/github-original.svg?size=128&color=currentColor",
"https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
"https://icongr.am/devicon/linux-original.svg?size=128&color=currentColor",
"https://icongr.am/devicon/wordpress-original.svg?size=128&color=currentColor",
"https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
"https://icongr.am/devicon/nodejs-original-wordmark.svg?size=128&color=currentColor",
"https://icongr.am/devicon/html5-original-wordmark.svg?size=128&color=currentColor",
"https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
"https://icongr.am/devicon/docker-original-wordmark.svg?size=128&color=currentColor"
].flatMap((image) => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5);
// Duplico y aplano el array creado
// Distribucion random

export default function Memotest(){
    const [guessed, setGuessed] = useState<string[]>([]);
    const [selected, setSelected] = useState<string[]>([]);

    useEffect(() => {
        if (selected.length == 2) {
            if (selected[0].split("|")[1] == selected[1].split("|")[1]) {
            setGuessed((guessed) => guessed.concat(selected))
        }

        setTimeout(() => setSelected([]), 1000);
    }}, [selected])

    useEffect(() => {
        if (guessed.length == IMAGES.length) {
            alert("You win")
            location.reload();
        }
    }, [guessed])

    return (
        <ul style={{
            display: 'grid', 
            gridTemplateColumns: "auto auto auto auto auto",
            // gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))",
            gap: 20,
        }}
        >
        {IMAGES.map((image) =>  {
            const [, url] = image.split("|");

            return (
                    <li 
                        onClick={() => selected.length < 2 && setSelected((selected) => selected.concat(image))}
                        style={{cursor: "pointer", padding: 6, border: "1px solid #666", borderRadius: 12}} 
                        key={image} 
                    >
                     {selected.includes(image) || guessed.includes(image) ? (
                        <img src={url} alt="icon" />
                    ) : (
                        <img
                        alt="icon"
                        src="https://icongr.am/clarity/search.svg?size=128&color=currentColor"
                        />
                    )}
                    </li> 
            );
        })}
        </ul>
    );
}