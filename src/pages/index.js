import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Container, Row, Col, Badge, Accordion, Card, Button } from 'react-bootstrap'
import Style from './index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="ベンゾジアゼピン情報センター トップページ"
        description="睡眠薬、抗不安薬であるベンゾジアゼピンは決められた処方用量を守っていてもベンゾジアゼピン離脱の際に重篤な離脱症状を発生する場合があります" 
        image="/twitterimg/icon-144x144.png" 
        lang="ja"
    />
    <Container fluid="md">
      <Row>
        <Col>
          <h1 className={Style.h1Size}>ベンゾジアゼピン（睡眠薬・抗不安薬）情報センター</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/indexeng" alt="benzoinfojapan">
            Benzodiazepine Information Center - Japan (english page)
          </Link>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row>
            <Col>
              <h2 className={Style.h2Size}>新着情報</h2>
                <Row>
                  <Col>
                    <Badge variant="danger">新</Badge>
                    <a href="https://www.amazon.co.jp/gp/product/B0B8BJZ5T6?&_encoding=UTF8&tag=kokkahasan-22&linkCode=ur2&linkId=d2be4a75d59c557e5612f1e0ca8667e9&camp=247&creative=1211" target="blank" rel="noreferrer noopener">
                      書籍『ベンゾ系睡眠薬・抗不安薬の安全な離脱方法 改訂版』アマゾンで販売中
                    </a>
                    <span className={Style.fontSmall}>　A5判284ページ</span>
                    <br />
                    <span className={Style.fontSmall}>
                    患者のみなさま、ご家族、そして医師や薬剤師など医療専門家の方々も読者対象にしております。
                    </span>
                  </Col>
                  <Col>
                    <a href="https://www.amazon.co.jp/gp/product/B0B8BJZ5T6?&_encoding=UTF8&tag=kokkahasan-22&linkCode=ur2&linkId=d2be4a75d59c557e5612f1e0ca8667e9&camp=247&creative=1211" target="blank" rel="noreferrer noopener">
                      <img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B0B8BJZ5T6&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=kokkahasan-22" />
                    </a>
                  </Col> 
                </Row>
                <br />
              {data.allMicrocmsArticles.edges.map(edge => {
                const articles = edge.node
                const category = edge.node.category[0].name

                  return (
                    <React.Fragment key={articles.id}>
                      <div>
                        <Link to={`/${category}-article/${articles.num}`} alt={articles.title}>
                          記事『{articles.title}』
                        </Link>
                          を作成しました
                        <Badge variant="danger">新</Badge>
                      </div>
                      <div>
                        {/* <Badge variant="info">更</Badge> */}
                      </div>
                    </React.Fragment>
                    )
                  }
                )
              }
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className={Style.h2Size}>更新情報</h2>
              <div>
                    <Link to="/doctors-article/1" alt="お問い合わせ">
                    「ドクターのみなさまへ」ページ
                    </Link>
                      を更新しました
                    <Badge variant="info">更</Badge>
                </div>              
                <div>
                    <Link to="/contact" alt="お問い合わせ">
                    お問い合わせ（Contact Form）ページ
                    </Link>
                      を更新しました
                    <Badge variant="info">更</Badge>
                </div>
            {/*
                  <div>
                    <Link to="/patients-article/8" alt="管理人のベンゾ減薬記録">
                    管理人のベンゾ減薬記録
                    </Link>
                      を更新しました
                    <Badge variant="info">更</Badge>
                  </div>
                  <div>
                    <Link to="/patients-article/10" alt="My taper log and history">
                    My taper log and history
                    </Link>
                    {` `}is updated
                    <Badge variant="info">更</Badge>
                  </div>
            */}
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className={Style.h2Size}>ニュースリンク</h2>
              {/*
              <a href="https://medical.jiji.com/topics/1495" alt="睡眠薬の中止で離脱症状" target="_blank" rel="noreferrer noopener">「睡眠薬や抗不安薬の中止で離脱症状」（メディカルトリビューン＝時事）</a>
              */}
              
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <Col>
              <h2 className={Style.h2Size}>動画紹介</h2>
              <div>
                <Badge variant="danger">新</Badge>
                {` `}
                <FontAwesomeIcon icon={faVideo} />
                <a href="https://www.amazon.co.jp/%E3%83%A1%E3%83%87%E3%82%A3%E3%82%B1%E3%82%A4%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%8E%E3%83%BC%E3%83%9E%E3%83%AB-Robert-Whitaker/dp/B0B8RXQ9YV?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=23SMS1UJG0UWP&keywords=%E3%83%A1%E3%83%87%E3%82%A3%E3%82%B1%E3%82%A4%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%8E%E3%83%BC%E3%83%9E%E3%83%AB&qid=1677125852&s=instant-video&sprefix=%E3%83%A1%E3%83%87%E3%82%A3%E3%82%B1%E3%82%A4%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%8E%E3%83%BC%E3%83%9E%E3%83%AB%2Cinstant-video%2C182&sr=1-1&linkCode=ll2&tag=kokkahasan-22&linkId=7a457bfe11a2ecd8a54e5093a040c0b5&language=ja_JP&ref_=as_li_ss_tl" alt="メディケイティングノーマル" target="_blank" rel="noreferrer noopener">
                  ドキュメンタリー映画<br />『<strong>メディケイティングノーマル ～薬害なき処方を～</strong>』（1時間16分）が<strong>アマゾンプライム</strong>で公開されました！
                </a>
                <br />
                <a href="https://www.amazon.co.jp/%E3%83%A1%E3%83%87%E3%82%A3%E3%82%B1%E3%82%A4%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%8E%E3%83%BC%E3%83%9E%E3%83%AB-Robert-Whitaker/dp/B0B8RXQ9YV?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=23SMS1UJG0UWP&keywords=%E3%83%A1%E3%83%87%E3%82%A3%E3%82%B1%E3%82%A4%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%8E%E3%83%BC%E3%83%9E%E3%83%AB&qid=1677125852&s=instant-video&sprefix=%E3%83%A1%E3%83%87%E3%82%A3%E3%82%B1%E3%82%A4%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%8E%E3%83%BC%E3%83%9E%E3%83%AB%2Cinstant-video%2C182&sr=1-1&linkCode=ll2&tag=kokkahasan-22&linkId=7a457bfe11a2ecd8a54e5093a040c0b5&language=ja_JP&ref_=as_li_ss_tl" alt="ベンゾについて医学部でまったく教わらないこと" target="_blank" rel="noreferrer noopener">
                  <Image filename="home_04.png" />
                </a>
                <span className={Style.fontSmall}>製作：<a href="https://medicatingnormal.com/" target="_blank" rel="noreferrer noopener">Medicating Normal Production Team</a>   
                <br />
                日本語字幕翻訳：<a href="https://benzoinfojapan.org/" target="_blank" rel="noreferrer noopener">ベンゾジアゼピン情報センター</a></span>
              </div>
              <br />
              {/*
              <div>
                <FontAwesomeIcon icon={faVideo} />
                <a href="https://youtu.be/MC6Odw0jRj8" alt="ベンゾについて医学部でまったく教わらないこと" target="_blank" rel="noreferrer noopener">
                  心臓病専門医クリスティー・ハーフ医師による<br />『ベンゾについて医学部でまったく教わらないこと』
                </a>
                <br />
                <a href="https://youtu.be/MC6Odw0jRj8" alt="ベンゾについて医学部でまったく教わらないこと" target="_blank" rel="noreferrer noopener">
                  <Image filename="home_06.png" alt="ベンゾについて医学部でまったく教わらないこと" />
                </a>
                <span className={Style.fontSmall}>出典：<a href="https://benzoinfo.com" target="_blank" rel="noreferrer noopener">Benzodiazepine Information Coalition</a>   
                <br />
                字幕・翻訳：<a href="https://benzoinfojapan.org/profile/" target="_blank" rel="noreferrer noopener">ベンゾジアゼピン情報センター</a></span>
              </div>
              <br />
            
              <div>
                <FontAwesomeIcon icon={faVideo} />
                <a href="https://youtu.be/n0P2l4ZSx6U" alt="リサ・リンのこれが人生－ベンゾクライシス" target="_blank" rel="noreferrer noopener">リサ・リンのこれが人生－ベンゾクライシス
                  <br />
                冒頭２分
                </a>
                <br />
                <span className={Style.fontSmall}>2019年10月CNNにて放映</span>
                <a href="https://youtu.be/n0P2l4ZSx6U" alt="リサ・リンのこれが人生－ベンゾクライシス" target="_blank" rel="noreferrer noopener"><Image filename="home_02.png" alt="リサ・リンのこれが人生－ベンゾクライシス" /></a>
                <span className={Style.fontSmall}>出典：<a href="https://edition.cnn.com/profiles/lisa-ling-profile" target="_blank" rel="noreferrer noopener">CNN, A Warner Media Company</a>   
                <br />
                字幕・翻訳：<a href="https://benzoinfojapan.org/profile/" target="_blank" rel="noreferrer noopener">ベンゾジアゼピン情報センター</a></span>
              </div>
              <br />
            */}
              <div>
                <FontAwesomeIcon icon={faVideo} />
                  <a href="https://youtu.be/7ul9kCDTUCw" alt="臨床心理学者ジョーダン・ピーターソンのベンゾ離脱体験" target="_blank" rel="noreferrer noopener">
                    臨床心理学者ジョーダン・ピーターソンのベンゾ離脱体験（8分）
                  </a>
                <br />
                <span className={Style.fontSmall}>2020年2月撮影</span>
                <a href="https://youtu.be/7ul9kCDTUCw" alt="臨床心理学者ジョーダン・ピーターソンのベンゾ離脱体験" target="_blank" rel="noreferrer noopener">
                  <Image filename="home_01.png" alt="ジョーダン・ピーターソン博士" />
                </a>
                <span className={Style.fontSmall}>
                出典：The Mikhaila Peterson Podcast #9
                <br />
                字幕翻訳：ベンゾジアゼピン情報センター
                </span>             
              </div>
              <br />
              <div>
                <FontAwesomeIcon icon={faVideo} />
                  <a href="https://youtu.be/0wyY1ImfmRI" alt="リサ・リンのこれが人生－ベンゾクライシス" target="_blank" rel="noreferrer noopener">
                  「リサ・リンのこれが人生－ベンゾクライシス」出演のクリシー・ティレル氏のベンゾジアゼピン離脱体験（11分）
                  </a>
                <br />
                <a href="https://youtu.be/0wyY1ImfmRI" alt="リサ・リンのこれが人生－ベンゾクライシス" target="_blank" rel="noreferrer noopener"><Image filename="home_05.png" alt="リサ・リンのこれが人生－ベンゾクライシス" /></a>
                <span className={Style.fontSmall}>出典：<a href="https://benzoinfo.com" target="_blank" rel="noreferrer noopener">Benzodiazepine Information Coalition</a>   
                <br />
                字幕・翻訳：<a href="https://benzoinfojapan.org/profile/" target="_blank" rel="noreferrer noopener">ベンゾジアゼピン情報センター</a></span>
              </div>
              <br />
              {/* 
              <div>
                <FontAwesomeIcon icon={faVideo} />
                  <a href="https://youtu.be/0lsbiczKfJY" alt="ベンゾジアゼピン『医療災害』" target="_blank" rel="noreferrer noopener">
                    ベンゾジアゼピン『医療災害』（52分）
                  </a>
                <br />
                <span className={Style.fontSmall}>2017年1月アイルランド国営放送にて放映</span>
                <a href="https://youtu.be/0lsbiczKfJY" alt="ベンゾジアゼピン『医療災害』" target="_blank" rel="noreferrer noopener"><Image filename="home_04.png" alt="ベンゾジアゼピン『医療災害』" /></a>
                <span className={Style.fontSmall}>
                出典：アイルランド放送協会 RTE 1 TV
                <br />
                字幕制作：健康生活研究会有志　監修協力：ベンゾジアゼピン情報センター
                </span>             
              </div>
              */}
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className={Style.h2Size}>その他の動画紹介</h2>
              <div>
              <FontAwesomeIcon icon={faVideo} />
                <a href="https://youtu.be/Xk06U78svGI" alt="臨床薬理学者ジム・ライト博士" target="_blank" rel="noreferrer noopener">臨床薬理学者ジム・ライト博士インタビュー 32分</a>
              </div>
              <div>
                  <FontAwesomeIcon icon={faVideo} />
                  <a href="https://youtu.be/JZN5n4HBrcc" alt="ベンゾ被害者の声" target="_blank" rel="noreferrer noopener">"ベンゾ被害者の声" 9分</a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className={Style.divLineSpace}></div>

            <h2 className={Style.h2Size}>はじめに</h2>
            ベンゾジアゼピン薬とは主に不眠や不安に処方される睡眠薬・抗不安薬のことです。<span className={Style.fontCrimson}><a href="https://benzoinfojapan.org/medias-article/3" target="_blank" rel="noreferrer noopener">日本では約700万人が服用</a></span>し続けており、
            処方用量を守って飲み続けても重篤な依存性を引き起こす場合があります。
            その状態で一気中止／急減薬すると離脱症状が拷問と言っていいほどの苦痛になり、<a href="https://youtu.be/CHv7xnhbSyg" alt="ベンゾ被害者の声" target="_blank" rel="noreferrer noopener">最悪自死に至る</a>こともあります。
            何年服薬していても離脱症状がまったく無いか、あるいは軽度で簡単にやめられる方はたくさんいます。
            しかし<span className={Style.fontCrimson}>重度の身体依存状態かそうでないかを前もって知る方法はありません</span>。
            したがって、<br />
            <br />１．まず、<strong>いきなりやめないように！</strong>。服薬中でも不安になる必要はまったくありません。原疾患が寛解していないなど、投薬が必要な状態にあるなら主治医の処方に従いそのまま服薬を継続してください。
            <br />２．減薬するにあたり<span className={Style.fontCrimson}>離脱症状を発症した場合は、減薬を一時停止するかあるいはベンゾジアゼピンを以前の投与量に上げ</span>、必ず容態が安定してから、再びさらにゆっくりとしたペースで減薬してください
            （<Link to="/doctors-article/23">『米FDA ー ベンゾジアゼピン薬のブラックボックス警告更新要請』</Link>より）
            <br /> 
            <br /> 
            <h2 className={Style.h2Size}>ベンゾジアゼピン依存について</h2>
            ベンゾ依存はアルコール依存症や薬物依存症と異なり<span className={Style.fontCrimson}>「薬物性神経機能傷害」</span>と言えます。
            英語ですと<strong>addiction</strong>（アディクション・精神依存）ではなく<strong>physical dependence</strong>（身体依存）であり、<span className={Style.fontCrimson}>米FDAは、急速な減薬によって負った後遺症状を<strong>injury</strong>（傷害）としています</span>
            （<a href="https://www.benzoinfo.com/wp-content/uploads/2020/11/Benzodiazepine-Information-Coalition-FOIA-FDA-.pdf" target="_blank" rel="noreferrer noopener">『ベンゾジアゼピン長期使用に関する疫学研究レビュー（2020年9月24日）』より</a>）。
            <br />
            <br />
            しかしベンゾジアゼピン薬はそのオールマイティな効能もあり、半世紀にわたり<Link to="introduction" target="_blank">不眠や不安だけでなく
            肩こりや胃痛など様々な身体症状に対して気軽に処方され</Link>つづけ、医療界ではその安全な離脱方法について無知であり続けました。
            つまり、<span className={Style.fontCrimson}>精神医療に限った話ではなく医療界すべてに関わる問題</span>です。
            <br />
            そして、<span className={Style.fontCrimson}>日本だけの問題ではなく</span>、ほぼ<Link to="introduction" target="_blank">世界中で同じように起きている薬害問題</Link>です。
            <br />
            <br />
            <br />
            <br />
            <article className={Style.fontBlue}>※ 当サイトの記事や動画は、医学論文の翻訳、および米国NPO団体
            <a href="https://benzoinfo.com" target="_blank" rel="noreferrer noopener">Benzodiazepine Information Coalition（ベンゾジアゼピンインフォメーションコーリション。以下BIC）</a>
            の記事の翻訳により構成されています。BICの記事はすべてBICの<a href="https://www.benzoinfo.com/about/#board" target="_blank" rel="noreferrer noopener">メディカルアドバイザリーボード</a>
            による監修を経て掲載されており、当サイトは全面的に記事翻訳掲載の許可を得ています。また当サイトの運営ポリシーとフィロソフィーはBICに準じています。</article>

      <div className={Style.divLineSpace}></div>

          <Accordion defaultActiveKey="0">
          
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                利用規約
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              当サイトは、ベンゾジアゼピン系薬に関する情報を必要とされている方々（以下「利用者」）が使用することを目的とします。
                <br />当サイトは、特定の有志（以下「サイト管理者」）によって設立・運営されております。特定の団体が運営するものではありません。
                <br />利用者の利便性のためにリンクされた他のサイトにアクセスする場合、それらのサイトは本サイトとは全く独立したものであり、本サイトはそれらのサイトの内容についていかなる権限ももちません。
                <br />当サイトの情報を利用しようとする利用者は、サイト内のいかなる記載内容を参考にする場合においても、それらに依存することなく、行動を起こす前に、記載内容に関連する国や自治体、医療機関、サービス提供者、製造者、等に確認を取った上で、自己責任で行ってください。
                <br />当サイトは、質問に対して必ずしも回答を保証しません。
                <span className={Style.fontCrimson}>当サイトの情報について情報の正確性、完全性について明示的か黙示的かを問わず、サイト管理者はいかなる責任も負いません。
                当サイトを利用される方は、自己の責任において利用することに同意されたものとし、当サイトの情報の利用により生じる損害についてサイト管理者はあらゆる責任を放棄します。</span>                               
              </Card.Body>
            </Accordion.Collapse>
          
          </Accordion>
          <Accordion>
          
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                医療免責事項
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              当サイトは、ベンゾ離脱症状の病状と減薬についての一般的な情報を発信しています。あくまで情報であってアドバイスではありません。
              <br />当サイトの医療情報は明示または黙示を問わずいかなる保証もいたしません。「現状のまま」提供するものます。
              <br />当サイトは、以下のことを保証しません。<br />
                ・当サイトの医療情報が常に入手可能である<br />
                ・当サイトの医療情報が完全に正確である。または最新である。<br />
              <br />利用者は、主治医または他の専門医療提供者からの医療アドバイスに代わるものとして当サイト上の情報に頼ることはできません。医学的事項について具体的な質問がある場合は、医師または他の専門医療提供者に相談してください。
              <br />何らかの症状に苦しんでいる場合は、直ちに医師の診察を受けてください。
              <br />当サイトの医療情報をもって医学的助言を求めることを遅らせたり、医学的助言を無視したり、あるいは治療を中止しないようにしてください。 
              </Card.Body>
            </Accordion.Collapse>
          
          </Accordion>
          
        <span className={Style.fontCrimson}>※ 当サイトは精神医療や薬物療法を否定するいかなる団体・個人とも関係を持ちません。</span>
        
    </Container>

    <div className={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)


export const query = graphql`
 {
    allMicrocmsArticles(
      limit: 4, sort: {order: DESC, fields: createdAt}
   ) {
     edges {
       node {
         createdAt
         id
         num
         title
         category {
          id
          name
        }
       }
     }
   }
 }
`

export default IndexPage
