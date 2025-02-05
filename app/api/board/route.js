import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Board from "@/models/Board";
import { Promise } from "mongoose";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.name) {
      return NextResponse.json(
        { error: "Board name is Required" },
        { status: 400 }
      );
    }

    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Not Authorised" }, { status: 401 });
    }

    await connectMongo();

    const user = await User.findById(session.user.id);

    const board = await Board.create({
      userId: user._id,
      name: body.name,
    });

    user.boards.push(board._id);
    await user.save();

    return NextResponse.json({ board });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get("boardId");

    if (!boardId) {
      return NextResponse.json(
        { error: "boardId is required" },
        { status: 400 }
      );
    }

    const [session] = await Promise.all([auth()]);

    if (!session) {
      return NextResponse.json({ error: "Not Authorised" }, { status: 401 });
    }

    const deleteBoardPromise = Board.deleteOne({
      _id: boardId,
      userId: session.user.id,
    });
    const updateUserPromise = User.updateOne(
      { _id: session.user.id },
      { $pull: { boards: boardId } }
    );

    await Promise.all([deleteBoardPromise, updateUserPromise]);

    return NextResponse.json({});
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
