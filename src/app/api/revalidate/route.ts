// /src/app/api/revalidate/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Set this to a secret value and add it to your Vercel/Sanity webhook
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  const path = searchParams.get('path');

  if (secret !== REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  if (!path) {
    return NextResponse.json({ message: 'Missing path' }, { status: 400 });
  }

  try {
    // Revalidate the given path
    await res.revalidate(path);
    return NextResponse.json({ revalidated: true, path });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 });
  }
}
