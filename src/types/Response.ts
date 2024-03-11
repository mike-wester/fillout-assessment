import { Question } from "./Question";

export type Response = {
    submissionId: string,
    submissionTime: Date,
    lastUpdatedAt: Date,
    questions: Question[],
    calculations: [],
    urlParameters: [],
    quiz: {},
    documents: []
}