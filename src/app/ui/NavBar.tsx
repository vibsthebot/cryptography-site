import Link from "next/link";

export default function NavBar(){
    return (
        <div className="p-5">
            <div className="flex flex-row bg-cyan-50 rounded-full">
                <div className="basis-1/12"><Link href="./"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Home</button></Link></div>
                <div className="basis-7/12"></div>
                <div className="basis-4/12">
                    <Link className = "pl-5" href="./caeser"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Caeser</button></Link>
                    <Link className = "pl-5" href="./vigenere"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Vigenère</button></Link>
                    <Link className = "pl-5" href="./"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Matrix</button></Link>
                    <Link className = "pl-5" href="./"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Home</button></Link>
                </div>
            </div>
        </div>
    )
}