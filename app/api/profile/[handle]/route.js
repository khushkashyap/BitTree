import clientPromise from "@/lib/mongodb";
import { auth } from "@clerk/nextjs/server";

export async function GET(request, { params }) {
    const { userId } = await auth();

    if (!userId) {
        return Response.json({
            success: false,
            message: "Unauthorized: Please sign in first",
        }, { status: 401 });
    }

    const handle = (await params).handle;

    if (!handle) {
        return Response.json({
            success: false,
            message: "Handle is required",
        });
    }

    const client = await clientPromise;
    const db = client.db("bittree");
    const collection = db.collection("links");

    const profile = await collection.findOne({ handle: handle.toLowerCase() });

    if (!profile) {
        return Response.json({
            success: false,
            message: "BitTree not found",
        }, { status: 404 });
    }

    // Verify ownership
    if (profile.userId !== userId) {
        return Response.json({
            success: false,
            message: "Unauthorized: You can only edit your own BitTrees",
        }, { status: 403 });
    }

    return Response.json({
        success: true,
        profile: JSON.parse(JSON.stringify(profile)),
    });
}
