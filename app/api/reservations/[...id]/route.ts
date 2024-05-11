import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  id?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {}
