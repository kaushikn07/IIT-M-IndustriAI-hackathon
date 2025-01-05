'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    if (response.ok) {
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="file" className="text-white">Upload CSV File</Label>
        <Input 
          id="file" 
          type="file" 
          accept=".csv" 
          onChange={(e) => setFile(e.target.files?.[0] || null)} 
          required
          className="bg-black/40 border-[#FF69B4]/30 text-white file:bg-[#8BA3E8] file:text-white file:border-0 file:mr-4 hover:file:bg-[#FF69B4] file:transition-colors"
        />
      </div>
      <Button 
        type="submit"
        className="w-full bg-gradient-to-r from-[#8BA3E8] to-[#FF69B4] hover:opacity-90 transition-opacity"
      >
        Upload
      </Button>
    </form>
  )
}

