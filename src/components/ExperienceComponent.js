import React, {} from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import {Tab, Col, Row}  from "react-bootstrap";
import ExpComponent from "./ExpComponent";


export default function Experience() {
            
    return (
      <div>
      <h3>Saibot</h3>
      <h4>Nov 2019 - Nov 2020 -BsAs Argentina </h4>
      <p>
      I excelled in developing different websites, especially with Wordpress. Using different
        plugins depending on what the client needed. I have mastered the use of different plugins
        like Elementor (building), Woocommerce (products/sales/categories).
        </p>
      <h5>
        Some of my Work:
      </h5>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1" >
                Mariano Camba Web
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" >
                Aye Resico Web
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1" >
                <p className="text1" >On this website, I followed a customer's design. It has an e-commerce section with pay-per-view video tutorials,
                and the loading platform is configured so that the customer doesn't have any problems <a href= "https://marianocamba.com.ar/" target= "_blank" > Link</a>.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2" >
               <p className="text1" > 
               This website is totally redesigned. In the products section they are fully categorized, where the customer only has to upload the product and it is automatically displayed in the corresponding section <a href="https://ayeresico.com/" target= "_blank" >Link</a>.
               </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <hr/>
      <ExpComponent/>
      </div>
    )
  }

 
  
  
  