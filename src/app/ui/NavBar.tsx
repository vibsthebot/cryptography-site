import Link from "next/link";

export default function NavBar(){
    return (
        <div className="flex flex-row p-5">
            <div className="basis-1/12"><Link href="./"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Home</button></Link></div>
            <div className="basis-7/12"></div>
            <div className="basis-4/12">
                <Link className = "pl-5" href="./ceaser"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Ceaser</button></Link>
                <Link className = "pl-5" href="./translation"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Translation</button></Link>
                <Link className = "pl-5" href="./"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Home</button></Link>
                <Link className = "pl-5" href="./"><button className="p-5 bg-cyan-50 hover:bg-cyan-500 rounded-full">Home</button></Link>
            </div>
        </div>
    )
}