import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './UserNav.scss'

export interface UserNavProps {
  dashboardUrl?: string
  isAuthenticated?: boolean
  currentPathname?: string
  profileUrl?: string
  signinUrl?: string
  signout?: () => void
}

export const UserNav = (props: UserNavProps) => {
  let {
    currentPathname,
    dashboardUrl = '/dashboard',
    isAuthenticated = false,
    profileUrl = '/profile',
    signinUrl = 'sign-in',
    signout = () => {},
  } = props

  return (
    <div className="user-nav">
      {isAuthenticated && (
        <nav>
          <ul className="user-nav__list">
            <li className="user-nav__list-item">
              <a href={dashboardUrl} className="user-nav__link">
                <FontAwesomeIcon icon={['fal', 'home']} className="fa-lg" />
              </a>
            </li>
            <li className="user-nav__list-item">
              <a href={profileUrl} className="user-nav__link">
                <FontAwesomeIcon
                  icon={['fal', 'user-circle']}
                  className="fa-lg"
                />
              </a>
            </li>
            <li className="user-nav__list-item">
              <a href="/" onClick={() => signout()} className="user-nav__link">
                Sign out
              </a>
            </li>
          </ul>
        </nav>
      )}

      {!isAuthenticated && currentPathname !== signinUrl && (
        <a href={signinUrl} className="user-nav__link">
          Sign in
        </a>
      )}
    </div>
  )
}
