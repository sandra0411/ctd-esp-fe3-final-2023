
export type Comic= {
    id: number, 
    title: string,
    description: string,
    thumbnail:{path:string, extension:string},
}

export type dataComics ={
    results: Comic[],
    total: number
}