import { NextRequest, NextResponse } from 'next/server';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

export async function GET(request: NextRequest, response: NextResponse) {
  const query = request.nextUrl.searchParams.get('input');

  const result = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&language=pt-BR&key=${apiKey}`
  );

  const { predictions } = await result.json();

  return NextResponse.json({ predictions });
}
