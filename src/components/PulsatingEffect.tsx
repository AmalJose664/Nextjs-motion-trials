import * as motion from 'motion/react-client'
const PulsatingEffect = () => {
  return (
	<div>PulsatingEffect <br />
		<motion.button className='p-4 bg-green-500 text-white rounded'
		animate={{ scale:[ 1, 1.1, 1] }}
		transition={{duration: .2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut'}}
		>
			Pulse Me 
		</motion.button>
	</div>
  )
}
export default PulsatingEffect