import clientPromise from "@/lib/mongodb";
import { auth } from "@clerk/nextjs/server";

export async function POST(request) {
    const { userId } = await auth();

    if (!userId) {
        return Response.json({
            success: false,
            message: "Unauthorized: Please sign in first",
        }, { status: 401 });
    }

    const body = await request.json();
    const { handle } = body;

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
            message: "Unauthorized: You can only delete your own BitTrees",
        }, { status: 403 });
    }

    const result = await collection.deleteOne({ handle: handle.toLowerCase() });

    return Response.json({
        success: result.deletedCount > 0,
        message: result.deletedCount > 0 ? "BitTree deleted successfully" : "Failed to delete BitTree",
    });
}
