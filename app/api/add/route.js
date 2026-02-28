import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json();

    if (!body.handle || !body.template) {
        return Response.json({
            success: false,
            error: true,
            message: "Handle and template are required",
            result: null
        });
    }

    const normalizedHandle = body.handle.toLowerCase();

    const client = await clientPromise;
    const db = client.db("bittree");
    const collection = db.collection("links");

    const existing = await collection.findOne({ handle: normalizedHandle });

    if (existing) {
        return Response.json({
            success: false,
            error: true,
            message: "This bittree already exists!",
            result: null
        });
    }

    const { links, pic, desc, template } = body;

    const result = await collection.insertOne({
        handle: normalizedHandle,
        links,
        pic,
        desc,
        template,
        createdAt: new Date()
    });

    return Response.json({
        success: true,
        error: false,
        message: "Your Bittree has been generated!",
        result
    });
}