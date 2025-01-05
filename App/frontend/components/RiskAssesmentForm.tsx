'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RiskAssessmentForm() {
  const [parameter1, setParameter1] = useState('')
  const [parameter2, setParameter2] = useState('')
  const [parameter3, setParameter3] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/assess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ parameter1, parameter2: parseFloat(parameter2), parameter3: parseFloat(parameter3) })
    })
    if (response.ok) {
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="parameter1" className="text-white">Parameter 1</Label>
        <Input 
          id="parameter1" 
          value={parameter1} 
          onChange={(e) => setParameter1(e.target.value)} 
          required
          className="bg-black/40 border-[#FF69B4]/30 text-white placeholder:text-gray-400 focus:border-[#00FFFF]"
        />
      </div>
      <div>
        <Label htmlFor="parameter2" className="text-white">Parameter 2</Label>
        <Input 
          id="parameter2" 
          type="number" 
          value={parameter2} 
          onChange={(e) => setParameter2(e.target.value)} 
          required
          className="bg-black/40 border-[#FF69B4]/30 text-white placeholder:text-gray-400 focus:border-[#00FFFF]"
        />
      </div>
      <div>
        <Label htmlFor="parameter3" className="text-white">Parameter 3</Label>
        <Input 
          id="parameter3" 
          type="number" 
          value={parameter3} 
          onChange={(e) => setParameter3(e.target.value)} 
          required
          className="bg-black/40 border-[#FF69B4]/30 text-white placeholder:text-gray-400 focus:border-[#00FFFF]"
        />
      </div>
      <Button 
        type="submit"
        className="w-full bg-gradient-to-r from-[#8BA3E8] to-[#FF69B4] hover:opacity-90 transition-opacity"
      >
        Submit
      </Button>
    </form>
  )
}

