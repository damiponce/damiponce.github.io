import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
} from 'react-device-detect';
import Masonry from 'react-masonry-css';
import { customLoader, getAllDesigns } from '../components/utils';
import designs from '../public/designs.json';

import styles from '../styles/design.module.css';

export async function getStaticProps() {
    var allDesignsData = getAllDesigns();
    console.log(allDesignsData);
    return {
        props: {
            allDesignsData,
        },
    };
}

export default function Design({ allDesignsData }) {
    return (
        <Layout>
            <Head>
                <title>Design - Damián Ponce</title>
            </Head>

            <div className='big-title'>de•sign</div>
            <div className='big-title-spell'>/dɪˈzʌɪn/ noun</div>
            <div className='definitions'>1. A silly definition</div>

            {Object.entries(designs).map((key) => {
                return (
                    <div className={styles.topic}>
                        <div className={styles.title}>{key[0]}</div>
                        {Object.entries(key[1]).map((key) => {
                            let cols = {};
                            switch (key[1]['cols']) {
                                case 3:
                                    cols = {
                                        default: 3,
                                        1000: 2,
                                        650: 1,
                                    };
                                    break;
                                case 2:
                                    cols = {
                                        default: 2,
                                        800: 1,
                                    };
                                    break;
                                case 1:
                                    cols = {
                                        default: 1,
                                    };
                                    break;
                            }
                            return (
                                <>
                                    <div className={styles.subtitle}>
                                        {key[1]['desc']}
                                    </div>

                                    {/* <h2 className='big-title-spell'>
                                            {key[1]['cols']}
                                        </h2>

                                        <h2 className='big-title-spell'>
                                            {key[1]['pics']}
                                        </h2> */}
                                    <Masonry
                                        breakpointCols={cols}
                                        className='masonry-grid'
                                        columnClassName='masonry-grid_column'
                                    >
                                        {key[1]['pics'].map((key, value) => (
                                            <div
                                                key={key}
                                                className={styles.card}
                                            >
                                                <Image
                                                    className={
                                                        styles.image +
                                                        ' no-touch'
                                                    }
                                                    loader={customLoader}
                                                    src={
                                                        allDesignsData[key]
                                                            .fullPath
                                                    }
                                                    alt={allDesignsData[key].id}
                                                    width={650}
                                                    height={
                                                        650 /
                                                        allDesignsData[key]
                                                            .ratio
                                                    }
                                                    quality={100}
                                                ></Image>
                                            </div>
                                        ))}
                                    </Masonry>
                                </>
                            );
                        })}
                    </div>
                );
            })}
        </Layout>
    );
}

{
    /* <Masonry
    breakpointCols={{ default: 3, 1000: 2, 650: 1 }}
    className='masonry-grid'
    columnClassName='masonry-grid_column'
>
    {allPicturesData.map((pic) => (
        <div key={pic.index} className={styles.card}>
            <Image
                className={styles.image + ' no-touch'}
                loader={customLoader}
                src={pic.fullPath}
                alt={pic.id}
                width={650}
                height={650 / pic.ratio}
                quality={100}
            ></Image>
        </div>
    ))}
</Masonry> */
}