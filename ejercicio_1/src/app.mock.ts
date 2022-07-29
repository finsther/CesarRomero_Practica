export interface Root {
    repositories: Repository[]
}

export interface Repository {
    id: number
    state: number
}
