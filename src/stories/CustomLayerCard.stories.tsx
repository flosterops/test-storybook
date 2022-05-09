import React, { Component, FunctionComponent, useState } from "react"
import image from "../asssets/mini_view.png"

import { CustomLayerCard, ICustomLayerCard } from "../components/CustomLayerCard"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Section } from "../../.storybook/components/Section"
import { Theme } from "@mui/material"

export default {
  component: CustomLayerCard,
  title: "CustomLayerCard",
  argTypes: {
    variant: {
      options: ["default", "outlined"],
      control: { type: "radio" }
    }
  }
} as ComponentMeta<typeof CustomLayerCard>

interface ICreateTemplateOptions {
  title: string
  description: string
  themeOptions?: Partial<Theme>
  labels?: any[]
  code?: string
  args: any
  Component: FunctionComponent
}

const createTemplate = ({ title, description, args, Component, themeOptions = {}, labels, code }: ICreateTemplateOptions) => {
  return (
    <Section title={title} description={description} themeOptions={themeOptions}>
      <Component {...args} />
    </Section>
  )
}

const Template: ComponentStory<typeof CustomLayerCard> = (args: ICustomLayerCard) => {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <Section title="CustomLayerCard component" description="Small description">
      <CustomLayerCard {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
    </Section>
  )
}

export const Default = Template.bind({})
Default.args = {
  id: "checkbox",
  text: "I am text",
  defaultChecked: false,
  image: image,
  checked: false
}
