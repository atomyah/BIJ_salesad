import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import HonImage from "../../images/hon-hyosi.jpg"

import { Container, Table, Figure } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faUser, faBold } from "@fortawesome/free-solid-svg-icons"

import Style from "./withdrawalsymptoms.module.css"

const WithdrawalSymptoms = () => (
  <Layout>
    <Container fluid="md">
      <SEO
        title="ベンゾジアゼピン離脱症状一覧"
        description="軽症ステージでも例えば、倦怠感＋微熱＆血圧変動＆動悸＆咳喘息様症状＆着席中に脚がピクンと跳ねる＆小さな耳鳴り＆軽い焦燥感…あまりの奇妙さと、精密検査ではまったく異常が見つからないので、冗談ではなく霊障だろうかと勘違いしがちです"
        image="/twitterimg/benzoberry_s.jpg"
        lang="ja"
      />
      <div className={Style.banner}>
        <p>
          <a
            href="https://amzn.to/3tBvm8a"
            target="blank"
            rel="noreferrer noopener"
          >
            書籍『ベンゾ系睡眠薬・抗不安薬の安全な離脱方法　改訂版』（A5版284ページ）販売中）
            <br />
          </a>
        </p>
      </div>
      <h1 className={Style.h1Size}>ベンゾジアゼピン離脱症状一覧</h1>
      <p>
        ※ 下記すべての症状を呈するわけではありません。
        <br />
        ※ 軽症ステージでも関連性のない奇妙な症状群を複数発症します。
        例えば…、倦怠感＋微熱＆血圧変動＆動悸＆咳喘息様症状＆着席中に脚がピクンと跳ねる＆小さな耳鳴り＆軽い焦燥感、
        等々といったような。
        <br />
        あまりの奇妙さと、精密検査でまったく異常が見つからないので、冗談ではなく霊障だろうかと勘違いすることも。
      </p>
      <StaticQuery
        query={graphql`
          query WithdrawalSymptomsQuery {
            allWithdrawalSymptomsJson {
              edges {
                node {
                  SymptomNameJ
                  SymptomNameE
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Table striped bordered hover size="sm" responsive>
              <tbody>
                <th>症状名</th>
                <th>Symptoms Name</th>
                {getWithdrawalSymptoms(data)}
              </tbody>
            </Table>
          </>
        )}
      />
      参考論文・記事：
      <div>
        <FontAwesomeIcon icon={faBook} />{" "}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/6143582/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Benzodiazepine withdrawal: An unfinished story
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faBook} />{" "}
        <Link to="doctors-article/24">
          論文：Protracted Withdrawal Syndromes From Benzodiazepines
        </Link>
      </div>
      <div>
        <FontAwesomeIcon icon={faBook} />{" "}
        <a
          href="https://www.ncbi.nlm.nih.gov/pubmed/31034071"
          target="_blank"
          rel="noreferrer noopener"
        >
          Complicated Withdrawal Phenomena During Benzodiazepine Cessation in
          Older Adults
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faUser} />{" "}
        <Link to="doctors-article/3">
          カサンドラの遺書「メディカルメッセージ」
        </Link>
      </div>
      <div>
        <FontAwesomeIcon icon={faBold} />{" "}
        <a
          href="http://benzobuddies.org/forum/index.php"
          target="_blank"
          rel="noreferrer noopener"
        >
          ベンゾバディ
        </a>
      </div>
    </Container>
  </Layout>
)

function getWithdrawalSymptoms(data) {
  const WithdrawalSymptomsArray = []
  data.allWithdrawalSymptomsJson.edges.forEach(item =>
    WithdrawalSymptomsArray.push(
      <tr>
        <td key={item.node.SymptomNameJ}>{item.node.SymptomNameJ}</td>
        <td key={item.node.SymptomNameE}>{item.node.SymptomNameE}</td>
      </tr>
    )
  )
  return WithdrawalSymptomsArray
}

export default WithdrawalSymptoms
