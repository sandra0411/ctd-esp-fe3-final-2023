import { NextApiRequest, NextApiResponse } from "next";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import { dataComics } from "./types";
import {
    ERROR_METHOD_NOT_ALLOWED,
    ERROR_SERVER,
  } from "dh-marvel/services/checkout/checkout.errors";

type Error={
    error: string,
    message: string
}


const handler = async (req:NextApiRequest, res: NextApiResponse<dataComics| Error>) =>{


    if (req.method !== "GET") {
        res.status(405).json(ERROR_METHOD_NOT_ALLOWED);
        return;
      }

    try{
        const {page}= req.query
        const pageAsNumber = parseInt(page as string);
        const offset= (pageAsNumber-1)*12
    
        const response= await getComics(offset, 12)
        const comics:dataComics = response.data
    
        res.status(200).json(comics)
    }
    catch (err) {
        console.log(err);
        res.status(500).json(ERROR_SERVER);
    }
}

export default handler;