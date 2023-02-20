import React, { useState, useRef, useEffect } from 'react';
import { CircleFlagsMx } from './Icon';
import { gsap } from 'gsap';

const ItemNovedades = () => {
    const componenteRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(componenteRef.current, { y: -10, duration: 0.5, ease: "ease.out" })
            .to(componenteRef.current, { y: 0, duration: 1, ease: 'bounce.out' })
    }, [])

    return (
        <div style={{ backgroundColor: "white", width: 150, height: 150,  borderRadius: 150}} ref={componenteRef}>
            <CircleFlagsMx width="100%" height="100%"/>
        </div>
    )
}

export default ItemNovedades