import React, { FunctionComponent, useState } from "react"
import image from "../asssets/mini_view.png"

import { CustomLayerCard, ICustomLayerCard } from "../components/CustomLayerCard"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Section } from "../../.storybook/components/Section"

export default {
  component: CustomLayerCard,
  title: "CustomLayerCard"
} as ComponentMeta<typeof CustomLayerCard>

const Template: ComponentStory<typeof CustomLayerCard> = (args: ICustomLayerCard) => {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <Section>
      <CustomLayerCard {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
    </Section>
  )
}

export const Default = Template.bind({})
Default.args = {
  id: "checkbox",
  label: "Flood zone 3",
  defaultChecked: false,
  image: image,
  checked: false
}
