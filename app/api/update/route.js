import clientPromise from "@/lib/mongodb";
import { auth } from "@clerk/nextjs/server";
import { ObjectId } from "mongodb";

export async function PATCH(request) {
    const { userId } = await auth();

    if (!userId) {
        return Response.json({
            success: false,
            message: "Unauthorized: Please sign in first",
        }, { status: 401 });
    }

    const body = await request.json();
    const { handle, pic, desc, name, template, links } = body;

    if (!handle) {
        return Response.json({
            success: false,
            message: "Handle is required",
        });
    }

    const client = await clientPromise;
    const db = client.db("bittree");
    const collection = db.collection("links");

    // Fetch the profile
    const profile = await collection.findOne({ handle: handle.toLowerCase() });

    if (!profile) {
        return Response.json({
            success: false,
            message: "BitTree not found",
        }, { status: 404 });
    }

    // CRITICAL: Verify ownership on server
    if (profile.userId !== userId) {
        return Response.json({
            success: false,
            message: "Unauthorized: You can only edit your own BitTrees",
        }, { status: 403 });
    }

    // Update the profile
    const updateData = {
        pic: pic || profile.pic,
        desc: desc || profile.desc,
        name: name || profile.name,
        template: template || profile.template,
        links: links || profile.links,
        updatedAt: new Date(),
    };

    const result = await collection.updateOne(
        { handle: handle.toLowerCase() },
        { $set: updateData }
    );

    if (result.modifiedCount === 0) {
        return Response.json({
            success: false,
            message: "Failed to update profile",
        });
    }

    return Response.json({
        success: true,
        message: "BitTree updated successfully",
    });
}
