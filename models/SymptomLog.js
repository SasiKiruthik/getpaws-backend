import mongoose from "mongoose";

const SymptomLogSchema = new mongoose.Schema({
  petType: String,
  age: Number,
  symptoms: [String],
  duration: String,
  riskScore: Number,
  advice: String,
  confidence: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("SymptomLog", SymptomLogSchema);
