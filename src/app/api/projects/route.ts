import { NextRequest, NextResponse } from 'next/server';
import { projectsService } from '@/services';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const isShow = searchParams.get('isShow') ? searchParams.get('isShow') === 'true' : undefined;
    const isFeatured = searchParams.get('isFeatured') ? searchParams.get('isFeatured') === 'true' : undefined;

    const result = await projectsService.getProjects({
      isShow,
      isFeatured,
      page,
      limit,
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = await projectsService.createProject(body);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
} 