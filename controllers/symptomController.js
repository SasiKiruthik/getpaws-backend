import SymptomLog from "../models/SymptomLog.js";
import { analyzeSymptoms } from "../ai/engine.js";

export async function checkSymptoms(req, res) {
  const { petType, age, symptoms, duration } = req.body;

  const result = analyzeSymptoms(symptoms);

  const confidence = Math.min(90, result.risk + 10);

  await SymptomLog.create({
    petType,
    age,
    symptoms,
    duration,
    riskScore: result.risk,
    advice: result.advice,
    confidence
  });

  res.json({
    advice: result.advice,
    riskScore: result.risk,
    confidence
  });
}
