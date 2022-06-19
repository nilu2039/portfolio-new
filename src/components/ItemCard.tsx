import { Tooltip } from "@chakra-ui/react"
import React from "react"
import Neumorphic from "./Neumorphic"

interface ItemCardProps {
  label: string
  children: any
}

const ItemCard: React.FC<ItemCardProps> = ({ label, children }) => {
  return (
    <Neumorphic p={3}>
      <Tooltip hasArrow noOfLines={2} label={label} bg="black" color="white">
        <span>{children}</span>
      </Tooltip>
    </Neumorphic>
  )
}

export default ItemCard
