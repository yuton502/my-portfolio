import * as React from "react";
import { Col, Container, Row, ThemeProvider, Stack, Table, Card, CardGroup, Carousel } from "react-bootstrap";
import Header from "../parts/header";
import tex from "../images/dark_wood_texture.jpg"
import work1 from "../images/swapping_positive_moment.png"
import { FaUser } from "@react-icons/all-files/fa/FaUser"
import { CgListTree } from "@react-icons/all-files/cg/CgListTree"
import { AiOutlineDesktop } from "@react-icons/all-files/ai/AiOutlineDesktop"
import { BsPencilSquare } from "@react-icons/all-files/bs/BsPencilSquare"
import { BsNewspaper } from "@react-icons/all-files/bs/BsNewspaper"
import CardHeader from "react-bootstrap/esm/CardHeader";

// styles
const pageStyles: React.CSSProperties = {
  color: "#232129",
  padding: "0%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const changeFont: React.CSSProperties = {
  fontFamily: "Impact, Trebuchet MS, sans-serif"
}

const center: React.CSSProperties = {
  textAlign: "center"
}

const paddingPosition: React.CSSProperties = {
  padding: "0% 10% 50px"
}

const paddingNarrowPosition: React.CSSProperties = {
  padding: "0% 20% 50px"
}

const textOnImage: React.CSSProperties = {
  backgroundImage: `url(${tex})`,
  height: '240px',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  padding: "48px 5%"
}

const skillList = {
  markup: [
    {
      name: "HTML",
      level: "★★★★☆"
    },
    {
      name: "CSS",
      level: "★★★★☆"
    }
  ],
  front: [
    {
      name: "javascript",
      level: "★★★★☆"
    },
    {
      name: "typescript",
      level: "★★★★☆"
    },
    {
      name: "Vue",
      level: "★★☆☆☆"
    },
    {
      name: "React",
      level: "★★★☆☆"
    }
  ],
  back: [
    {
      name: "java",
      level: "★★★★★"
    },
    {
      name: "[java]Spring Boot",
      level: "★★★☆☆"
    },
    {
      name: "[java]JavaFX",
      level: "★★★☆☆"
    },
    {
      name: "python",
      level: "★★☆☆☆"
    }
  ],
  other: [
    {
      name: "PostgreSQL",
      level: "★★★☆☆"
    },
    {
      name: "firebase",
      level: "★★★☆☆"
    },
    {
      name: "git",
      level: "★★★☆☆"
    }
  ],
  licence: [
    {
      name: "基本情報技術者試験"
    },
    {
      name: "Oracle Java Silver"
    },
    {
      name: "サーティファイ Java 2級"
    }
  ]
}

// markup
const IndexPage = () => {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
>
      <body>      
        <Header />
        <main style={pageStyles}>
          <title>Portfolio</title>

          <div style={textOnImage} className="text-white" >
            <h1 style={changeFont}>
              Welcome to my portfolio.
            </h1>
            <p>
              プログラミングや3Dモデリングなど、したいことをしたいようにしています。
            </p>
          </div>
          <br />
          <div className="justify-content-md-center  text-center">
          <h1 style={changeFont}><FaUser size={32}/> Profile</h1>
          </div><br />
          <div style={paddingPosition}>
            <p>
              プログラマーになりたくて、高校卒業後に情報処理系の専門学校に入学しました。
              <br />
              その中で基本情報技術者試験を取得し、主にjavaのスキルを培ってきました。
            </p>
            <p>
              地域で就業したいため電工系の職業に就きましたが、もっとプログラムに集中したいと思い転職を決意。
            </p>
            <p>
              現在は新しい技術を習得しながら転職活動を行っています。
            </p>
          </div>
          <div className="justify-content-md-center  text-center">
            <h1 style={changeFont}><CgListTree size={32} /> Skills</h1>
          </div><br />

          <CardGroup className="row" style={paddingPosition}>
          <Card className="border border-black col">
            <Card.Title className="justify-content-md-center  text-center">
                <br />
                <h1><b><AiOutlineDesktop size={32} /> マークアップ言語</b></h1>
            </Card.Title>
            <Card.Text className="mx-auto text-center">
              <p>高校時代から触れていました。bootstrapも扱えます。</p>     
            </Card.Text>
            <Card.Body>
            <Table borderless={true} responsive={true}>
              <thead className="justify-content-md-center text-center">
                <th>技術</th>
                <th>スキル</th>
              </thead>
              <tbody>
                {skillList.markup.map((skill) => 
                  <tr key={skill.name}  className="justify-content-md-center text-center">
                    <td>
                      {skill.name}
                    </td>
                    <td className="text-secondary">
                      {skill.level}
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            </Card.Body>
          </Card>          
          </CardGroup>
          <CardGroup className="row row-cols-1 row-cols-sm-2 g-3" style={paddingPosition}>
          <Col>
          <Card className="border border-black col">
            <Card.Title className="justify-content-md-center  text-center">
                <br />
                <h1><b><AiOutlineDesktop size={32} /> フロントエンド</b></h1>
            </Card.Title>
            <Card.Text className="mx-auto text-center">
              <p>Reactやtypescriptは最近習得しました。</p>     
            </Card.Text>
            <Card.Body>
            <Table borderless={true} responsive={true}>
              <thead className="justify-content-md-center text-center">
                <th>技術</th>
                <th>スキル</th>
              </thead>
              <tbody>
                {skillList.front.map((skill) => 
                  <tr key={skill.name}  className="justify-content-md-center text-center">
                    <td>
                      {skill.name}
                    </td>
                    <td className="text-secondary">
                      {skill.level}
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="border border-black col">
            <Card.Title className="justify-content-md-center  text-center">
              <br />
              <h1><b><AiOutlineDesktop size={32} /> バックエンド</b></h1>
            </Card.Title>
            <Card.Text className="mx-auto text-center">
              自分のスキルの中で最も習得しているのはjavaです。
            </Card.Text>
            <Card.Body>
            <Table borderless={true} responsive={true}>
              <thead className="justify-content-md-center text-center">
                <th>技術</th>
                <th>スキル</th>
              </thead>
              <tbody>
                {skillList.back.map((skill) => 
                  <tr key={skill.name}  className="justify-content-md-center text-center">
                    <td>
                      {skill.name}
                    </td>
                    <td className="text-secondary">
                      {skill.level}
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            <Card.Text><p className="text-muted text-end">[]でその言語のフレームワークを示します。</p></Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="border border-black col">
            <Card.Title className="justify-content-md-center  text-center">
              <br />
              <h1><b><AiOutlineDesktop size={32} /> その他</b></h1>
            </Card.Title>
            <Card.Text className="mx-auto text-center">
              開発に使ったデータベースやツールです。
            </Card.Text>
            <Card.Body>
            <Table borderless={true} responsive={true}>
              <thead className="justify-content-md-center text-center">
                <th>技術</th>
                <th>スキル</th>
              </thead>
              <tbody>
                {skillList.other.map((skill) => 
                  <tr key={skill.name}  className="justify-content-md-center text-center">
                    <td>
                      {skill.name}
                    </td>
                    <td className="text-secondary">
                      {skill.level}
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="border border-black col">
            <Card.Title className="justify-content-md-center  text-center">
              <br />
              <h1><b><BsPencilSquare size={32} /> 取得資格</b></h1>
            </Card.Title>
            <Card.Text className="mx-auto text-center">
              専門学生時代に取得しました。
            </Card.Text>
            <Card.Body>
            <Table borderless={true} responsive={true}>
              <thead className="justify-content-md-center text-center">
                <th>名前</th>
              </thead>
              <tbody>
                {skillList.licence.map((skill) => 
                  <tr key={skill.name}  className="justify-content-md-center text-center">
                    <td>
                      {skill.name}
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            </Card.Body>
          </Card>
          </Col>
          </CardGroup>      

          <div className="justify-content-md-center  text-center">
            <h1 style={changeFont}><BsNewspaper size={32}/> Works</h1>
          </div><br />

          <Carousel className="m-auto w-75">
            <Carousel.Item className="bg-dark">
              <img
                className="d-block w-100 opacity-50"
                src={work1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Nice Positive!</h3>
                <p>Spring Bootを使用して作成しました。<br />
                  ネガティブな言葉をポジティブに変えて投稿してくれるSNSサービスです。
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>borderless-counter</h3>
                <p>Reactを使用して作成しました。<br />
                  
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </main>
      </body>
    </ThemeProvider>
  )
}

export default IndexPage
