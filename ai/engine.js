import { RULES } from "./rules.js";

export function analyzeSymptoms(symptoms) {
  for (const rule of RULES) {
    if (rule.symptoms.every(s => symptoms.includes(s))) {
      return rule;
    }
  }
  return {
    advice: "No critical symptoms detected. Observe your pet and consult a vet if symptoms persist.",
    risk: 15
  };
}
