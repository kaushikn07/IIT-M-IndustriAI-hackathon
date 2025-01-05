'use server'

let results: any[] = []

export async function getResults() {
  return results
}

export async function addResult(result: any) {
  results.push(result)
}

