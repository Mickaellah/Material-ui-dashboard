import React from "react";
import { Typography } from "@mui/material";

export default function Text({text}) {
    return (
        <Typography sx={{fontSize: '18px', fontWeight: 500, textTransform: 'uppercase', marginBlockStart: '16px'}}>
            {text}
        </Typography>
    )
} 