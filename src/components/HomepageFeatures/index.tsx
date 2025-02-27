import clsx from 'clsx';
import styles from './styles.module.css';

import OutwardArrowIcon from '@site/static/img/icons/outward_arrow.svg'
import InfoIcon from '@site/static/img/icons/info.svg'
import CodeIcon from '@site/static/img/icons/code.svg'
import OpenBookIcon from '@site/static/img/icons/open_book.svg'


type FeatureItem = {
  title: string;
  Icon: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  slug: string;
  disabled: boolean;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'What is Bridgesplit',
    Icon: InfoIcon,
    description: (
      <>
        Learn about the core concepts of the Bridgesplit Protocol, Bridgesplit Markets, the Creditbook, and more.
      </>
    ),
    slug: "/docs/concepts/overview",
    disabled: false
  },
  {
    title: 'User Guides',
    Icon: OpenBookIcon,
    description: (
      <>
        Learn how to get started borrowing and lending on Bridgesplit with easy-to-follow user guides.
      </>
    ),
    slug: "/docs/user-guides",
    disabled: true

  },
  {
    title: 'Bridgesplit Protocol',
    Icon: CodeIcon,
    description: (
      <>
        Learn about the artchitecture of the Bridgesplit Protocol smart contracts through guided examples.
      </>
    ),
    slug: "/docs/protocol",
    disabled: true

  },
];
function ComingSoonTag() {
  return <div className={clsx(styles.tag)}><p>Coming Soon</p></div>
}

function Feature({ title, Icon, description, slug, disabled }: FeatureItem) {
  return (
    <div className={clsx('col col--4 ')}>
      <a target="_self" href={slug} className={clsx(styles.linkedCard)}>

        <div className={clsx('card', disabled ? 'disabled' : '')}>
          <div className={clsx('card__body')}>
            <div className={clsx(styles.cardIconRow)}>
              <Icon role="img" />
              {disabled ? <ComingSoonTag /> : <OutwardArrowIcon className={clsx(styles.caption)} role="img" />}
            </div>
            <h3>{title}</h3>
            <p>
              {description}
            </p>
          </div>
        </div >
      </a>
    </div >
  )
};
export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features} >
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

      </div>
    </section >
  );
}
