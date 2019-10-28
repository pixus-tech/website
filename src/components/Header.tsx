import { Link } from 'gatsby'
import React from 'react'
import DarkLogo from 'images/wbm.svg'
import BrightLogo from 'images/wbm--bright.svg'

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
              <DarkLogo className="darkLogo" />
              <BrightLogo className="brightLogo" />
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
