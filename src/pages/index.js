import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  // edit the homepage header css like the figma one TODO!!!!
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function TextSection() {
  return (
    <div className={styles.textSection}>
      <p className={styles.largeText}>
        Transforming ideas into media marvels, we’re a dedicated agency
        crafting campaigns. With data as our compass, we navigate the media
        landscape, achieving resonance and impact for your brand.
      </p>
    </div>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Xyle Media`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <TextSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
