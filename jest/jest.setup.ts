import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircleNotch,
  faHome,
  faSpinnerThird,
  faUserCircle,
} from '@fortawesome/pro-light-svg-icons'

library.add(faCircleNotch, faHome, faSpinnerThird, faUserCircle)

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}))
