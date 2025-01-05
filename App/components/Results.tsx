import { getResults } from '../actions'

export default async function Results() {
  const results = await getResults()

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Results</h2>
      {results.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FF69B4]/20">
                <th className="py-3 px-4 text-left text-[#8BA3E8] font-medium">Metric</th>
                <th className="py-3 px-4 text-left text-[#8BA3E8] font-medium">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FF69B4]/20">
              <tr>
                <td className="py-3 px-4 text-gray-300">Credit Risk Score (0-1)</td>
                <td className="py-3 px-4 text-[#00FFFF]">
                  {results[0]?.riskScore?.toFixed(2) ?? 'Yet to be predicted'}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-300">Risk Level</td>
                <td className="py-3 px-4 text-[#00FFFF]">
                  {results[0]?.riskLevel ?? 'Yet to be predicted'}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-300">Cause of Risk</td>
                <td className="py-3 px-4 text-[#00FFFF]">
                  {results[0]?.causeOfRisk ?? 'Yet to be predicted'}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-300">Confidence</td>
                <td className="py-3 px-4 text-[#00FFFF]">
                  {results[0]?.confidence ?? 'Yet to be predicted'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-[#FF69B4]/20">
          <table className="w-full border-collapse">
            <tbody className="divide-y divide-[#FF69B4]/20">
              <tr>
                <td className="py-3 px-4 text-gray-300">Credit Risk Score (0-1)</td>
                <td className="py-3 px-4 text-[#00FFFF]">Yet to be predicted</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-300">Risk Level</td>
                <td className="py-3 px-4 text-[#00FFFF]">Yet to be predicted</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-300">Cause of Risk</td>
                <td className="py-3 px-4 text-[#00FFFF]">Yet to be predicted</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-300">Confidence</td>
                <td className="py-3 px-4 text-[#00FFFF]">Yet to be predicted</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

