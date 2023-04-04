export type Character = {
    resourceURI: string,
    name: string
}

export type ComicDetail = {
    id: number,
    title: string,
    description: string,
    thumbnail: { path: string, extension: string },
    price: number,
    oldPrice: number,
    stock: number,
    characters: { items: Character[] }

}