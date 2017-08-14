import { connect } from 'react-redux'
import { RootState } from 'store'
import GroupApp, { OwnProps } from 'components/group/group-app'
import Group from 'types/group'

export interface StateProps {
  groups: Group[],
}

interface AntiStateProps {
  groups? : Group[],
  store? : any,
}

const mapStateToProps = (state: RootState): StateProps => {
  return ({
    groups: state.group.data,
  })
}

const GroupAppContainer = connect<StateProps, {}, OwnProps|AntiStateProps>(mapStateToProps, {})(GroupApp)

export default GroupAppContainer
