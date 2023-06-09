
import type { GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import Home from 'dh-marvel/components/home/Home';
import { Comic } from './api/comics/types';
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import { dataComics } from './api/comics/types';



export const getStaticProps:GetStaticProps= async() =>{
    const res = await getComics(0,12)
    const data= res.data
    const dataComics: dataComics = await data
    
    return{
        props:{
            comics: dataComics.results,
            pages: dataComics.total
        }
    }
}


type HomeProps= {
    comics: Comic[],
    pages: number
}




const Index: NextPage<HomeProps> = ({comics, pages}) => {

    

    return (
        <>
            <Head>
                <title>Marvel Comics</title>
                <meta name="description" content="Marvel comics store"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <BodySingle title={"Marvel Comics"}>

                <Home comics={comics} pages={pages}/>

            </BodySingle>
        </>
    )
}

export default Index
