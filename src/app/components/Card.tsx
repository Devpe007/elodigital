import Link from "next/link";

export default function Card() {
  return (
    <div className="flex flex-col items-center w-80 bg-white px-8 py-14 lg:px-10 rounded">
      <h1 className="text-3xl mb-8">Card</h1>

      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <Link href="#" className="mt-8 py-2 px-4 w-full bg-primary-orange rounded text-white text-center">Conversar</Link>
    </div>
  )
}
