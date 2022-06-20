import { Tooltip } from "@chakra-ui/react"
import React from "react"
import Neumorphic from "./Neumorphic"

interface ItemCardProps {
  label: string
  children: any
  href?: string
}

const ItemCard: React.FC<ItemCardProps> = ({ label, children, href }) => {
  return (
    <Neumorphic href={href} p={3}>
      <Tooltip hasArrow noOfLines={2} label={label} bg="black" color="white">
        <span>{children}</span>
      </Tooltip>
    </Neumorphic>
  )
}

export default ItemCard
