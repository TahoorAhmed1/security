import { NextResponse } from "next/server";

let agents: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const existing = agents.find(
      (a) => a.MachineName === body.MachineName && a.UserName === body.UserName
    );

    if (existing) {
      Object.assign(existing, body, { lastSeen: Date.now() });
    } else {
      agents.push({ ...body, id: Date.now(), lastSeen: Date.now() });
    }

    return NextResponse.json({ message: "Agent connected", total: agents.length });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(agents);
}
