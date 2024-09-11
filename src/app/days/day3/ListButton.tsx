import { Badge, Box, Typography } from "@mui/material";
import styles from './page.module.css'
import { ChevronRight, Person2 } from "@mui/icons-material";
import { ReactNode } from "react";

interface ListButtonProps {
    icon: ReactNode;
    buttonText: string;
    badgeAmount?: number;
}

export default function ListButton(props: ListButtonProps) {
    return (
        <Box className={styles.buttonItem} display="flex" alignItems="center" justifyContent="space-between">
            <Box alignItems="center" padding="10px" display="flex">
                <Box display="flex" alignItems="center" justifyContent="center" sx={{ borderRadius: '5px', backgroundColor: '#e5e8f9', height:"35px", width: "35px" }}>
                    <Badge badgeContent={props.badgeAmount} color="error">
                        {props.icon}
                    </Badge>
                </Box>
                <Typography marginLeft="20px" fontWeight="700">{props.buttonText}</Typography>
            </Box>
            <Box>
                <ChevronRight/>
            </Box>
        </Box>
    )
}