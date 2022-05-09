import React from "react"

import { CustomLayerCard, ICustomLayerCard } from "../components/CustomLayerCard"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Section } from "../../.storybook/components/Section"
import { CheckboxControl } from "../components/CheckboxControl"

export default {
  component: CheckboxControl,
  title: "CheckboxControl"
} as ComponentMeta<typeof CustomLayerCard>

const Template: ComponentStory<typeof CustomLayerCard> = (args: ICustomLayerCard) => {
  return (
    <Section>
      <CheckboxControl {...args} />
    </Section>
  )
}

export const Default = Template.bind({})
Default.args = {
  id: "checkbox",
  label: "Flood zone 3",
  defaultChecked: false
}
