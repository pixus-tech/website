import React from "react"

import Layout from "components/Layout"
import SEO from "components/SEO"

function PrivacyPolicy() {
  return (
    <Layout>
      <SEO title="Privacy Policy"/>
      <div className={"container"}>
        <div className={"content"}>
          <div className={"title"}>
            <h1>Privacy Policy</h1>
          </div>

          <p>Effective date: October 31st, 2019</p>

          <p>
            Our primary goals when collecting information is to provide and improve pixus and to enable you to enjoy pixus.
          </p>

          <p>
            In addition, this Privacy Policy contains general information about your rights related to the processing of your data.
          </p>

          <p>
            We will process your data in accordance with the data protection provisions of the Federal Data Protection Act ("BDSG") in the version that took effect on May 25, 2018 and Regulation (EU) 2016/679 (hereinafter the "GDPR").
          </p>

          <p>
            Should you still have questions or concerns after you have read this Data Privacy Policy, please contact us at <a href="mailto:support@pixus.tech">support@pixus.tech</a>.
          </p>

          <h2>Responsibilities and contact details</h2>
          <p>
            The data controller, i.e., the person responsible for processing your personal data is:
          </p>

          <p>
            Tom König
            <br />
            Hans-Zöller-Str. 24e
            <br />
            55130 Mainz, Germany
            <br />
          </p>

          <p>
            Email: <a href="mailto:support@pixus.tech">support@pixus.tech</a>
            <br />
            Website: <a href="https://www.tomkoenig.de">tomkoenig.de</a>
          </p>

          <h2>Cookies</h2>

          <p>
            Pixus does not use cookies.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
