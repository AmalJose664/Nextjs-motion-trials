import Link from "next/link"

const PracticeLanding = () => {
  return (
	<div>Practice Landing pages <br />
		  <Link className='underline' href={'/practice/transform'}>Transform Things </Link> <br />

		  <Link className='underline' href={'/practice/transition'}>Transition Things </Link> <br />
		  <Link className='underline' href={'/practice/keyframes'}>Keyframes Things </Link> <br />
		  <Link className='underline' href={'/practice/variants'} >Variants Things </Link> <br />
		  <Link className='underline' href={'/practice/gestures'} >Gesture Things </Link> <br />
		  <Link className='underline' href={'/practice/staggered'} >Staggered Things </Link> <br />
		  <Link className='underline' href={'/practice/motion-value'} >Use Motion value Things </Link> <br />
		  <Link className='underline' href={'/practice/whilein-view'} >While In view Things </Link> <br />

		  
		  
	</div>
  )
}
export default PracticeLanding