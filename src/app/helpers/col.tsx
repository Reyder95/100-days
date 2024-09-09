import { ReactNode } from 'react';
import './helpers.css'

interface ColProps {
    children?: ReactNode;
    cols?: number;
    justify?: string;
    align?: string;
}

export default function Col(props: ColProps) {
    return (
        <div style={{
            display: 'flex', 
            margin: 3, 
            flexGrow: props.cols ? props.cols : 12 / 12, 
            justifyContent: props.justify ? props.justify : 'initial' , 
            alignContent: props.align ? props.align : 'initial' 
        }} className="col">
            {props.children}
        </div>
    )
}