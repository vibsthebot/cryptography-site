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
                        <p>{polybiusEncrypt(inputValuePlaintext)}</p>
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
                    <p>{polybiusDecrypt(inputValueCiphertext)}</p>
                </div>
            </div>
        </main>
    );
}

const polybiusAlphabet = [["A", "B", "C", "D", "E"], ["F", "G", "H", "I", "K"], ["L", "M", "N", "O", "P"], ["Q", "R", "S", "T", "U"], ["V", "W", "X", "Y", "Z"]]
const numbers = "12345"

function findIndexInMatrix(target: any): number[] | null {
    for (let rowIndex = 0; rowIndex < polybiusAlphabet.length; rowIndex++) {
        for (let colIndex = 0; colIndex < polybiusAlphabet[rowIndex].length; colIndex++) {
            if (polybiusAlphabet[rowIndex][colIndex] === target) {
            return [rowIndex+1, colIndex+1];
            }
        }
    }
    return null;
}

function filterChars(str: string): string {
    const regex = new RegExp(`[^${numbers.split("").join("")}]`, "g");
    return str.replace(regex, "");
}

function polybiusEncrypt(text: string){
    text = text.toUpperCase()
    if (text.includes("J")){
        text = text.split("J").join("I")
    }
    const result = []
    for (let i = 0; i < text.length; i++){
        let curChar = text[i]
        let indexInMatrix = findIndexInMatrix(curChar)
        if (indexInMatrix != null){
            result.push(indexInMatrix[0].toString() +indexInMatrix[1].toString())
            console.log(indexInMatrix)
        }
        else {
            result.push(curChar)
        }
    }
    return result
}

function polybiusDecrypt(text: string){
    let textFiltered = filterChars(text)
    console.log(textFiltered)
    let textLen = textFiltered.length
    console.log(textLen)
    if (textLen % 2 != 0) return 
    const result = [""]
    let i = 0
    while (i<text.length){
        if (numbers.includes(text[i])){
            let numOne = parseFloat(text[i])-1
            let numTwo = parseFloat(text[i+1])-1
            console.log(text[i])
            console.log(numOne)
            console.log(numTwo)
            result.push(polybiusAlphabet[numOne][numTwo])
            i=i+2
        }
        else {
            result.push(text[i])
            i++
        }
    }
    return result
}

