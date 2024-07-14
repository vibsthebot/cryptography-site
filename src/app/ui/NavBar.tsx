import Link from "next/link";

export default function NavBar(){
    return (
        <div className="p-5">
            <div className="flex flex-row bg-cyan-50 rounded-full">
                <div className="basis-1/12"><Link href="./"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Home</button></Link></div>
                <div className="basis-11/12">
                    <Link className = "pl-5 float-right" href="./vigenere"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Vigenère</button></Link>
                    <Link className = "pl-5 float-right" href="./rail_fence"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Rail Fence</button></Link>
                    <Link className = "pl-5 float-right" href="./transposition"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Transposition</button></Link>
                    <Link className = "pl-5 float-right" href="./polybius"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Polybius</button></Link>
                    <Link className = "pl-5 float-right" href="./keyword"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Keyword</button></Link>
                    <Link className = "pl-5 float-right" href="./atbash"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Atbash</button></Link>
                    <Link className = "pl-5 float-right" href="./caeser"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Caeser</button></Link>
                </div>
            </div>
        </div>
    )
}