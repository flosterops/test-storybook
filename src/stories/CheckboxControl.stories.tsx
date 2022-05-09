import React, { useState } from "react"

import { CustomLayerCard, ICustomLayerCard } from "../components/CustomLayerCard"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Section } from "../../.storybook/components/Section"
import { CheckboxControl } from "../components/CheckboxControl"

export default {
  component: CheckboxControl,
  title: "CheckboxControl"
} as ComponentMeta<typeof CustomLayerCard>

const Template: ComponentStory<typeof CustomLayerCard> = (args: ICustomLayerCard) => {
  const [checked, setChecked] = useState<boolean>(args.checked)
  return (
    <Section>
      <CheckboxControl {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
    </Section>
  )
}

export const Default = Template.bind({})
Default.args = {
  id: "checkbox",
  label: "Flood zone 3",
  checked: false
}
