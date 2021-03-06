import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__pulse'>{category}</h3>
      {loading && <p className='animate__animated animate__rubberBand'>Loading</p>}
      <div className='card-grid'>
        {
          gifs.map((gif) => (
            <GifGridItem {...gif} key={gif.id} />
          )
          )}

      </div>
    </>

  )
}
