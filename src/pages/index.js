import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.png";
import thumbnailEvent from "../../static/images/pluto/pluto-artist-workspace.png"
import thumbnailBoard from "../../static/images/pluto/virtual-reality.png"
import thumbnailNews from "../../static/images/pluto/information-security-1.png"
import thumbnailTeams from "../../static/images/pluto/pluto-done-1.png"
import thumbnailStaff from "../../static/images/pluto/robots-drones-artificial-intelligence-1.png"
import thumbnailPerformance from "../../static/images/pluto/pluto-success-1.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Reclaim your photo library"/>

        <div className={"page-header home"}>
            <h1>Reclaim your photo library</h1>
            <p>Pixus empowers you to organize, explore and share your end-to-end encrypted photos. With Pixus, you choose where your encrypted data is stored.</p>
            <img alt={"Dashboard"} src={featureImage}/>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Organize and share</h2>
                                <p>Create albums, upload photos and invite others to share end-to-end encrypted photos.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Your storage, your data</h2>
                                <p>Pixus uses Blockstack for authentication and Gaia, a decentral storage engine, for enabling you to store your encrypted data in the storage of your choice.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>End-to-end encryption</h2>
                                <p>Pixus encrypts photos before they leave your device. In case you want to collaborate on an album, a key is used that is only known to the participants of that album.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>High performance</h2>
                                <p>Efficient virtualization and concurrency mechanisms are employed to provide high performane. Pixus can handle libraries with thousands of photos.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Performance"} src={thumbnailPerformance}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Users"} src={thumbnailStaff}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>AI. On your machine.</h2>
                                <p>Pixus leverages latest AI research for analyzing your photos on your machine. and makes them explorable through smart albums and a powerful search engine. Entirely on you device.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Stay informed</h2>
                                <p>Invites to or updates in shared albums are pushed to your app.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Team"} src={thumbnailTeams}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Start now. It's free.</h2>
                    <p>Sign up with Blockstack and start reclaiming your photo library today.</p>
                </div>

                <div className={"get-started"}>
                    <a href="https://app.histaff.io" target={"_blank"}>
                      Get Started
                    </a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
