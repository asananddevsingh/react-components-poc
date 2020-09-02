import React from 'react'
import classes from './nodeChart.module.css'
import EditIcon from '@material-ui/icons/Edit'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'

const mockTree = [
  {
    id: 'p1',
    name: 'Firm 1',
    isActive: true,
    children: [
      {
        id: 'pl1',
        isActive: true,
        name: 'Platform 1 with a long long long name long long long name',
        children: [
          {
            id: 'pr1',
            name: 'Product 1 long long long name of the product',
          },
          { id: 'pr2', name: 'Product 2' },
          { id: 'pr3', name: 'Product 3' },
          { id: 'pr4', name: 'Product 4' },
          { id: 'pr5', name: 'Product 5' },
          { id: 'pr6', name: 'Product 6' },
          { id: 'pr7', name: 'Product 7' },
          { id: 'pr8', name: 'Product 8' },
          { id: 'pr9', name: 'Product 9' },
          { id: 'pr10', name: 'Product 10' },
          { id: 'pr11', name: 'Product 11' },
          { id: 'pr12', name: 'Product 12' },
          { id: 'pr13', name: 'Product 13' },
          { id: 'pr14', name: 'Product 14' },
          { id: 'pr15', name: 'Product 15' },
          { id: 'pr16', name: 'Product 16' },
          { id: 'pr17', name: 'Product 17' },
          { id: 'pr18', name: 'Product 18' },
          { id: 'pr19', name: 'Product 19' },
          { id: 'pr20', name: 'Product 20' },
          { id: 'pr21', name: 'Product 21' },
          { id: 'pr22', name: 'Product 22' },
          { id: 'pr23', name: 'Product 23' },
          { id: 'pr24', name: 'Product 24' },
          { id: 'pr25', name: 'Product 25' },
          { id: 'pr26', name: 'Product 26' },
          { id: 'pr27', name: 'Product 27' },
          { id: 'pr28', name: 'Product 28' },
          { id: 'pr29', name: 'Product 29' },
          { id: 'pr30', name: 'Product 30' },
        ],
      },
    ],
  },
  // {
  //   id: 'f2',
  //   name: 'Firm 2',
  //   children: [
  //     {
  //       id: 'pl2',
  //       name: 'Platform 2',
  //       children: [
  //         { id: 'pr1', name: 'Product 1' },
  //         { id: 'pr2', name: 'Product 2' },
  //         { id: 'pr3', name: 'Product 3' },
  //         { id: 'pr4', name: 'Product 4' },
  //       ],
  //     },
  //   ],
  // },
]

const NodeChart = () => {
  const {
    nodeWrapper,
    column,
    nodeContainer,
    leftBridge,
    activeNode,
    rightBridge,
    nodeSection,
  } = classes

  const addNewNode = (props: any) => {
    const { label, onClick } = props
    return (
      <div className={nodeContainer}>
        {<div className={leftBridge} />}
        <div className={classes.newNode} onClick={onClick}>
          <div className={classes.label}>{label}</div>
          <div className={classes.controls}>
            <AddOutlinedIcon className={classes.plus} />
          </div>
        </div>
      </div>
    )
  }

  const renderNode = (node: any) => {
    return (
      <div className={nodeContainer} key={node.id}>
        {<div className={leftBridge} />}
        <div className={`${nodeSection} ${node.isActive ? activeNode : ''}`}>
          <div className={classes.nodeName}>{node.name}</div>
          <div className={classes.controls}>
            <span className={classes.verticalDots} />
            <EditIcon className={classes.edit} />
            <span className={`${classes.count} ${classes.recomended}`}>99</span>
          </div>
        </div>
        {<div className={rightBridge} />}
      </div>
    )
  }

  const columns: any[] = []
  const transformTreeData = (treeData: any[any], index = 0) => {
    treeData.map((column: any) => {
      if (!columns[index]) {
        columns[index] = [column]
      } else {
        columns[index].push(column)
      }

      if (column.children) {
        transformTreeData(column.children, index + 1)
      }
    })
    return columns
  }

  const handleAddNewFirm = () => {
    console.log('Add New Firm')
  }

  const handleAddNewPlatform = () => {
    console.log('Add New Platform')
  }

  const handleAddNewProduct = () => {
    console.log('Add New Product')
  }

  const ADD_NEW_LABELS = [
    { label: 'Add New Firm', onClick: handleAddNewFirm },
    { label: 'Add New Platform/Recmnd List', onClick: handleAddNewPlatform },
    { label: 'Add New Product', onClick: handleAddNewProduct },
  ]

  const renderTree = () => {
    const treeMap = transformTreeData(mockTree)
    return (
      treeMap &&
      treeMap.map((columnData: any, index) => {
        // columnData.push(addNewNode(ADD_NEW_LABELS[index]))
        return (
          <div className={column} key={`column${index}`}>
            {columnData &&
              columnData.map((node: any, childIndex: number) => {
                // if (columnData.length === childIndex + 1) {
                //   // return node
                // } else {
                return renderNode(node)
                // }
              })}
          </div>
        )
      })
    )
  }

  return (
    <div>
      <h1>Node Chart</h1>
      <div className={nodeWrapper}>{renderTree()}</div>
    </div>
  )
}

export default React.memo(NodeChart)
