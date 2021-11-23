import Vue from 'vue'
import Vuex from 'vuex'
import { IAppState } from './modules/app'
import { IUserState } from './modules/user'
import { IDeviceState } from '@/store/modules/devices'
import { ModalState } from '@/store/modules/modal'

Vue.use(Vuex)

export interface IRootState {
  app: IAppState
  user: IUserState
  device: IDeviceState
  modal: ModalState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})