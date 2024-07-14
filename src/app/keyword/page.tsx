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
                            defaultValue={0}
                            placeholder='Key'
                            onChange={(event) => setInputValueKey(event.target.value)}
                            className='block w-1/2 rounded-md border-1 '
                        />
                        <p>{keywordEncrypt(inputValueKey, inputValuePlaintext)}</p>
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
                            type="text"
                            name="key"
                            value={inputValueDecryptKey}
                            defaultValue={0}
                            placeholder='Key'
                            onChange={(event) => setInputValueDecryptKey(event.target.value)}
                            className='block w-1/2 rounded-md border-1 '
                            />
                    <p>{keywordDecrypt(inputValueDecryptKey, inputValueCiphertext)}</p>
                </div>
            </div>
        </main>
    );
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function keywordEncrypt(key: string, plaintext: string): string {
    key = key.toUpperCase()
    for (let i = 0; i<26; i++){
        let j = 0
        while (true){
            if (!key.includes(alphabet[j])){
                key = key.concat(alphabet[j])
                break
            }
            if (j == 25){
                break
            }
            j++
        }
    }
    plaintext = plaintext.toUpperCase()
    let result: string = ""
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        if (alphabet.includes(char)){
            const charIndex = alphabet.indexOf(char)
            result += key[charIndex];
        }
        else result+=plaintext[i]
      }
      return result;

}
function keywordDecrypt(key: string, plaintext: string): string {
    key = key.toUpperCase()
    for (let i = 0; i<26; i++){
        let j = 0
        while (true){
            if (!key.includes(alphabet[j])){
                key = key.concat(alphabet[j])
                break
            }
            if (j == 25){
                break
            }
            j++
        }
    }
    plaintext = plaintext.toUpperCase()
    let result: string = ""
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        if (alphabet.includes(char)){
            const charIndex = key.indexOf(char)
            result += alphabet[charIndex];
        }
        else result+=plaintext[i]
      }
      return result;
}