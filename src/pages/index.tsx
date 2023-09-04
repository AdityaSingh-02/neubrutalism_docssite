import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useColorMode } from '@docusaurus/theme-common';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{"A Very  Good Project - By Deepraj Baidya"}</p>
        <HomepageCTA />
        <HomepageHeroImage />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={`The official documentation site for Neubrutalism Docs. ${siteConfig.tagline}.`}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

function HomepageCTA() {
  return (
    <div className={styles.width}>
      <Link className="button button--primary button--lg" to="https://github.com/deepraj02/neubrutalism_ui/blob/master/README.md">
        Get Started
      </Link>
    </div>
  );
}

function HomepageHeroImage() {
  return (
    <img
      className={clsx(styles.heroImage)}
      src={'img/neu.png'}
      alt="Hero"
      width="720"
    />
  );
}

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'What is Neubrutalism?',
    Svg: require('@site/static/img/pillar1.svg').default,
    description: (
      <>
        Neubrutalism UI design is a popular style that has emerged in recent
        years, characterized by its use of simple, functional elements and a
        stripped-down aesthetic. It's an evolution of the Brutalist design
        movement that emerged in the 1950s, but with a more refined and
        contemporary feel. Neubrutalism emphasizes minimalism, functionality,
        and the use of raw materials like concrete and steel. It's a design
        philosophy that has been embraced by many designers and is particularly
        popular in the tech industry.
      </>
    ),
  },
  {
    title: 'NeuBrutalism for Flutter',
    Svg: require('@site/static/img/pillar2.svg').default,
    description: (
      <>
        "Neubrutalism UI is a comprehensive UI kit for Flutter that incorporates
        the principles of Neubrutalism design. With this package, you can easily
        add beautiful and functional UI components to your Flutter app in a
        style that emphasizes simplicity and minimalism. The package includes a
        variety of UI components such as buttons, a Search Bar, a Container, and
        more, each designed with a subtle shadow and rounded corners that add
        depth and texture to your app. You can customize the appearance of each
        component to fit the specific needs of your app, including changing the
        border radius, depth, color etc.
      </>
    ),
  },
  {
    title: 'Neubrutalism Web',
    Svg: require('@site/static/img/pillar3.svg').default,
    description: (
      <>
        Tempor orci dapibus ultrices in iaculis nunc sed augue. Convallis tellus
        id interdum velit laoreet id donec ultrices tincidunt.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
