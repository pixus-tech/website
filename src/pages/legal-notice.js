import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TermsPage = () => (
    <Layout>
        <SEO title="Legal Notice"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Legal Notice</h1>
                </div>
                <p>Information in accordance with Section 5 TMG</p>

                <p>
                  Tom König
                  <br />
                  Hans-Zöller-Str. 24e
                  <br />
                  55130 Mainz
                  <br />
                  Deutschland
                </p>

                <h3><strong>Contact Information</strong></h3>
                <p>E-Mail: support@pixus.tech</p>

                <h3><strong>VAT number</strong></h3>
                <p>VAT indentification number in accorance with Section 27 a of the German VAT act</p>
                <p>DE271448751</p>

                <h3><strong>Disclaimer</strong></h3>

                <p><strong>Accountability for content</strong></p>
                <p>The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).</p>

                <p><strong>Accountability for links</strong></p>
                <p>Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.</p>

                <p><strong>Copyright</strong></p>
                <p>Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.</p>
            </div>
        </div>
    </Layout>
)

export default TermsPage
