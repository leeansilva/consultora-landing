import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Universe() {
    return (
        <Box as='div' pointerEvents={'none'} className="sketchfab-embed-wrapper" pos={'fixed'} w={'100%'} h={'100svh'} zIndex={0} top={0} opacity={0.3} transition={'all 3s lineal'}>
            <iframe
                title="Need some space?"
                frameborder="0"
                allowfullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                width="100%" height="100%"
                src="https://sketchfab.com/models/d6521362b37b48e3a82bce4911409303/embed?autospin=0.05&autostart=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark&dnt=0">
            </iframe>
        </Box>
    )
}
