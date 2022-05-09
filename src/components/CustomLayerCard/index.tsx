import React, { FunctionComponent, ReactElement } from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Checkbox from "@mui/material/Checkbox"
import { SwitchBaseProps } from "@mui/material/internal/SwitchBase"
import InputLabel from "@mui/material/InputLabel"
import { CardMedia } from "@mui/material"

export interface ICustomLayerCard {
  id: string
  text: string
  onChange: SwitchBaseProps["onChange"]
  defaultChecked?: boolean
  variant?: "outlined" | "elevation"
  checked: boolean
  image: string
}

const CustomLayerCard: FunctionComponent<ICustomLayerCard> = ({ id, text, image, onChange, defaultChecked, checked, variant }): ReactElement => (
  <Card sx={{ maxWidth: 230, margin: "10px" }} className={checked ? "checked" : ""} variant={variant}>
    <CardContent style={{ padding: 0 }}>
      <CardMedia component="img" height="140" image={image} />
    </CardContent>
    <CardActions>
      <Checkbox id={id} checked={checked} onChange={onChange} defaultChecked={defaultChecked} />
      <InputLabel style={{ zIndex: 1 }} htmlFor={id}>
        {text}
      </InputLabel>
    </CardActions>
  </Card>
)

export { CustomLayerCard }
