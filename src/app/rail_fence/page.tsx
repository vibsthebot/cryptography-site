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
                            name="key"
                            value={inputValueKey}
                            defaultValue={0}
                            placeholder='Key'
                            onChange={(event) => setInputValueKey(event.target.value)}
                            className='block w-1/2 rounded-md border-1 '
                        />
                        <p>{railFence(inputValueKey, inputValuePlaintext, true)}</p>
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
                            type="number"
                            name="key"
                            value={inputValueDecryptKey}
                            defaultValue={0}
                            placeholder='Key'
                            onChange={(event) => setInputValueDecryptKey(event.target.value)}
                            className='block w-1/2 rounded-md border-1 '
                            />
                    <p>{railFence(inputValueDecryptKey, inputValueCiphertext, false)}</p>
                </div>
            </div>
        </main>
    );
}

const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function railFence(key: string, text: string, isEncrypt: boolean): string {
    if (key == "0" || key == "") return ""
    const rows  = parseFloat(key)
    const columns = Math.ceil(text.length)
    const table: string[][] = []
    for (let i = 0; i<rows; i++){
        table[i] = new Array(columns).fill("empty")
    }
    let row: number = 0;
    let goingDown = true;
    const message = [];
    if (isEncrypt){
        for (let j = 0; j < columns; j++){
            table[row][j] = text[j];
            if (row == rows-1){
                goingDown = false
            }
            else if (row == 0){
                goingDown = true
            }
            if (goingDown) {
                row++;
            } else {
                row--;
            }
        }
        console.log(table)
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (table[i][j] != "empty"){
                    message.push(table[i][j])
                }
            }
            console.log(table[i])
        }
    } 
    if (!isEncrypt) {
        for (let j = 0; j < columns; j++){
            table[row][j] = "";
            if (row == rows-1){
                goingDown = false
            }
            else if (row == 0){
                goingDown = true
            }
            if (goingDown) {
                row++;
            } else {
                row--;
            }
        }
        let charIndex = 0
        console.log(table)
        for (let i = 0; i<rows; i++){
            for (let j = 0; j < columns; j++){
                if (table[i][j] == ""){
                    table[i][j] = text[charIndex]
                    charIndex++
                }
            }
            console.log(table[i])
        }
        row = 0
        for (let j = 0; j < columns; j++){
            message.push(table[row][j])
            if (row == rows-1){
                goingDown = false
            }
            else if (row == 0){
                goingDown = true
            }
            if (goingDown) {
                row++;
            } else {
                row--;
            }
        }
    }
    
    

    return message.join("");

}
