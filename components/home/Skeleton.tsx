import { Grid, Stack } from '@mui/material'
import Skeleton from '@mui/material/Skeleton';
import React from 'react'

const SkeletonComp = () => {

    return (
       
        <Grid  item xs={12} sm={6} md={4}  sx={{p:3}}>

            <Skeleton variant="rounded" width={'100%'} height={200} sx={{mb:3}} />
            
            <Stack width={'100%'} justifyContent={'center'}>
            <Skeleton variant="text" sx={{ fontSize: '30px', width:'80%', alignSelf:'center'}} />
            <Skeleton variant="text" sx={{ fontSize: '30px', width:'80%',alignSelf:'center', mb:5 }} />
            </Stack>

            <Stack width={'100%'} flexDirection={'row'} justifyContent={'center'} sx={{mb:2}}>
                <Skeleton variant="rounded" width={60} height={30} sx={{mr:2}} />
                <Skeleton variant="rounded" width={60} height={30} />
            </Stack>

        </Grid>   

      


    )
}


const SkeletonFeedback = () =>{

    return(

        
            <Grid container rowSpacing={3} >

                <SkeletonComp/>
                <SkeletonComp/>
                <SkeletonComp/>
            </Grid>

        
    )

}

export default SkeletonFeedback

