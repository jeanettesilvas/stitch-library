import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch, faHome, faSpinnerThird, faUserCircle } from '@fortawesome/pro-light-svg-icons'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

library.add(
  faCircleNotch,
  faHome,
  faSpinnerThird,
  faUserCircle,
)
