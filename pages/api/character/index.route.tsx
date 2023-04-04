import { NextApiRequest, NextApiResponse } from "next";
import { getCharacter } from "dh-marvel/services/marvel/marvel.service";






const handler = async (req:NextApiRequest, res: NextApiResponse<any>) =>{


    
        const {id}= req.query
        const pageAsNumber = parseInt(id as string);
        console.log('soy el puto id:########################### ' + pageAsNumber)
        
    
        const response= await getCharacter(pageAsNumber)
        const comics:any = await response
    
        res.status(200).json(comics)
}

export default handler;