import * as React from 'react';
import {FC, PropsWithChildren} from "react";
import Container, {ContainerProps} from "@mui/material/Container";
import {Stack, Typography} from "@mui/material";

interface BodySingleProps extends PropsWithChildren {
    title?: string,
    containerProps?: ContainerProps
}

const BodySingle: FC<BodySingleProps> = ({title, containerProps, children}: BodySingleProps) => {
    return (
            <Container maxWidth="xl" {...containerProps} sx={{mt:3}}>
                <Stack direction={"column"} display={'flex'} justifyContent={'center'}>
                    {title &&
                        <Typography variant={"h2"} my={2} textAlign={'center'} fontSize={ {xs: 28, sm: 45, md: 50}} fontWeight={600}>
                            {title}
                        </Typography>
                    }
                    {children}
                </Stack>
            </Container>
    );
};
export default BodySingle;
