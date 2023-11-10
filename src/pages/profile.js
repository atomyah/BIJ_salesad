import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import ProfileImg00 from "../images/profile_image.jpg"

import { Container, Image, ListGroup, Figure } from "react-bootstrap"
import Style from "./profile.module.css"

const ProfilePage = () => (
  <Layout>
    <SEO
      title="ベンゾジアゼピン情報センター プロフィール"
      description="減薬を進めながらベンゾジアゼピンについて他国の状況も調査し発信しています。ベンゾ問題は薬の問題というよりも減薬の困難性と正しい処方についての医療界の無知が問題。服薬中でも“いきなりやめないで”"
      image="/twitterimg/icon-144x144.png"
      lang="ja"
    />
    <Container fluid="md">
      <h1 style={{ fontSize: `1.25rem` }}>管理人プロフィール</h1>
      <p>
        非ベンゾジアゼピン薬のゾピクロン（商品名アモバン）ユーザーであった。
        2015年後半体調悪化し、さまざまな検査で異常なしであったため、
        食事内容を立て直しお酒などリスク因子について調査しひとつひとつ排除していく。
        その過程でベンゾの危険性と、非ベンゾジアゼピンもベンゾファミリーのひとつであることを知り減薬を決意。
        中途半端な知識から最強ベンゾのひとつフルニトラゼパム（商品名サイレース、ロヒプノール）に自己判断で置換（最大の失敗）。
        フルニトラゼパムの急減薬で生き地獄のような離脱症状を経験する。
        その後フルニトラゼパム再服薬および増薬（ジアゼパム10mg）が奏功し”ある程度”安定化。
        主治医の協力のもとマイクロテーパリングにて減薬を始める（2017年2月）。
        フルニトラゼパムの減薬は終了（2020年1月）。 現在ジアゼパムを減薬中。
        本職はエンジニア。
      </p>
      {/* <Figure style={{margin:`auto`, padding:`10px`}}>
            <Figure.Image
            width={200}
            src={ProfileImg00} roundedCircle 
            /> 
            <Figure.Caption>
            </Figure.Caption>
        </Figure> */}
      <div>
        <ListGroup horizontal>
          <Link to="/patients-article/8">
            <ListGroup.Item>管理人のベンゾ減薬記録</ListGroup.Item>
          </Link>
          <Link to="/medias-article/11">
            <ListGroup.Item>管理人の離脱症状詳細</ListGroup.Item>
          </Link>
        </ListGroup>
      </div>
    </Container>
  </Layout>
)

export default ProfilePage
