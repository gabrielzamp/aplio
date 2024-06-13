'use client'
import { fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const TeamMember = ({ image }) => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <motion.div
      className="self-start rounded-medium bg-white p-2.5  shadow-box dark:bg-dark-200"
      ref={ref}
      initial="initial"
      animate={controlAnimation}
      variants={fadeUpAnimation}>
      <div className=" rounded bg-gray-100 dark:bg-[#30302F]">
        <Image
          src={image}
          alt="team member image"
          className="aspect-[3/4] w-full rounded-xl object-cover object-center"
          width={350}
          height={400}
        />
      </div>
    </motion.div>
  )
}

export default TeamMember
