import { Box } from "@mui/material"
import { REQ_ACCOUNT_HOME_DATA } from "../../managers/AccounHomeManager"
import {  CardItem } from "./CardItem"

const CreditCards = () => {
	const [accountHomeData] = REQ_ACCOUNT_HOME_DATA.useRequest()
	//@ts-ignore
	const cardsList = accountHomeData?.["prepaid-cards"]?.cards

	return (
		<Box>
			{cardsList?.map((card: any) => (
				<CardItem cardDetails={card} />
			))}
		</Box>
	)
}

export default CreditCards
