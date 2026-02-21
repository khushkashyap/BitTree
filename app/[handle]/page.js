import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")


    const item = await collection.findOne({ handle: handle })
    if(!item){
        return notFound();
    }

    const item2 = {
        "_id": {
            "$oid": "678a65ed8f75b0d93d5d3511"
        },
        "links": [
            {
                "link": "https://www.instagram.com/p/DEcFEIlvPZk/?igsh=QkFBNlRPUWJnNQ%3D%3D&img_index=3",
                "linktext": "Instagram"
            },
            {
                "link": "https://github.com/khushkashyap",
                "linktext": "GitHub"
            },
            {
                "link": "https://www.linkedin.com/in/khush-kashyap/",
                "linktext": "LinkedIn"
            }
        ],
        "handle": "khushkk13",
        "pic": "https://avatars.githubusercontent.com/u/130690679?v=4"
    }


    return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
        {item && <div className="photo flex justify-center flex-col items-center gap-4">
            <img className="rounded-full " width={100} height={100} src={item.pic} alt="photo" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <span className="desc w-80 text-center">{item.desc}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return <Link key={index} href={item.link}>
                        <div className="bg-purple-100 py-4 shadow-lg min-w-72 flex justify-center px-2 rounded-md my-3">
                            {item.linktext}
                        </div></Link>
                })}
            </div>
        </div>}
    </div>
}