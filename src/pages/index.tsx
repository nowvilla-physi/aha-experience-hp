import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import mv from '../../public/images/main-visual.png';
import appleStoreBadge from '../../public/images/apple-store-badge-black.svg';
import playStoreBadge from '../../public/images/google-play-badge.png';

const Home: React.VFC = () => {
    return (
        <div className={styles.home}>
            <h1>
                <Image src={mv} />
            </h1>
            <h2 className={styles.home__title}><span>アハ体験</span>で脳活してみませんか？？</h2>
            <div className={styles.home__badges}>
                <Link href="https://apps.apple.com/us/app/%E8%84%B3%E3%83%88%E3%83%AC-%E3%82%A2%E3%83%8F%E4%BD%93%E9%A8%93/id1612019703">
                    <a><Image src={appleStoreBadge} width={160} height={80} /></a>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.now.village.aha_experience">
                    <a><Image src={playStoreBadge} width={200} height={88} /></a>
                </Link>
            </div>
            <article>
                <section className={styles.home__section}>
                    <h3 className={styles['home__section-title']}>アハ体験とは...?</h3>
                    <p className={styles['home__section-text']}>アハ体験とはこれまで理解していなかったことが「ひらめき」によって突然理解できた体験のことを指します。</p>
                    <p className={styles['home__section-text']}>アハ体験を行うことで、自分の脳や体に様々な良い効果をもたらすと言われております。</p>
                    <p className={styles['home__section-text']}>例えば、脳の神経細胞が活性化につながるため、脳活ができるとも言えます。</p>
                </section>
                <section className={styles.home__section}>
                    <h3 className={styles['home__section-title']}>このアプリでは...?</h3>
                    <p className={styles['home__section-text']}>このアプリでは、アハ体験を行うことができます。</p>
                    <p className={styles['home__section-text']}>写真のどこかが15秒の間に徐々に変化します。</p>
                    <p className={styles['home__section-text']}>難易度は3段階に分かれており、特に「鬼級編」はかなり難しくなっております。</p>
                    <p className={styles['home__section-text']}>答えが分かった時点で解答を見て答え合わせをしてみましょう(わからなくても答えを見ることは可能です)。</p>
                    <p className={styles['home__section-text']}>答えを見る前にヒントを見ることも可能となっております。</p>
                </section>
                <p className={styles.home__subtitle}>これであなたの脳も若返るかも...!!!</p>
            </article>
        </div>
    );
};

export default Home;
