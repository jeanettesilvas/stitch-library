import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUserCircle } from '@fortawesome/pro-light-svg-icons'

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
  faHome,
  faUserCircle,
)
