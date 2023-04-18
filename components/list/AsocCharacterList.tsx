import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import { getCharacter } from 'dh-marvel/services/marvel/marvel.service'
import Link from 'next/link'
import React, { FC, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


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
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const handleClick = () => {
        setOpen(!open);
    };



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
                        fontSize: matches? 20 : 16
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