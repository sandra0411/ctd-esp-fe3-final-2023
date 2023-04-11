

import { Grid, Pagination, Stack } from '@mui/material'
import React, { FC } from 'react'
import ComicCard from '../cards/ComicCard'
import { Comic, dataComics } from 'dh-marvel/pages/api/comics/types'


type HomeProps = {
    comics: Comic[],
    pages: number
}

const Home: FC<HomeProps> = ({ comics, pages }) => {


    const [page, setPage] = React.useState(1);
    const [comicsData, setComicsData] = React.useState<Comic[]>([])
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        getingComics(value);

    };

    const totalPages = Math.ceil(pages / 12)

    const getingComics = async (value: number) => {

        const params = new URLSearchParams()
        params.append('page', `${value}`)
        const query = params.toString()
        const response = await fetch(`http://localhost:3000/api/comics?${query}`)
        const data: dataComics = await response.json()
        const dataComic = data.results
        setComicsData(dataComic)

    }


    return (

        <>
            <Stack spacing={2} sx={{ mb: 4, mt:4 }}>
                <Pagination count={totalPages} page={page} onChange={handleChange} />
            </Stack>

            <Grid container spacing={2}>


                {

                    page === 1

                        ?

                        comics?.map(comic =>

                            <Grid key={comic.id} item xs={4} sx={{mb:4}}>
                            <ComicCard
                                id={comic.id}
                                title={comic.title}
                                description={comic.description}
                                thumbnail={comic.thumbnail} />
                            </Grid>

                        )
                        :
                        
                        comicsData?.map(comic =>

                        <Grid key={comic.id} item xs={4} sx={{mb:4}}>
                            <ComicCard
                                id={comic.id}
                                title={comic.title}
                                description={comic.description}
                                thumbnail={comic.thumbnail} />
                        </Grid>

                        )

                }


            </Grid>

            <Stack spacing={2} sx={{ mb: 4, mt:4 }}>
                <Pagination count={totalPages} page={page} onChange={handleChange} />
            </Stack>
        </>
    )
}

export default Home