import { Box, Stack } from "@mui/material";
import { FC } from "react";
import { NewsCard } from "./components/NewsCard";
import { useGetNews } from "../../../../modules/news/query";

export const MainNews:FC = () => {
    const data = useGetNews()
    console.log(data.data)
    const arr: JSX.Element[] = []
    for (let i = 0; i < 20; i++) {
        arr.push(<NewsCard key={i}/>)
    }
    return (
        <Box>
            <Stack direction='row' padding='1rem' justifyContent='space-between' gap='1rem' flexWrap='wrap'>
                {arr.map((value) => value)}
            </Stack>
            
        </Box>
    )
}