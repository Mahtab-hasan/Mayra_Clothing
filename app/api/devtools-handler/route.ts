import { NextResponse } from 'next/server';

export async function GET() {
  // Return a simple JSON response for Chrome DevTools
  return NextResponse.json({
    message: 'DevTools handler',
    timestamp: new Date().toISOString()
  }, { status: 200 });
}
