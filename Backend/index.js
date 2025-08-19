import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'

dotenv.config()

const app= express()
const port= 3000

app.use(cors({
    origin:"*"
}))
app.use(express.json())

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

app.post('/api/explain', async (req, res)=>{
    const {text} = req.body
    console.log("recived",text)

     try {
    const prompt = `Explain this code in plain English:\n\n${text}`
    const result = await model.generateContent(prompt)

    const aiReply = result.response.text()

    res.json({ explanation: aiReply })
  } catch (error) {
    console.error("Gemini API error:", error.message)
    res.status(500).json({ error: "Failed to generate explanation" })
  }
})

app.listen(port,()=>{
    console.log(`server running at http://127.0.0.1:${port}`)
})