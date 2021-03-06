import * as React from 'react'
import createActionButton, { ActionButtonProps } from '../util/link-action-button-creator'
import CommitSvg from './svg/commit'

export default createActionButton({
	children: <CommitSvg/>
})

export {
	ActionButtonProps
}
