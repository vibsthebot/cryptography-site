'use client'

import React, { useState } from 'react';
import NavBar from "../ui/NavBar";

export default function Page() {
    const [inputValuePlaintext, setInputValuePlaintext] = useState<string>('');
    const [inputValueKey, setInputValueKey] = useState<string>('0');
    const [inputValueCiphertext, setInputValueCiphertext] = useState<string>('');
    const [inputValueDecriptKey, setInputValueDecriptKey] = useState<string>('0');


    return (
        <main>
            <NavBar />
                <div className="flex flex-row items-stretch">
                    <div className='basis-1/2 self-start flex flex-col items-center justify-center'>
                        <h1 className='text-5xl'>Encription</h1>
                        <input
                            type="text"
                            name="Plaintext"
                            value={inputValuePlaintext}
                            placeholder='Plaintext'
                            onChange={(event) => setInputValuePlaintext(event.target.value)}
                            className="block w-1/2 rounded-md border-1 "
                        />
                        <input
                            type="number"
                            name="key"
                            value={inputValueKey}
                            defaultValue={0}
                            placeholder='Key'
                            onChange={(event) => setInputValueKey(event.target.value)}
                            className='block w-1/2 rounded-md border-1 '
                        />
                        <p>{ceaserEncript(inputValueKey, inputValuePlaintext)}</p>
                    </div>
                    <div className='basis-1/2 self-start flex flex-col items-center justify-center'>
                        <h1 className='text-5xl'>Decription</h1>
                        <input
                            type="text"
                            name="Ciphertext"
                            value={inputValueCiphertext}
                            placeholder='Ciphertext'
                            onChange={(event) => setInputValueCiphertext(event.target.value)}
                            className="block w-1/2 rounded-md border-1 "
                        />
                        <input
                            type="number"
                            name="key"
                            value={inputValueDecriptKey}
                            defaultValue={0}
                            placeholder='Key'
                            onChange={(event) => setInputValueDecriptKey(event.target.value)}
                            className='block w-1/2 rounded-md border-1 '
                            />
                    <p>{ceaserDecript(inputValueDecriptKey, inputValueCiphertext)}</p>
                </div>
            </div>
        </main>
    );
}

const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function ceaserEncript(key: string, plaintext: string): string {
    if (key == "undefined") key = "0";
    plaintext = plaintext.toUpperCase()
    let result: string = ""
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        const charCode = char.charCodeAt(0)
        if (alphabet.includes(char)){
            const charIndex = alphabet.indexOf(char)
            const newIndex = (charIndex + parseFloat(key)) % 26;
            result += alphabet[newIndex];
        }
        else result+=plaintext[i]
      }
      return result;

}
function ceaserDecript(key: string, plaintext: string): string {
    if (key == "undefined") key = "0";
    plaintext = plaintext.toUpperCase()
    let result: string = ""
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        const charCode = char.charCodeAt(0)
        if (alphabet.includes(char)){
            const charIndex = alphabet.indexOf(char)
            const newIndex = (charIndex - parseFloat(key)) % 26;
            result += alphabet[newIndex];
        }
        else result+=plaintext[i]
      }
      return result;

}