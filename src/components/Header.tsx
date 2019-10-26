import { Link } from 'gatsby'
import React from 'react'
import darkLogo from 'images/wbm.svg'
import brightLogo from 'images/wbm--bright.svg'

interface IProps {
  siteTitle: string
}

function Header({ siteTitle: _siteTitle }: IProps) {
  return (
    <header>
      <div className={'container'}>
        <div className={'top-menu'}>
          <div className={'logo'}>
            <Link to="/" title={'pixus'}>
              <img alt="pixus logo" src={darkLogo} className="darkLogo" />
              <img alt="pixus logo" src={brightLogo} className="brightLogo" />
            </Link>
          </div>

          <div className={'get-started'}>
            <a href={'https://app.pixus.tech'}>open pixus</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
