import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import darkLogo from "../../static/images/wbm.svg"
import brightLogo from "../../static/images/wbm--bright.svg"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"pixus"}>
                        <img alt="pixus logo" src={darkLogo} className="darkLogo" />
                        <img alt="pixus logo" src={brightLogo} className="brightLogo" />
                    </Link>
                </div>

                <div className={"get-started"}>
                  <a href={"https://app.histaff.io"}>
                    Get Started
                  </a>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
