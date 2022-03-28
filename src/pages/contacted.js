import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Button, Form } from 'react-bootstrap'

const Contacted = () => (
    <Layout>
      <SEO title="お問い合わせ送信完了" />
      <Container fluid="md">
      <h1 style={{fontSize:`1.2rem`}}>お問い合わせ送信完了</h1>
      <h2 style={{fontSize:`1.2rem`}}>Message sent Success!</h2>
      </Container>
    </Layout>
)

export default Contacted