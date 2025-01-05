import RiskAssessmentForm from './components/RiskAssessmentForm'
import FileUpload from './components/FileUpload'
import Results from './components/Results'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2D1B36] p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#8BA3E8] to-[#FF69B4] bg-clip-text text-transparent">
          Risk Assessment Solution
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-[#FF69B4]/20">
            <h2 className="text-xl font-semibold mb-4 text-white">Submit Parameters</h2>
            <RiskAssessmentForm />
          </div>
          <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-[#FF69B4]/20">
            <h2 className="text-xl font-semibold mb-4 text-white">Upload File</h2>
            <FileUpload />
          </div>
        </div>
        <Results />
      </div>
    </main>
  )
}

