export type Question = {
    id: string,
    name: string,
    type: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than',
    value: string
}