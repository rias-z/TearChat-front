import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

// logic
import { handlePostMessageToPublic } from '../ColumnPublicMessage/logic'
import { handlePostMessageToPrivate } from '../ColumnPrivateMessage/logic'

const StyledDiv = styled.div`
  height: 20rem
  padding: 0rem 1rem;
  background-color: #708090;
`

const DICE = [
  '1d2', '1d3', '1d4', '1d6', '1d8', '1d10', '1d20', '1d100'
]


class OperationDiceDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      channelValue: 'public',
      diceValue: '1d100'
    }
  }

  handleChangeChannel = (e, index, value) => {
    // this.props.setSelectFkPcId(value)
    console.log(value)

    this.setState({
      channelValue: value,
    })
  }

  handleChangeDice = (e, index, value) => {
    console.log(value)

    this.setState({
      diceValue: value,
    })
  }

  handleThrowDice = (e) => {
    e.preventDefault()
    const { channelValue, diceValue } = this.state
    const { onPostMessageToPublic, onPostMessageToPrivate } = this.props

    const diceTimes = Number(diceValue.split('d')[0])
    const diceSurface = diceValue.split('d')[1]

    let message = ''
    message += (diceValue + ' => ')


    for (let i = 1; i <= diceTimes; i += 1) {
      message += (Math.floor(Math.random() * diceSurface) + 1)

      if (i < diceTimes) {
        message += ', '
      }
    }

    if (channelValue === 'public') {
      onPostMessageToPublic(message)
    } else {
      const channelId = parseInt(channelValue.split('_')[1], 10)
      onPostMessageToPrivate(channelId, message)
    }
  }

  render() {
    const { membersInfo, isKp, selfChannelId } = this.props

    const channelItems = () => {
      const kpChannelItems = membersInfo.map((member) => {
        const channel = 'private_' + member.channelId
        const name = 'To: ' + member.userName

        return (
          <MenuItem key={channel} value={channel} primaryText={name} />
        )
      })

      const memberChannelItems = () => {
        const channel = 'private_' + selfChannelId
        const name = 'To: KP'

        return (
          <MenuItem key={channel} value={channel} primaryText={name} />
        )
      }

      return (
        <div>
          <SelectField
            floatingLabelText='Channels'
            value={this.state.channelValue}
            onChange={this.handleChangeChannel}
            maxHeight={160}
            style={{
              width: '8rem',
            }}
            labelStyle={{
              color: 'white'
            }}
            floatingLabelStyle={{
              color: 'white'
            }}
          >
            <MenuItem value='public' primaryText='public' />
            <Divider />
            {(() => {
              if (isKp) {
                return kpChannelItems
              } else {
                return memberChannelItems()
              }
            })()}
          </SelectField>
        </div>
      )
    }

    const diceItems = () => {
      const dices = DICE.map(dice => {
        return (
          <MenuItem key={dice} value={dice} primaryText={dice} />
        )
      })

      return (
        <div>
          <SelectField
            floatingLabelText='Dices'
            value={this.state.diceValue}
            onChange={this.handleChangeDice}
            maxHeight={160}
            style={{
              width: '8rem',
            }}
            labelStyle={{
              color: 'white'
            }}
            floatingLabelStyle={{
              color: 'white'
            }}
          >
            {dices}
          </SelectField>
        </div>
      )
    }

    return (
      <StyledDiv>
        <h3>ダイス操作</h3>

        {channelItems()}

        {diceItems()}

        <form onSubmit={this.handleThrowDice}>
          <button type='submit'>
            ダイスを振る
          </button>
        </form>
      </StyledDiv>
    )
  }
}

const mapStateToProps = (state) => ({
  membersInfo: state.Session.membersInfo,
  isKp: state.Session.isKp,
  selfChannelId: state.Session.selfChannelId,
})

const mapDispatchToProps = (dispatch) => ({
  onPostMessageToPublic: (content) =>
    dispatch(handlePostMessageToPublic(content)),
  onPostMessageToPrivate: (channelId, content) =>
    dispatch(handlePostMessageToPrivate(channelId, content)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperationDiceDisplay)
