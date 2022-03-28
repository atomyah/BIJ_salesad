import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Button, Form } from 'react-bootstrap'

const Contact = () => (
    <>
    <Layout>
      <SEO title="お問い合わせ" />
      <Container fluid="md">
      <h1 style={{fontSize:`1.2rem`}}>お問い合わせ（Contact Form）</h1>
      <p style={{color:`gray`}}>
        減薬やベンゾ一般情報に関するご質問は「<a href="http://benzofaq.com/" target="_blank" rel="noreferrer noopener">質問フォーラム</a>」にてご投稿をお願いします。
      </p>
        <form method="post" action="https://www.flexyform.com/f/b24ef2cdc047c100434968d3e8fede06be48e6bd">
            <Form.Control type="text" as="input" placeholder="お名前（Name）※仮名でも構いません" name="name" required />
            <br />
            <Form.Control type="email" as="input" placeholder="メールアドレス（Email address）" name="email" required />
            <br />
            <Form.Control as="textarea" placeholder="お問い合わせ内容（Message）" rows="3" name="message" required />
            <Form.Control type="text" as="input" style={{visibility:`hidden`}} name="_empty_field" />
            <Button variant="info" type="submit">送信</Button>
        </form>
      </Container>
    </Layout>
    </>
)

export default Contact