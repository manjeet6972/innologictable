import React from 'react'
import {   Table } from 'antd';
import data from '../data/MOCK_DATA.json'
import {columns} from '../data/Column' 
 

const TabContent = () => {
	React.useEffect(() => {
		console.log("data",data)
		console.log("columns",columns)
	})
	return (
		<div>
		<Table columns={columns} dataSource={data} />
		</div>
	)
}

export default TabContent
