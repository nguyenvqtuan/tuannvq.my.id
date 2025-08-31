import { NextRequest, NextResponse } from 'next/server';
import { messagesService } from '@/services';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const isShow = searchParams.get('isShow') ? searchParams.get('isShow') === 'true' : undefined;
    const isReply = searchParams.get('isReply') ? searchParams.get('isReply') === 'true' : undefined;

    const messages = await messagesService.getMessages({
      isShow,
      isReply,
      page,
      limit,
    });

    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = await messagesService.createMessage(body);
    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create message' },
      { status: 500 }
    );
  }
} 