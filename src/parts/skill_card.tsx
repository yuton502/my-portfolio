import * as React from "react";
import { Col, Container, Row, ThemeProvider, Stack, Table, Card, CardGroup } from "react-bootstrap";
import Header from "../parts/header";
import CardHeader from "react-bootstrap/esm/CardHeader";

export const SkillCard = (skillList: [{name: string, level: string}]) => {
  return (
    <>
      <Col>
        <Card className="border border-black col">
          <Card.Title className="justify-content-md-center  text-center">
              <br />
              <h1><b>フロントエンド</b></h1>
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
              {skillList.map((skill) => 
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
    </>
  )
}