import { ReactNode } from "react"
import './helpers.css'

interface RowProps {
    children: ReactNode;
}

export default function Row(props: RowProps) {
    return (
        <div className="row">
            {props.children}
        </div>
    )
}