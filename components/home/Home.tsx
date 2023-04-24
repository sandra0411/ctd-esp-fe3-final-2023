

import { Grid, Pagination, Stack } from '@mui/material'
import React, { FC } from 'react'
import ComicCard from '../cards/ComicCard'
import { Comic, dataComics } from 'dh-marvel/pages/api/comics/types'
import SkeletonFeedback from './Skeleton'


type HomeProps = {
    comics: Comic[],
    pages: number
}

const Home: FC<HomeProps> = ({ comics, pages }) => {


    const [page, setPage] = React.useState(1);
    const [comicsData, setComicsData] = React.useState<Comic[]>([])
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        getingComics(value);

    };

    const totalPages = Math.ceil(pages / 12)

    const getingComics = async (value: number) => {

        const params = new URLSearchParams()
        params.append('page', `${value}`)
        const query = params.toString()
        setIsLoading(true)
        const response = await fetch(`/api/comics?${query}`)
        const data: dataComics = await response.json()
        const dataComic = data.results
        setComicsData(dataComic)
        setIsLoading(false)

    }


    return (

        <>
            <Stack spacing={2} sx={{ mb: 4, mt:4, alignItems:'center' }} >
                <Pagination count={totalPages} page={page} onChange={handleChange} boundaryCount={0} />
            </Stack>

            {isLoading? 
            <SkeletonFeedback/>
            : 

            <Grid container rowSpacing={3} >


                {

                    page === 1

                        ?

                        comics?.map(comic =>

                            <Grid key={comic.id}  item xs={12} sm={6} md={4}  sx={{p:3}}>
                            <ComicCard
                                id={comic.id}
                                title={comic.title}
                                description={comic.description}
                                thumbnail={comic.thumbnail} 
                            />
                            </Grid>

                        )
                        :
                        
                        comicsData?.map(comic =>

                        <Grid key={comic.id} item xs={12} sm={6} md={4} sx={{p:3}}>
                            <ComicCard
                                id={comic.id}
                                title={comic.title}
                                description={comic.description}
                                thumbnail={comic.thumbnail}
                                />
                        </Grid>

                        )

                }


            </Grid>
            }

            <Stack spacing={2} sx={{ mb: 4, mt:4, alignItems:'center' }}>
                <Pagination count={totalPages} page={page} onChange={handleChange} boundaryCount={0}/>
            </Stack>
        </>
    )
}

export default Home