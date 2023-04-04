import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import { getCharacter } from 'dh-marvel/services/marvel/marvel.service'
import Link from 'next/link'
import React, { FC, useEffect } from 'react'


export type Character = {
    resourceURI: string,
    name: string
}

type AsocCharacterListProps = {
    characters: Character[]
}

const AsocCharacterList: FC<AsocCharacterListProps> = ({ characters }) => {

    const [open, setOpen] = React.useState(false);
    const [idCharacter, setIdCharacter]= React.useState<string>('')
    const [charac, setCharac]= React.useState<string>('')

    const handleClick = () => {
        setOpen(!open);
    };

    /* useEffect(()=> {

        const queTrae= async()=>{

            const params = new URLSearchParams()
        params.append('id', `${idCharacter}`)
        const query = params.toString()
        const response = await fetch(`http://localhost:3000/api/character?${query}`)
        const data: any = await response.json()
        const dataCharacter = data.results
        setCharac(dataCharacter)

        console.log('lo que trae character: '+ dataCharacter)

        }

        queTrae();

    }, [idCharacter])

    useEffect(()=>{

        const character0= characters[0].resourceURI.substring(47)
        setIdCharacter(character0)

    }, []) */


    return (




        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
       
        >


            <ListItemButton onClick={handleClick}>

                <ListItemText
                    primary="Associated Comic Characters"
                    primaryTypographyProps={{
                        color: 'primary',
                        fontWeight: 'medium',
                        variant: 'h6',
                    }} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    {characters?.map(ch =>{

                        let text = ch.resourceURI
                        let result = text.substring(47)

                        return(
            
                                    <Link href={`/character/${result}`} key={ch.name}>
                                    
                                    <ListItemButton  sx={{ pl: 4 } }>
                                        <ListItemText primary={ch.name} />
                                    </ListItemButton>
                                    </Link>
                            
                        )
                    }




                    )}

                </List>
            </Collapse>
        </List>
    )
}

export default AsocCharacterList