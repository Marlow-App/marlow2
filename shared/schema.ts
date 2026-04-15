import { z } from "zod";

export const insertRecordingSchema = z.object({
  audioUrl: z.string(),
  sentenceText: z.string(),
});

export const insertFeedbackSchema = z.object({
  recordingId: z.number(),
  textFeedback: z.string(),
});
