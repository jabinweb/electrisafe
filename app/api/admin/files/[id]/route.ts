import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params

    // Get file record
    const file = await prisma.mediaFile.findUnique({
      where: { id }
    })

    if (!file) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }

    // Delete from Vercel Blob (if configured)
    try {
      // TODO: Implement blob deletion - del export not available in current @vercel/blob version
      // const { del } = await import('@vercel/blob')
      // await del(file.url)
      console.log('Blob file deletion skipped:', file.url)
    } catch (blobError) {
      console.error('Error deleting from blob:', blobError)
      // Continue with database deletion even if blob deletion fails
    }

    // Delete from database
    await prisma.mediaFile.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'File deleted successfully' })
  } catch (error) {
    console.error('Error deleting file:', error)
    return NextResponse.json({ error: 'Failed to delete file' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const { alt, caption } = await request.json()

    const file = await prisma.mediaFile.update({
      where: { id },
      data: {
        alt: alt || null,
        caption: caption || null,
        updatedAt: new Date()
      }
    })

    return NextResponse.json({ file })
  } catch (error) {
    console.error('Error updating file:', error)
    return NextResponse.json({ error: 'Failed to update file' }, { status: 500 })
  }
}
