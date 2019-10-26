import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import featureImage from 'images/hero.png'
import thumbnailOrganize from 'images/pluto/pluto-artist-workspace.png'
import thumbnailData from 'images/pluto/virtual-reality.png'
import thumbnailEncryption from 'images/pluto/information-security-1.png'
import thumbnailAI from 'images/pluto/robots-drones-artificial-intelligence-1.png'
import thumbnailPerformance from 'images/pluto/pluto-success-1.png'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Reclaim your photo library" />

      <div className={'page-header home'}>
        <h1>Reclaim your photo library</h1>
        <p>
          Pixus empowers you to organize, explore and share your end-to-end
          encrypted photos. With Pixus, you choose where your encrypted data is
          stored.
        </p>
        <img alt={'Dashboard'} src={featureImage} />
      </div>

      <div className={'container'}>
        <div className={'features'}>
          <div className={'feature__item'}>
            <div className={'row'}>
              <div className={'col-6 first'}>
                <div className={'thumbnail'}>
                  <img alt={'Organize and share'} src={thumbnailOrganize} />
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
                  <img alt={'Your data'} src={thumbnailData} />
                </div>
              </div>
            </div>
          </div>

          <div className={'feature__item'}>
            <div className={'row'}>
              <div className={'col-6 first'}>
                <div className={'thumbnail'}>
                  <img
                    alt={'End-to-end encryption'}
                    src={thumbnailEncryption}
                  />
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
                  <img alt={'Performance'} src={thumbnailPerformance} />
                </div>
              </div>
            </div>
          </div>

          <div className={'feature__item'}>
            <div className={'row'}>
              <div className={'col-6 first'}>
                <div className={'thumbnail'}>
                  <img alt={'Artificial intelligence'} src={thumbnailAI} />
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
