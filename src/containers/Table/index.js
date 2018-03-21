import React from 'react'
import { connect } from 'react-redux'
import { SortablePane, Pane } from 'react-sortable-pane'

// containers
import ColumnManager from '../ColumnManager'


const Table = ({ ids }) => {
  // ids = ['public', 'private_1', ...]
  const panes = ids.map(id => (
    <Pane
      key={id}
      id={id}
      width={280}
      height='100%'
      minWidth={150}
      isResizable={{ x: true, y: false, xy: false }}
    >
      <ColumnManager id={id} />
    </Pane>
  ))

  return (
    <SortablePane
      disableEffect
      margin={10}
    >
      {panes}
    </SortablePane>
  )
}

const mapStateToProps = (state) => ({
  ids: state.Table.ids,
})

const mapDispatchToProps = () => ({
})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table)
