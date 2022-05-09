import React, { FunctionComponent, ReactElement } from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import { CardMedia } from "@mui/material"
import { CheckboxControl } from "../CheckboxControl"
import { SwitchBaseProps } from "@mui/material/internal/SwitchBase"
import { colors } from "../../theme"
import styled from "@emotion/styled"

export interface ICustomLayerCard {
  id: string
  label: string
  checked: boolean
  onChange: SwitchBaseProps["onChange"]
  image: string
}

const StyledCustomLayerCardContainer = styled.div`
  display: flex;
  border: 2px solid transparent;
  border-radius: 12px;
  width: fit-content;
  &:hover {
    border-color: ${colors.main};
  }
`

const CustomLayerCard: FunctionComponent<ICustomLayerCard> = ({ id, label, image, onChange, checked }): ReactElement => (
  <StyledCustomLayerCardContainer>
    <Card sx={{ maxWidth: 230 }} className={checked ? "checked" : ""}>
      <CardContent style={{ padding: 0 }}>
        <CardMedia component="img" height="100" image={image} />
      </CardContent>
      <CardActions>
        <CheckboxControl id={id} checked={checked} label={label} onChange={onChange} />
      </CardActions>
    </Card>
  </StyledCustomLayerCardContainer>
)

export { CustomLayerCard }
