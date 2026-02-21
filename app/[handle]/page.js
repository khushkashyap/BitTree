export const runtime = "nodejs";

import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const { handle } = await params;

    const client = await clientPromise;
    const db = client.db("bittree");
    const collection = db.collection("links");

    const item = await collection.findOne({ handle });

    if (!item) {
        notFound();
    }

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 justify-center items-start py-10 px-4">
            <div className="photo flex justify-center flex-col items-center gap-6 bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-md w-full">
                <img
                    className="rounded-full border-4 border-white shadow-lg"
                    width={120}
                    height={120}
                    src={item.pic}
                    alt="photo"
                />

                <span className="font-bold text-2xl text-gray-800">
                    @{item.handle}
                </span>

                <span className="desc text-center text-gray-600">
                    {item.desc}
                </span>

                <div className="links w-full">
                    {item.links.map((link, index) => (
                        <Link key={index} href={link.link}>
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 shadow-lg w-full flex justify-center px-4 rounded-xl my-4 hover:scale-105 transition">
                                {link.linktext}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}