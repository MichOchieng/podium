import Link from "next/link";

export default function Home() {
  return (
    <main className="page-container h-[400px]">
        {/* Circuits */}
        <Link className="flex items-center justify-center w-64 h-28 my-5" href={'/predict'}>
          <h1 className="mainButton">View Circuits</h1>
        </Link>
        {/* About */}
        <Link className="flex items-center justify-center w-64 h-28 my-5" href={'/about'}>
          <h1 className="mainButton">About Podium</h1>
        </Link>
    </main>
  )
}
