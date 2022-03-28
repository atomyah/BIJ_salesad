import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


const PrivacyPolicy = () => (
  <>
    <style type="text/css">
    {`
    .box-privacy {
      border: solid 1px;
      padding: 10px;
    }
    `}
    </style>
    <Layout>
      <SEO title="プライバシーポリシー" />
      <Container fluid="md">
      <h1 style={{fontSize: `1.25rem`}}>プライバシーポリシー</h1>
        <div className="box-privacy">
          <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。
            このGoogleアナリティクスはデータの収集のためにCookieを使用しています。
            このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p>
          この機能はCookieを無効にすることで収集を拒否することが出来ますので、
          お使いのブラウザの設定をご確認ください。
          この規約に関しての詳細は
          <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noreferrer noopener" alt="Googleアナリティクスサービス利用規約">
            <span style={{color: `blue`}}>Googleアナリティクスサービス利用規約のページ</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
          や
          <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noreferrer noopener" alt="Googleポリシーと規約">
          <span style={{color: `blue`}}>Googleポリシーと規約ページ</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
          をご覧ください。
          </p>
        </div>
      </Container>
    </Layout>
  </>
)

export default PrivacyPolicy


