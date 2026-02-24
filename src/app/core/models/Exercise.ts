export interface Exercise {
    id: number;
    question: string;
    correctAnswer: string;
    explanation?: string;
    type: 'fill-blank' | 'multiple-choice';
}