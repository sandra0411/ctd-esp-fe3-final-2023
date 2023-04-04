import { GetServerSideProps, NextPage } from 'next/types'
import React from 'react'
import { getCharacter } from 'dh-marvel/services/marvel/marvel.service'
import CharacterCard from 'dh-marvel/components/cards/CharacterCard'


export const getServerSideProps: GetServerSideProps = async ({ query: { id } }) => {

    const idNumber = parseInt(id as string)
    const character = await getCharacter(idNumber)

    return {
        props: { character }
    }

}

interface characterProps {
    character: any | null
}



const Character: NextPage<characterProps> = ({character}) => {
  return (
    <CharacterCard character={character}/>
  )
}

export default Character