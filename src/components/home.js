import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
function home() {
  return (
    <><Container>
      <Section
        title="model s"
        description="Order Online for Touchless Delievery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory" />
    </Container><Container>
        <Section1
          title="model y"
          description="Order Online for Touchless Delievery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory" />
      </Container><Container>
        <Section2
          title="model 3"
          description="Order Online for Touchless Delievery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory" />
      </Container><Container>
      <Section3
          title="model-x"
          description="Order Online for Touchless Delievery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory" />
        </Container></>
  )
}

export default home
const Container =styled.div`
height=500vh;`
