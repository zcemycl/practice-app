import React,{useState} from 'react'
import {Grid,Card,CardMedia} from '@material-ui/core';
import {useSpring,config,animated as a} from 'react-spring'
import cardStyles from './Card.module.scss'

const SpringCard = ({src,title,content,reverse=-1}) => {
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    const props_ = useSpring({
        to: {x:0},from: {x:reverse*500},
    })

    const props_text = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: config.molasses,})
    return (
    <Grid xs={12} item={true} >
    <a.div style={props_}>
    <Card className={cardStyles.card}
        onClick={() => set((state) => !state)}>

        <a.div className={`${cardStyles.cardSide} ${cardStyles.cardSideFront}`}
            style={{opacity: opacity.to((o) => 1 - o), transform }}>
            <CardMedia component="img" image={src} title={title}/> 
        </a.div>
        <a.div className={`${cardStyles.cardSide} ${cardStyles.cardSideBack}`}
            style={{opacity,transform: transform.to((t) => `${t} rotateX(180deg)`)}}>
            <a.h1 style={props_text}>{title}</a.h1>
            <a.h4 style={props_text}>{content}</a.h4>
        </a.div>

    </Card>
    </a.div>
    </Grid>
    )
}

export default SpringCard
