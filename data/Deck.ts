export interface DeckData {
	id: number
	title: string
	status: string
	questions: Card[]
}

export interface Card {
	id: number
	question: string
	answer: string
}