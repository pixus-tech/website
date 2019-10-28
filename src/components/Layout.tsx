import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import 'typeface-bitter'
import 'typeface-source-sans-pro'

import Header from './Header'
import 'styles/main.scss'
import Logo from 'images/wbm--bright.svg'
import IconTwitter from 'images/icon-twitter.svg'
import IconGitHub from 'images/icon-github.svg'

interface IProps {
  children: React.ReactNode
}

function Layout({ children }: IProps) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer>
            <div className={'container'}>
              <div className={'row'}>
                <div className={'col-5'}>
                  <div className={'widget__item'}>
                    <div className={'logo footer__logo'}>
                      <Link to="/" title={'pixus'}>
                        <Logo />
                      </Link>
                    </div>

                    <div className={'about'}>
                      <p>
                        A software to help you reclaiming the sovereignty over
                        your photo library and empower you to collaborate on it
                        securely.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={'col-2'}>
                  <div className={'widget__item'}>
                    <ul className={'links'}>
                      <h4>pixus</h4>
                      <ul>
                        <li>
                          <Link to="/contact" title={'Contact Us'}>
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>

                <div className={'col-2'}>
                  <div className={'widget__item'}>
                    <div className={'links'}>
                      <h4>Support</h4>
                      <ul>
                        <li>
                          <Link to="/privacy-policy" title={'Privacy Policy'}>
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link to="/legal-notice" title={'Legal Notice'}>
                            Legal Notice
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={'col-3'}>
                  <div className={'widget__item'}>
                    <div className={'social'}>
                      <a
                        href="https://twitter.com/tomknig"
                        target={'_blank'}
                        title={'Twitter'}
                      >
                        <IconTwitter />
                      </a>
                      <a
                        href="https://github.com/tomknig"
                        target={'_blank'}
                        title={'GitHub'}
                      >
                        <IconGitHub />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={'copyright'}>
                <p>
                  Copyright {new Date().getFullYear()}, {` `}{' '}
                  <a href="https://pixus.tech" title={'pixus'}>
                    pixus
                  </a>
                  . All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </>
      )}
    />
  )
}

export default Layout
