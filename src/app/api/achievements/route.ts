import { NextRequest, NextResponse } from 'next/server';
import { achievementsService } from '@/src/services';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category') || undefined;
    const isShow = searchParams.get('isShow')
      ? searchParams.get('isShow') === 'true'
      : undefined;

    const achievements = await achievementsService.getAchievements({
      category,
      isShow,
      page,
      limit,
    });

    return NextResponse.json(achievements);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch achievements' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const achievement = await achievementsService.createAchievement(body);
    return NextResponse.json(achievement, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create achievement' },
      { status: 500 }
    );
  }
}
