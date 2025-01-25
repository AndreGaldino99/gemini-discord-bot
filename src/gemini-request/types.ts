interface GeminiRequest {
  contents: GeminiRequestContent[]
}

interface GeminiRequestContent {
  parts: GeminiRequestPart[]
}

interface GeminiRequestPart {
  text: string
}




interface GeminiResponse {
  candidates: GeminiResponseCandidate[]
  usageMetadata: GeminiResponseUsageMetadata
  modelVersion: string
}

interface GeminiResponseCandidate {
  content: GeminiResponseContent
  finishReason: string
  avgLogprobs: number
}

interface GeminiResponseContent {
  parts: GeminiResponsePart[]
  role: string
}

interface GeminiResponsePart {
  text: string
}

interface GeminiResponseUsageMetadata {
  promptTokenCount: number
  candidatesTokenCount: number
  totalTokenCount: number
}


export {GeminiRequest, GeminiResponse};