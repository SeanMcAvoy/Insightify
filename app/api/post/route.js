// an API end point to create a new Post document in the database. The route is not protected by the auth middleware, so anyone can post. The route expects a POST request with a title, description in the request body. The boardId is in the query parameters. the userId feild is populated with the user's ID if they are logged in.
//
import { Filter } from "bad-words";
import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import { auth } from "@/auth";
import Post from "@/models/Post";
import User from "@/models/User";

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description } = body;

    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get("boardId");

    // Filter bad words
    const badWordsFilter = new Filter();
    const sanitizedTitle = badWordsFilter.clean(title);
    const sanitizedDescription = badWordsFilter.clean(description);

    if (!sanitizedTitle) {
      return NextResponse.json({ error: "Title is Required" }, { status: 400 });
    }

    const session = await auth();

    await connectMongo();

    const post = await Post.create({
      title: sanitizedTitle,
      description: sanitizedDescription,
      boardId: boardId,
      userId: session?.user?.id,
    });

    return NextResponse.json({ post });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = req.nextUrl;
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { error: "postId is required" },
        { status: 400 }
      );
    }

    const session = await auth();

    await connectMongo();

    const user = await User.findById(session?.user?.id);

    if (!user.hasAccess) {
      return NextResponse.json(
        { error: "Please subcribe first" },
        { status: 403 }
      );
    }

    const post = await Post.findById(postId);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (!user.boards.includes(post.boardId.toString())) {
      return NextResponse.json({ error: "Not Authorised" }, { status: 401 });
    }

    await Post.deleteOne({ _id: postId });

    return NextResponse.json({ message: "Post Deleted" });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
