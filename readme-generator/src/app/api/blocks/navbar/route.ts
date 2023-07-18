import { NextResponse } from "next/server"

/*
    GET all the dropdown options for the navbar
*/
export async function GET(request: Request) {
  return
}

/*
import { IReadME } from "./useGetBlocks";

export default async function useGetNames(): Promise<string[]> {
  let allBlocks;

  const allReadME = await fetch("/templates/folders.json").then((res) =>
    res.json()
  );

  allBlocks = await Promise.all(
    allReadME.map(async (readme: string) => {
      const blocks = await fetch(`/templates/${readme}/blocks.json`).then(
        (res) => res.json()
      );

      return blocks;
    })
  ).then((blocks) => blocks.flat());

  return allBlocks.map((readme: IReadME) => {
    return readme.name;
  });
}
*/
