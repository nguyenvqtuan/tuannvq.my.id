import { NextRequest, NextResponse } from 'next/server';
import { messagesService } from '@/src/services';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');

    const result = await messagesService.getPublicMessages(limit);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch public messages' },
      { status: 500 }
    );
  }
}
