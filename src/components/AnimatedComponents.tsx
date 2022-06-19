import { chakra, StackProps } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { MotionBoxProps, MotionTextProps } from "../utils/types"

export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div)
export const MotionText: React.FC<MotionTextProps> = motion(chakra.p)
