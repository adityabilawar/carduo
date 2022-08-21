// interface for deck data
export interface DeckData {
	id: number
	title: string
	status: string
	questions: Card[]
}

// interface for card data
export interface Card {
	id: number
	question: string
	answer: string
}