import { ReactNode } from "react"

interface BoxProps {
    children: ReactNode;
    justify?: string;
    align?: string;
    padding?: string;
    className?: string;
    width?: string;
}

export default function Box(props: BoxProps) {
    return (
        <div 
        className={props.className ? props.className : ''}
        style={{ 
            width: props.width ? props.width : 'inherit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: props.justify ? props.justify : 'initial',  
            alignItems: props.align ? props.align : 'initial',
            padding: props.padding ? props.padding : '0'
        }}>
            {props.children}
        </div>
    )
}