import { ReactNode } from 'react';
import './helpers.css'

interface ColProps {
    children: ReactNode;
}

export default function Col(props: ColProps) {
    return (
        <div className="col">
            {props.children}
        </div>
    )
}