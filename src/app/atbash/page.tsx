'use client'

import React, { useState } from 'react';
import NavBar from "../ui/NavBar";

export default function Page() {
    const [inputValuePlaintext, setInputValuePlaintext] = useState<string>('');
    const [inputValueCiphertext, setInputValueCiphertext] = useState<string>('');


    return (
        <main>
            <NavBar />
                <div className="flex flex-row items-stretch">
                    <div className='basis-1/2 self-start flex flex-col items-center justify-center'>
                        <h1 className='text-5xl'>Encryption</h1>
                        <input
                            type="text"
                            name="Plaintext"
                            value={inputValuePlaintext}
                            placeholder='Plaintext'
                            onChange={(event) => setInputValuePlaintext(event.target.value)}
                            className="block w-1/2 rounded-md border-1 "
                        />
                        <p>{atbashEncrypt(inputValuePlaintext)}</p>
                    </div>
                    <div className='basis-1/2 self-start flex flex-col items-center justify-center'>
                        <h1 className='text-5xl'>Decryption</h1>
                        <input
                            type="text"
                            name="Ciphertext"
                            value={inputValueCiphertext}
                            placeholder='Ciphertext'
                            onChange={(event) => setInputValueCiphertext(event.target.value)}
                            className="block w-1/2 rounded-md border-1 "
                        />
                    <p>{atbashDecrypt(inputValueCiphertext)}</p>
                </div>
            </div>
        </main>
    );
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const backAlphabet = "ZXWVUTSRQPONMLKJIHGFEDCBA"

function atbashEncrypt(text: string): string{
    text = text.toUpperCase()
    const message = [];
    for (let i = 0; i < text.length; i++){
        if (alphabet.includes(text[i])){
            message.push(backAlphabet[alphabet.indexOf(text[i])])
            console.log(message)
        } else message.push(text[i])
    }
    return message.join("")
}

function atbashDecrypt(text:string): string{
    text = text.toUpperCase()
    const message = [];
    for (let i = 0; i < text.length; i++){
        if (alphabet.includes(text[i])){
            message.push(alphabet[backAlphabet.indexOf(text[i])])
        } else message.push(text[i])
    }
    return message.join("")
}