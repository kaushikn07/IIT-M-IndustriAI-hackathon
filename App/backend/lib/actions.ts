import { NextResponse } from 'next/server'
import { addResult, assessRisk } from '../../lib/actions'

export async function POST(request: Request) {
  const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ success: false })
  }

  // In a real app, you would process the CSV file here
  // For this example, we'll just create a mock result
  const mockData = {
    parameter1: file.name,
    parameter2: Math.random() * 100,
    parameter3: Math.random() * 100000
  }

  const mlResponse = await assessRisk(mockData)

  await addResult({
    parameter1: file.name,
    ...mlResponse
  })

  return NextResponse.json({ success: true })
}

