import React from 'react'
import { useFetchGifs } from '../hooks/useFectchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);
    return (
        <>
            <h3 className="card animate__animated animate__fadeInDown">{category}</h3>

            <div className="card-grid">

                {loading && <p className="card animate__animated animate__flash">Loading....</p>}
                {images.map(img => (
                    <GifGridItem key={img.id}
                        {...img} />
                ))
                }
            </div>
        </>
    )
}
