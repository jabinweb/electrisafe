import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if user is authenticated and is admin
    const session = await auth();
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await req.json();
    const { status } = body;

    if (!status) {
      return NextResponse.json(
        { error: 'Status is required' },
        { status: 400 }
      );
    }

    // Update form response status
    const updatedFormResponse = await prisma.formResponse.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({
      success: true,
      formResponse: updatedFormResponse,
    });
  } catch (error) {
    console.error('Error updating form response:', error);
    return NextResponse.json(
      { error: 'Failed to update form response' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if user is authenticated and is admin
    const session = await auth();
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;

    // Delete form response
    await prisma.formResponse.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: 'Form response deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting form response:', error);
    return NextResponse.json(
      { error: 'Failed to delete form response' },
      { status: 500 }
    );
  }
}
