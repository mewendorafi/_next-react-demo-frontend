//! Check the README.md !

import UseStateHook from '../components/hooks/useStateHook.js'
import UseEffectHook from '../components/hooks/UseEffectHook.js'

import ParentComponent from '../components/inverseDataFlow/ParentComponent.js'

import ArrayState from '../components/hooks/complexState/ArrayState.js'
import ObjectState from '../components/hooks/complexState/ObjectState.js'

import DisplayFromReduxStore from '../components/redux/DisplayFromStore.js'
import SendToReduxStore from '../components/redux/SendToStore.js'

//! Return the component you need to display !
/* Returning multiple components at once here, besides SendToReduxStore & DisplayFromReduxStore,
hasn't been handled and will cause weird styling */
export default function Components() {
	return (
		<>
			<UseStateHook/>
		</>
	)
}
