import { NextResponse } from 'next/server';
import { getPortfolioData } from '@/lib/sanity';

export async function GET() {
  try {
    const data = await getPortfolioData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio data' },
      { status: 500 }
    );
  }
}
