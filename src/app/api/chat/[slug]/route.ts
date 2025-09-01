import { NextResponse } from 'next/server';

import { createClient } from '@/src/common/utils/server';

export const DELETE = async (
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) => {
  const supabase = await createClient();
  try {
    const { slug } = await params;
    await supabase.from('messages').delete().eq('id', slug);
    return NextResponse.json('Data saved successfully', { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
