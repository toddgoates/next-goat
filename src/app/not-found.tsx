import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-8 p-5">
      <h1 className="text-4xl font-bold">Oh No!</h1>
      <p className="text-lg">
        It looks like you tried to go to a page that doesn't exist!
      </p>
      <Link href="/" className="text-lg text-purple-500 hover:text-purple-700">
        Go Home
      </Link>
      <img
        src="images/computer-cat.jpg"
        alt="A gray and white ragdoll cat sitting on a chair in front of a laptop"
        className="w-full"
      />
    </div>
  );
}
