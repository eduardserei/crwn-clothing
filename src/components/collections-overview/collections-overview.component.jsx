import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import './collections-overview.styles.scss';

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../preview-collection/preview-collection.component";

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...otherSectionProps }) => (
                <CollectionPreview key={id} {...otherSectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);