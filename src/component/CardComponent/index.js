import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card, Col, Row } from 'antd';
import { cardData } from '../data/cardData'

const { Meta } = Card;
const CardComponent = () => {
	React.useEffect(() => {
		console.log("cardData", cardData)

	})
	return (
		<div className="site-card-wrapper">

			<Row gutter={[0, 0]} >
				{cardData?.map((item, index) =>
					<Col span={3.9} key={index} className="col">
						<Card cover={item.title}>
							<Meta title={item.content} description={item.subTitle} />
						</Card>
					</Col>
				)}
			</Row>
		</div>
	)
}

export default CardComponent
