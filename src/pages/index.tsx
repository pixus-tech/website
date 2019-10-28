import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import HeroBackground from 'images/hero.svg'
import HeroImage from 'images/hero.png'
import ThumbnailOrganize from 'images/pluto/pluto-artist-workspace.svg'
import ThumbnailData from 'images/pluto/virtual-reality.svg'
import ThumbnailEncryption from 'images/pluto/information-security-1.svg'
import ThumbnailAI from 'images/pluto/robots-drones-artificial-intelligence-1.svg'
import ThumbnailPerformance from 'images/pluto/pluto-success-1.svg'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Reclaim your photo library" />

      <div className={'page-header home'}>
        <h1>Reclaim your photo library</h1>
        <p>
          Pixus empowers you to organize, explore and share your end-to-end
          encrypted photos. With Pixus, you choose where your data is stored.
        </p>
        <div className={'hero'}>
          <div className={'hero-content'}>
            <HeroBackground />
            <div className={'hero-screenshot-wrapper'}>
              <img className={'hero-screenshot'} src={HeroImage} />
            </div>
          </div>
        </div>
      </div>

      <div className={'container'}>
        <div className={'features'}>
          <div className={'feature__item'}>
            <div className={'row'}>
              <div className={'col-6 first'}>
                <div className={'thumbnail'}>
                  <ThumbnailOrganize />
                </div>
              </div>

              <div className={'col-6'}>
                <div className={'feature__content'}>
                  <h2>Organize and share</h2>
                  <p>
                    Create albums, upload photos and invite others to share
                    end-to-end encrypted photos. You receive notifications when
                    albums change or you are invited to a new one.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={'feature__item'}>
            <div className={'row'}>
              <div className={'col-6'}>
                <div className={'feature__content'}>
                  <h2>Your storage, your data</h2>
                  <p>
                    Pixus uses a decentral storage engine <i>Blockstack Gaia</i>{' '}
                    that allows you to decide where your encrypted data is
                    stored. <i>Blockstack Gaia</i> comes with 10GB of storage
                    free of charge.
                  </p>
                </div>
              </div>

              <div className={'col-6 first'}>
                <div className={'thumbnail'}>
                  <ThumbnailData />
                </div>
              </div>
            </div>
          </div>

          <div className={'feature__item'}>
            <div className={'row'}>
              <div className={'col-6 first'}>
                <div className={'thumbnail'}>
                  <ThumbnailEncryption />
                </div>
              </div>

              <div className={'col-6'}>
                <div className={'feature__content'}>
                  <h2>End-to-end encryption</h2>
                  <p>
                    Pixus encrypts photos before they leave your device. In case
                    you want to collaborate on an album, a key is used that is
                    only known to the participants of that album.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={'feature__item'}>
            <div className={'row'}>
              <div className={'col-6'}>
                <div className={'feature__content'}>
                  <h2>High performance</h2>
                  <p>
                    Efficient virtualization and concurrency mechanisms are
                    employed to provide high performane. Pixus can handle
                    libraries with thousands of photos.
                  </p>
                </div>
              </div>

              <div className={'col-6 first'}>
                <div className={'thumbnail'}>
                  <ThumbnailPerformance />
                </div>
              </div>
            </div>
          </div>

          <div className={'feature__item'}>
            <div className={'row'}>
              <div className={'col-6 first'}>
                <div className={'thumbnail'}>
                  <ThumbnailAI />
                </div>
              </div>

              <div className={'col-6'}>
                <div className={'feature__content'}>
                  <h2>AI. On your machine.</h2>
                  <p>
                    Pixus leverages latest AI research for analyzing your photos
                    on your machine. It makes them explorable through smart
                    albums and a powerful search engine. Entirely on your
                    device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={'call-to-action'}>
        <div className={'container'}>
          <div className={'call-to-action__content'}>
            <h2>Start now. It&apos;s free.</h2>
            <p>
              Sign up with Blockstack and start reclaiming your photo library
              today.
            </p>
          </div>

          <div className={'get-started'}>
            <a href="https://app.pixus.tech" target={'_blank'}>
              open pixus
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
