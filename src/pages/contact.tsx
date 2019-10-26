import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className={'container'}>
        <div className={'content'}>
          <div className={'title'}>
            <h1>Contact</h1>
          </div>

          <div className={'row'}>
            <div className={'col-7'}>
              <p>
                If you need our help with your user account, have questions
                about how to use the pixus, any feedback or are experiencing
                technical difficulties, please do not hesitate to contact us.
              </p>
            </div>

            <div className={'col-5'}>
              <div className={'contact-items'}>
                <p>E-mail is the best way to contact us.</p>
                <h2>support@pixus.tech</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
