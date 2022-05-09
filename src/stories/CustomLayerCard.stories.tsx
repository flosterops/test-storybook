import React from "react"
import image from "../asssets/mini_view.png"

import { CustomLayerCard, ICustomLayerCard } from "../components/CustomLayerCard"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Section } from "../../.storybook/components/Section"

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

const Template: ComponentStory<typeof CustomLayerCard> = (args: ICustomLayerCard) => (
  <Section title="CustomLayerCard component" description="Small description">
    <CustomLayerCard {...args} />
  </Section>
)

export const Default = Template.bind({})
Default.args = {
  id: "6fa3dcb5-c062-4d0f-8be1-8ed3c2f3b8e8",
  text: "I am text",
  defaultChecked: false,
  image: image,
  checked: false,
  onChange: () => alert("Change")
}
