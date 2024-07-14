'use client'

import React, { useState } from 'react';
import NavBar from "../ui/NavBar";

export default function Page() {
    const [inputValuePlaintext, setInputValuePlaintext] = useState<string>('');
    const [inputValueKey, setInputValueKey] = useState<string>('');
    const [inputValueCiphertext, setInputValueCiphertext] = useState<string>('');
    const [inputValueDecryptKey, setInputValueDecryptKey] = useState<string>('');


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
                        <input
                            type="text"
                            name="key"
                            value={inputValueKey}
                            placeholder='Key'
                            onChange={(event) => setInputValueKey(event.target.value)}
                            className='block w-1/2 rounded-md border-1 '
                        />
                        <p>{matrixEncrypt(inputValueKey, inputValuePlaintext)}</p>
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
                        <input
                            type="string"
                            name="key"
                            value={inputValueDecryptKey}
                            placeholder='Key'
                            onChange={(event) => setInputValueDecryptKey(event.target.value)}
                            className='block w-1/2 rounded-md border-1 '
                            />
                    <p>{matrixDecrypt(inputValueDecryptKey, inputValueCiphertext)}</p>
                </div>
            </div>
        </main>
    );
}

const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function matrixEncrypt(key: string, text: string): string {
    text = text.toUpperCase()
    key = key.toUpperCase()
    let result: string = ""
    let indexOfKey: number = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (alphabet.includes(char)){
            if (indexOfKey>=key.length){
                indexOfKey = 0
            }
            const keyNumber = alphabet.indexOf((key[indexOfKey]))
            const charIndex = alphabet.indexOf(char)
            const newIndex = (charIndex + keyNumber) % 26;
            result += alphabet[newIndex]
            indexOfKey+=1
        }
        else result+=char
      }
      return result;

}
function matrixDecrypt(key: string, text: string): string {
    text = text.toUpperCase()
    key = key.toUpperCase()
    let result: string = ""
    let indexOfKey: number = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (alphabet.includes(char)){
            if (indexOfKey>=key.length){
                indexOfKey = 0
            }
            const keyNumber = alphabet.indexOf((key[indexOfKey]))
            const charIndex = alphabet.indexOf(char)
            const newIndex = (charIndex - keyNumber + 26) % 26;
            result += alphabet[newIndex]
            indexOfKey+=1
        }
        else result+=char
      }
      console.log('Decrypted:', result);
      return result;

}