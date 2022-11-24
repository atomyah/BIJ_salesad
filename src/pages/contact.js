import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

import { Container, Button, Form } from 'react-bootstrap'

import Style from './contact.module.css'

const Contact = () => (
    <>
    <Layout>
      <SEO title="お問い合わせ" />
      <Helmet>
          <script src="https://www.google.com/recaptcha/api.js?render=6Lf7UsoUAAAAACT2Z6gLyh7RTDfyYGxfZ-M4D0ph" />
          <script src="https://www.flexyform.com/js/recaptcha.js" />
      </Helmet>

      <Container fluid="md">
      <h1 style={{fontSize:`1.2rem`}}>お問い合わせ（Contact Form）</h1>
      <p style={{color:`gray`}}>
      </p>
        <form method="post" action="https://www.flexyform.com/f/0d9a762c9e63a346d30047f4900222125d7208d2">
            <Form.Control type="text" as="input" placeholder="お名前（Name）※仮名でも構いません" name="name" required />
            <br />
            <Form.Control type="email" as="input" placeholder="メールアドレス（Email address）" name="email" required />
            <br />
            <Form.Control type="email" as="input" placeholder="メールアドレス（確認用にもう一度打ってください）" name="_reply_to" required />
            <br />
            <Form.Control as="textarea" placeholder="お問い合わせ内容（Message）" rows="3" name="message" required />
            <br />
            <p>【ベンゾ離脱、減薬等について質問をされる方へ】</p>
            <p className={Style.fontSmallCrimson}>・質問者個々の状態・病態に対し判断やアドバイスをする事はできません。
              回答例は
                <a href="https://benzofaq.com/faqforum" target="blank" rel="noreferrer noopener">
                  こちら
                </a>
                の様なものになります。
            </p>
            <p className={Style.fontSmallCrimson}>・なるべく書籍
              <a href="https://www.amazon.co.jp/gp/product/B0B8BJZ5T6?&_encoding=UTF8&tag=kokkahasan-22&linkCode=ur2&linkId=d2be4a75d59c557e5612f1e0ca8667e9&camp=247&creative=1211" target="blank" rel="noreferrer noopener">
              『ベンゾ系睡眠薬・抗不安薬からの安全な離脱方法』
              </a>
              をお読みになるか、余裕がない場合はとりあえずお手元に用意してお問い合わせください。回答しやすくなります（Kindle版でも構いません。キャンペーンを使えば無料で読めます）。
            </p>
                        
            <Form.Control as="input" style={{visibility:`hidden`}} name="_recaptcha" id="_recaptcha"/>
            <Form.Control type="text" as="input" style={{visibility:`hidden`}} name="_empty_field" />
            <Button variant="info" type="submit">送信</Button>
        </form>
        <br />
        
      </Container>
    </Layout>
    </>
)

export default Contact