

import { getComic } from 'dh-marvel/services/marvel/marvel.service'
import { GetServerSideProps, NextPage } from 'next'
import ComicDetailCard from 'dh-marvel/components/cards/ComicDetailCard'
import { ComicDetail } from 'dh-marvel/components/cards/ComicDetail.types'



export const getServerSideProps: GetServerSideProps = async ({ query: { id } }) => {

    const idNumber = parseInt(id as string)
    const comic = await getComic(idNumber)

    return {
        props: { comic }
    }

}

export type ComicDetailProps = {
    comic: ComicDetail
}


const ComicDetail: NextPage<ComicDetailProps> = ({ comic }) => {

    
    return (

        <ComicDetailCard comic= {comic}/>
    )
}

export default ComicDetail