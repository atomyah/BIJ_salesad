import React from "react"
import { Link } from "gatsby"

/* ランディングページ用アニメーションコンポーネント↓ */
import * as FadeIn from "../components/LPanimation/animation"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"

import Img01 from "../images/lp_img_book.png"
import Img02 from "../images/lp_img_p47.png"
import Img03 from "../images/lp_img_p189.png"

import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import styles from "./salesad.module.css"


import Twitter_Logo_Blue from '../images/Twitter_Logo_Blue.svg'
import YouTube_Logo from '../images/youtube-logo.svg'

import { Helmet } from "react-helmet"


const SalesadPage = () => (
  <div>
      <Helmet>
        <html lang="ja" />
        <title>ベンゾ系睡眠薬・抗不安薬の安全な離脱方法 "改訂版"</title>
        <meta name="description" content="ベンゾ系睡眠薬・抗不安薬の安全な離脱方法、アマゾンで販売中" />
      </Helmet>
            <div>
              <section>
                  <div className={styles.main_image}>
                      <h1 className={styles.main_title}>
                        <a href="https://www.amazon.co.jp/gp/product/B09TMTGMPH?&_encoding=UTF8&tag=kokkahasan-22&linkCode=ur2&linkId=d2be4a75d59c557e5612f1e0ca8667e9&camp=247&creative=1211" target="blank" rel="noreferrer noopener">
                        『ベンゾ系睡眠薬・抗不安薬の安全な離脱方法 "改訂版"』発売中
                        </a>
                      </h1>
                      <p className={styles.sub_title}>❝ムチャな減断薬に意味はない❞</p>
                      <div className={styles.pic_down}></div>
                  </div>
              </section>              
              <section className={styles.contents}>
                <div className={styles.inner}>
                  <FadeIn.Right>
                    <img src={Img01} alt="" className={styles.img} />
                    <br /><br />
                    <Button variant="warning" size="lg" block href="https://www.amazon.co.jp/gp/product/B09TMTGMPH?&_encoding=UTF8&tag=kokkahasan-22&linkCode=ur2&linkId=d2be4a75d59c557e5612f1e0ca8667e9&camp=247&creative=1211" target="blank" rel="noreferrer noopener">アマゾンで購入</Button>
                    <br />
                  </FadeIn.Right>
                    <div className={styles.description}>
                      <FadeIn.Left>
                        <h1 className={styles.title}>ベンゾジアゼピン減薬を安全に行う</h1>
                      </FadeIn.Left>
                      <FadeIn.Up>
                        <p className={styles.text}>
                          ベンゾジアゼピン減薬を安全に行うための、<a href="https://benzoinfojapan.org/doctors-article/23" target="_blank" rel="noreferrer noopener">公的機関（米国FDA－食品医薬品局）が指針を定めた大原則</a>があります。
                        </p>
                        <span className={styles.subtext}>
                           「第4章 おもな減薬方法ガイダンス」
                        </span>にて解説
                      </FadeIn.Up>
                    </div>            
                </div>
              </section>
              <section className={styles.contents}>
                <div className={styles.inner}>
                  <FadeIn.Right>
                    <img src={Img02} alt="" className={styles.img} />
                    <br /><br />
                    <Button variant="warning" size="lg" block href="https://www.amazon.co.jp/gp/product/B09TMTGMPH?&_encoding=UTF8&tag=kokkahasan-22&linkCode=ur2&linkId=d2be4a75d59c557e5612f1e0ca8667e9&camp=247&creative=1211" target="blank" rel="noreferrer noopener">アマゾンで購入</Button>
                    <br />                 
                  </FadeIn.Right>
                    <div className={styles.description}>
                      <FadeIn.Left>
                        <h1 className={styles.title}>超長期の服用でも安心して</h1>
                      </FadeIn.Left>
                      <FadeIn.Up>
                        <p className={styles.text}>
                          １０年、２０年服用していても、そのことが問題になるわけではありません。焦って中止したり減らしたりしないように。
                        </p>
                        <span className={styles.subtext}>
                           「第2章 ベンゾジアゼピン依存と離脱症状」
                        </span>にて解説
                      </FadeIn.Up>
                    </div>
                </div>
              </section>
              <section className={styles.contents}>
                <div className={styles.inner}>
                  <FadeIn.Right>
                    <img src={Img03} alt="" className={styles.img} />
                    <br /><br />
                    <Button variant="warning" size="lg" block href="https://www.amazon.co.jp/gp/product/B09TMTGMPH?&_encoding=UTF8&tag=kokkahasan-22&linkCode=ur2&linkId=d2be4a75d59c557e5612f1e0ca8667e9&camp=247&creative=1211" target="blank" rel="noreferrer noopener">アマゾンで購入</Button>
                    <br />                  
                  </FadeIn.Right>
                    <div className={styles.description}>
                      <FadeIn.Left>
                        <h1 className={styles.title}>具体的にどうすれば？</h1>
                      </FadeIn.Left>
                      <FadeIn.Up>
                        <p className={styles.text}>
                          画像付きで減薬手順をくわしく解説しています。他の薬物との相互作用も可能な限り紹介しています。
                        </p>
                        <span className={styles.subtext}>
                           「第6章 減薬実践Ⅱ」
                        </span>にて解説
                      </FadeIn.Up>
                    </div>
                </div>
              </section>
              <section className={styles.contents}>
                <div className={styles.inner}>
                    <FadeIn.Right>
                    <h1 className={styles.title}>アマゾンレビュー紹介</h1>
                    </FadeIn.Right>
                    <div className={styles.description}>
                      <FadeIn.Up>
                        <p className={styles.text}>
                        ●圧倒的な情報量。とにかく薬やめろ的なトンデモ本とは一線を画す内容です。これは当事者本人による医学実用書です。
                        </p>
                        <p className={styles.text}>
                        <span className={styles.subtext}>●医師ですとか、薬剤師、臨床心理士の方に、キンドル版を手渡すことができないのが問題です。良い本だと思いますが、印刷体がほしい。</span>
                        </p>
                        <p className={styles.text}>
                        ●元医療関係者です。この手の本は何冊か読みましたが信頼できる内容はこちらだけでした。
                        </p>
                        <p className={styles.text}>
                        <span className={styles.subtext}>●各ページにQRコードがあるので、参照すべき医学文献や動画が簡単に閲覧できます。</span>
                        </p>
                        <br />
                        <Button variant="warning" size="lg" block href="https://www.amazon.co.jp/gp/product/B09TMTGMPH?&_encoding=UTF8&tag=kokkahasan-22&linkCode=ur2&linkId=d2be4a75d59c557e5612f1e0ca8667e9&camp=247&creative=1211" target="blank" rel="noreferrer noopener">アマゾンで購入</Button>
                        <br />                           
                      </FadeIn.Up>
                    </div>
                </div>
              </section>
              <section className={styles.contents}>
                <div className={styles.inner}>
                    <FadeIn.Right>
                    </FadeIn.Right>
                    <FadeIn.Up>
                    <h1 className={styles.title}>臨床医、研究医、薬剤師、看護師、臨床心理士…
                    先生方のお力が必要です！
                    </h1>
                      <br />
                        <p className={styles.text}>
                        ●A5版、全２８４ページ
                        </p>
                        <p className={styles.text}>
                        ●引用・参考医学文献８０
                        </p>
                        <p className={styles.text}>
                        ●書籍　2,783円（税込み）<br />
                        ●キンドル版 1,260円 (税込み）
                        </p>
                        <p className={styles.text}>
                        ●ベンゾジアゼピン情報センター著 
                        <br />
                        　Webサイト：<a href="https://benzoinfojapan.org" target="blank" rel="noreferrer noopener">🌎ベンゾジアゼピン情報センター</a>
                        <br />
                        　ツイッター：<a href="https://twitter.com/benzoinfojapan" target="_blank" rel="noreferrer noopener"><img src={Twitter_Logo_Blue} width={28} alt={'Twitter'} />ベンゾジアゼピン情報センター</a>
                        <br />
                        　YouTube：<a href="https://www.youtube.com/channel/UCkZs4B_mj2ffOLFWO2TrAbg" target="_blank" rel="noreferrer noopener"><img src={YouTube_Logo} width={32} alt={'YouTube'} />ベンゾ情報センター</a>
                        </p>
                        <br /><br />
                        <Button variant="warning" size="lg" block href="https://www.amazon.co.jp/gp/product/B09TMTGMPH?&_encoding=UTF8&tag=kokkahasan-22&linkCode=ur2&linkId=d2be4a75d59c557e5612f1e0ca8667e9&camp=247&creative=1211" target="blank" rel="noreferrer noopener">アマゾンで購入</Button>
                        <br />                    
                      </FadeIn.Up>

                </div>
              </section>


              <Navbar className="justify-content-center">
                <Nav>
                    <Nav.Item>
                      <div className="box">
                        <a href="https://twitter.com/benzoinfojapan" target="_blank" rel="noreferrer noopener">
                          Twitter
                          <img src={Twitter_Logo_Blue} width={28} alt={'Twitter'} />
                        </a>
                        {`　`}
                      </div>
                    </Nav.Item>
                    <Nav.Item>
                      <div className="box">
                        <a href="https://www.youtube.com/channel/UCkZs4B_mj2ffOLFWO2TrAbg" target="_blank" rel="noreferrer noopener">
                          YouTube{` `}
                          <img src={YouTube_Logo} width={32} alt={'YouTube'} />          
                        </a>
                        {`　`}          
                      </div>
                    </Nav.Item>
                    <Nav.Item>
                      <div className="box">
                      {`　`} 
                        <Link to="/">  
                        ベンゾジアゼピン情報センターWebサイト
                        </Link>       
                      </div>
                    </Nav.Item>
                </Nav>
              </Navbar>       
 
            </div>      
  </div>            
)

export default SalesadPage
    