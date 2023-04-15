
import React from 'react'
import CheckOutStepper from 'dh-marvel/components/checkout/CheckOutStepper'
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
import { GetServerSideProps, NextPage } from 'next/types'
import { getComic } from 'dh-marvel/services/marvel/marvel.service'
import { ComicDetail } from 'dh-marvel/components/cards/ComicDetail.types';


export const getServerSideProps: GetServerSideProps = async ({ query: { comicId } }) => {

    const idNumber = parseInt(comicId as string)
    const comic = await getComic(idNumber)
  
    return {
        props: { comic }
    }
  
  }

  export type ComicChaeckoutProps = {
    comic: ComicDetail
  }

const CheckOutPage: NextPage<ComicChaeckoutProps> = ({comic}) => {

    

  return (

    <CheckOutStepper comic={comic}/>
               
  )
}

(CheckOutPage as any).Layout = LayoutCheckout;
export default CheckOutPage