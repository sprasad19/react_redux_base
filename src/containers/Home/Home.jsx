import React from 'react'
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

export const Home = (props) => {
    return (
        <div>
            <Helmet>
                <title>{"Home"}</title>
                <meta name="description" content="Description of Home" />
            </Helmet>
            <div class="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            s
                        </div>
                    </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({});
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
