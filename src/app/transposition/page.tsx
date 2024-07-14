'use client'

import React, { useState } from 'react';
import NavBar from "../ui/NavBar";

export default function Page() {
    const [inputValuePlaintext, setInputValuePlaintext] = useState<string>('');
    const [inputValueKey, setInputValueKey] = useState<string>('0');
    const [inputValueCiphertext, setInputValueCiphertext] = useState<string>('');
    const [inputValueDecryptKey, setInputValueDecryptKey] = useState<string>('0');


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
                            type="number"
                            name="Key"
                            value={inputValueKey}
                            defaultValue={0}
                            placeholder='Key'
                            onChange={(event) => setInputValueKey(event.target.value)}
                            className='block w-1/2 rounded-md border-1 '
                        />
                        <p>{transpose(inputValueKey, inputValuePlaintext, true)}</p>
                    </div>
                    <div className='basis-1/2 self-start flex flex-col items-center justify-center'>
                        <h1 className='text-5xl'>Decryption</h1>
                        <input
                            type="text"
                            name="Ciphertext"
                            value={inputValueCiphertext}
                            placeholder='Ciphertext'
                            onChange={(event) => setInputValueCiphertext(event.target.value)}
                            className="block w-1/2 rounded-md border-1"
                        />
                        <input
                            type="number"
                            name="Key"
                            value={inputValueDecryptKey}
                            defaultValue={0}
                            placeholder='Key'
                            onChange={(event) => setInputValueDecryptKey(event.target.value)}
                            className='block w-1/2 rounded-md border-1 '
                            />
                    <p>{transpose(inputValueDecryptKey, inputValueCiphertext, false)}</p>
                </div>
            </div>
        </main>
    );
}


function transpose(message: string, key: string, isEncrypt: boolean): string {
    let keyInt: number = parseFloat(key)
    const charArray: string[] = message.split("");
    if (isEncrypt){
        // Calculate number of columns
        const numOfCol = Math.ceil(charArray.length / keyInt);

        // Create first matrix (partially encrypted message)
        const firstMatrix: string[][] = [];
        for (let i = 0; i < numOfCol; i++) {
        firstMatrix[i] = new Array(key).fill("x");
        }

        let index = 0;
        // Fill first matrix by rows
        for (let i = 0; i < numOfCol; i++) {
        for (let j = 0; j < keyInt; j++) {
            if (index < charArray.length) {
            firstMatrix[i][j] = charArray[index];
            index++;
            }
        }
        }

        // Create transposed matrix (fully encrypted message)
        const finalMatrix: string[][] = [];
        for (let i = 0; i < keyInt; i++) {
        finalMatrix[i] = new Array(numOfCol).fill("");
        }

        const finalArray: string[] = [];
        index = 0;
        // Fill transposed matrix and final array by swapping rows and columns
        for (let i = 0; i < keyInt; i++) {
            for (let j = 0; j < numOfCol; j++) {
                finalMatrix[i][j] = firstMatrix[j][i];
                finalArray[index] = firstMatrix[j][i];
                index++;
            }
        }
        return finalArray.join("")
    } else {
        // Calculate number of columns
        const numOfCol = Math.ceil(charArray.length / keyInt);

        // Create first matrix (partially encrypted message)
        const firstMatrix: string[][] = [];
        for (let i = 0; i < keyInt; i++) {
            firstMatrix[i] = new Array(numOfCol).fill("x");
        }

        let index = 0;
        // Fill first matrix by rows
        for (let i = 0; i < keyInt; i++) {
            for (let j = 0; j < numOfCol; j++) {
                if (index < charArray.length) {
                firstMatrix[i][j] = charArray[index];
                index++;
                }
            }
        }

        // Create transposed matrix (fully encrypted message)
        const finalMatrix: string[][] = [];
        for (let i = 0; i < keyInt; i++) {
            finalMatrix[i] = new Array(numOfCol).fill("");
        }

        const finalArray: string[] = [];
        index = 0;
        // Fill transposed matrix and final array by swapping rows and columns
        for (let i = 0; i < numOfCol; i++) {
            for (let j = 0; j < keyInt; j++) {
                finalMatrix[i][j] = firstMatrix[j][i];
                finalArray[index] = firstMatrix[j][i];
                index++;
            }
        }
        return finalArray.join("")
    }

  }
  