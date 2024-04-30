import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Image } from '@mui/icons-material'
import { TopPanel } from "../../common/components/TopPanel";

export const PostPage:FC = () => {

    return (<>
        <TopPanel />
        <Box height="100vh" gap="1rem" flexDirection="column" style={{backgroundColor: 'white', padding: '1rem', color: 'black' }} display="flex" >
            <Box display="flex" width="100%" alignItems="center" justifyContent="center">
            <Typography fontWeight="bold" style={{alignItems: 'center'}} variant="h3" color='black'>Lizard</Typography>
            </Box>
            <Box display="flex" alignItems="start">
                <Box display="flex" flexDirection="column">
                <Image style={{ width: '400px', height: '400px', display: 'block' }} />
                <Box display="flex" justifyContent="space-evenly">
                    <Typography>{`Дата: 20.03.2022`}</Typography>
                    <Typography>{`Создал: User`}</Typography>
                </Box>
                </Box>
            </Box>
            <Typography>Также как внедрение современных методик представляет собой интересный эксперимент проверки поэтапного и последовательного развития общества. И нет сомнений, что диаграммы связей, вне зависимости от их уровня, должны быть своевременно верифицированы. А ещё базовые сценарии поведения пользователей, превозмогая сложившуюся непростую экономическую ситуацию, обнародованы. Также как высококачественный прототип будущего проекта однозначно определяет каждого участника как способного принимать собственные решения касаемо стандартных подходов. Ясность нашей позиции очевидна: сложившаяся структура организации создаёт предпосылки для поэтапного и последовательного развития общества. В частности, курс на социально-ориентированный национальный проект не оставляет шанса для позиций, занимаемых участниками в отношении поставленных задач. Мы вынуждены отталкиваться от того, что высокое качество позиционных исследований является качественно новой ступенью распределения внутренних резервов и ресурсов. В рамках спецификации современных стандартов, предприниматели в сети интернет могут быть в равной степени предоставлены сами себе. Таким образом, реализация намеченных плановых заданий создаёт предпосылки для инновационных методов управления процессами. Картельные сговоры не допускают ситуации, при которой акционеры крупнейших компаний функционально разнесены на независимые элементы. В рамках спецификации современных стандартов, независимые государства, вне зависимости от их уровня, должны быть заблокированы в рамках своих собственных рациональных ограничений. Мы вынуждены отталкиваться от того, что синтетическое тестирование играет важную роль в формировании новых принципов формирования материально-технической и кадровой базы. С учётом сложившейся международной обстановки, выбранный нами инновационный путь выявляет срочную потребность поэтапного и последовательного развития общества. Учитывая ключевые сценарии поведения, постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании как самодостаточных, так и внешне зависимых концептуальных решений. Приятно, граждане, наблюдать, как ключевые особенности структуры проекта, инициированные исключительно синтетически, объявлены нарушающими общечеловеческие нормы этики и морали.</Typography>
        </Box>
        </>
    )
}