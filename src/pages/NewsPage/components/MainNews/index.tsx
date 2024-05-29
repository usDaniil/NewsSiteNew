import { Box, Stack } from '@mui/material'

import { LoaderWrapper } from 'common/components/LoaderWrapper'
import { newsFilter } from 'modules/news/helper'
import { useNewsStore } from 'modules/news/store'
import { NewsCard } from 'modules/news/ui/NewsCard'
import { useMemo, type FC } from 'react'

export const MainNews: FC = () => {
  const { news, searchLine } = useNewsStore()
  const filteredNews = useMemo(() => newsFilter(news ?? [], searchLine ?? ''), [news, searchLine])
  return (
    <LoaderWrapper isLoading={false}>
      <Box>
        <Stack
          direction="row"
          padding="1rem"
          justifyContent="space-between"
          gap="1rem"
          flexWrap="wrap"
        >
          {filteredNews?.map((value) => (
            <NewsCard
              description={value.text}
              title={value.header}
              author={value.user.login}
              date={value.createdAt}
              imagePath={value.imagePath}
              userId={value.user.id}
              id={value.id}
            />
          ))}
        </Stack>
      </Box>
    </LoaderWrapper>
  )
}
